// import React from 'react'

// function Banner() {
//   return (
//     <div>
//       <div className="row">
//         <div className="col-5">
//             {/* <img src="https://th.bing.com/th/id/OIP.nUjJwtXWDscqCzTT6Rh3oQHaE8?rs=1&pid=ImgDetMain" width={'750px'} height={"499px"}  alt="banner1" /> */}
//             <h1>PERFECT YOUR DREAM VACATION</h1>

//             <p>Perched on</p>
//             <div id="carouselExampleDark" class="carousel carousel-dark slide">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active" data-bs-interval="10000">
//       <img src="..." class="d-block w-100" alt="...">
//       <div class="carousel-caption d-none d-md-block">
//         <h5>First slide label</h5>
//         <p>Some representative placeholder content for the first slide.</p>
//       </div>
//     </div>
//     <div class="carousel-item" data-bs-interval="2000">
//       <img src="..." class="d-block w-100" alt="...">
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Second slide label</h5>
//         <p>Some representative placeholder content for the second slide.</p>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="...">
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Third slide label</h5>
//         <p>Some representative placeholder content for the third slide.</p>
//       </div>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
            
//         </div>
//         <div className="col-5">
//             <img style={{marginLeft: '260px'}} src="https://media.cntraveler.com/photos/58e3c109dfba867684551721/master/pass/tips-Eric-Rubens-1.jpg" height={'300px'} width={'400px'} alt="" />
//             <img style={{marginLeft: '260px'}} src="https://th.bing.com/th/id/OIP.Sx6jlOnmD_J042KZObkqNAHaFj?pid=ImgDet&w=474&h=355&rs=1" alt=""  height={'199px'} width={'400px'} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Banner


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

  const styles = {
    heroContainer: {
      position: 'relative',
      width: '100%',
      height: '98vh',
      overflow: 'hidden',
      background: '#000'
    },
    heroGrid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gridTemplateRows: '1fr',
      height: '100vh',
      gap: 0
    },
    mainHero: {
      position: 'relative',
      background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('${slides[currentSlide].image}') center/cover`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '4rem',
      overflow: 'hidden',
      transition: 'background-image 0.8s ease-in-out'
    },
    heroText: {
      maxWidth: '600px',
      animation: 'fadeInUp 1.2s ease-out',
      color: 'white'
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      fontWeight: 900,
      lineHeight: 0.9,
      marginBottom: '1.5rem',
      textTransform: 'uppercase',
      letterSpacing: '-2px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
    },
    heroSubtitle: {
      fontSize: '1.1rem',
      marginBottom: '2rem',
      opacity: 0.9,
      lineHeight: 1.6
    },
    priceTag: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      padding: '1rem 2rem',
      borderRadius: '50px',
      display: 'inline-block',
      border: '1px solid rgba(255,255,255,0.2)'
    },
    priceLabel: {
      fontSize: '1.2rem',
      marginBottom: '0.5rem',
      fontStyle: 'italic',
      color: '#ffd700',
      margin: 0
    },
    price: {
      fontSize: '2.5rem',
      fontWeight: 900,
      color: 'white',
      margin: 0
    },
    sideImages: {
      display: 'grid',
      gridTemplateRows: '1fr 1fr',
      gap: 0
    },
    sideImage: {
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 0.3s ease'
    },
    sideImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    imageOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      padding: '2rem 1.5rem 1.5rem',
      color: 'white'
    },
    overlayTag: {
      background: 'rgba(255,255,255,0.9)',
      color: '#333',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      display: 'inline-block',
      marginBottom: '0.5rem'
    },
    overlayTitle: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      margin: 0,
      textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
    },
    navigationArrows: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)',
      color: 'white',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1.2rem'
    },
    navLeft: {
      left: '2rem'
    },
    navRight: {
      right: '2rem'
    },
    indicators: {
      position: 'absolute',
      bottom: '2rem',
      left: '4rem',
      display: 'flex',
      gap: '0.5rem',
      zIndex: 10
    },
    indicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      border: '2px solid white',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    indicatorActive: {
      background: 'white'
    },
    mobileGrid: {
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gridTemplateRows: '2fr 1fr'
      }
    }
  };

  return (
    <div style={styles.heroContainer}>
      <div style={styles.heroGrid}>
        {/* Main Hero Section */}
        <div style={styles.mainHero}>
          <div 
            style={{...styles.navigationArrows, ...styles.navLeft}}
            onClick={prevSlide}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ‹
          </div>
          
          <div 
            style={{...styles.navigationArrows, ...styles.navRight}}
            onClick={nextSlide}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ›
          </div>
          
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              {slides[currentSlide].title}
            </h1>
            <p style={styles.heroSubtitle}>
              {slides[currentSlide].subtitle}
            </p>
            <div style={styles.priceTag}>
              <h3 style={styles.priceLabel}>{slides[currentSlide].location} from</h3>
              <div style={styles.price}>{slides[currentSlide].price}</div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div style={styles.indicators}>
            {slides.map((_, index) => (
              <div
                key={index}
                style={{
                  ...styles.indicator,
                  ...(index === currentSlide ? styles.indicatorActive : {})
                }}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Side Images */}
        <div style={styles.sideImages}>
          <div 
            style={styles.sideImage}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80" 
              alt="Llamas in Peru"
              style={styles.sideImageImg}
            />
            <div style={styles.imageOverlay}>
              <div style={styles.overlayTag}>SIT BACK AND RELAX</div>
              <h3 style={styles.overlayTitle}>THIS IS PERU</h3>
            </div>
          </div>
          
          <div 
            style={styles.sideImage}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Colonial Architecture"
              style={styles.sideImageImg}
            />
            <div style={styles.imageOverlay}>
              <div style={styles.overlayTag}>COURTYARD OF THE CONVENTO</div>
              <h3 style={styles.overlayTitle}>SANTO DOMINGO IN LIMA</h3>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: 2fr 1fr !important;
          }
          
          .side-images {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Banner;




// import React from 'react';

// function Banner() {
//   return (
//     <div style={{
//       width: '100%',
//       overflow: 'hidden',
//       border: '1px solid gray',
//       backgroundColor: '#fffbe6',
//       height: '50px',
//       display: 'flex',
//       alignItems: 'center'
//     }}>
//       <div style={{
//         whiteSpace: 'nowrap',
//         display: 'inline-block',
//         animation: 'scroll-once 8s linear forwards'
//       }}>
//         🌍 Explore the world with us — Best travel tips, destinations, and deals!
//       </div>

//       <style>
//         {`
//           @keyframes scroll-once {
//             0% {
//               transform: translateX(100%);
//             }
//             100% {
//               transform: translateX(0%);
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Banner;

