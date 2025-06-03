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
        <>
        <style jsx global>{`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  background-color: #FAF9F6;
  line-height: 1.6;
  color: #333;
  padding-top: 80px;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  background-color: #FAF9F6;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  height: 80px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo img {
  height: 40px;
  width: auto;
}
.logo h1 {
  color: black;
  font-size: 24px;
}
.header .contact-dropdown {
  position: absolute;
  right: 40px;
  top: 20px;
}
.contact-btn {
  padding: 12px 32px;
  background-color: #ffb8a8;
  color: #333;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(217, 75, 26, 0.12);
  transition: background 0.2s;
  position: relative;
  z-index: 2;
}
.contact-btn:hover {
  background-color: #ffa48d;
}
.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: white;
  min-width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1;
}
.contact-dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-content a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  color: #333;
  text-decoration: none;
}
.dropdown-content a:hover {
  background-color: #f8f9fa;
}
.hero {
  padding: 120px 0 60px 0;
  background: #FAF9F6;
  text-align: center;
}
.hero .content {
  max-width: 900px;
  margin: 0 auto;
}
.hero h1 {
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #111;
}
.hero p {
  font-size: 22px;
  color: #333;
  margin-bottom: 32px;
}
.hero h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #111;
}
.free-trial-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  max-width: 900px;
  margin: 0 auto;
  background: none;
  box-shadow: none;
  padding: 0;
}
.free-trial-form input,
.free-trial-form select {
  width: 100%;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 12px;
  font-size: 18px;
  background: #fff;
  margin-bottom: 0;
}
.free-trial-form .form-row {
  display: contents;
}
.free-trial-form button {
  grid-column: 1 / span 2;
  width: 100%;
  padding: 20px 0;
  background: #D94B1A;
  color: #fff;
  border: none;
  border-radius: 32px;
  font-size: 22px;
  font-weight: 700;
  margin-top: 16px;
  box-shadow: 0 2px 8px rgba(217, 75, 26, 0.12);
  transition: background 0.2s;
}
.free-trial-form button:hover {
  background: #b53c13;
}
#clickPrompt {
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
}
#clickPrompt.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}
#clickPrompt.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
.commitment-section {
  padding: 60px 40px;
  background-color: #FAF9F6;
  text-align: center;
}
.commitment-section h2 {
  font-size: 36px;
  margin-bottom: 40px;
  color: #333;
}
.commitment-content {
  display: flex;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}
.student-image {
  flex: 1;
}
.commitment-points {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
}
.commitment-point {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}
.point-icon {
  width: 24px;
  height: 24px;
  background-color: #007bff;
  border-radius: 50%;
  flex-shrink: 0;
}
.programs-title {
  font-size: 36px;
  margin: 60px 0 40px;
  color: #333;
}
.boards-container {
  max-width: 1200px;
  margin: 0 auto;
}
.boards-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
.video-section {
  padding: 60px 40px;
  background-color: #FAF9F6;
}
.video-container {
  max-width: 800px;
  margin: 0 auto;
}
.video-container h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 36px;
  color: #333;
}
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 10px;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.benefits-section {
  padding: 60px 40px;
  background-color: white;
}
.benefits-section h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 36px;
  color: #333;
}
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}
.benefit-item {
  text-align: center;
  padding: 30px;
  background-color: #FAF9F6;
  border-radius: 10px;
  transition: transform 0.3s ease;
}
.benefit-item:hover {
  transform: translateY(-5px);
}
.benefit-icon {
  margin-bottom: 20px;
}
.benefit-text {
  font-size: 18px;
  color: #333;
  font-weight: 500;
}
.testimonials-section {
  padding: 60px 40px;
  background-color: #FAF9F6;
}
.testimonials-section h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 36px;
  color: #333;
}
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}
.testimonial-card {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.testimonial-image {
  margin-bottom: 20px;
}
.testimonial-name {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}
.testimonial-grade {
  color: #666;
  margin-bottom: 15px;
}
.testimonial-text {
  color: #666;
  font-style: italic;
}
.faq-section {
  padding: 60px 40px;
  background-color: white;
}
.faq-section h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 36px;
  color: #333;
}
.faq-container {
  max-width: 800px;
  margin: 0 auto;
}
.faq-item {
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}
.faq-question {
  padding: 20px;
  background-color: #FAF9F6;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}
.faq-answer {
  padding: 20px;
  display: none;
  background-color: white;
}
.faq-item.active .faq-answer {
  display: block;
}
.footer {
  background-color: #333;
  color: white;
  padding: 40px;
}
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.footer-links {
  display: flex;
  gap: 20px;
}
.footer-links a {
  color: white;
  text-decoration: none;
}
.social-icons {
  display: flex;
  gap: 15px;
}
.social-icon {
  color: white;
  text-decoration: none;
}
@media (max-width: 768px) {
  .header {
    padding: 15px 20px;
  }
  .hero {
    padding: 100px 20px 40px;
  }
  .hero h1 {
    font-size: 36px;
  }
  .hero p {
    font-size: 18px;
  }
  .hero h2 {
    font-size: 28px;
  }
  .free-trial-form {
    padding: 20px;
  }
  .commitment-section {
    padding: 40px 20px;
  }
  .commitment-content {
    flex-direction: column;
  }
  .commitment-section h2 {
    font-size: 28px;
  }
  .programs-title {
    font-size: 28px;
  }
  .video-section,
  .benefits-section,
  .testimonials-section,
  .faq-section {
    padding: 40px 20px;
  }
  .benefits-section h2,
  .testimonials-section h2,
  .faq-section h2 {
    font-size: 28px;
  }
  .footer {
    padding: 20px;
  }
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
@media (max-width: 900px) {
  .free-trial-form {
    grid-template-columns: 1fr;
  }
  .free-trial-form button {
    grid-column: 1;
  }
}
        `}</style>
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
        </>
    );
}