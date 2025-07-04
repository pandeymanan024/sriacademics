"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FreeTrialForm from "./components/FreeTrialForm";

export default function Home() {
  useEffect(() => {
    // FAQ functionality
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      question.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });

    // Hamburger toggle for mobile
    const hamburger = document.querySelector(".hamburger");
    const dropdown = document.querySelector(".dropdown-content");
    if (hamburger) {
      hamburger.onclick = (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("show");
      };
    }
    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (
        dropdown &&
        !dropdown.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        dropdown.classList.remove("show");
      }
    });
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
          background-color: #faf9f6;
          line-height: 1.6;
          color: #333;
          padding-top: 56px;
          overflow-x: hidden;
          max-width: 100vw;
        }
        /* --- GRID-BASED HEADER - FINAL FIX V2 --- */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 56px;
          background-color: #faf9f6;
          z-index: 1000;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
        }

        .logo {
          grid-column: 2;
          display: flex;
          align-items: center;
          gap: 10px;
          justify-self: center; /* Center logo in its grid area */
          min-width: 0; /* Allow logo to shrink if needed */
        }

        .logo img {
          height: 40px;
          width: auto;
          display: block;
        }

        .logo h1 {
          color: black;
          font-size: 24px;
          margin: 0;
          white-space: nowrap; /* Prevent text from wrapping */
        }

        .contact-dropdown {
          grid-column: 3;
          justify-self: end; /* Align to the right edge of the grid area */
          position: relative; /* For dropdown positioning */
        }

        .contact-btn {
          height: 40px;
          display: flex;
          align-items: center;
          padding: 0 32px;
          background-color: #ffb8a8;
          color: #333;
          border: none;
          border-radius: 24px;
          cursor: pointer;
          font-size: 18px;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(217, 75, 26, 0.12);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          background: none;
          border: none;
          cursor: pointer;
          gap: 5px;
        }

        .hamburger span {
          display: block;
          width: 28px;
          height: 4px;
          background: #333;
          border-radius: 2px;
        }

        .desktop-only {
          display: block;
        }
        .mobile-only {
          display: none;
        }

        .contact-btn:hover {
          background-color: #ffa48d;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          top: 110%;
          right: 0;
          background-color: white;
          min-width: 140px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
          border-radius: 8px;
          z-index: 1000;
          flex-direction: column;
          align-items: flex-start;
          padding: 8px 0;
        }

        .contact-dropdown .dropdown-content.show {
          display: flex;
        }

        .dropdown-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          color: #222;
          text-decoration: none;
          font-size: 16px;
          width: 100%;
        }

        .dropdown-link:hover {
          background: #f8f9fa;
        }

        .dropdown-content img {
          width: 22px;
          height: 22px;
        }
        /* All other sections remain the same */
        .hero {
          padding: 48px 0 60px 0;
          background: #faf9f6;
          text-align: center;
        }
        .hero .content {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
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
          background: #d94b1a;
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
          background-color: #faf9f6;
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
          width: 14px;
          height: 14px;
          background-color: #007bff;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 7px;
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
          background-color: #faf9f6;
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
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
          place-items: center;
        }
        .benefit-item {
          width: 100%;
          max-width: 350px;
          padding: 50px 30px;
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
          background-color: #faf9f6;
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
          background-color: #faf9f6;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 500;
        }
        .faq-answer {
          padding: 0 20px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out, padding 0.3s ease-out;
          background-color: white;
        }
        .faq-item.active .faq-answer {
          padding: 20px;
          max-height: 500px;
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
          .logo img {
            height: 32px;
          }
          .logo h1 {
            font-size: 20px;
          }
          .contact-btn.desktop-only {
            display: none;
          }
          .hamburger.mobile-only {
            display: flex;
          }
          .dropdown-content {
            min-width: unset;
            width: 48px;
            border-radius: 6px;
            padding: 4px 0;
            align-items: center;
          }
          .dropdown-content.show {
            display: flex;
          }
          .dropdown-link {
            justify-content: center;
            padding: 8px 0;
          }
          .dropdown-text {
            display: none;
          }
          .student-image {
            width: 100%;
            margin-bottom: 24px;
          }
          .student-image img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
          }
          .hero {
            padding: 48px 20px;
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
            grid-template-columns: 1fr;
            padding: 0;
          }
          .free-trial-form button {
            grid-column: 1;
          }

          .commitment-section,
          .video-section,
          .benefits-section,
          .testimonials-section,
          .faq-section {
            padding: 40px 20px;
          }
          .commitment-content {
            flex-direction: column;
          }
          .commitment-section h2,
          .programs-title,
          .video-container h2,
          .benefits-section h2,
          .testimonials-section h2,
          .faq-section h2 {
            font-size: 28px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }
          .footer {
            padding: 20px;
          }
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
        }
        @media (max-width: 420px) {
          .logo h1 {
            display: none;
          }
        }
        .message {
          margin-top: 10px;
          padding: 10px;
          border-radius: 4px;
          text-align: center;
        }
        .message.error {
          background-color: #ffebee;
          color: #c62828;
          border: 1px solid #ffcdd2;
        }
        .message.success {
          background-color: #e8f5e9;
          color: #2e7d32;
          border: 1px solid #c8e6c9;
        }
        .free-trial-form button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
      <main>
        <header className="header">
          <div className="logo">
            <Image
              src="/src/icons/sri-academics-logo.svg"
              alt="Sri Academics Logo"
              width={40}
              height={40}
            />
            <h1>Sri Academics</h1>
          </div>
          <div className="contact-dropdown">
            <button className="contact-btn desktop-only">Contact Us</button>
            <button
              className="hamburger mobile-only"
              aria-label="Open Contact Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="dropdown-content">
              <Link
                href="https://wa.me/+917772094431?text=interested"
                target="_blank"
                className="dropdown-link"
              >
                <Image
                  src="/src/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
                <span className="dropdown-text">WhatsApp</span>
              </Link>
              <Link
                href="mailto:support@sriacademics.com"
                className="dropdown-link"
              >
                <Image
                  src="/src/icons/email.svg"
                  alt="Email"
                  width={20}
                  height={20}
                />
                <span className="dropdown-text">Email</span>
              </Link>
            </div>
          </div>
        </header>

        <section className="hero">
          <div className="content">
            <h1>1:1 Online Tuitions</h1>
            <p>
              Book a free tutoring demo at Sri Academics and unlock your
              academic potential with expert guidance!
            </p>
            <h2>Book Your FREE DEMO</h2>
            <FreeTrialForm />
          </div>
        </section>

        <section className="commitment-section">
          <h2>The Sri Academics Commitment to Students</h2>
          <div className="commitment-content">
            <div className="student-image">
              <Image
                src="/src/images/image-2nd-page.jpeg"
                alt="Student studying in Sri Academics"
                width={500}
                height={300}
                style={{ borderRadius: "16px" }}
              />
            </div>
            <div className="commitment-points">
              <div className="commitment-point">
                <span className="point-icon"></span>
                <p>
                  Personalized Learning: Tailored lessons that cater to your
                  unique learning style and pace.
                </p>
              </div>
              <div className="commitment-point">
                <span className="point-icon"></span>
                <p>
                  Expert Tutors: Learn from qualified and experienced tutors who
                  specialize in your subjects.
                </p>
              </div>
              <div className="commitment-point">
                <span className="point-icon"></span>
                <p>
                  One-on-One Focus: Every lesson is all about you—your goals,
                  your pace, your success.
                </p>
              </div>
              <div className="commitment-point">
                <span className="point-icon"></span>
                <p>
                  Real-Time Interaction: Get immediate feedback and ask
                  questions during live one-on-one sessions.
                </p>
              </div>
            </div>
          </div>

          <h2 className="programs-title">Programs We Offer</h2>
          <div
            className="boards-container"
            style={{ backgroundColor: "#FAF9F6", borderRadius: "10px" }}
          >
            <Image
              src="/src/images/background-image-3.png"
              alt="Educational Boards"
              width={1200}
              height={600}
              className="boards-image"
              style={{ backgroundColor: "#FAF9F6", borderRadius: "10px" }}
            />
          </div>
        </section>

        <section className="video-section">
          <div className="video-container">
            <h2>Watch Our Introduction Video</h2>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/pnQcfk2epTw"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <h2>Benefits Of Online Tutoring In Sri Academics</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <Image
                  src="/src/icons/google-classroom-svgrepo-com.svg"
                  alt="Counselor Icon"
                  width={40}
                  height={40}
                />
              </div>
              <p className="benefit-text">Customized Learning Plans</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Image
                  src="/src/icons/tyre-expert-svgrepo-com.svg"
                  alt="Curriculum Icon"
                  width={40}
                  height={40}
                />
              </div>
              <p className="benefit-text">Expert Tutors at Your Fingertips</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Image
                  src="/src/icons/learning-teacher-svgrepo-com.svg"
                  alt="Parenting Icon"
                  width={40}
                  height={40}
                />
              </div>
              <p className="benefit-text">Live, Interactive Sessions</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Image
                  src="/src/icons/schedule-calendar-svgrepo-com.svg"
                  alt="Report Card Icon"
                  width={40}
                  height={40}
                />
              </div>
              <p className="benefit-text">Flexible Scheduling</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Image
                  src="/src/icons/money-bag-svgrepo-com.svg"
                  alt="Assessment Icon"
                  width={40}
                  height={40}
                />
              </div>
              <p className="benefit-text">Affordable and Accessible</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Image
                  src="/src/icons/class-management-svgrepo-com.svg"
                  alt="Learning Style Icon"
                  width={40}
                  height={40}
                />
              </div>
              <p className="benefit-text">Get Matched with the Right Tutor</p>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <h2>Student's Testimonials</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-image">
                <Image
                  src="/src/icons/notes.svg"
                  alt="Ritesh"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="testimonial-name">Naman Joshi</h3>
              <p className="testimonial-grade">Grade: 11 | CBSE</p>
              <p className="testimonial-text">
                Studying Computer Science with Sri Academics has been a great
                experience. The customized classes really helped me understand
                the topics at my own pace, and the teaching style was very
                student-friendly. What made it even better was the flexible
                class timings, which allowed me to manage my school workload
                without any stress. It made learning much easier and more
                effective for me.
              </p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <Image
                  src="/src/icons/notes.svg"
                  alt="Aayan"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="testimonial-name">Aayan</h3>
              <p className="testimonial-grade">Grade: 11 | CBSE, PCM</p>
              <p className="testimonial-text">
                The classes at SRI ACADEMICS are well organized and impactful.
                The teacher is easily approachable and serves as a great
                mediator for learning. Concepts are taught clearly and with
                patience, making understanding easier. It’s a supportive and
                motivating environment that truly helps.
              </p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <Image
                  src="/src/icons/notes.svg"
                  alt="Kaustav"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="testimonial-name">Kaustav</h3>
              <p className="testimonial-grade">Grade: 10 | IGCSE</p>
              <p className="testimonial-text">
                I am extremely happy with the teacher. He has turned physics
                from a burden into a fun subject which i look forward to.
                Joining was a great decision
              </p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <Image
                  src="/src/icons/notes.svg"
                  alt="Balaji"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="testimonial-name">Balaji</h3>
              <p className="testimonial-grade">Grade: 12 | CBSE</p>
              <p className="testimonial-text">
                My time at Sri Academy has been life-changing! I’ve grown not
                just as a student, but as a person. I've learned how to be
                RESPONSIBLE for my choices, how to stay DISCIPLINED with my
                goals, and what true SACRIFICE and DEDICATION really mean. These
                are lessons I’ll carry with me forever. The teachers here are
                amazing. They don’t just teach—they actually CARE. They’re super
                knowledgeable and always ready to help. They gave me smart
                strategies for everything—from completing the syllabus to
                setting timetables and meeting deadlines. Because of them, my
                scores AND my confidence went up! One thing I really appreciated
                was how the classes never felt boring or forced. It never felt
                like a lecture—it was always a proper discussion where I could
                ask questions, interact, and actually enjoy learning. I never
                once felt miserable or desperate for class to end... in fact, I
                looked forward to them! The faculty is also super understanding
                and flexible. They tailor the course to what works best for
                you—whether that’s adjusting class timings or giving regular
                breaks during the week. It really made a difference. I HIGHLY
                recommend Sri Academy to any student who’s serious about
                improving. It’s 100% worth it. If you want results, guidance,
                and real growth—this is the place to be!
              </p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <Image
                  src="/src/icons/notes.svg"
                  alt="Akshaya Iyer"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="testimonial-name">Akshaya Iyer</h3>
              <p className="testimonial-grade">Grade: 11 | IGCSE</p>
              <p className="testimonial-text">
                The classes by Mr.Rajeev was excellent in clearing concepts of
                coding and all aspects of CS. The method of conveying knowledge
                was very clear and concise.
              </p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <Image
                  src="/src/icons/notes.svg"
                  alt="Srijan"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="testimonial-name">Srijan</h3>
              <p className="testimonial-grade">Grade: 12 | CBSE</p>
              <p className="testimonial-text">
                Before joining Sri Academics, I always found Physics to be one
                of the toughest subjects. But learning here has been a
                completely new experience for me. The way the teachers explain
                the concepts has really helped me understand the subject
                clearly. My basics are much stronger now, and I feel a lot more
                confident in Physics.
              </p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <h2>Frequently asked questions</h2>
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question">
                Can I choose between Hindi and English language while selecting
                batches?
                <span className="faq-toggle">&#9660;</span>
              </div>
              <div className="faq-answer">
                Yes, we offer classes in both Hindi and English. You can select
                your preferred language when choosing your batch.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                Can I change teacher if I am not able to understand?
                <span className="faq-toggle">&#9660;</span>
              </div>
              <div className="faq-answer">
                Yes, we understand that different teaching styles work for
                different students. If you're having difficulty, please contact
                our support team, and we'll arrange a different teacher for you.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                What courses do we offer?
                <span className="faq-toggle">&#9660;</span>
              </div>
              <div className="faq-answer">
                At Sri Academics, we offer a wide range of customized one-on-one
                live classes designed to meet the diverse academic needs of
                students across various curricula and competitive exams. Our
                expert tutors specialize in major national and international
                boards, including CBSE, JEE, NEET, ICSE, IGCSE, IB, AS & A
                Levels, and O Levels, providing subject-specific guidance
                tailored to each student's learning style.
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
              <Link href="/privacy" target="_blank">
                Privacy policy
              </Link>
              <Link href="/terms" target="_blank">
                Terms and conditions
              </Link>
            </div>
            <div className="social-icons">
              <Link
                href="https://wa.me/+917772094431?text=interested"
                target="_blank"
                className="social-icon"
              >
                <Image
                  src="/src/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                />
              </Link>
              {/* <Link href="https://wa.me/+91 7772094431?text=interested" target="_blank" className="social-icon">
                            <Image src="/src/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
                        </Link> */}
              {/* <Link
                href="https://www.linkedin.com/in/manan-pandey-2a898a17a/"
                target="_blank"
                className="social-icon"
              >
                <Image
                  src="/src/icons/linkedin-svgrepo-com.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link> */}
              <Link
                href="https://www.instagram.com/sriacademics?utm_source=qr&igsh=OHJ4dmQwbGxpOTJ2"
                target="_blank"
                className="social-icon"
              >
                <Image
                  src="/src/icons/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.youtube.com/@sriacademics?si=5BdTaXoxSTQ6jwQO"
                target="_blank"
                className="social-icon"
              >
                <Image
                  src="/src/icons/youtube.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
