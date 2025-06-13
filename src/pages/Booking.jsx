import React, { useEffect, useRef } from 'react'
import emailjs from 'emailjs-com';

function Booking() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_4f4fhbi',
      'template_dna836s',
      form.current,
      'rrf3ari749KxgfBFs'
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send message. Try again.');
      }
    );
    e.target.reset();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // For sequential animation
  useEffect(() => {
    const fields = document.querySelectorAll('.booking-input-group');
    fields.forEach((field, i) => {
      field.style.opacity = 0;
      setTimeout(() => {
        field.style.opacity = 1;
        field.style.transform = 'translateY(0)';
      }, 300 + i * 180);
    });
  }, []);

  return (
    <div className="booking-bg">
      {/* Decorative Top Wave */}
      <div className="booking-wave">
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 120L60 110C120 100 240 80 360 90C480 100 600 140 720 150C840 160 960 140 1080 120C1200 100 1320 80 1380 70L1440 60V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="#ffe29f"/></svg>
      </div>
      {/* Animated Floating Travel Icons */}
      <div className="booking-float-icons">
        <i className="fas fa-plane"></i>
        <i className="fas fa-map-marked-alt"></i>
        <i className="fas fa-umbrella-beach"></i>
        <i className="fas fa-suitcase-rolling"></i>
        <i className="fas fa-mountain"></i>
      </div>
      <style>{`
        .booking-bg {
          min-height: 100vh;
          background: linear-gradient(120deg, #ffe29f 0%, #ffa751 100%), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 10px;
          position: relative;
          overflow: hidden;
        }
        .booking-wave {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1;
        }
        .booking-float-icons {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 2;
        }
        .booking-float-icons i {
          position: absolute;
          font-size: 2.2rem;
          opacity: 0.18;
          color: #ffb837;
          animation: floatIcon 8s ease-in-out infinite;
        }
        .booking-float-icons i:nth-child(1) { left: 8%; top: 18%; animation-delay: 0s; }
        .booking-float-icons i:nth-child(2) { left: 80%; top: 12%; animation-delay: 2s; }
        .booking-float-icons i:nth-child(3) { left: 60%; top: 70%; animation-delay: 1s; }
        .booking-float-icons i:nth-child(4) { left: 20%; top: 65%; animation-delay: 3s; }
        .booking-float-icons i:nth-child(5) { left: 45%; top: 40%; animation-delay: 1.5s; }
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.15); opacity: 0.28; }
        }
        .booking-card {
          background: rgba(255,255,255,0.95);
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(255, 167, 81, 0.18), 0 1.5px 8px rgba(255, 184, 53, 0.08);
          padding: 48px 32px 40px 32px;
          max-width: 420px;
          width: 100%;
          margin: 0 auto;
          animation: fadeInUp 1s cubic-bezier(.23,1.01,.32,1) both;
          z-index: 10;
          transition: transform 0.25s cubic-bezier(.23,1.01,.32,1), box-shadow 0.25s;
        }
        .booking-card:hover {
          transform: scale(1.025) translateY(-4px);
          box-shadow: 0 16px 40px rgba(255, 167, 81, 0.22), 0 2px 12px rgba(255, 184, 53, 0.13);
        }
        .booking-title {
          font-size: 2.2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 10px;
          color: #ff8c42;
          letter-spacing: 1px;
        }
        .booking-title span {
          color: #f9a51a;
        }
        .booking-sub {
          text-align: center;
          color: #555;
          font-size: 1.1rem;
          margin-bottom: 32px;
        }
        .booking-form label {
          display: block;
          margin-bottom: 6px;
          color: #ff8c42;
          font-weight: 500;
          font-size: 1rem;
        }
        .booking-input-group {
          position: relative;
          margin-bottom: 22px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s, transform 0.6s;
        }
        .booking-input-group i {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #ffb837;
          font-size: 1.1rem;
          transition: color 0.3s;
        }
        .booking-form input,
        .booking-form textarea {
          width: 100%;
          padding: 12px 12px 12px 38px;
          border-radius: 10px;
          border: 1.5px solid #ffe29f;
          background: #fffbe9;
          font-size: 1rem;
          color: #333;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-shadow: 0 1px 4px rgba(255, 184, 53, 0.07);
        }
        .booking-form input:focus,
        .booking-form textarea:focus {
          border-color: #ffb837;
          box-shadow: 0 2px 8px rgba(255, 184, 53, 0.13);
        }
        .booking-form input:focus ~ i,
        .booking-form textarea:focus ~ i {
          color: #ff8c42;
        }
        .booking-form textarea {
          min-height: 80px;
          resize: vertical;
        }
        .booking-btn {
          background: linear-gradient(90deg, #ffb837 0%, #ff8c42 100%);
          color: #fff;
          border: none;
          padding: 15px 0;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          margin-top: 18px;
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.13);
          transition: background 0.2s, transform 0.2s;
          position: relative;
          overflow: hidden;
        }
        .booking-btn:active {
          animation: btnBounce 0.3s;
        }
        @keyframes btnBounce {
          0% { transform: scale(1); }
          30% { transform: scale(0.96); }
          60% { transform: scale(1.04); }
          100% { transform: scale(1); }
        }
        .booking-btn:hover {
          background: linear-gradient(90deg, #ff8c42 0%, #ffb837 100%);
          transform: translateY(-2px) scale(1.03);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 600px) {
          .booking-card { padding: 28px 8px 24px 8px; }
          .booking-title { font-size: 1.3rem; }
        }
      `}</style>
      <div className="booking-card">
        <div className="booking-title">
          REACH OUT FOR THE BEST <br />
          <span>EXPERIENCE</span>
        </div>
        <div className="booking-sub">
          Book your next adventure with us! Fill out the form and our team will get in touch soon.
        </div>
        <form ref={form} onSubmit={sendEmail} className="booking-form">
          <div className="booking-input-group">
            <i className="fas fa-user"></i>
            <label>Name</label>
            <input type="text" name="name" placeholder="Type your Name..." required />
          </div>
          <div className="booking-input-group">
            <i className="fas fa-phone"></i>
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="Type your Phone Number..." required />
          </div>
          <div className="booking-input-group">
            <i className="fas fa-envelope"></i>
            <label>Email</label>
            <input type="email" name="email" placeholder="Type your Email..." required />
          </div>
          <div className="booking-input-group">
            <i className="fas fa-comment-dots"></i>
            <label>Message</label>
            <textarea name="message" placeholder="Type your Message..." required />
          </div>
          <button className="booking-btn" type="submit">
            BOOK YOUR TRAVEL
          </button>
        </form>
      </div>
    </div>
  )
}

export default Booking;
