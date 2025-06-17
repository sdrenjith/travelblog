import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BookingDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const activityData = location.state?.activityData;

  if (!activityData) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        padding: '20px'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '40px',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            color: 'white', 
            fontSize: '2rem',
            marginBottom: '20px'
          }}>
            Activity not found
          </h1>
          <button 
            onClick={() => navigate('/stay')}
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            <i className="fas fa-arrow-left"></i>
            Back to Activities
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f9fa',
      padding: '100px 0',
      backgroundImage: `url(${activityData.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'left center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      position: 'relative',
      width: '100vw',
      boxSizing: 'border-box',
      overflowX: 'hidden',
    }}>
      {/* Blurred overlay for left side */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '50vw',
        height: '100%',
        background: `url(${activityData.image}) left center/cover no-repeat`,
        filter: 'blur(18px) brightness(0.8)',
        opacity: 0.5,
        zIndex: 0,
      }} />
      {/* White overlay for content readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(255, 255, 255, 0.85)',
        zIndex: 1,
      }} />
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        position: 'relative',
        zIndex: 2,
        background: 'transparent',
        boxSizing: 'border-box',
      }}>
        {/* Image Section */}
        <div style={{
          flex: '1 1 350px',
          minWidth: '320px',
          maxWidth: '500px',
          borderRadius: '20px',
          overflow: 'hidden',
          height: '400px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img 
            src={activityData.image} 
            alt={activityData.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '10px 20px',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <i className="fas fa-star" style={{ color: '#ffd700' }}></i>
            <span style={{ fontWeight: 'bold', color: '#333' }}>{activityData.rating}</span>
          </div>
        </div>

        {/* Details Section */}
        <div style={{
          flex: '2 1 400px',
          minWidth: '320px',
          background: '#fff',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}>
          <div>
            <h1 style={{
              fontSize: '2.2rem',
              color: '#333',
              marginBottom: '10px',
              wordBreak: 'break-word',
            }}>
              {activityData.name}
            </h1>
            <p style={{
              color: '#666',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              wordBreak: 'break-word',
            }}>
              {activityData.description || 'Experience this amazing activity with professional guidance and safety measures.'}
            </p>
          </div>

          {/* Activity Details */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            padding: '30px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)',
          }}>
            <h2 style={{
              fontSize: '1.4rem',
              color: '#333',
              marginBottom: '20px',
            }}>
              Activity Details
            </h2>
            <div style={{
              display: 'grid',
              gap: '15px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '15px',
                background: 'rgba(255, 255, 255, 0.5)',
                borderRadius: '10px',
                border: '1px solid rgba(0, 0, 0, 0.07)',
              }}>
                <i className="fas fa-clock" style={{ color: '#ff6b6b', fontSize: '1.2rem' }}></i>
                <div>
                  <h3 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '5px' }}>Duration</h3>
                  <p style={{ color: '#666' }}>2-3 hours</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '15px',
                background: 'rgba(255, 255, 255, 0.5)',
                borderRadius: '10px',
                border: '1px solid rgba(0, 0, 0, 0.07)',
              }}>
                <i className="fas fa-users" style={{ color: '#ff6b6b', fontSize: '1.2rem' }}></i>
                <div>
                  <h3 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '5px' }}>Group Size</h3>
                  <p style={{ color: '#666' }}>2-10 people</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '15px',
                background: 'rgba(255, 255, 255, 0.5)',
                borderRadius: '10px',
                border: '1px solid rgba(0, 0, 0, 0.07)',
              }}>
                <i className="fas fa-shield-alt" style={{ color: '#ff6b6b', fontSize: '1.2rem' }}></i>
                <div>
                  <h3 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '5px' }}>Safety</h3>
                  <p style={{ color: '#666' }}>Professional guides and safety equipment provided</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Button */}
          <button 
            onClick={() => navigate('/booking')}
            style={{
              padding: '15px 30px',
              background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 4px 15px rgba(255, 107, 107, 0.15)',
              transition: 'all 0.3s ease',
            }}
          >
            <i className="fas fa-calendar-check"></i>
            Book This Activity
          </button>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .booking-details-flex {
            flex-direction: column !important;
            gap: 24px !important;
          }
          .booking-details-blur {
            width: 100vw !important;
            height: 300px !important;
            top: 0 !important;
            left: 0 !important;
            filter: blur(10px) brightness(0.8) !important;
          }
        }
        @media (max-width: 600px) {
          .booking-details-content {
            padding: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default BookingDetails; 