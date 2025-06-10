import React from 'react';
import { useNavigate } from 'react-router-dom';

function Stay() {
  const accommodations = [
    {
      id: 1,
      name: 'Luxury Mountain Resort',
      location: 'Swiss Alps',
      price: 'From $350/night',
      rating: 4.8,
      image:
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      amenities: ['Spa', 'Pool', 'Restaurant', 'Gym'],
    },
    {
      id: 2,
      name: 'Beachfront Villa',
      location: 'Maldives',
      price: 'From $500/night',
      rating: 4.9,
      image:
        'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      amenities: ['Private Beach', 'Pool', 'Butler Service', 'Water Sports'],
    },
    {
      id: 3,
      name: 'Historic City Hotel',
      location: 'Prague',
      price: 'From $200/night',
      rating: 4.6,
      image:
        'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      amenities: ['Restaurant', 'Bar', 'Concierge', 'City Tours'],
    },
    {
      id: 4,
      name: 'Desert Luxury Camp',
      location: 'Dubai',
      price: 'From $400/night',
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/2157194/pexels-photo-2157194.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Private Tent', 'Desert Safari', 'Traditional Dining', 'Stargazing'],
    },
     {
      id: 5,
      name: 'Desert Luxury Camp',
      location: 'Dubai',
      price: 'From $400/night',
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/3285725/pexels-photo-3285725.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Private Tent', 'Desert Safari', 'Traditional Dining', 'Stargazing'],
    },
     {
      id: 6,
      name: 'Desert Luxury Camp',
      location: 'Dubai',
      price: 'From $400/night',
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/4785053/pexels-photo-4785053.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Private Tent', 'Desert Safari', 'Traditional Dining', 'Stargazing'],
    },
     {
      id: 7,
      name: 'Desert Luxury Camp',
      location: 'Dubai',
      price: 'From $400/night',
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/5088101/pexels-photo-5088101.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Private Tent', 'Desert Safari', 'Traditional Dining', 'Stargazing'],
    },
     
     {
      id: 8,
      name: 'Desert Luxury Camp',
      location: 'Dubai',
      price: 'From $400/night',
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/2986231/pexels-photo-2986231.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Private Tent', 'Desert Safari', 'Traditional Dining', 'Stargazing'],
    },
    
     
    
    
  ];


  const navigate = useNavigate();
  const handleBookNow = () => navigate('/booking');

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
          <h1 className="display-3 fw-bold">Luxury Accommodations</h1>
          <p className="lead">Experience Comfort and Elegance Worldwide</p>
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
          {/* Name */}
          <h5 className="mb-2" style={{ fontSize: '15px' }}>{acc.name}</h5>

          {/* Rating and Location in Same Row */}
          <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
            {/* Location */}
            <p className="text-muted mb-0 d-flex align-items-center">
              <i className="fas fa-map-marker-alt me-2" />
              {acc.location}
            </p>

            {/* Rating */}
            <div className="d-flex align-items-center">
              <i className="fas fa-star text-warning me-1" />
              <span>{acc.rating}</span>
            </div>
          </div>

          {/* Price */}
          <p className="text-warning fw-bold mb-2">{acc.price}</p>

          <hr />

          {/* Amenities */}
          <div className="d-flex flex-wrap gap-2 mb-3">
            {acc.amenities.map((am, idx) => (
              <span key={idx} className="badge bg-light text-dark">
                {am}
              </span>
            ))}
          </div>

          {/* Button */}
          <button className="btn btn-warning text-white w-100" onClick={handleBookNow}>Book Now</button>
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
