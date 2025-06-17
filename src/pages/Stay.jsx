import React from 'react';
import { useNavigate } from 'react-router-dom';

function Stay() {
  const accommodations = [
    {
      id: 1,
      name: 'Scuba ',
      rating: 4.8,
      image:
        'https://images.pexels.com/photos/37530/divers-scuba-divers-diving-underwater-37530.jpeg',
      
    },
    {
      id: 2,
      name: 'Sea walk',
      
      price: 'From $500/night',
      rating: 4.9,
      image:
        'https://images.pexels.com/photos/2645245/pexels-photo-2645245.jpeg',
    },
    {
      id: 3,
      name: 'Semi submarine',
      rating: 4.6,
      image:
        'https://images.pexels.com/photos/12302978/pexels-photo-12302978.jpeg',
    },
    {
      id: 4,
      name: 'Kayaking',
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/2749500/pexels-photo-2749500.jpeg',
    },
     {
      id: 5,
      name: 'Rides',
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/749061/pexels-photo-749061.jpeg',
    },
     {
      id: 6,
      name: 'Jet ski',
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/33046/jet-ski-water-sport-water-bike-water.jpg',
    },
     {
      id: 7,
      name: 'Parasailing',
      
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/8413807/pexels-photo-8413807.jpeg',
    },
     
     {
      id: 8,
      name: 'Sea kart',
      rating: 4.7,
      image:
        'https://th.bing.com/th/id/OIP.iQHG9TI6JSvHFCHipQglAAHaHa?rs=1&pid=ImgDetMain',
    },
    
     
    
    
  ];


  const navigate = useNavigate();
  const handleBookNow = (activity) => {
    navigate('/booking-details', { state: { activityData: activity } });
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          height: '500px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        />
        <div style={{ position: 'relative', color: '#fff', textAlign: 'center' }}>
          <h1 className="display-3 fw-bold">Water Activities</h1>
          <p className="lead">Experience Thrilling Adventures in the Andaman Sea</p>
        </div>
      </section>

      {/* Accommodations Section */}
      <div className="container my-5">
        <div className="row">
          {accommodations.map((acc) => (
            <div key={acc.id} className="col-12 col-sm-6 col-md-3 mb-5">
              <div className="card h-100 shadow-lg">
                <div
                  style={{
                    height: '200px',
                    backgroundImage: `url(${acc.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="card-body">
                  {/* Rating and Location in Same Row */}
                  <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
                    {/* Name */}
                    <h5 className="mb-2" style={{ fontSize: '15px' }}>{acc.name}</h5>

                    {/* Rating */}
                    <div className="d-flex align-items-center">
                      <i className="fas fa-star text-warning me-1" />
                      <span>{acc.rating}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <button 
                    className="btn btn-warning text-white w-100" 
                    onClick={() => handleBookNow(acc)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container my-5">
        {/* First line: Heading alone */}
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 style={{fontWeight: "600", marginLeft: "350px"}}>Why Choose Us</h2>
          </div>
        </div>
        </div>

        {/* Second line: 3 columns side by side */}
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="fas fa-concierge-bell fa-3x text-warning mb-3" />
            <h4>Best Service</h4>
            <p className="text-muted">24/7 customer support and concierge service</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="fas fa-percent fa-3x text-warning mb-3" />
            <h4>Best Rates</h4>
            <p className="text-muted">We guarantee the best rates for our accommodations</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="fas fa-shield-alt fa-3x text-warning mb-3" />
            <h4>Secure Booking</h4>
            <p className="text-muted">Safe and secure payment process</p>
          </div>
        </div>

        
      
    </div>
  );
}

export default Stay;
