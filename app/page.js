'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import FreeTrialForm from './components/FreeTrialForm';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx",
    authDomain: "your-app.firebaseapp.com",
    databaseURL: "https://your-app.firebaseio.com",
    projectId: "your-app",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456789"
};

export default function Home() {
    useEffect(() => {
        initializeApp(firebaseConfig);
    }, []);

    return (
        <main>
            <header className="header">
                <div className="logo">
                    <Image src="/src/icons/sri-academics-logo.svg" alt="Sri Academics Logo" width={40} height={40} />
                    <h1>Sri Academics</h1>
                </div>
                <nav>
                    <Link href="#about">About</Link>
                    <Link href="#benefits">Benefits</Link>
                    <Link href="#testimonials">Testimonials</Link>
                    <Link href="#faq">FAQ</Link>
                </nav>
            </header>

            <section className="hero">
                <div className="hero-content">
                    <h1>1:1 Online Tuition</h1>
                    <p>Personalized learning experience for every student</p>
                    <FreeTrialForm />
                </div>
            </section>

            <section className="commitment-section">
                <div className="commitment-content">
                    <h2>Our Commitment</h2>
                    <p>We are dedicated to providing the best online learning experience for your child.</p>
                </div>
            </section>

            <section className="boards-section">
                <div className="boards-container">
                    <Image 
                        src="/src/images/background-image-3.png" 
                        alt="Educational Boards" 
                        width={1200} 
                        height={600}
                        className="boards-image"
                    />
                </div>
            </section>

            {/* Add other sections as needed */}
        </main>
    );
}