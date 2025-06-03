'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FreeTrialForm from './components/FreeTrialForm';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC0cxgA0bt73seZ1Co3TJIXPhcRJa2y66E",
    authDomain: "tutor-8d2e9.firebaseapp.com",
    databaseURL: "https://tutor-8d2e9-default-rtdb.firebaseio.com/",
    projectId: "tutor-8d2e9",
    storageBucket: "tutor-8d2e9.appspot.com",
    messagingSenderId: "317317669118",
    appId: "1:317317669118:web:6b77752aac53d15d1445af"
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
                    <h1>Sri Academicsssss</h1>
                </div>
                <div className="contact-dropdown">
                    <button className="contact-btn">Contact Us</button>
                    <div className="dropdown-content">
                        <Link href="https://wa.me/+91 7772094431" target="_blank">
                            <Image src="/src/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
                            WhatsApp
                        </Link>
                        <Link href="mailto:your_email@example.com">
                            <Image src="/src/icons/email.svg" alt="Email" width={20} height={20} />
                            Email
                        </Link>
                    </div>
                </div>
            </header>

            <section className="hero">
                <div className="content">
                    <h1>1:1 Online Tuitions</h1>
                    <p>Book a free tutoring demo at Sri Academics and unlock your academic potential with expert guidance!</p>
                    <h2>Book Your FREE DEMO</h2>
                    <FreeTrialForm />
                </div>
            </section>

            <section className="commitment-section">
                <h2>The Sri Academics Commitment to Students</h2>
                <div className="commitment-content">
                    <div className="student-image">
                        <Image src="/src/images/background-image-2.svg" alt="Student studying in Sri Academics" width={500} height={300} />
                    </div>
                    <div className="commitment-points">
                        <div className="commitment-point">
                            <span className="point-icon"></span>
                            <p>Personalized Learning: Tailored lessons that cater to your unique learning style and pace.</p>
                        </div>
                        <div className="commitment-point">
                            <span className="point-icon"></span>
                            <p>Expert Tutors: Learn from qualified and experienced tutors who specialize in your subjects.</p>
                        </div>
                        <div className="commitment-point">
                            <span className="point-icon"></span>
                            <p>One-on-One Focus: Every lesson is all about you—your goals, your pace, your success.</p>
                        </div>
                        <div className="commitment-point">
                            <span className="point-icon"></span>
                            <p>Real-Time Interaction: Get immediate feedback and ask questions during live one-on-one sessions.</p>
                        </div>
                    </div>
                </div>
                
                <h2 className="programs-title">Programs We Offer</h2>
                <div className="boards-container">
                    <Image src="/src/images/background-image-3.png" alt="Educational Boards" width={1200} height={600} className="boards-image" />
                </div>
            </section>

            <section className="video-section">
                <div className="video-container">
                    <h2>Watch Our Introduction Video</h2>
                    <div className="video-wrapper">
                        <iframe src="https://www.youtube.com/embed/LRlw32vpMME" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            <section className="benefits-section">
                <h2>Benefits Of Online Tutoring In Sri Academics</h2>
                <div className="benefits-grid">
                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <Image src="/src/icons/notes.svg" alt="Counselor Icon" width={40} height={40} />
                        </div>
                        <p className="benefit-text">Customized Learning Plans</p>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <Image src="/src/icons/notes.svg" alt="Curriculum Icon" width={40} height={40} />
                        </div>
                        <p className="benefit-text">Expert Tutors at Your Fingertips</p>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <Image src="/src/icons/notes.svg" alt="Parenting Icon" width={40} height={40} />
                        </div>
                        <p className="benefit-text">Live, Interactive Sessions</p>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <Image src="/src/icons/notes.svg" alt="Report Card Icon" width={40} height={40} />
                        </div>
                        <p className="benefit-text">Flexible Scheduling</p>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <Image src="/src/icons/notes.svg" alt="Assessment Icon" width={40} height={40} />
                        </div>
                        <p className="benefit-text">Affordable and Accessible</p>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <Image src="/src/icons/notes.svg" alt="Learning Style Icon" width={40} height={40} />
                        </div>
                        <p className="benefit-text">Get Matched with the Right Tutor</p>
                    </div>
                </div>
            </section>

            <section className="testimonials-section">
                <h2>Student's Testimonials</h2>
                <div className="testimonials-grid">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div key={num} className="testimonial-card">
                            <div className="testimonial-image">
                                <Image src="/src/icons/notes.svg" alt={`Student ${num}`} width={80} height={80} />
                            </div>
                            <h3 className="testimonial-name">Student {num}</h3>
                            <p className="testimonial-grade">Grade: {num + 7} | CBSE</p>
                            <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="faq-section">
                <h2>Frequently asked questions</h2>
                <div className="faq-container">
                    <div className="faq-item">
                        <div className="faq-question">
                            Can I choose between Hindi and English language while selecting batches?
                            <span className="faq-toggle">&#9660;</span>
                        </div>
                        <div className="faq-answer">
                            Yes, we offer classes in both Hindi and English. You can select your preferred language when choosing your batch.
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question">
                            Can I change teacher if I am not able to understand?
                            <span className="faq-toggle">&#9660;</span>
                        </div>
                        <div className="faq-answer">
                            Yes, we understand that different teaching styles work for different students. If you're having difficulty, please contact our support team, and we'll arrange a different teacher for you.
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question">
                            WHAT COURSES DO WE OFFER?
                            <span className="faq-toggle">&#9660;</span>
                        </div>
                        <div className="faq-answer">
                            At Sri Academics, we offer a wide range of customized one-on-one live classes designed to meet the diverse academic needs of students across various curricula and competitive exams. Our expert tutors specialize in major national and international boards, including CBSE, JEE, NEET, ICSE, IGCSE, IB, AS & A Levels, and O Levels, providing subject-specific guidance tailored to each student's learning style.
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <div className="copyright">
                        © 2025.Sri Academics.com. All rights reserved
                    </div>
                    <div className="footer-links">
                        <Link href="/privacy" target="_blank">Privacy policy</Link>
                        <Link href="/terms" target="_blank">Terms and conditions</Link>
                    </div>
                    <div className="social-icons">
                        <Link href="https://wa.me/+91 7772094431?text=interested" target="_blank" className="social-icon">
                            <Image src="/src/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
                        </Link>
                        <Link href="#" className="social-icon">
                            <Image src="/src/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                        </Link>
                        <Link href="https://www.instagram.com/sriacademics?utm_source=qr&igsh=OHJ4dmQwbGxpOTJ2" target="_blank" className="social-icon">
                            <Image src="/src/icons/instagram.svg" alt="Instagram" width={24} height={24} />
                        </Link>
                        <Link href="#" className="social-icon">
                            <Image src="/src/icons/youtube.svg" alt="YouTube" width={24} height={24} />
                        </Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}