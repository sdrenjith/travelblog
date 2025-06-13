import React, { useState } from 'react';
import { Plus, Save, X, MapPin, Calendar, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Destination() {
  const [isCreating, setIsCreating] = useState(false);
  const [itineraries, setItineraries] = useState([]);
  const navigate = useNavigate();

  const [newItinerary, setNewItinerary] = useState({
    title: '',
    destination: '',
    startDate: '',
    endDate: ''
  });

  const createItinerary = () => {
    if (
      newItinerary.title &&
      newItinerary.destination &&
      newItinerary.startDate &&
      newItinerary.endDate
    ) {
      const itinerary = {
        id: Date.now(),
        ...newItinerary,
        days: [
          {
            id: 1,
            date: newItinerary.startDate,
            activities: []
          }
        ]
      };
      setItineraries([...itineraries, itinerary]);
      setNewItinerary({ title: '', destination: '', startDate: '', endDate: '' });
      setIsCreating(false);
    }
  };

  const deleteItinerary = (id) => {
    setItineraries(itineraries.filter((it) => it.id !== id));
  };

  const styles = {
    btnMagical: {
      background: 'linear-gradient(45deg, #ff6ec4, #7873f5)',
      color: '#fff',
      borderRadius: '25px',
      padding: '10px 20px',
      fontWeight: 'bold'
    },
    glassCard: {
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      borderRadius: '25px',
      padding: '20px',
      marginTop: '30px'
    }
  };

  const dayGradients = ['linear-gradient(90deg, #1CB5E0 0%, #000851 100%)'];

  const featuredDestinations = [
    {
      title: 'Port Blair',
      img: 'https://images.pexels.com/photos/30188165/pexels-photo-30188165/free-photo-of-colorful-boat-on-crystal-clear-waters-in-port-blair.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: '20+ Destinations',
      description: 'Port Blair is the capital city of the Andaman and Nicobar Islands, known for its rich history and beautiful beaches.'
    },
    {
      title: 'Rangat',
      img: 'https://images.pexels.com/photos/7970786/pexels-photo-7970786.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: '15+ Destinations',
      description: 'Rangat is a peaceful town in Middle Andaman, famous for its mangroves and eco-tourism.'
    },
    {
      title: 'Diglipur',
      img: 'https://images.pexels.com/photos/28581876/pexels-photo-28581876/free-photo-of-beautiful-tropical-seascape-with-limestone-cliffs.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: '25+ Destinations',
      description: 'Diglipur is the largest town in North Andaman, home to beautiful beaches and the highest peak in the islands.'
    },
    {
      title: 'Havelock Island ',
      img: 'https://images.pexels.com/photos/10914023/pexels-photo-10914023.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: '25+ Destinations',
      description: 'Havelock Island is a popular destination for its white sandy beaches and crystal-clear waters.'
    },
    {
      title: 'Neil Island ',
      img: 'https://images.pexels.com/photos/16827207/pexels-photo-16827207/free-photo-of-sea-coast-with-island.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: '25+ Destinations',
      description: 'Neil Island is known for its laid-back vibe and beautiful coral reefs.'
    },
    {
      title: 'Baratang Island ',
      img: 'https://images.pexels.com/photos/10794420/pexels-photo-10794420.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: '25+ Destinations',
      description: 'Baratang Island is famous for its limestone caves and mud volcanoes.'
    }
  ];

  return (
    <div>
      {/* Hero section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: 'url("https://andamansaga.com/wp-content/uploads/2025/03/1.avif")',
          height: '500px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}
        ></div>
        <div style={{ position: 'relative', color: 'white', textAlign: 'center' }}>
          <h1 className="display-3 fw-bold">Discover Destinations</h1>
          <p className="lead">Explore the World's Most Beautiful Places</p>
        </div>
      </div>

      {/* Featured destination */}
      <div className="row mt-5">
        <div className="col-12 text-center mb-4">
          <h2>Featured Destinations</h2>
        </div>

        {featuredDestinations.map((dest, index) => (
          <div key={index} className="col-md-4 mb-4" style={{padding: '60px'}}>
            <div
              className="card border-0 shadow-sm"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/destination/${encodeURIComponent(dest.title.trim())}`)}
            >
              <img
                src={`${dest.img}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                className="card-img-top"
                alt={dest.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{dest.title}</h5>
                <p className="card-text">{dest.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create destination */}
     

      {/* Create Itinerary Form */}
     
              
           

  
     
    </div>
  );
}

export default Destination;
