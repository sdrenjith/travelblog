import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ServiceDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const serviceData = location.state?.serviceData;

  // Add responsive styles
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #fcb69f 100%)',
      padding: '100px',
      position: 'relative',
      overflow: 'hidden',
      marginTop: '20px'
    },
    backgroundImage: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80), url(https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=1200&q=80)',
      backgroundSize: 'cover, 600px',
      backgroundPosition: 'center, right bottom',
      backgroundRepeat: 'no-repeat',
      opacity: 0.18,
      pointerEvents: 'none',
      filter: 'blur(0.5px)',
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg,rgba(255,255,255,0.92) 0%,rgba(255,255,255,0.92) 100%)',
      zIndex: 1,
      pointerEvents: 'none',
    },
    contentWrapper: {
      maxWidth: '900px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      position: 'relative',
      zIndex: 2,
      width: '100%',
    },
    sidebar: {
      background: 'rgba(255, 255, 255, 0.85)',
      borderRadius: '24px',
      padding: '36px 28px',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
      height: 'fit-content',
      position: 'sticky',
      top: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        position: 'relative',
        top: 0,
        padding: '20px'
      }
    },
    bannerImg: {
      width: '100%',
      maxWidth: '180px',
      borderRadius: '18px',
      marginBottom: '18px',
      boxShadow: '0 4px 16px rgba(255, 179, 71, 0.13)',
      objectFit: 'cover',
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
      '@media (max-width: 1024px)': {
        maxWidth: '100%',
      },
      '@media (max-width: 768px)': {
        gap: '20px',
        maxWidth: '100%',
      }
    },
    section: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '22px',
      padding: '32px',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
      '@media (max-width: 768px)': {
        padding: '20px'
      }
    },
    packageGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '30px',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '20px'
      }
    },
    dayCard: {
      background: 'rgba(255, 255, 255, 0.85)',
      borderRadius: '16px',
      padding: '25px',
      border: '1.5px solid #ffe0b2',
      boxShadow: '0 4px 16px rgba(255, 179, 71, 0.09)',
      '@media (max-width: 768px)': {
        padding: '15px'
      },
      transition: 'box-shadow 0.2s',
      ':hover': {
        boxShadow: '0 8px 32px 0 rgba(255, 179, 71, 0.18)',
      }
    },
    timeSlot: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      padding: '12px',
      background: 'rgba(255, 236, 179, 0.25)',
      borderRadius: '10px',
      color: '#2d3748',
      '@media (max-width: 480px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '8px'
      }
    },
    button: {
      width: '100%',
      padding: '14px 28px',
      background: 'linear-gradient(135deg, #ffb347 0%, #ffcc80 100%)',
      color: '#fff',
      border: 'none',
      borderRadius: '30px',
      cursor: 'pointer',
      fontSize: '1.08rem',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      boxShadow: '0 4px 15px rgba(255, 179, 71, 0.18)',
      transition: 'all 0.3s ease',
      '@media (max-width: 480px)': {
        padding: '10px 20px',
        fontSize: '0.98rem'
      }
    },
    heading: {
      color: '#222',
      fontWeight: 700,
      fontSize: '2.1rem',
      marginBottom: '10px',
      letterSpacing: '0.01em',
    },
    subheading: {
      color: '#ff6b6b',
      fontWeight: 600,
      fontSize: '1.3rem',
      marginBottom: '8px',
      letterSpacing: '0.01em',
    },
    text: {
      color: '#2d3748',
      fontSize: '1.08rem',
      lineHeight: 1.7,
    },
    accent: {
      color: '#ffa726',
      fontWeight: 600,
    },
    decorativeLeft: {
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      width: '480px',
      height: '600px',
      zIndex: 1,
      pointerEvents: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    decorativeImg: {
      width: '100%',
      height: 'auto',
      opacity: 0.18,
      filter: 'blur(2px) saturate(1.1)',
      borderRadius: '40px',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
    },
    quote: {
      marginTop: '-40px',
      color: '#ffa726',
      fontWeight: 600,
      fontSize: '1.3rem',
      textAlign: 'center',
      textShadow: '0 2px 8px rgba(255, 179, 71, 0.13)',
      fontStyle: 'italic',
      letterSpacing: '0.01em',
      maxWidth: '400px',
    },
    sideCard: {
      width: '100%',
      background: 'rgba(255,255,255,0.97)',
      borderRadius: '22px',
      boxShadow: '0 8px 32px 0 rgba(255, 179, 71, 0.25), 0 2px 8px 0 rgba(31, 38, 135, 0.10)',
      padding: '32px 24px',
      marginTop: '32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '18px',
      border: '1.5px solid #ffe0b2',
    },
    sideCardIcon: {
      fontSize: '2.5rem',
      color: '#ffa726',
      marginBottom: '8px',
    },
    sideCardTitle: {
      color: '#222',
      fontWeight: 700,
      fontSize: '1.2rem',
      marginBottom: '6px',
      textAlign: 'center',
    },
    sideCardText: {
      color: '#666',
      fontSize: '1.05rem',
      textAlign: 'center',
      lineHeight: 1.6,
    },
    // Add animation and accent styles
    fadeIn: {
      animation: 'fade-in 1.2s cubic-bezier(.39,.575,.56,1) both',
    },
    fadeInDelayed: {
      animation: 'fade-in 1.7s cubic-bezier(.39,.575,.56,1) both',
      animationDelay: '0.3s',
    },
    cardHover: {
      transition: 'box-shadow 0.2s, transform 0.2s',
      ':hover': {
        boxShadow: '0 12px 32px 0 rgba(255, 179, 71, 0.22)',
        transform: 'scale(1.025)',
      }
    },
    gradientBar: {
      width: '100%',
      height: '8px',
      borderRadius: '8px',
      background: 'linear-gradient(90deg, #ffb347 0%, #ffcc80 100%)',
      margin: '32px 0',
      opacity: 0.7,
    },
  };

  if (!serviceData) {
    return (
      <div style={styles.container}>
        <div style={{
          ...styles.section,
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h1 style={{ 
            color: 'white', 
            fontSize: '2rem',
            marginBottom: '20px',
            '@media (max-width: 480px)': {
              fontSize: '1.5rem'
            }
          }}>
            Service not found
          </h1>
          <button 
            onClick={() => navigate('/details/1')}
            style={styles.button}
          >
            <i className="fas fa-arrow-left"></i>
            Back to Services
          </button>
        </div>
      </div>
    );
    }

  return (
    <div style={styles.container}>
      <div style={styles.backgroundImage}></div>
      <div style={styles.overlay}></div>
      {/* Decorative left-side image and quote */}
      <div style={styles.decorativeLeft}>
        <img
          src="https://cdn.pixabay.com/photo/2017/01/31/13/14/airplane-2029712_1280.png"
          alt="Travel Airplane Decorative"
          style={styles.decorativeImg}
        />
      </div>
      <div style={styles.contentWrapper}>
        {/* Sidebar */}
        <div style={{...styles.sidebar, ...styles.fadeIn}}>
          {/* Decorative Banner Image */}
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Travel Banner" style={styles.bannerImg} />
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #ffb347 0%, #ffcc80 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '32px',
            marginBottom: '20px',
            boxShadow: '0 10px 20px rgba(255, 179, 71, 0.18)',
            '@media (max-width: 768px)': {
              width: '60px',
              height: '60px',
              fontSize: '24px'
            }
          }}>
            <i className={serviceData.icon}></i>
          </div>
          <h1 style={styles.heading}>{serviceData.title}</h1>
          <div style={{
            background: 'rgba(255, 179, 71, 0.13)',
            padding: '8px 16px',
            borderRadius: '20px',
            display: 'inline-block',
            marginBottom: '20px',
            color: '#ffa726',
            fontWeight: 600,
          }}>
            <span>{serviceData.badge}</span>
          </div>
          <p style={styles.text}>{serviceData.description}</p>
          <button 
            onClick={() => navigate('/details/1')}
            style={styles.button}
          >
            <i className="fas fa-arrow-left"></i>
            Back to Services
          </button>
          {/* Side Info Card with Box Shadow - now inside sidebar */}
          <div style={{...styles.sideCard, ...styles.fadeInDelayed}}>
            <i className="fas fa-globe-asia" style={styles.sideCardIcon}></i>
            <div style={styles.sideCardTitle}>Travel Tip</div>
            <div style={styles.sideCardText}>
              Always keep digital and paper copies of your important documents when traveling abroad. Safe travels!
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Itinerary Section */}
          <div style={{...styles.section, ...styles.fadeIn, border: '2.5px solid #ffb347', boxShadow: '0 12px 32px 0 rgba(255, 179, 71, 0.13)'}}>
            <h2 style={{ 
              ...styles.heading,
              fontSize: '1.7rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'black',
            }}>
              <i className="fas fa-route" style={{ color: '#ffa726' }}></i>
              Itinerary Details
            </h2>
            <div style={styles.gradientBar}></div>
            <div style={{ 
              display: 'grid',
              gap: '20px'
            }}>
              {serviceData.days.map((day, index) => (
                <div key={index} style={{...styles.dayCard, ...styles.cardHover}}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '15px'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #ffb347 0%, #ffcc80 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      '@media (max-width: 480px)': {
                        width: '30px',
                        height: '30px',
                        fontSize: '1rem'
                      }
                    }}>
                      {index + 1}
                    </div>
                    <h3 style={{ 
                      ...styles.subheading,
                      margin: 0,
                      color: '#222',
                    }}>
                      {day.name}
                    </h3>
                  </div>
                  <p style={{ 
                    ...styles.text,
                    marginBottom: '20px',
                    fontStyle: 'italic',
                  }}>
                    {day.summary}
                  </p>
                  <div style={{
                    display: 'grid',
                    gap: '15px'
                  }}>
                    {Object.entries(day.details).map(([key, value]) => (
                      <div key={key} style={styles.timeSlot}>
                        <span style={{ 
                          color: '#ffa726',
                          minWidth: '100px',
                          fontWeight: 500
                        }}>
                          {key}
                        </span>
                        <span style={{ 
                          color: '#2d3748',
                          flex: 1
                        }}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative Accent Bar */}
          <div style={styles.gradientBar}></div>
          {/* Package Details Section */}
          <div style={styles.packageGrid}>
            {/* Includes */}
            {serviceData.includes && (
              <div style={{...styles.section, ...styles.fadeInDelayed}}>
                <h2 style={{ 
                  ...styles.subheading,
                  color: '#4CAF50',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}>
                  <i className="fas fa-check-circle" style={{ color: '#4CAF50' }}></i>
                  Package Includes
                </h2>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: '15px'
                }}>
                  {serviceData.includes.map((item, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '12px',
                      background: 'rgba(197, 225, 165, 0.18)',
                      borderRadius: '10px',
                      color: '#2d3748',
                      transition: 'box-shadow 0.2s, transform 0.2s',
                    }}>
                      <span style={{ 
                        color: '#4CAF50',
                        fontSize: '1.2rem'
                      }}>✔️</span>
                      <span style={{ 
                        color: '#2d3748',
                        fontWeight: 500,
                      }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Exclusions */}
            {serviceData.exclusions && (
              <div style={{...styles.section, ...styles.fadeInDelayed}}>
                <h2 style={{ 
                  ...styles.subheading,
                  color: '#f44336',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}>
                  <i className="fas fa-times-circle" style={{ color: '#f44336' }}></i>
                  Exclusions
                </h2>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: '15px'
                }}>
                  {serviceData.exclusions.map((item, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '12px',
                      background: 'rgba(255, 205, 210, 0.18)',
                      borderRadius: '10px',
                      color: '#2d3748',
                      transition: 'box-shadow 0.2s, transform 0.2s',
                    }}>
                      <span style={{ 
                        color: '#f44336',
                        fontSize: '1.2rem'
                      }}>❌</span>
                      <span style={{ 
                        color: '#2d3748',
                        fontWeight: 500,
                      }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetails;