import React, { useState, useEffect } from 'react';
import { ChevronLeft, Calendar, Clock, MapPin, Star, Users, Camera, Utensils } from 'lucide-react';

const serviceData = [
  {
    title: "2 Days 3 Nights Adventure",
    subtitle: "Discover the perfect getaway experience",
    rating: 4.8,
    reviews: 234,
    price: "$299",
    image: "🏔️",
    category: "Adventure Tour",
    days: [
      {
        name: "Day 1",
        icon: "🌅",
        summary: "Arrival and city tour",
        details: {
          "Morning (9:00 AM)": "Arrival at hotel, check-in and welcome drinks with city overview briefing",
          "Afternoon (2:00 PM)": "Guided city sightseeing tour covering major landmarks and photo stops",
          "Evening (6:00 PM)": "Welcome dinner at authentic local restaurant with live music",
          "Night (9:00 PM)": "Rest at luxury hotel with spa facilities"
        }
      },
      {
        name: "Day 2",
        icon: "🏄‍♂️",
        summary: "Adventure activities",
        details: {
          "Morning (8:00 AM)": "Hearty breakfast followed by thrilling adventure park visit",
          "Afternoon (1:00 PM)": "Water sports and pristine beach activities with equipment included",
          "Evening (5:00 PM)": "Shopping spree and vibrant local market exploration",
          "Night (8:00 PM)": "Cultural show and traditional dinner with folk performances"
        }
      },
      {
        name: "Day 3",
        icon: "🏛️",
        summary: "Cultural experience and departure",
        details: {
          "Morning (9:00 AM)": "Visit to UNESCO World Heritage historical monuments",
          "Afternoon (1:00 PM)": "Immersive cultural show and royal traditional lunch",
          "Evening (4:00 PM)": "Farewell ceremony with gifts and airport departure transfer"
        }
      }
    ]
  },
  {
    title: "3 Days 4 Nights Culinary Journey",
    subtitle: "Taste the world's finest breakfast experiences",
    rating: 4.9,
    reviews: 156,
    price: "$399",
    image: "🍳",
    category: "Food Experience",
    days: [
      {
        name: "Continental",
        icon: "🥐",
        summary: "European style breakfast",
        details: {
          "Bread & Pastries": "Fresh croissants, artisan muffins, sourdough toast with premium butter",
          "Beverages": "Barista coffee, premium teas, fresh-squeezed juices from local fruits",
          "Fruits": "Seasonal organic fruit selection with exotic varieties",
          "Extras": "Imported butter, homemade jams, wildflower honey, local cheese"
        }
      },
      {
        name: "Indian",
        icon: "🫓",
        summary: "Traditional Indian breakfast",
        details: {
          "Main Items": "Fluffy idli, crispy dosa, aromatic upma, spiced poha with garnish",
          "Accompaniments": "Rich sambar, coconut chutney, mint chutney, tomato chutney",
          "Beverages": "Authentic masala chai, South Indian filter coffee, lassi varieties",
          "Sweets": "Fresh jalebi, warm gulab jamun, regional specialties"
        }
      },
      {
        name: "American",
        icon: "🥞",
        summary: "Classic American breakfast",
        details: {
          "Main Course": "Fluffy pancakes, Belgian waffles, eggs benedict with hollandaise",
          "Sides": "Crispy bacon, breakfast sausages, golden hash browns, fresh avocado",
          "Beverages": "Fresh orange juice, premium coffee, organic milk varieties",
          "Extras": "Pure maple syrup, mixed berries, whipped cream, nuts"
        }
      }
    ]
  }
];

