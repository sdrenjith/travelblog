import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PremiumServiceCategories = () => {
  // Service data
  const serviceData = [
    {
      title: "2 Days 3 Nights",
      icon: "fas fa-mountain",
      badge: "Popular",
      description: "Perfect for weekend getaways and short trips. Experience the best of your destination in a compact itinerary.",
      bgClass: "bg-primary",
      days: [
        {
          name: "Day 1",
          summary: "Arrival and city tour",
          details: {
            "Morning": "Arrival at hotel, check-in and welcome drinks",
            "Afternoon": "City sightseeing tour covering major landmarks",
            "Evening": "Welcome dinner at local restaurant",
            "Night": "Rest at hotel"
          }
        },
        {
          name: "Day 2",
          summary: "Adventure activities",
          details: {
            "Morning": "Breakfast and adventure park visit",
            "Afternoon": "Water sports and beach activities",
            "Evening": "Shopping and local market tour",
            "Night": "Cultural show and dinner"
          }
        },
        {
          name: "Day 3",
          summary: "Cultural experience and departure",
          details: {
            "Morning": "Visit to historical monuments",
            "Afternoon": "Cultural show and traditional lunch",
            "Evening": "Farewell ceremony and departure transfer"
          }
        }
      ]
    },
    {
      title: "3 Days 4 Nights",
      icon: "fas fa-umbrella-beach",
      badge: "Best Value",
      description: "Extended stay package with comprehensive dining options. Enjoy diverse culinary experiences throughout your journey.",
      bgClass: "bg-success",
      days: [
        {
          name: "Continental",
          summary: "European style breakfast",
          details: {
            "Bread & Pastries": "Croissants, muffins, toast",
            "Beverages": "Coffee, tea, fresh juices",
            "Fruits": "Seasonal fresh fruit selection",
            "Extras": "Butter, jam, honey"
          }
        },
        {
          name: "Indian",
          summary: "Traditional Indian breakfast",
          details: {
            "Main Items": "Idli, dosa, upma, poha",
            "Accompaniments": "Sambar, chutney varieties",
            "Beverages": "Masala chai, filter coffee",
            "Sweets": "Jalebi, gulab jamun"
          }
        },
        {
          name: "American",
          summary: "Classic American breakfast",
          details: {
            "Main Course": "Pancakes, waffles, eggs benedict",
            "Sides": "Bacon, sausages, hash browns",
            "Beverages": "Orange juice, coffee, milk",
            "Extras": "Maple syrup, fresh berries"
          }
        }
      ]
    },
    {
      title: "4 Days 5 Nights",
      icon: "fas fa-landmark",
      badge: "Premium",
      description: "Capture unforgettable moments with our premium photography services. Perfect for special occasions and celebrations.",
      bgClass: "bg-secondary",
      days: [
        {
          name: "Pre-Wedding",
          summary: "Engagement and pre-wedding shoots",
          details: {
            "Duration": "4-6 hours outdoor shoot",
            "Locations": "2-3 scenic locations",
            "Deliverables": "100+ edited photos",
            "Extras": "Online gallery, print options"
          }
        },
        {
          name: "Wedding Day",
          summary: "Full wedding day coverage",
          details: {
            "Coverage": "12+ hours complete coverage",
            "Events": "Ceremony, reception, rituals",
            "Team": "2 photographers + videographer",
            "Deliverables": "500+ photos, highlight video"
          }
        },
        {
          name: "Post-Wedding",
          summary: "After wedding couple shoot",
          details: {
            "Session": "2-3 hours studio/outdoor",
            "Concept": "Glamour and candid shots",
            "Styling": "Professional makeup included",
            "Products": "Album design, wall frames"
          }
        }
      ]
    },
    {
      title: "5 Days 6 Nights",
      icon: "fas fa-city",
      badge: "Business",
      description: "Ideal for corporate events and business meetings. Professional setup with all necessary amenities.",
      bgClass: "bg-warning",
      days: [
        {
          name: "Conference",
          summary: "Business conference planning",
          details: {
            "Venue": "Premium conference halls",
            "Services": "AV equipment, catering, registration",
            "Duration": "Full day or multi-day events",
            "Extras": "Photography, live streaming"
          }
        },
        {
          name: "Team Building",
          summary: "Corporate team activities",
          details: {
            "Activities": "Outdoor adventures, workshops",
            "Venue": "Resorts, adventure parks",
            "Facilitators": "Professional team builders",
            "Meals": "Breakfast, lunch, evening snacks"
          }
        },
        {
          name: "Product Launch",
          summary: "New product introduction events",
          details: {
            "Setup": "Stage design, branding",
            "Media": "Press coverage, social media",
            "Audience": "Invitations, guest management",
            "Experience": "Product demos, presentations"
          }
        }
      ]
    },
    {
      title: "6 Days 7 Nights",
      icon: "fas fa-spa",
      badge: "Luxury",
      description: "Experience luxury accommodation with premium amenities. Perfect for an extended comfortable stay.",
      bgClass: "bg-info",
      days: [
        {
          name: "Suite",
          summary: "Luxury suite accommodation",
          details: {
            "Room": "Spacious suite with city view",
            "Amenities": "Mini bar, jacuzzi, balcony",
            "Services": "24/7 room service, concierge",
            "Extras": "Complimentary breakfast, wifi"
          }
        },
        {
          name: "Deluxe",
          summary: "Comfortable deluxe rooms",
          details: {
            "Room": "Well-appointed deluxe room",
            "Features": "King bed, work desk, sofa",
            "Facilities": "Gym access, pool, spa",
            "Services": "Daily housekeeping, laundry"
          }
        },
        {
          name: "Standard",
          summary: "Comfortable standard rooms",
          details: {
            "Room": "Cozy standard accommodation",
            "Basics": "Queen bed, TV, AC",
            "Access": "Common areas, restaurant",
            "Services": "Front desk, parking"
          }
        }
      ]
    },
    {
      title: "7 Days 8 Nights",
      icon: "fas fa-route",
      badge: "Adventure",
      description: "Explore multiple destinations with our adventure package. Perfect for thrill-seekers and explorers.",
      bgClass: "bg-dark",
      days: [
        {
          name: "Shimla",
          summary: "Queen of Hills experience",
          details: {
            "Attractions": "Mall Road, Jakhoo Temple",
            "Activities": "Toy train ride, trekking",
            "Weather": "Pleasant year-round climate",
            "Specialties": "Apple orchards, colonial architecture"
          }
        },
        {
          name: "Manali",
          summary: "Adventure capital of Himachal",
          details: {
            "Attractions": "Rohtang Pass, Solang Valley",
            "Adventures": "Paragliding, river rafting",
            "Culture": "Hadimba Temple, local markets",
            "Season": "Best from March to June"
          }
        },
        {
          name: "Ooty",
          summary: "Nilgiri mountain retreat",
          details: {
            "Gardens": "Botanical gardens, rose garden",
            "Lakes": "Ooty Lake boating",
            "Railways": "Nilgiri mountain railway",
            "Climate": "Cool weather throughout year"
          }
        }
      ]
    }
  ];

  // State for particles
  const [particles, setParticles] = useState([]);

  // Particle effect
  useEffect(() => {
    const createParticle = () => {
      const id = Math.random().toString(36).substr(2, 9);
      const newParticle = {
        id,
        left: Math.random() * window.innerWidth,
        animationDuration: Math.random() * 3 + 3 // 3-6 seconds
      };
      
      setParticles(prev => [...prev, newParticle]);
      
      // Remove particle after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== id));
      }, newParticle.animationDuration * 1000);
    };

    const interval = setInterval(createParticle, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      <style jsx>{`
        :root {
          --primary-gradient: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
          --secondary-gradient: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
          --success-gradient: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
          --warning-gradient: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
          --info-gradient: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
          --dark-gradient: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: #ffffff;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .app-container {
          font-family: 'Poppins', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .app-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent 49%, rgba(255, 128, 9, 0.05) 50%, transparent 51%),
                      linear-gradient(-45deg, transparent 49%, rgba(255, 140, 66, 0.05) 50%, transparent 51%),
                      radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255, 140, 66, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 60% 40%, rgba(255, 165, 0, 0.08) 0%, transparent 50%);
          background-size: 60px 60px, 60px 60px, 800px 800px, 600px 600px, 1000px 1000px;
          animation: backgroundShift 20s ease-in-out infinite;
          pointer-events: none;
          z-index: -2;
        }

        .app-container::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ff6b35" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          animation: gridMove 15s linear infinite;
          pointer-events: none;
          z-index: -1;
        }

        .hero-section {
          width: 100vw;
          height: 98vh;
          min-height: 400px;
          margin: 0;
          padding: 0;
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                      url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          backdrop-filter: blur(5px);
          text-align: center;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(255, 107, 53, 0.2) 0%,
            rgba(255, 140, 66, 0.2) 50%,
            rgba(255, 165, 0, 0.2) 100%);
          animation: gradientShift 15s ease infinite;
          pointer-events: none;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          color: white;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
          margin-bottom: 20px;
          animation: fadeInUp 1s ease-out;
          position: relative;
          z-index: 1;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 300;
          animation: fadeInUp 1s ease-out 0.2s both;
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          padding: 0 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          padding: 60px 20px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .service-card {
          background: rgba(255, 226, 185, 0.95);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 20px 40px rgba(255, 107, 53, 0.1);
          border: 1px solid rgba(255, 107, 53, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.8s ease both;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.1), transparent);
          transition: left 0.5s;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px rgba(255, 107, 53, 0.2);
          border-color: rgba(255, 107, 53, 0.3);
        }

        .service-header {
          display: flex;
          align-items: flex-start;
          margin-bottom: 25px;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .service-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
          font-size: 24px;
          color: white;
          box-shadow: 0 10px 20px rgba(255, 184, 53, 0.3);
          animation: pulse 2s infinite;
          flex-shrink: 0;
          background: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
        }

        .service-icon:hover {
          transform: scale(1.1);
          box-shadow: 0 15px 30px rgba(255, 184, 53, 0.4);
        }

        .service-title-container {
          flex-grow: 1;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
        }

        .service-description {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.4;
          margin: 0;
        }

        .service-badge {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          margin-left: 12px;
          box-shadow: 0 2px 8px rgba(255, 184, 53, 0.2);
        }

        .service-badge i {
          margin-right: 6px;
          font-size: 0.9rem;
          color: white;
        }

        .main-dropdown-btn {
          width: 100%;
          background: linear-gradient(135deg,rgb(255, 184, 53) 0%, #ff8c42 100%);
          color: white;
          border: none;
          border-radius: 15px;
          padding: 15px 20px;
          font-size: 1.1rem;
          font-weight: 500;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .main-dropdown-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(251, 162, 59, 0.2), transparent);
          transition: left 0.5s;
        }

        .main-dropdown-btn:hover::before {
          left: 100%;
        }

        .main-dropdown-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 107, 53, 0.4);
        }

        .bg-primary { background: var(--primary-gradient); }
        .bg-secondary { background: var(--secondary-gradient); }
        .bg-success { background: var(--success-gradient); }
        .bg-warning { background: var(--warning-gradient); }
        .bg-info { background: var(--info-gradient); }
        .bg-dark { background: var(--dark-gradient); }

        .particle {
          position: fixed;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #ff6b35, #ff8c42);
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.8;
          z-index: -1;
          bottom: -10px;
          box-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
        }

        .particle-animate {
          animation: float-up linear forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 10px 20px rgba(255, 184, 53, 0.3);
          }
          50% {
            box-shadow: 0 15px 30px rgba(255, 184, 53, 0.5);
          }
          100% {
            box-shadow: 0 10px 20px rgba(255, 184, 53, 0.3);
          }
        }

        @keyframes float-up {
          to {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }

        @keyframes backgroundShift {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(20px) translateY(-20px);
          }
          50% {
            transform: translateX(-20px) translateY(20px);
          }
          75% {
            transform: translateX(20px) translateY(20px);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(10px) translateY(10px);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 50vh;
            min-height: 350px;
          }
          
          .hero-title {
            font-size: 2.5rem;
            letter-spacing: 1px;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
            padding: 0 30px;
          }
          
          .service-card {
            padding: 20px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 40px 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="app-container">
        {/* Floating Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle particle-animate"
            style={{
              left: `${particle.left}px`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}

        {/* Hero Section - Full Width */}
        <div className="hero-section">
          <h1 className="hero-title">Premium Service Categories</h1>
          <p className="hero-subtitle">Discover Our Exclusive Travel, Event & Hospitality Services</p>
        </div>

        {/* Main Content */}
        <div className="services-grid">
          {serviceData.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate(`/service/${index}`);
  };
  
  return (
    <div className="service-card" style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="service-header">
        <div className={`service-icon ${service.bgClass}`}> <i className={service.icon}></i> </div>
        <div className="service-title-container">
          <h3 className="service-title">
            {service.title}
            <span className="service-badge">
              <i className="fas fa-star"></i>
              {service.badge}
            </span>
          </h3>
          <p className="service-description">{service.description}</p>
        </div>
      </div>
      <div style={{ marginTop: 24, textAlign: 'center' }}>
        <button
          className="main-dropdown-btn"
          style={{ width: 'auto', minWidth: 160, padding: '12px 32px', fontWeight: 600, fontSize: '1rem' }}
          onClick={handleViewMore}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default PremiumServiceCategories;