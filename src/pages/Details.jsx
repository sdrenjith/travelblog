import React, { useState } from 'react';
import { Plus, MapPin, Clock, Calendar, Edit3, Trash2, Save, X, Waves, Palmtree, Camera, Sunset, Fish, Star, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TravelItinerary = () => {
  const [itineraries, setItineraries] = useState([
    {
      id: 1,
      title: "Explore Andaman",
      destination: "Andaman & Nicobar Islands, India",
      startDate: "2024-07-15",
      endDate: "2024-07-20",
      days: [
        {
          id: 1,
          date: "2024-07-15",
          activities: [
            { id: 1, time: "10:00", activity: "Airport pickup and hotel check-in", location: "Port Blair Airport", icon: "✈️" },
            { id: 2, time: "14:00", activity: "Visit Carbyn's Cove Beach - swimming and coastal drive", location: "Carbyn's Cove Beach", icon: "🏖️" },
            { id: 3, time: "16:30", activity: "Explore Cellular Jail - National Memorial", location: "Cellular Jail", icon: "🏛️" },
            { id: 4, time: "18:00", activity: "Attend Light & Sound Show - Indian freedom struggle", location: "Cellular Jail", icon: "🎭" }
          ]
        },
        {
          id: 2,
          date: "2024-07-16",
          activities: [
            { id: 5, time: "08:00", activity: "Check out and board Premium Cruise to Swaraj Island", location: "Port Blair Dock", icon: "🚢" },
            { id: 6, time: "12:00", activity: "Arrive and check into resort", location: "Swaraj Island", icon: "🏨" },
            { id: 7, time: "15:00", activity: "Visit Radhanagar Beach - Asia's best beach", location: "Radhanagar Beach", icon: "🏆" },
            { id: 8, time: "17:30", activity: "Watch mesmerizing sunset", location: "Radhanagar Beach", icon: "🌅" }
          ]
        },
        {
          id: 3,
          date: "2024-07-17",
          activities: [
            { id: 9, time: "09:00", activity: "Boat ride to Elephant Beach (30 minutes)", location: "Swaraj Island Dock", icon: "🛥️" },
            { id: 10, time: "10:00", activity: "Snorkeling at Elephant Beach - explore coral reefs", location: "Elephant Beach", icon: "🤿" },
            { id: 11, time: "13:00", activity: "Return to Swaraj Deep dock", location: "Swaraj Island", icon: "⛵" },
            { id: 12, time: "15:00", activity: "Board Premium Cruise to Shaheed Deep Island", location: "Swaraj Island Dock", icon: "🚢" },
            { id: 13, time: "17:00", activity: "Visit Laxmanpur Beach - sunset point", location: "Laxmanpur Beach", icon: "🏖️" },
            { id: 14, time: "18:30", activity: "Watch sunset at the beach", location: "Laxmanpur Beach", icon: "🌇" }
          ]
        },
        {
          id: 4,
          date: "2024-07-18",
          activities: [
            { id: 15, time: "09:00", activity: "Visit Bharatpur Beach - snorkeling and water sports", location: "Bharatpur Beach", icon: "🏄‍♂️" },
            { id: 16, time: "11:30", activity: "Explore Natural Bridge - picturesque location", location: "Natural Bridge, Shaheed Island", icon: "🌉" },
            { id: 17, time: "14:00", activity: "Board Premium Cruise back to Port Blair", location: "Shaheed Island Dock", icon: "🚢" },
            { id: 18, time: "17:00", activity: "Arrive Port Blair and hotel check-in", location: "Port Blair", icon: "🏨" }
          ]
        },
        {
          id: 5,
          date: "2024-07-19",
          activities: [
            { id: 19, time: "09:00", activity: "Boat ride to Ross Island - British administrative settlement", location: "Port Blair Dock", icon: "⛵" },
            { id: 20, time: "10:30", activity: "Explore Ross Island ruins - 'Paris of the past'", location: "Ross Island", icon: "🏛️" },
            { id: 21, time: "13:00", activity: "Visit North Bay Island - Coral Island", location: "North Bay Island", icon: "🐠" },
            { id: 22, time: "14:30", activity: "Marine life exploration and activities", location: "North Bay Island", icon: "🐟" },
            { id: 23, time: "16:00", activity: "Return to Port Blair", location: "Port Blair", icon: "🚤" }
          ]
        },
        {
          id: 6,
          date: "2024-07-20",
          activities: [
            { id: 24, time: "10:00", activity: "Hotel check-out and airport transfer", location: "Port Blair", icon: "🧳" },
            { id: 25, time: "12:00", activity: "Departure flight", location: "Port Blair Airport", icon: "✈️" }
          ]
        }
      ]
    }
  ]);

  const [isCreating, setIsCreating] = useState(false);
  const [newItinerary, setNewItinerary] = useState({
    title: '',
    destination: '',
    startDate: '',
    endDate: ''
  });

  const [newActivity, setNewActivity] = useState({
    time: '',
    activity: '',
    location: '',
    icon: '📍'
  });

  const createItinerary = () => {
    if (newItinerary.title && newItinerary.destination && newItinerary.startDate && newItinerary.endDate) {
      const itinerary = {
        id: Date.now(),
        ...newItinerary,
        days: [{
          id: 1,
          date: newItinerary.startDate,
          activities: []
        }]
      };
      setItineraries([...itineraries, itinerary]);
      setNewItinerary({ title: '', destination: '', startDate: '', endDate: '' });
      setIsCreating(false);
    }
  };

  const deleteItinerary = (id) => {
    setItineraries(itineraries.filter(it => it.id !== id));
  };

  const addActivity = (itineraryId, dayId) => {
    if (newActivity.time && newActivity.activity && newActivity.location) {
      setItineraries(itineraries.map(it => {
        if (it.id === itineraryId) {
          return {
            ...it,
            days: it.days.map(day => {
              if (day.id === dayId) {
                return {
                  ...day,
                  activities: [...day.activities, {
                    id: Date.now(),
                    ...newActivity
                  }]
                };
              }
              return day;
            })
          };
        }
        return it;
      }));
      setNewActivity({ time: '', activity: '', location: '', icon: '📍' });
    }
  };

  const deleteActivity = (itineraryId, dayId, activityId) => {
    setItineraries(itineraries.map(it => {
      if (it.id === itineraryId) {
        return {
          ...it,
          days: it.days.map(day => {
            if (day.id === dayId) {
              return {
                ...day,
                activities: day.activities.filter(act => act.id !== activityId)
              };
            }
            return day;
          })
        };
      }
      return it;
    }));
  };

  const addDay = (itineraryId) => {
    setItineraries(itineraries.map(it => {
      if (it.id === itineraryId) {
        const lastDay = it.days[it.days.length - 1];
        const nextDate = new Date(lastDay.date);
        nextDate.setDate(nextDate.getDate() + 1);
        
        return {
          ...it,
          days: [...it.days, {
            id: Date.now(),
            date: nextDate.toISOString().split('T')[0],
            activities: []
          }]
        };
      }
      return it;
    }));
  };

  const dayGradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  ];

  const styles = {
    body: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    },
    
    floatingElements: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1
    },

    floatingElement: {
      position: 'absolute',
      opacity: 0.1,
      fontSize: '3rem',
      color: 'white',
      animation: 'float 6s ease-in-out infinite'
    },

    mainContent: {
      position: 'relative',
      zIndex: 10
    },

    heroSection: {
      textAlign: 'center',
      padding: '80px 0',
      color: 'white'
    },

    heroIcon: {
      width: '120px',
      height: '120px',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 30px',
      backdropFilter: 'blur(10px)',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
      animation: 'pulse 2s infinite'
    },

    heroTitle: {
      fontSize: '4rem',
      fontWeight: '900',
      textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)',
      marginBottom: '20px',
      background: 'linear-gradient(45deg, #fff, #ffd700, #fff)',
      backgroundSize: '200% 200%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'shimmer 3s ease-in-out infinite'
    },

    heroSubtitle: {
      fontSize: '1.3rem',
      opacity: 0.95,
      maxWidth: '600px',
      margin: '0 auto 30px',
      lineHeight: 1.6
    },

    glassCard: {
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(15px)',
      borderRadius: '25px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    },

    btnMagical: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      border: 'none',
      borderRadius: '50px',
      padding: '15px 40px',
      fontWeight: '700',
      fontSize: '1.1rem',
      color: 'white',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      
    },

    dayCard: {
      marginBottom: '30px',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)'
    },

    activityCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '15px',
      padding: '20px',
      marginBottom: '15px',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
    },

    addActivityForm: {
      background: 'linear-gradient(135deg, rgba(103, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
      borderRadius: '15px',
      padding: '20px',
      border: '2px dashed rgba(103, 126, 234, 0.3)',
      backdropFilter: 'blur(5px)'
    }
  };

  const navigate = useNavigate();
  const handleBookNow = () => navigate('/booking');

  return (
    <div style={styles.body}>
      {/* Add CSS keyframes */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
          @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          @keyframes shimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .glass-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
          }

          .btn-magical:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          }

          .activity-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
          }

          .floating-element:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
          .floating-element:nth-child(2) { top: 20%; right: 15%; animation-delay: 2s; }
          .floating-element:nth-child(3) { bottom: 30%; left: 20%; animation-delay: 4s; }
          .floating-element:nth-child(4) { bottom: 10%; right: 10%; animation-delay: 1s; }
        `}
      </style>

      {/* Floating Background Elements */}
      <div style={styles.floatingElements}>
        <div className="floating-element" style={{...styles.floatingElement, top: '10%', left: '10%'}}>🌴</div>
        <div className="floating-element" style={{...styles.floatingElement, top: '20%', right: '15%'}}>🏖️</div>
        <div className="floating-element" style={{...styles.floatingElement, bottom: '30%', left: '20%'}}>🌊</div>
        <div className="floating-element" style={{...styles.floatingElement, bottom: '10%', right: '10%'}}>⛵</div>
      </div>

      <div style={styles.mainContent} className="container-fluid">
        {/* Hero Section */}
        <div style={styles.heroSection}>
          <div style={styles.heroIcon}>
            <Waves size={60} className="text-white" />
          </div>
          <h1 style={styles.heroTitle}>🌴 Dream Destinations 🌴</h1>
          <p style={styles.heroSubtitle} className="lead">
            Create unforgettable memories with our stunning travel itineraries. 
            From pristine beaches to cultural wonders, your adventure awaits!
          </p>
          <div className="d-flex justify-content-center mt-4 " >
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={24} className="text-warning mx-1" fill="currentColor" />
            ))}
          </div>
        </div>

        <div className="container  ">
          {/* Create New Itinerary Button */}
          <div className="text-center mb-5 " style={{marginRight:"10px",width: "10vh"}}>
           
          </div>

          {/* Create Itinerary Form */}
          {isCreating && (
            <div className="mb-5" style={styles.glassCard}>
              <div className="p-4">
                <h3 className="text-center text-white mb-4">🎯 Plan Your Dream Trip</h3>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Trip Title (e.g., Magical Bali Adventure)"
                      value={newItinerary.title}
                      onChange={(e) => setNewItinerary({...newItinerary, title: e.target.value})}
                      style={{borderRadius: '15px', border: '2px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.9)'}}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Destination (e.g., Bali, Indonesia)"
                      value={newItinerary.destination}
                      onChange={(e) => setNewItinerary({...newItinerary, destination: e.target.value})}
                      style={{borderRadius: '15px', border: '2px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.9)'}}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      value={newItinerary.startDate}
                      onChange={(e) => setNewItinerary({...newItinerary, startDate: e.target.value})}
                      style={{borderRadius: '15px', border: '2px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.9)'}}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      value={newItinerary.endDate}
                      onChange={(e) => setNewItinerary({...newItinerary, endDate: e.target.value})}
                      style={{borderRadius: '15px', border: '2px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.9)'}}
                    />
                  </div>
                </div>
                <div className="d-flex gap-3 justify-content-center">
                  <button onClick={createItinerary} className="btn btn-success btn-lg px-4" style={{borderRadius: '25px'}}>
                    <Save size={20} className="me-2" /> Create
                  </button>
                  <button onClick={() => setIsCreating(false)} className="btn btn-secondary btn-lg px-4" style={{borderRadius: '25px'}}>
                    <X size={20} className="me-2" /> Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Itineraries List */}
          {itineraries.map((itinerary) => (
            <div key={itinerary.id} className="mb-5" style={styles.glassCard}>
              {/* Itinerary Header */}
              <div className="p-4 text-white" style={{background: dayGradients[0], borderRadius: '25px 25px 0 0'}}>
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
                        <span className="fs-5">{itinerary.startDate} to {itinerary.endDate}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteItinerary(itinerary.id)}
                    className="btn btn-outline-light btn-lg"
                    style={{borderRadius: '15px'}}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>

              {/* Days */}
              <div className="p-4">
                {itinerary.days.map((day, dayIndex) => (
                  <div key={day.id} style={styles.dayCard}>
                    <div className="p-4 text-white" style={{background: dayGradients[dayIndex % dayGradients.length]}}>
                      <h3 className="h4 mb-0 d-flex align-items-center">
                        <Calendar size={24} className="me-3" />
                        Day {dayIndex + 1} - {new Date(day.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </h3>
                    </div>

                    <div className="p-4">
                      {/* Activities */}
                      {day.activities.map((activity) => (
                        <div key={activity.id} className="activity-card" style={styles.activityCard}>
                          <div className="d-flex justify-content-between align-items-start">
                            <div className="d-flex align-items-start">
                              <div className="me-4">
                                <div className="badge bg-primary fs-6 p-2" style={{borderRadius: '12px'}}>
                                  <Clock size={16} className="me-1" />
                                  {activity.time}
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <div className="d-flex align-items-center mb-2">
                                  <span className="fs-4 me-2">{activity.icon}</span>
                                  <h5 className="mb-0 text-dark">{activity.activity}</h5>
                                </div>
                                <p className="text-muted mb-0 d-flex align-items-center">
                                  <MapPin size={16} className="me-1" />
                                  {activity.location}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => deleteActivity(itinerary.id, day.id, activity.id)}
                              className="btn btn-outline-danger btn-sm"
                              style={{borderRadius: '10px'}}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}

                      {/* Add Activity Form */}
                      <div style={styles.addActivityForm}>
                        <h5 className="text-primary mb-3">📝 Add New Activity</h5>
                        <div className="row g-3 mb-3">
                          <div className="col-md-3">
                            <input
                              type="time"
                              className="form-control"
                              value={newActivity.time}
                              onChange={(e) => setNewActivity({...newActivity, time: e.target.value})}
                              style={{borderRadius: '10px'}}
                            />
                          </div>
                          <div className="col-md-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Activity Description"
                              value={newActivity.activity}
                              onChange={(e) => setNewActivity({...newActivity, activity: e.target.value})}
                              style={{borderRadius: '10px'}}
                            />
                          </div>
                          <div className="col-md-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Location"
                              value={newActivity.location}
                              onChange={(e) => setNewActivity({...newActivity, location: e.target.value})}
                              style={{borderRadius: '10px'}}
                            />
                          </div>
                          <div className="col-md-2">
                            <button
                              onClick={() => addActivity(itinerary.id, day.id)}
                              className="btn btn-primary w-100"
                              style={{borderRadius: '10px'}}
                            >
                              <Plus size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add Day Button */}
                <button
                  onClick={() => addDay(itinerary.id)}
                  className="btn btn-outline-primary btn-lg w-100 mt-4"
                  style={{borderRadius: '15px', borderStyle: 'dashed', borderWidth: '3px'}}
                >
                  <Plus size={24} className="me-2" />
                  🎯 Add Another Amazing Day
                </button>
                {/* Book travel */}

                 <button style={{
          backgroundColor: "pink",
          color: "white",
          border: "none",
          padding: "15px 40px",
          borderRadius: "30px",
          fontSize: "16px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          boxShadow: "0 4px 12px rgba(249, 115, 22, 0.2)",
          marginLeft: "300px",
          marginTop: "50px"
        }}
        onClick={handleBookNow}>
          BOOK YOUR TRAVEL
        </button>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {itineraries.length === 0 && !isCreating && (
            <div className="text-center py-5" style={styles.glassCard}>
              <div className="p-5">
                <Calendar size={80} className="text-white opacity-50 mb-4" />
                <h3 className="text-white mb-3">No Adventures Yet!</h3>
                <p className="text-white opacity-75 fs-5">Start planning your dream vacation today!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelItinerary;