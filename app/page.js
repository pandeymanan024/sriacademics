'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '',
    phone: '',
    board: '',
    grade: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <main>
      <header className="header">
        <div className="logo">
          <Image src="/src/icons/sri-academics-logo.svg" alt="CBSE" width={50} height={50} />
          <h1>Sri Academics</h1>
        </div>
        
        <div className="contact-dropdown">
          <button className="contact-btn">Contact Us</button>
          <div className="dropdown-content">
            <a href="https://wa.me/+91 7772094431" target="_blank" rel="noopener noreferrer">
              <Image src="/src/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
              WhatsApp
            </a>
            <a href="mailto:your_email@example.com">
              <Image src="/src/icons/email.svg" alt="Email" width={20} height={20} />
              Email
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="content">
          <h1>1:1 Online Tuitions</h1>
          <p>Book a free tutoring demo at Sri Academics and unlock your academic potential with expert guidance!</p>
          <h2>Book Your FREE DEMO</h2>
          <form id="freeTrialForm" onSubmit={handleSubmit}>
            <div className="form-row">
              <input 
                type="text" 
                id="name" 
                placeholder="*Name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
              <input 
                type="email" 
                id="email" 
                placeholder="*Email" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <select 
                id="countryCode" 
                required 
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value="" disabled>Select Country</option>
                <option value="+91">India (+91)</option>
                <option value="+1">USA (+1)</option>
                {/* Add more country options as needed */}
              </select>
              <input 
                type="tel" 
                id="phone" 
                placeholder="*Phone Number" 
                required 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <select 
                id="board" 
                required 
                value={formData.board}
                onChange={handleChange}
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
                id="grade" 
                required 
                value={formData.grade}
                onChange={handleChange}
              >
                <option value="" disabled>Grade</option>
                {[...Array(9)].map((_, i) => (
                  <option key={i + 4} value={i + 4}>{i + 4}th</option>
                ))}
              </select>
            </div>
            <button type="submit">Book Your FREE DEMO</button>
          </form>
        </div>
      </section>

      <section className="commitment-section">
        <h2>The Sri Academics Commitment to Students</h2>
        <div className="commitment-content">
          <div className="student-image">
            <Image 
              src="/src/images/background-image-2.svg" 
              alt="Student studying in Sri Academics"
              width={400}
              height={300}
            />
          </div>
          <div className="commitment-points">
            {[
              "Personalized Learning: Tailored lessons that cater to your unique learning style and pace.",
              "Expert Tutors: Learn from qualified and experienced tutors who specialize in your subjects.",
              "One-on-One Focus: Every lesson is all about you—your goals, your pace, your success.",
              "Real-Time Interaction: Get immediate feedback and ask questions during live one-on-one sessions."
            ].map((point, index) => (
              <div key={index} className="commitment-point">
                <span className="point-icon"></span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="video-container">
          <h2>Watch Our Introduction Video</h2>
          <div className="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/LRlw32vpMME" 
              allowFullScreen
              title="Sri Academics Introduction"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Benefits Of Online Tutoring In Sri Academics</h2>
        <div className="benefits-grid">
          {[
            "Customized Learning Plans",
            "Expert Tutors at Your Fingertips",
            "Live, Interactive Sessions",
            "Flexible Scheduling",
            "Affordable and Accessible",
            "Get Matched with the Right Tutor"
          ].map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">
                <Image src="/src/icons/notes.svg" alt={`${benefit} Icon`} width={40} height={40} />
              </div>
              <p className="benefit-text">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Student's Testimonials</h2>
        <div className="testimonials-grid">
          {[
            { name: "Student 1", grade: "Grade: 8 | CBSE NEET" },
            { name: "Student 2", grade: "Grade: 3 | CBSE, NEET" },
            { name: "Student 3", grade: "Grade: 10 | CBSE, IIT-JEE" },
            { name: "Student 4", grade: "Grade: 7 | CBSE NEET" },
            { name: "Student 5", grade: "Grade: 9 | CBSE Board" },
            { name: "Student 6", grade: "Grade: 12 | CBSE" }
          ].map((student, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-image">
                <Image src="/src/icons/notes.svg" alt={student.name} width={60} height={60} />
              </div>
              <h3 className="testimonial-name">{student.name}</h3>
              <p className="testimonial-grade">{student.grade}</p>
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently asked questions</h2>
        <div className="faq-container">
          {[
            {
              question: "Can I choose between Hindi and English language while selecting batches?",
              answer: "Yes, we offer classes in both Hindi and English. You can select your preferred language when choosing your batch."
            },
            {
              question: "Can I change teacher if I am not able to understand?",
              answer: "Yes, we understand that different teaching styles work for different students. If you're having difficulty, please contact our support team, and we'll arrange a different teacher for you."
            },
            {
              question: "WHAT COURSES DO WE OFFER ?",
              answer: "At Sri Academics, we offer a wide range of customized one-on-one live classes designed to meet the diverse academic needs of students across various curricula and competitive exams. Our expert tutors specialize in major national and international boards, including CBSE,JEE,NEET, ICSE, IGCSE, IB , AS & A Levels, and O Levels, providing subject-specific guidance tailored to each student's learning style. We also offer focused coaching for competitive and standardized tests such as the SAT, AP, JEE, NEET, and other entrance exams, ensuring students are fully prepared with concept clarity and exam strategies. Every class is personalized to match the learner's goals, pace, and academic background, creating a flexible and supportive environment for success—whether you're aiming for board excellence, global university admissions, or professional advancement."
            },
            {
              question: "Will I get study material for practice?",
              answer: "Yes, we provide comprehensive study materials for practice, including worksheets, practice problems, and additional resources to reinforce your learning."
            },
            {
              question: "Can I choose class timings as per my convenience?",
              answer: "We offer flexible scheduling options. You can choose from a variety of time slots that best fit your schedule. If you need a specific timing, please contact our support team, and we'll do our best to accommodate your request."
            },
            {
              question: "Will I get a test series?",
              answer: "Yes, we provide a comprehensive test series as part of our curriculum. These tests help you assess your progress and prepare for your exams effectively."
            }
          ].map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">
                {faq.question}
                <span className="faq-toggle">&#9660;</span>
              </div>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="copyright">
            © 2025.Sri Academics.com. All rights reserved
          </div>
          <div className="footer-links">
            <a href="privacy.html" target="_blank" rel="noopener noreferrer">Privacy policy</a>
            <a href="terms.html" target="_blank" rel="noopener noreferrer">Terms and conditions</a>
          </div>
          <div className="social-icons">
            <a href="https://wa.me/+91 7772094431?text=interested" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
            </a>
            <a href="#" className="social-icon">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="https://www.instagram.com/sriacademics?utm_source=qr&igsh=OHJ4dmQwbGxpOTJ2" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" className="social-icon">
              <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}