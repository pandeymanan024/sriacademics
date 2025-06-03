'use client';

import { useState } from 'react';
import { getDatabase, ref, push, query, orderByChild, equalTo, get } from 'firebase/database';

export default function FreeTrialForm() {
    const [formData, setFormData] = useState({
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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const db = getDatabase();
        const usersRef = ref(db, 'users');
        
        try {
            // Check if email exists
            const emailQuery = query(usersRef, orderByChild('email'), equalTo(formData.email));
            const snapshot = await get(emailQuery);
            
            if (snapshot.exists()) {
                setMessage('This email is already registered.');
                setMessageType('error');
                return;
            }

            // Write user data
            await push(usersRef, {
                username: formData.name,
                email: formData.email,
                phone: formData.phone,
                board: formData.board,
                grade: formData.grade,
                countryCode: formData.countryCode
            });

            setMessage('Registration successful!');
            setMessageType('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                board: '',
                grade: '',
                countryCode: ''
            });
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
            setMessageType('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="free-trial-form">
            <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <div className="phone-input">
                <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Country</option>
                    <option value="+1">🇺🇸 USA (+1)</option>
                    <option value="+91">🇮🇳 India (+91)</option>
                    <option value="+44">🇬🇧 UK (+44)</option>
                    {/* Add more country codes as needed */}
                </select>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <select
                name="board"
                value={formData.board}
                onChange={handleChange}
                required
            >
                <option value="">Select Board</option>
                <option value="IGCSE">IGCSE</option>
                <option value="SAT">SAT</option>
                <option value="IB">IB</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="State Board">State Board</option>
            </select>
            <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
            >
                <option value="">Select Grade</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
            </select>
            <button type="submit">Book Your FREE DEMO</button>
            {message && (
                <div id="clickPrompt" className={messageType}>
                    {message}
                </div>
            )}
        </form>
    );
} 