import React from 'react';
import { useNavigate } from 'react-router-dom';

function Travel() {
  const travelPackages = [
    {
      id: 0,
      title: "3 day 4 night",
      location: "",
      duration: "9 Days",
      price: "$1,500",
      image: "https://images.pexels.com/photos/30851795/pexels-photo-30851795/free-photo-of-historic-ruins-with-tree-roots-on-andaman-island.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 1,
      title: "6 day 7 night",
      location: "",
      duration: "7 Days",
      price: "$1,800",
      image: "https://images.pexels.com/photos/10794387/pexels-photo-10794387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "7 day 8 night",
      location: "",
      duration: "8 Days",
      price: "$2,500",
      image: "https://images.pexels.com/photos/10818890/pexels-photo-10818890.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "4 day 5 night",
      location: "",
      duration: "12 Days",
      price: "$9,800",
      image: "https://i.pinimg.com/736x/1a/bd/fc/1abdfc0cb2cd7470a0cf82ec958b3bed.jpg"
    },
     {
      id: 4,
      title: "2 day 3 night",
      location: " ",
      duration: "6 Days",
      price: "$2,800",
      image: "https://i.pinimg.com/736x/fa/6c/ba/fa6cbaf15ddc25ada242ed9435e1ab86.jpg"
    },
     {
      id: 5,
      title: "5 days 6 night",
      location: "",
      duration: "10 Days",
      price: "$2,800",
      image: "https://i.pinimg.com/736x/c6/80/77/c68077f39b27dda19f08e9378bde160b.jpg"
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
                                    <button className="btn btn-warning text-white" onClick={() => handleViewDetails(1)}>View Details</button>

               
              </div>
            </div>
          ))}
        </div>
        </div>

      
        
      
    </div>
  );
}

export default Travel; 