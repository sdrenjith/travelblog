import React, { useState } from 'react';
import { Plus, Save, X, MapPin, Calendar, Trash2 } from 'lucide-react';

function Destination() {
  const [isCreating, setIsCreating] = useState(false);
  const [itineraries, setItineraries] = useState([]);

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

        {[
          {
            title: 'Europe',
            img: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
            text: '20+ Destinations'
          },
          {
            title: 'Asia',
            img: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
            text: '15+ Destinations'
          },
          {
            title: 'Americas',
            img: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg',
            text: '25+ Destinations'
          }
        ].map((dest, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
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
      <div className="text-center my-4">
        <button
          onClick={() => setIsCreating(true)}
          className="btn btn-lg shadow-lg"
          style={styles.btnMagical}
        >
          <Plus size={24} className="me-3" />
          ✨ Create Magical Journey ✨
        </button>
      </div>

      {/* Create Itinerary Form */}
      {isCreating && (
        <div className="mb-5" style={styles.glassCard}>
          <div className="p-4">
            <h3 className="text-center text-dark mb-4">🎯 Plan Your Dream Trip</h3>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Trip Title (e.g., Magical Bali Adventure)"
                  value={newItinerary.title}
                  onChange={(e) => setNewItinerary({ ...newItinerary, title: e.target.value })}
                  style={{
                    borderRadius: '15px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    background: 'rgba(255,255,255,0.9)'
                  }}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Destination (e.g., Bali, Indonesia)"
                  value={newItinerary.destination}
                  onChange={(e) =>
                    setNewItinerary({ ...newItinerary, destination: e.target.value })
                  }
                  style={{
                    borderRadius: '15px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    background: 'rgba(255,255,255,0.9)'
                  }}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  value={newItinerary.startDate}
                  onChange={(e) =>
                    setNewItinerary({ ...newItinerary, startDate: e.target.value })
                  }
                  style={{
                    borderRadius: '15px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    background: 'rgba(255,255,255,0.9)'
                  }}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  value={newItinerary.endDate}
                  onChange={(e) => setNewItinerary({ ...newItinerary, endDate: e.target.value })}
                  style={{
                    borderRadius: '15px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    background: 'rgba(255,255,255,0.9)'
                  }}
                />
              </div>
            </div>
            <div className="d-flex gap-3 justify-content-center">
              <button
                onClick={createItinerary}
                className="btn btn-success btn-lg px-4"
                style={{ borderRadius: '25px' }}
              >
                <Save size={20} className="me-2" /> Create
              </button>
              <button
                onClick={() => setIsCreating(false)}
                className="btn btn-secondary btn-lg px-4"
                style={{ borderRadius: '25px' }}
              >
                <X size={20} className="me-2" /> Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Itinerary list */}
      {itineraries.map((itinerary) => (
        <div key={itinerary.id} className="mb-5" style={styles.glassCard}>
          <div
            className="p-4 text-white"
            style={{ background: dayGradients[0], borderRadius: '25px 25px 0 0' }}
          >
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h2 className="display-5 fw-bold mb-3">{itinerary.title}</h2>
                <div className="d-flex flex-wrap gap-4">
                  <div className="d-flex align-items-center">
                    <MapPin size={20} className="me-2" />
                    <span className="fs-5">{itinerary.destination}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Calendar size={20} className="me-2" />
                    <span className="fs-5">
                      {itinerary.startDate} to {itinerary.endDate}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => deleteItinerary(itinerary.id)}
                className="btn btn-outline-light btn-lg"
                style={{ borderRadius: '15px' }}
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Destination;
