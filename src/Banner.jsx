import React, { useState, useEffect } from 'react';

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      title: "INSPIRING, BEAUTIFUL, BREATHTAKING",
      subtitle: "Many people visit Peru to see the impressive Inca ruins of Machu Picchu, which are deservedly a stand-alone destination.",
      location: "Machu Picchu",
      price: "$1200"
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      title: "EXPLORE ANCIENT WONDERS",
      subtitle: "Discover the mystical beauty of Peru's archaeological treasures and breathtaking landscapes.",
      location: "Sacred Valley",
      price: "$950"
    },
    {
      image: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
      title: "AUTHENTIC CULTURAL EXPERIENCE",
      subtitle: "Immerse yourself in the rich culture and traditions of Peru's highland communities.",
      location: "Cusco Region",
      price: "$800"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-grid">
        {/* Main Hero Section */}
        <div 
          className="main-hero"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('${slides[currentSlide].image}')`
          }}
        >
          <button 
            className="nav-arrow nav-left"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>
          
          <button 
            className="nav-arrow nav-right"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
          
          <div className="hero-text">
            <h1 className="hero-title">
              {slides[currentSlide].title}
            </h1>
            <p className="hero-subtitle">
              {slides[currentSlide].subtitle}
            </p>
            <div className="price-tag">
              <h3 className="price-label">{slides[currentSlide].location} from</h3>
              <div className="price">{slides[currentSlide].price}</div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Side Images */}
        <div className="side-images">
          <div className="side-image">
            <img 
              src="https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80" 
              alt="Llamas in Peru"
            />
            <div className="image-overlay">
              <div className="overlay-tag">SIT BACK AND RELAX</div>
              <h3 className="overlay-title">THIS IS PERU</h3>
            </div>
          </div>
          
          <div className="side-image">
            <img 
              src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Colonial Architecture"
            />
            <div className="image-overlay">
              <div className="overlay-tag">COURTYARD OF THE CONVENTO</div>
              <h3 className="overlay-title">SANTO DOMINGO IN LIMA</h3>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-container {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
          background: #000;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          height: 100%;
          gap: 0;
        }

        .main-hero {
          position: relative;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 4rem;
          overflow: hidden;
          transition: background-image 0.8s ease-in-out;
        }

        .hero-text {
          max-width: 600px;
          animation: fadeInUp 1.2s ease-out;
          color: white;
          z-index: 2;
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 4.5rem);
          font-weight: 900;
          line-height: 0.9;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: -2px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.1rem);
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .price-tag {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          border-radius: 50px;
          display: inline-block;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .price-label {
          font-size: clamp(1rem, 2vw, 1.2rem);
          margin-bottom: 0.5rem;
          font-style: italic;
          color: #ffd700;
          margin: 0;
        }

        .price {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 900;
          color: white;
          margin: 0;
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }

        .nav-arrow:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-left {
          left: 2rem;
        }

        .nav-right {
          right: 2rem;
        }

        .indicators {
          position: absolute;
          bottom: 2rem;
          left: 4rem;
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid white;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: white;
        }

        .side-images {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 0;
        }

        .side-image {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .side-image:hover {
          transform: scale(1.02);
        }

        .side-image:hover img {
          transform: scale(1.1);
        }

        .side-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          padding: 2rem 1.5rem 1.5rem;
          color: white;
        }

        .overlay-tag {
          background: rgba(255,255,255,0.9);
          color: #333;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .overlay-title {
          font-size: 1.1rem;
          font-weight: bold;
          margin: 0;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .main-hero {
            padding: 3rem 2rem;
          }

          .hero-title {
            font-size: clamp(1.8rem, 4vw, 3rem);
          }

          .nav-arrow {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }

          .nav-left {
            left: 1rem;
          }

          .nav-right {
            right: 1rem;
          }

          .indicators {
            left: 2rem;
            bottom: 1.5rem;
          }

          .overlay-tag {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }

          .overlay-title {
            font-size: 1rem;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .hero-container {
            height: 100vh;
            min-height: 500px;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            grid-template-rows: 2fr 1fr;
          }

          .main-hero {
            padding: 2rem 1.5rem;
            min-height: 60vh;
          }

          .hero-text {
            max-width: 100%;
          }

          .hero-title {
            font-size: clamp(1.5rem, 6vw, 2.5rem);
            margin-bottom: 1rem;
          }

          .hero-subtitle {
            font-size: clamp(0.9rem, 3vw, 1rem);
            margin-bottom: 1.5rem;
          }

          .price-tag {
            padding: 0.8rem 1.5rem;
          }

          .price-label {
            font-size: clamp(0.9rem, 3vw, 1rem);
          }

          .price {
            font-size: clamp(1.5rem, 5vw, 2rem);
          }

          .nav-arrow {
            width: 35px;
            height: 35px;
            font-size: 0.9rem;
          }

          .nav-left {
            left: 0.5rem;
          }

          .nav-right {
            right: 0.5rem;
          }

          .indicators {
            left: 1.5rem;
            bottom: 1rem;
          }

          .indicator {
            width: 10px;
            height: 10px;
          }

          .side-images {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            height: 40vh;
            min-height: 200px;
          }

          .image-overlay {
            padding: 1rem 1rem 1rem;
          }

          .overlay-tag {
            font-size: 0.7rem;
            padding: 0.3rem 0.6rem;
          }

          .overlay-title {
            font-size: 0.9rem;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .main-hero {
            padding: 1.5rem 1rem;
          }

          .hero-title {
            font-size: clamp(1.2rem, 7vw, 2rem);
            line-height: 1;
          }

          .hero-subtitle {
            font-size: clamp(0.8rem, 4vw, 0.9rem);
            margin-bottom: 1rem;
          }

          .price-tag {
            padding: 0.6rem 1rem;
          }

          .nav-arrow {
            width: 30px;
            height: 30px;
            font-size: 0.8rem;
          }

          .indicators {
            left: 1rem;
            bottom: 0.5rem;
          }

          .indicator {
            width: 8px;
            height: 8px;
          }

          .side-images {
            height: 30vh;
            min-height: 150px;
          }

          .image-overlay {
            padding: 0.8rem 0.8rem 0.8rem;
          }

          .overlay-tag {
            font-size: 0.6rem;
            padding: 0.2rem 0.5rem;
          }

          .overlay-title {
            font-size: 0.8rem;
          }
        }

        /* Landscape Mobile */
        @media (max-width: 768px) and (orientation: landscape) {
          .hero-container {
            height: 100vh;
          }

          .hero-grid {
            grid-template-columns: 1.5fr 1fr;
            grid-template-rows: 1fr;
          }

          .main-hero {
            min-height: auto;
            padding: 1.5rem;
          }

          .side-images {
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr;
            height: auto;
          }
        }

        /* Very Small Screens */
        @media (max-width: 360px) {
          .hero-title {
            font-size: 1.2rem;
          }

          .hero-subtitle {
            font-size: 0.8rem;
            line-height: 1.4;
          }

          .price {
            font-size: 1.3rem;
          }

          .price-label {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Banner;