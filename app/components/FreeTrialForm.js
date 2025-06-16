'use client';

import { useState } from 'react';
import { database } from '../firebase/config';
import { ref, push, query, orderByChild, equalTo, get } from 'firebase/database';

export default function FreeTrialForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        board: '',
        grade: '',
        countryCode: ''
    });
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted', form); // Debug log
        setIsSubmitting(true);
        setMessage('');

        try {
            // Validate form data
            if (!form.email || !form.name || !form.phone || !form.board || !form.grade || !form.countryCode) {
                throw new Error('Please fill in all required fields');
            }

            console.log('Creating database reference...'); // Debug log
            const dbRef = ref(database, 'freeTrialForm');

            console.log('Checking email...'); // Debug log
            const emailQuery = query(dbRef, orderByChild('email'), equalTo(form.email));
            const snapshot = await get(emailQuery);

            if (snapshot.exists()) {
                console.log('Email already exists'); // Debug log
                setMessage('This email is already registered.');
                setMessageType('error');
                return;
            }

            console.log('Preparing data...'); // Debug log
            const formData = {
                username: form.name,
                email: form.email,
                phone: form.phone,
                board: form.board,
                grade: form.grade,
                countryCode: form.countryCode,
                timestamp: new Date().toISOString()
            };

            console.log('Writing to Firebase...', formData); // Debug log
            await push(dbRef, formData);
            console.log('Data written successfully'); // Debug log

            setMessage('Registration successful! We will contact you soon.');
            setMessageType('success');

            // Reset form
            setForm({
                name: '',
                email: '',
                phone: '',
                board: '',
                grade: '',
                countryCode: ''
            });

        } catch (error) {
            console.error('Detailed error:', error); // Debug log
            setMessage(error.message || 'Registration failed. Please try again.');
            setMessageType('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="free-trial-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="form-row">
                <input
                    type="text"
                    name="name"
                    placeholder="*Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="*Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-row">
                <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Select Country</option>
                    <option value="+91">India (+91)</option>
                    {/* Add other country codes as needed */}
                </select>
                <input
                    type="tel"
                    name="phone"
                    placeholder="*Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-row">
                <select
                    name="board"
                    value={form.board}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Board</option>
                    <option value="cbse">CBSE</option>
                    <option value="igcse">IGCSE</option>
                    <option value="icse">ICSE</option>
                    <option value="sat">SAT</option>
                    <option value="ap">AP</option>
                    <option value="ib">IB</option>
                    <option value="jee">JEE</option>
                    <option value="neet">NEET</option>
                    <option value="as/o-level">AS/O-LEVEL</option>
                    <option value="cambridge">CAMBRIDGE</option>
                </select>
                <select
                    name="grade"
                    value={form.grade}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Grade</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Book Your FREE DEMO'}
            </button>

            {message && (
                <div 
                    className={`message ${messageType}`}
                    style={{
                        marginTop: '10px',
                        padding: '10px',
                        borderRadius: '4px',
                        textAlign: 'center',
                        gridColumn: '1 / -1'
                    }}
                >
                    {message}
                </div>
            )}
        </form>
    );
}