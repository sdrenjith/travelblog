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
      image: "https://images.pexels.com/photos/158272/mont-blanc-du-tacul-high-mountains-alpine-chamonix-158272.jpeg?auto=compress&cs=tinysrgb&w=600",
      text:
        "Cusco is a city in southeastern Peru, near the Urubamba Valley of the Andes mountain range. It is the capital of the Cusco Region.",
    },
    "Day 2": {
      image: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600",
      text:
        "Lima is the capital and largest city of peru.With a population of almost 10 million,Lima is the most populous metropolitan area of peru ",
    },
    "Day 3": {
      image: "https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?auto=compress&cs=tinysrgb&w=600",
      text:
        "Urumbamb is small town in peru, located near the Urumbamba River.Urumbamba is the largest town in the Sacred Valley of the Incas",
    },
    "Day 4": {
      image: "https://images.pexels.com/photos/1118861/pexels-photo-1118861.jpeg?auto=compress&cs=tinysrgb&w=600",
      text:
        "it is the capital and largest city of the Arequipa Region.Arequipa is the second most industrialized and commercialized city in peru",
    },
    "Day 5": {
      image: "https://images.pexels.com/photos/464311/pexels-photo-464311.jpeg?auto=compress&cs=tinysrgb&w=600",
      text:
        "Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge. it is the most familiar icon of Inca civilization",
    },
    "Day 6": {
      image: "https://images.pexels.com/photos/672451/pexels-photo-672451.jpeg?auto=compress&cs=tinysrgb&w=600",
      text:
        "Mancora is a town and beach resort in the Piura Region,in northwestern Peru,It is known for its turquoise beaches and good waves.",
    },
    "Day 7": {
      image: "https://images.pexels.com/photos/913215/pexels-photo-913215.jpeg?auto=compress&cs=tinysrgb&w=600",
      text:
        "Puno is city in southeastern Peru, located on the shore of Lake Titicaca. Puno has several churches dating back from the colonial period",
    },
    "Day 8": {
      image: "https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=600",
      text:
        "Huaraz is the main financial and commerical center of the Callejon.huaraz is the mostimportant place of winter sports and adventure",
    },
  };

  // Update selected day and active dot index on click
  const handleDayClick = (day, index) => {
    setSelectedDay(day);
    setActiveIndex(index);
  };

  return (
    <div
      className="banner text-white"
      style={{
        backgroundImage: `url(https://th.bing.com/th/id/R.185a4025b2426d2bdb69aac4c2a9e1fe?rik=dFrCXif7Gi87Hw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f02%2f6966828-beautiful-mountain-lakes.jpg&ehk=%2bg%2bVQ5VbliISAtOpOXMF0kQcE9UuTuxx58zhi69EO4k%3d&risl=&pid=ImgRaw&r=0)`,
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
      <div style={{ maxWidth: "1500px", color: "white", marginLeft: "400px", marginTop: "100px" }}>
        <h1 className="display-3 fw-bold">PERFECT YOUR DREAM</h1>
        <h1 className="display-3 fw-bold">VACATION</h1>
        <p className="lead mt-4" style={{ color: "white", width: "660px" }}>
          This is one of the world's best-known hikes and will reward those willing to break a sweat with a stunning combination of mountainscapes, cloud forests,
          and jungles.
        </p>

        {/* Day buttons */}
        <div className="container text-center p-5" style={{display: 'flex', flexDirection: 'column'}}>
         

          {/* Itinerary card */}
          <div style={{marginRight: "500px",marginBottom: "1px",marginTop: "1px"}}>
          <div className="card shadow-lg" style={{ width: "200px", height: "300px" }}>
            <img
              src={itineraryData[selectedDay].image}
              className="card-img-top"
              alt={selectedDay}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body" style={{ backgroundColor: "white", color: "#333", padding: "20px" }}>
              <p className="card-text" style={{ fontSize: "16px", margin: 0 }}>{itineraryData[selectedDay].text}</p>
            </div>
          </div>
          </div>

          {/* Timeline dots and lines */}
          <div className="timeline-container mt-5">
            <div className="line-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
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
    </div>
  );
}

export default Banner5;
