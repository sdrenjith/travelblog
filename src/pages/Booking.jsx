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

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      overflow: 'hidden',
      position: 'relative',
      background: 'linear-gradient(135deg, #f8fafc 0%, #fceabb 100%)',
    }}>
      {/* Animated Gradient Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute',
          top: '-120px',
          left: '-120px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle at 30% 30%, #ffb347 0%, #ffcc80 100%)',
          opacity: 0.25,
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle at 70% 70%, #a1c4fd 0%, #c2e9fb 100%)',
          opacity: 0.22,
          filter: 'blur(40px)',
          animation: 'float 10s ease-in-out infinite',
          animationDelay: '2s',
        }} />
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle at 50% 50%, #fcb69f 0%, #ffecd2 100%)',
          opacity: 0.18,
          filter: 'blur(30px)',
          transform: 'translate(-50%, -50%)',
          animation: 'float 12s ease-in-out infinite',
          animationDelay: '4s',
        }} />
        {/* Travel-themed background image with overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.13,
          zIndex: 1,
        }} />
      </div>

      {/* Floating Secure Badge */}
      <div style={{
        position: 'fixed',
        top: 30,
        right: 30,
        zIndex: 50,
        background: 'rgba(255,255,255,0.85)',
        borderRadius: '30px',
        boxShadow: '0 10px 16px rgba(0,0,0,0.08)',
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 600,
        color: '#4CAF50',
        fontSize: '1.1rem',
        letterSpacing: '0.02em',
        border: '1.5px solid #e0e0e0',
        gap: 10,
      }}>
        <i className="fas fa-shield-alt" style={{color: '#4CAF50', fontSize: '1.2rem'}}></i>
        100% Secure Booking
      </div>

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: 600,
        margin: '0 auto',
        padding: '120px 16px 60px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: 40,
          animation: 'fade-in 1.2s cubic-bezier(.39,.575,.56,1) both',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 18,
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #ffb347 0%, #ffcc80 100%)',
              borderRadius: '50%',
              padding: 22,
              boxShadow: '0 4px 16px rgba(255, 179, 71, 0.15)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'bounce 2.5s infinite',
            }}>
              <i className="fas fa-suitcase-rolling" style={{color: 'white', fontSize: '2.5rem'}}></i>
            </div>
          </div>
          <h1 style={{
            fontSize: '2.7rem',
            fontWeight: 700,
            color: '#333',
            marginBottom: 12,
            lineHeight: 1.1,
          }}>
            REACH OUT FOR THE<br />
            <span style={{
              background: 'linear-gradient(90deg, #ffb347 0%, #ffcc80 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              animation: 'pulse 2s infinite',
            }}>BEST EXPERIENCE</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: 420,
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Ready to embark on your next adventure? Let us craft the perfect travel experience tailored just for you.
          </p>
        </div>

        {/* Glassmorphism Form */}
        <form ref={form} onSubmit={sendEmail} style={{
          width: '100%',
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 28,
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
          padding: '36px 28px',
          backdropFilter: 'blur(12px)',
          border: '1.5px solid #f3e9e1',
          display: 'flex',
          flexDirection: 'column',
          gap: 22,
          animation: 'fade-in 1.7s cubic-bezier(.39,.575,.56,1) both',
        }}>
          <label style={{fontWeight: 500, color: '#444', marginBottom: 6}}>Name</label>
          <input style={{
            background: 'rgba(255,255,255,0.95)',
            border: '1.5px solid #ffe0b2',
            borderRadius: 12,
            padding: '14px 18px',
            fontSize: '1rem',
            color: '#333',
            marginBottom: 8,
            outline: 'none',
            transition: 'border 0.2s',
          }} type="text" name="name" placeholder='Type your Name...' required />

          <label style={{fontWeight: 500, color: '#444', marginBottom: 6}}>Phone Number</label>
          <input style={{
            background: 'rgba(255,255,255,0.95)',
            border: '1.5px solid #ffe0b2',
            borderRadius: 12,
            padding: '14px 18px',
            fontSize: '1rem',
            color: '#333',
            marginBottom: 8,
            outline: 'none',
            transition: 'border 0.2s',
          }} type="text" name="phone" placeholder='Type your Phone Number...' required />

          <label style={{fontWeight: 500, color: '#444', marginBottom: 6}}>Email</label>
          <input style={{
            background: 'rgba(255,255,255,0.95)',
            border: '1.5px solid #ffe0b2',
            borderRadius: 12,
            padding: '14px 18px',
            fontSize: '1rem',
            color: '#333',
            marginBottom: 8,
            outline: 'none',
            transition: 'border 0.2s',
          }} type="email" name="email" placeholder='Type your Email...' required />

          <label style={{fontWeight: 500, color: '#444', marginBottom: 6}}>Message</label>
          <textarea style={{
            background: 'rgba(255,255,255,0.95)',
            border: '1.5px solid #ffe0b2',
            borderRadius: 12,
            padding: '14px 18px',
            fontSize: '1rem',
            color: '#333',
            marginBottom: 8,
            outline: 'none',
            minHeight: 90,
            resize: 'vertical',
            transition: 'border 0.2s',
          }} name="message" placeholder='Type your Message...' required />
              
                 <button style={{
            background: 'linear-gradient(90deg, #ffb347 0%, #ffcc80 100%)',
            color: '#fff',
            border: 'none',
            padding: '15px 0',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.3s, transform 0.2s',
            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.13)',
            marginTop: 18,
            letterSpacing: '0.02em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
          }} type="submit">
            <i className="fas fa-paper-plane"></i>
          BOOK YOUR TRAVEL
        </button>
          </form>

        {/* Additional Info */}
        <div style={{
          marginTop: 38,
          textAlign: 'center',
          color: '#888',
          fontSize: '1.08rem',
        }}>
          <p>🌟 Get personalized recommendations • 🎯 Tailored itineraries • 💼 Professional support</p>
          <p style={{marginTop: 6, color: '#aaa'}}>We typically respond within 24 hours</p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.04); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @media (max-width: 700px) {
          form {
            padding: 18px 6px !important;
          }
          h1 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Booking;
