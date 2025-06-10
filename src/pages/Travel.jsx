import React from 'react';
import { useNavigate } from 'react-router-dom';

function Travel() {
  const travelPackages = [
    {
      id: 0,
      title: "Machu Picchu Adventure",
      location: "Peru",
      duration: "9 Days",
      price: "$1,500",
      image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 1,
      title: "Greek Islands Explorer",
      location: "Greece",
      duration: "7 Days",
      price: "$1,800",
      image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Safari Adventure",
      location: "Tanzania",
      duration: "8 Days",
      price: "$2,500",
      image: "https://images.pexels.com/photos/259397/pexels-photo-259397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Himachal Hills Explorer",
      location: "India",
      duration: "12 Days",
      price: "$9,800",
      image: "https://images.pexels.com/photos/32420392/pexels-photo-32420392/free-photo-of-scenic-bridge-and-snow-capped-mountains-view.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
     {
      id: 4,
      title: "Explore Andaman",
      location: "Andaman & Nicobar Islands, India",
      duration: "6 Days",
      price: "$2,800",
      image: "https://images.pexels.com/photos/30658207/pexels-photo-30658207/free-photo-of-rustic-boat-on-tranquil-andaman-sea.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
     {
      id: 5,
      title: "Japanese Culture Tour",
      location: "Japan",
      duration: "10 Days",
      price: "$2,800",
      image: "https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

  ];





   const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section" style={{
        backgroundImage: 'url("https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}></div>
        <div style={{position: 'relative', color: 'white', textAlign: 'center'}}>
          <h1 className="display-3 fw-bold">Our Travel Packages</h1>
          <p className="lead">Discover Amazing Destinations Around the World</p>
        </div>
      </div>

      {/* Travel Packages Section */}
      <div className="container my-5">
        <div className="row">
          {travelPackages.map(pkg => (
            <div key={pkg.id} className="col-md-6 mb-4">
              <div className="card h-100 shadow-lg">
                <div style={{
                  height: '300px',
                  backgroundImage: `url(${pkg.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '20px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    color: 'white'
                  }}>
                    <h3>{pkg.title}</h3>
                    <p className="mb-0">{pkg.location}</p>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="mb-0"><i className="far fa-clock me-2"></i>{pkg.duration}</p>
                    </div>
                    <div>
                      <h4 className="text-warning mb-0">{pkg.price}</h4>
                    </div>
                  </div>
                  <hr />
                  <div className="d-grid">
                    <button className="btn btn-warning text-white" onClick={() => handleViewDetails(1)}>View Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* Featured Destinations */}
        <div className="row mt-5">
          <div className="col-12 text-center mb-4">
            <h2>Featured Destinations</h2>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img 
                src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt="Europe"
                style={{height: '200px', objectFit: 'cover'}}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Europe</h5>
                <p className="card-text">20+ Destinations</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img 
                src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt="Asia"
                style={{height: '200px', objectFit: 'cover'}}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Asia</h5>
                <p className="card-text">15+ Destinations</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img 
                src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt="Americas"
                style={{height: '200px', objectFit: 'cover'}}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Americas</h5>
                <p className="card-text">25+ Destinations</p>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default Travel; 