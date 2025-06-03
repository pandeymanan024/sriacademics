'use client';

import { useState } from 'react';
import { getDatabase, ref, push, query, orderByChild, equalTo, get } from 'firebase/database';

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

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setMessageType('');
        const db = getDatabase();
        const dbRef = ref(db, 'freeTrialForm');
        
        try {
            // Check if email exists
            const emailQuery = query(dbRef, orderByChild('email'), equalTo(form.email));
            const snapshot = await get(emailQuery);
            
            if (snapshot.exists()) {
                setMessage('This email is already registered.');
                setMessageType('error');
                return;
            }

            // Write user data
            await push(dbRef, {
                username: form.name,
                email: form.email,
                phone: form.phone,
                board: form.board,
                grade: form.grade,
                countryCode: form.countryCode
            });

            setMessage('Registration successful!');
            setMessageType('success');
            setForm({
                name: '',
                email: '',
                phone: '',
                board: '',
                grade: '',
                countryCode: ''
            });
        } catch (error) {
            console.error('Error:', error);
            setMessage('Registration failed. Please try again.');
            setMessageType('error');
        }
    };

    return (
        <form className="free-trial-form" onSubmit={handleSubmit} autoComplete="off">
            {/* Row 1: Name, Email */}
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
            {/* Row 2: Country, Phone */}
            <select
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                required
            >
                <option value="" disabled>Select Country</option>
                <option value="+91">India (+91)</option>
                <option value="+1">USA (+1)</option>
                <option value="+44">UK (+44)</option>
                {/* Add more countries as needed */}
            </select>
            <input
                type="tel"
                name="phone"
                placeholder="*Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
            />
            {/* Row 3: Board, Grade */}
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
            {/* Button spans both columns */}
            <button type="submit">Book Your FREE DEMO</button>
            {/* Message */}
            {message && (
                <div id="clickPrompt" className={messageType} style={{ gridColumn: "1 / span 2" }}>{message}</div>
            )}
        </form>
    );
} 