const ServiceDetails = () => {
  const [selectedIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const service = serviceData[selectedIndex];

  useEffect(() => {
    // Bootstrap CSS
    const bootstrapLink = document.createElement('link');
    bootstrapLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css';
    bootstrapLink.rel = 'stylesheet';
    document.head.appendChild(bootstrapLink);

    // Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Font Awesome
    const faLink = document.createElement('link');
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    faLink.rel = 'stylesheet';
    document.head.appendChild(faLink);

    setIsVisible(true);

    return () => {
      document.head.removeChild(bootstrapLink);
      document.head.removeChild(fontLink);
      document.head.removeChild(faLink);
    };
  }, []);

  if (!service) return <div className="d-flex align-items-center justify-content-center min-vh-100 text-muted">Service not found.</div>;

  const styles = {
    body: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    },
    animatedBg: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: 'linear-gradient(45deg, #ff9a9e 0%, #fecfef 25%, #fecfef 50%, #f093fb 75%, #f5576c 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite'
    },
    floatingElement: {
      position: 'absolute',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3))',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)'
    },
    glassmorphism: {
      background: 'rgba(255, 255, 255, 0.25)',
      backdropFilter: 'blur(15px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '20px',
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)'
    },
    gradientBtn: {
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
      border: 'none',
      borderRadius: '25px',
      padding: '12px 30px',
      color: 'white',
      fontWeight: '600',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
    },
    cardHover: {
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    pulseAnimation: {
      animation: 'pulse 2s infinite'
    },
    fadeInUp: {
      animation: 'fadeInUp 1s ease-out'
    }
  };

  const keyframes = `
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.7; }
      50% { transform: scale(1.05); opacity: 1; }
      100% { transform: scale(1); opacity: 0.7; }
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    .floating-1 { animation: float 6s ease-in-out infinite; }
    .floating-2 { animation: float 8s ease-in-out infinite reverse; }
    .floating-3 { animation: float 7s ease-in-out infinite; }
    .floating-4 { animation: float 9s ease-in-out infinite reverse; }
    
    .card-hover:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    
    .btn-gradient:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    }
    
    .service-card {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
    }
    
    .day-button {
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .day-button:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    
    .day-button.active {
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
    }
    
    .detail-card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
    }
    
    .detail-card:hover {
      background: rgba(255, 255, 255, 0.95);
      transform: translateX(10px);
    }
  `;

  return (
    <div >
      <div style={styles.body}>
      <style>{keyframes}</style>
      
      {/* Animated Background */}
      <div style={styles.animatedBg}></div>
      
      {/* Floating Elements */}
      <div style={{...styles.floatingElement, width: '100px', height: '100px', top: '10%', left: '5%'}} className="floating-1"></div>
      <div style={{...styles.floatingElement, width: '150px', height: '150px', top: '60%', right: '10%'}} className="floating-2"></div>
      <div style={{...styles.floatingElement, width: '80px', height: '80px', top: '30%', right: '20%'}} className="floating-3"></div>
      <div style={{...styles.floatingElement, width: '120px', height: '120px', bottom: '20%', left: '15%'}} className="floating-4"></div>

      <div className={`container-fluid ${isVisible ? 'fade-in-up' : ''}`} style={styles.fadeInUp}>
        {/* Header */}
        <nav className="navbar navbar-expand-lg" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(15px)'}}>
          <div className="container">
            <button className="btn btn-link text-white text-decoration-none d-flex align-items-center">
              <ChevronLeft className="me-2" size={20} />
              <span className="fw-semibold">Back to Services</span>
            </button>
          </div>
        </nav>

       
          {/* Service Header Card */}
          <div className="row justify-content-center mb-5">
            <div className="col-12">
              <div 
                className="card service-card border-0 rounded-4 p-4 card-hover"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/30188165/pexels-photo-30188165/free-photo-of-colorful-boat-on-crystal-clear-waters-in-port-blair.jpeg?auto=compress&cs=tinysrgb&w=800')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Overlay for readability */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(255,255,255,0.7)',
                  zIndex: 1,
                  borderRadius: 'inherit',
                }} />
                <div className="card-body" style={{ position: 'relative', zIndex: 2 }}>
                   <div className="d-flex flex-column align-items-center text-center gap-3">
                    <div style={{fontSize: '5rem'}}>{service.image}</div>
                    <span className="badge rounded-pill px-3 py-2 mb-2" style={{background: 'linear-gradient(45deg, #667eea, #764ba2)', fontSize: '0.8rem'}}>
                      {service.category}
                    </span>
                    <div className="d-flex align-items-center justify-content-center mb-2 gap-2">
                      <Star className="text-warning" size={16} fill="currentColor" />
                      <span className="fw-bold text-dark">{service.rating}</span>
                      <span className="text-muted">({service.reviews} reviews)</span>
                    </div>
                    <h1 className="display-5 fw-bold text-dark mb-2">{service.title}</h1>
                    <p className="lead text-muted mb-3">{service.subtitle}</p>
                    <div className="d-flex flex-wrap gap-4 justify-content-center text-muted mb-3">
                      <div className="d-flex align-items-center">
                        <Clock className="me-2" size={18} />
                        <span>Multi-day experience</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <Users className="me-2" size={18} />
                        <span>All group sizes</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <MapPin className="me-2" size={18} />
                        <span>Premium locations</span>
                      </div>
                    </div>
                    <div className="display-4 fw-bold text-dark mb-2">{service.price}</div>
                    <div className="text-muted mb-3">per person</div>
                    <button className="btn btn-gradient fw-semibold px-4 py-2" style={styles.gradientBtn}>
                      <i className="fas fa-calendar-check me-2"></i>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Day Selection */}
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="d-flex align-items-center mb-4">
                <Calendar className="me-3 text-white" size={28} />
                <h2 className="display-6 fw-bold text-white mb-0">Choose Your Experience</h2>
              </div>
              
              <div className="row g-4 mb-5">
                {service.days.map((day, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
                    <div 
                      className={`card day-button border-0 rounded-3 p-4 text-center ${selectedDay === i ? 'active' : ''}`}
                      style={{
                        background: selectedDay === i ? 'linear-gradient(45deg, #667eea, #764ba2)' : 'rgba(255, 255, 255, 0.9)',
                        color: selectedDay === i ? 'white' : '#333',
                        cursor: 'pointer',
                        backdropFilter: 'blur(15px)'
                      }}
                      onClick={() => setSelectedDay(i)}
                    >
                      <div className="card-body">
                        <div style={{fontSize: '2.5rem'}} className="mb-3">{day.icon}</div>
                        <h5 className="card-title fw-bold mb-2">{day.name}</h5>
                        <p className="card-text">{day.summary}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected Day Details */}
              <div className="card service-card border-0 rounded-4 p-4">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div style={{fontSize: '3rem'}} className="me-3">{service.days[selectedDay].icon}</div>
                    <div>
                      <h3 className="fw-bold text-dark mb-1">{service.days[selectedDay].name}</h3>
                      <p className="text-muted mb-0">{service.days[selectedDay].summary}</p>
                    </div>
                  </div>

                  <div className="row g-4">
                    {Object.entries(service.days[selectedDay].details).map(([timeSlot, activity], idx) => (
                      <div key={idx} className="col-12">
                        <div className="detail-card rounded-3 p-4 border-0">
                          <div className="d-flex align-items-start">
                            <div className="me-3 mt-2">
                              <div style={{
                                width: '12px',
                                height: '12px',
                                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                borderRadius: '50%'
                              }}></div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="fw-semibold text-dark mb-2 d-flex align-items-center">
                                <Clock className="me-2 text-primary" size={16} />
                                {timeSlot}
                              </h6>
                              <p className="text-muted mb-0 lh-lg">{activity}</p>
                            </div>
                            <div className="text-muted">
                              <Camera size={20} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <div className="text-center mt-5">
                    <button className="btn btn-gradient fw-semibold px-5 py-3 me-3" style={styles.gradientBtn}>
                      <Utensils className="me-2" size={20} />
                      Reserve This Experience
                    </button>
                    <p className="text-muted mt-3 small">
                      <i className="fas fa-shield-alt me-2"></i>
                      Free cancellation up to 24 hours before
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
    </div>
  );
};

export default ServiceDetails;