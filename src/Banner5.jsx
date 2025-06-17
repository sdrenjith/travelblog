import React, { useState } from "react";
import "./App.css";

function Banner5() {
  const days = [
    "Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8",
  ];
  const [selectedDay, setSelectedDay] = useState("Day 1");
  const [activeIndex, setActiveIndex] = useState(0);

  const itineraryData = {
    "Day 1": {
      image: "https://images.pexels.com/photos/30188165/pexels-photo-30188165/free-photo-of-colorful-boat-on-crystal-clear-waters-in-port-blair.jpeg?auto=compress&cs=tinysrgb&w=600",
      text:
        "Neil Island is a small island in the southern part of the Andaman archipelago, located between Havelock Island and Port Blair. Known for its laid-back charm.",
    },
    "Day 2": {
      image: "https://media.gettyimages.com/id/968845558/photo/cellular-jail-port-blair-andaman-islands.jpg?b=1&s=612x612&w=0&k=20&c=AHvL2fj8VjyQ9tG8Vr2pE8TUZ8JzH-Snx6j1779XgvQ=",
      text:
            "Port Blair is the capital and largest city of the Andaman and Nicobar Islands. With a growing population and rich cultural blend, Port Blair serves as the main gateway."    },
    "Day 3": {
      image: "https://www.andamanislands.com/uploads/andamanislands/blog/main/616d3d9cecec3188_10-2.png",
      text:
            "Mayabunder is a small town in the northern part of Middle Andaman, located near tranquil creeks and mangrove-lined shores. It is the largest settlement in that region."    },
    "Day 4": {
      image: "https://th.bing.com/th/id/OIP.p6u0cHL6XuEUzNhnYs04AQHaEK?rs=1&pid=ImgDetMain",
      text:
        "it is the capital and largest city of the Arequipa Region.Arequipa is the second most industrialized and commercialized city in peru",
    },
    "Day 5": {
      image: "https://cdn.britannica.com/04/242304-050-6B22FC09/Cellular-Jail-India-.jpg",
      text:
          "The Cellular Jail is a colonial-era prison built in the early 20th century, located in Port Blair. It stands as the most iconic symbol of India's freedom struggle ."    },
    "Day 6": {
      image: "https://th.bing.com/th/id/OIP.UAv4w_Y8GqSJZmIlwHl51AHaFL?rs=1&pid=ImgDetMain",
      text:
        "Mancora is a town and beach resort in the Piura Region,in northwestern Peru,It is known for its turquoise beaches and good waves.",
    },
    "Day 7": {
      image: "https://th.bing.com/th/id/OIP.PBDTOMpNcdQNPSx-G4ZvYwHaFb?rs=1&pid=ImgDetMain",
      text:
            "Havelock Island, now known as Swaraj Dweep, is a popular island and beach destination in the Andaman Islands. Located northeast of Port Blair, it is famous for its turquoise."
              },
    "Day 8": {
      image: "https://th.bing.com/th/id/OIP.LcgD_dLiduudkcE6nFgPPwHaE7?rs=1&pid=ImgDetMain",
      text:
      "Diglipur is the main commercial and administrative center of North Andaman, known for its natural beauty and adventure activities."
    },
  };

  // Update selected day and active dot index on click
  const handleDayClick = (day, index) => {
    setSelectedDay(day);
    setActiveIndex(index);
  };

  // Calculate left offset for the card
  const timelineWidth = 800; // px, adjust if needed
  const cardWidth = 600; // px, should match the card's maxWidth
  const dayCount = days.length;
  const daySpacing = timelineWidth / (dayCount - 1);
  const dotX = activeIndex * daySpacing;
  let leftOffset = dotX - cardWidth / 2;
  let pointerLeft = '50%';
  let pointerTransform = 'translateX(-50%)';
  // Clamp card so it doesn't overflow container
  if (leftOffset < 0) {
    pointerLeft = `${dotX}px`;
    pointerTransform = 'translateX(0)';
    leftOffset = 0;
  } else if (leftOffset > timelineWidth - cardWidth) {
    pointerLeft = `${dotX - (timelineWidth - cardWidth)}px`;
    pointerTransform = 'translateX(0)';
    leftOffset = timelineWidth - cardWidth;
  }

  return (
    <div
      className="banner text-white"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/362690/pexels-photo-362690.jpeg)`,
        height: "1000px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        paddingLeft: "80px",
        paddingRight: "20px",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "1500px", color: "white", marginLeft: "300px", marginTop: "100px" }}>
        <h1 className="display-3 fw-bold">PERFECT YOUR DREAM</h1>
        <h1 className="display-3 fw-bold">VACATION</h1>
        <p className="lead mt-4" style={{ color: "white", width: "660px" }}>
          This is one of the world's best-known hikes and will reward those willing to break a sweat with a stunning combination of mountainscapes, cloud forests,
          and jungles.
        </p>

        {/* Day buttons */}
        <div className="container text-center p-5" style={{display: 'flex', flexDirection: 'column'}}>
         

          {/* Itinerary card */}
          <div style={{ position: 'relative', width: timelineWidth, margin: '0 auto', paddingTop: 260, paddingBottom: 40 }}>
            {/* Popup Card Positioned Above Timeline */}
            <div
              style={{
                position: 'absolute',
                left: leftOffset,
                top: 0,
                zIndex: 2,
                width: cardWidth,
                background: 'white',
                borderRadius: 16,
                boxShadow: '0 8px 32px rgba(31,38,135,0.13)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBottom: 24,
                transition: 'left 0.4s cubic-bezier(.4,2,.6,1)',
              }}
            >
              <img
                src={itineraryData[selectedDay].image}
                alt={selectedDay}
                style={{
                  width: '100%',
                  height: 180,
                  objectFit: 'cover',
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                }}
              />
              <div
                style={{
                  padding: '22px 32px',
                  fontSize: '1.18rem',
                  color: '#333',
                  fontWeight: 400,
                  textAlign: 'center',
                  lineHeight: 1.6,
                }}
              >
                {itineraryData[selectedDay].text}
              </div>
            </div>
          </div>

          {/* Timeline dots and lines */}
          <div className="timeline-container mt-5">
            <div className="line-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center",marginTop: "15px" }}>
              {days.map((day, index) => (
                <React.Fragment key={day}>
                  <div
                    className={`dot ${activeIndex === index ? "active" : ""}`}
                    onClick={() => handleDayClick(day, index)}
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: activeIndex === index ? "orange" : "white",
                      cursor: "pointer",
                      margin: "0 8px",
                    }}
                  ></div>
                  {index < days.length - 1 && (
                    <div
                      className="line"
                      style={{
                        height: "4px",
                        width: "30px",
                        backgroundColor: "white",
                      }}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Labels below dots */}
            <div
              className="label-wrapper d-flex justify-content-center mt-2 flex-wrap"
              style={{ gap: "31px"  }}
            >
              {days.map((day, index) => (
                <div
                  key={day}
                  style={{
                    color: activeIndex === index ? "orange" : "white",
                    fontWeight: activeIndex === index ? "bold" : "normal",
                    minWidth: "40px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDayClick(day, index)}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
@media (max-width: 900px) {
  .itinerary-popup-card {
    width: 98% !important;
    max-width: 98vw !important;
    min-width: 0 !important;
    font-size: 1rem !important;
    padding: 0 0 18px 0 !important;
  }
}
`}</style>
    </div>
  );
}

export default Banner5;
