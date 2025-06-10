import React from 'react';
import { Link } from 'react-router-dom';
import './Contacts.css';
import { useState } from "react";



function About() {
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
    <div>
      {/* Hero Section */}
      <div className="hero-section" style={{
        backgroundImage: 'url("https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        height: '400px',
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
          <h1 className="display-4 fw-bold">ABOUT US</h1>
          <div className="breadcrumb" style={{marginLeft: '70px'}}>
                      <Link to="/">HOME</Link>
                      <span className="separator">/</span>
                      <span className="current">ABOUT US</span>
                    </div>
         

        </div>
      </div>

      {/* About Content */}
      <div className="container my-5 p-5" style={{display: 'flex',flexDirection: 'column'}}>
        <div className="row align-items-center">
          <div style={{ marginLeft: "10px",
            marginRight: "500px"
          }}className="col-md-6">
            <h6 style={{color: 'orange',  fontFamily: 'Satisfy, cursive', fontSize: '21px',fontWeight: '600'}}>Who we are</h6>
            <h2 style={{color: '#333', marginBottom: '25px',fontWeight: '600'}}>WHY CHOOSE US</h2>
            <p style={{fontSize: '13px', lineHeight: '1.8', color: '#666',fontWeight: 'normal', width: '300px'}}>
             Researching and organising your own holiday can be a stressful task. Let us do the work for you! By choosing us you can save both time and money. Our staff always ready to handle any unforeseen situations. Welcome to learn the world with us.            </p>
            <p style={{fontSize: '13px', lineHeight: '1.8', color: '#666' ,fontWeight: 'normal', width: '300px'}}>
             Ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum.            </p>


          </div>
         
          <div className="col-md-6">
            <img 
              src="https://images.pexels.com/photos/32456060/pexels-photo-32456060/free-photo-of-man-admiring-autumn-leaves-by-lakeside-fountain.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Travel Experience"
              style={{  position: "absolute",
          top: "550px",
          left: "630px",
          width: "440px",
          height: "500px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          zIndex: 1}}
            />
            <img
            style={{zIndex: -1,
              width: '400px',
              position:"absolute",
              
               top: "600px",
              width: '412px',
              height: '520px',
              left: "730px"
            }} src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="row mt-5 pt-5">
          <div className="col-12 text-center mb-5 pt-5">
            <h5 style={{color: 'orange',marginTop: "200px",  fontFamily: 'Satisfy, cursive',fontWeight:"600",fontSize:'26px'}}>Team</h5>
            <h2 style={{fontWeight: "600"}}>OUR GUIDES</h2>
          </div>
         
        
        <div className="row container" style={{ display: "flex", flexWrap: "wrap" }}>

  {/* First Card */}
  <div
    className="col-5 bg-light d-flex align-items-center"
    style={{ display: "flex", flexDirection: "row", gap: "10px", padding: "10px" }}
    id="pic"
  >
    <img
      width="520px"
      height="220px"
      src="https://unitravel.ancorathemes.com/wp-content/uploads/2016/12/team-8-370x454.jpg"
      alt=""
      style={{ objectFit: "cover", borderRadius: "8px" }}
    />
    <div className="details">
      <h4 style={{fontWeight: '600', display: 'flex',flexDirection: 'column',fontSize: '18px'}}>STEPHEN REEVES</h4>
      <p style={{fontSize: '10px',color: 'orange'}}>CUSCO GUIDE</p>
      <p style={{fontSize: '10px',fontWeight: 'normal',lineHeight: '1.7'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum perferendis aliquam velit, voluptatum ipsa quos asperiores fugit rerum. </p>
    </div>
  </div>

  {/* <div className="col-1"></div> */}

  {/* Second Card */}
  <div
    className="col-5 bg-light d-flex align-items-center"
    style={{ display: "flex", flexDirection: "row", gap: "10px", padding: "10px" }}
    id="pic"
  >
    <img
      width="520px"
      height="220px"
      src="https://unitravel.ancorathemes.com/wp-content/uploads/2016/12/team-5.jpg"
      alt=""
      style={{ objectFit: "cover", borderRadius: "8px" }}
    />
    <div className="details">
      <h4 style={{fontWeight: '600', display: 'flex',flexDirection: 'column',fontSize: '18px'}}>RODNEY GALLAGHER</h4>
      <p style={{fontSize: '10px',color: 'orange'}}>LIMA GUIDE</p>
      <p style={{fontSize: '10px',fontWeight: 'normal',lineHeight: '1.7'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum perferendis aliquam velit, voluptatum ipsa quos asperiores fugit rerum. </p>
    </div>
  </div>

  <div className="col-1"></div>
</div>


        </div>

        {/* Team Section */}
        <div className="row mt-5 pt-5">
          <div className="col-12 text-center mb-5">
            <h2 style={{color: '#333'}}>Our Expert Team</h2>
          </div>
          <div className="col-md-3 text-center mb-4">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team Member"
              style={{width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px'}}
            />
            <h5 style={{color: '#333'}}>John Doe</h5>
            <p style={{color: '#ff9f1c'}}>Travel Expert</p>
          </div>
          <div className="col-md-3 text-center mb-4">
            <img 
              src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team Member"
              style={{width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px'}}
            />
            <h5 style={{color: '#333'}}>Sarah Smith</h5>
            <p style={{color: '#ff9f1c'}}>Adventure Guide</p>
          </div>
          <div className="col-md-3 text-center mb-4">
            <img 
              src="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team Member"
              style={{width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px'}}
            />
            <h5 style={{color: '#333'}}>Mike Johnson</h5>
            <p style={{color: '#ff9f1c'}}>Tour Director</p>
          </div>
          <div className="col-md-3 text-center mb-4">
            <img 
              src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team Member"
              style={{width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px'}}
            />
            <h5 style={{color: '#333'}}>Emily Brown</h5>
            <p style={{color: '#ff9f1c'}}>Customer Experience</p>
          </div>
        </div>
      </div>
    


  {/*  our story */}

  <div
        className="banner"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600)`,
          height: "800px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          paddingLeft: "80px",
          paddingRight: "20px",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "1500px", color: "white", marginLeft: "240px", marginTop: "9px" }}>
          <h1 className="display-3 fw-bold m-5">OUR STORY</h1>
          <p className="lead mt-4 fs-6" style={{ color: "white", width: "660px" }}>
            We would love to help you realize your travel dreams, cross off those items on your bucket list, or to start a new. Take the first steps towards making your dream a reality!

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
      


      {/* The people who knows best */}

      <div style={{ marginBottom: '90px'}}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '0px',
          marginTop: '100px',
          marginLeft: '400px',
          flexDirection: 'column',
          alignItems: 'flex-start',
         
        }}
      >
        <h5
          style={{
            fontFamily: 'Itim, cursive',
            marginLeft: '110px',
            color: 'orange',
            fontWeight: 'bold',
          }}
        >
          Testimonials 
        </h5>
        <h3 style={{ marginLeft: '1px' }}>THE PEOPLE WHO KNOW BEST</h3>
      </div>



      {/* Carousel */}
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="text-center">
              <img
                src="https://unitravel.ancorathemes.com/wp-content/uploads/2016/12/team-4-1.jpg"
                className="rounded-circle d-block mx-auto"
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                }}
                alt="testimonial"
              />
              <div className="mt-4 px-5 text-center" style={{maxWidth: '500px', textAlign: 'center',marginLeft: "330px"}}>
                <p className=" fs-6">
                  Our travel agent was excellent for us and considered our
                  unique needs and planned our itinerary. I would definitely
                  work with you again as you made our trip easy and
                  stress-free. It was a delight to work with UniTravel. Thank
                  you so much.
                </p>
                <h5
                  className="fw-bold mt-3"
                  style={{ fontSize: '9px' }}
                >
                  JANET ARNOLD
                </h5>
              </div>
            </div>
          </div>

          {/* Slide 2 (same as Slide 1) */}
          <div className="carousel-item" data-bs-interval="2000">
            <div className="text-center">
              <img
                src="https://unitravel.ancorathemes.com/wp-content/uploads/2016/12/team-2-1.jpg"
                className="rounded-circle d-block mx-auto"
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                }}
                alt="testimonial"
              />
              <div className="mt-4 px-5" style={{maxWidth: '500px', textAlign: 'center',marginLeft: "330px"}}>
                <p className=" fs-6">
                 I just returned from the kenya Wildlife Safari trip and I can't stop raving.the trip far exceeded my expectations.Everything from the guides to the accommodations and food was wonderful.Going to Africa was a truly life changing experiecnce
                </p>
                <h5
                  className="fw-bold mt-3"
                  style={{ fontSize: '9px' }}
                >
                  TERI ALLEN
                </h5>
              </div>
            </div>
          </div>

          {/* Slide 3 (same as Slide 1) */}
          <div className="carousel-item" data-bs-interval="2000">
            <div className="text-center">
              <img
                src="https://unitravel.ancorathemes.com/wp-content/uploads/2016/12/testimonials-1.jpg"
                className="rounded-circle d-block mx-auto"
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                }}
                alt="testimonial"
              />
              <div className="mt-4 px-5" style={{maxWidth: '500px', textAlign: 'center',marginLeft: "330px"}}>
                <p className="text-muted fs-6">
                  We have a trip in Cusco and Machu Picchu .From the trip advisory to the local travel guide , all are very professional and dedicate to brint us an enjoyable and unforgettable trip in Peru. Our tour guide is very professional and dedicate to bring us an enjoyable and unforgettable trip in Peru. Our tour guide is very knowledgeable and passionate
                </p>
                <h5
                  className="fw-bold mt-3"
                  style={{ fontSize: '9px' }}
                >
                  LINDA WALKER
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>



    {/* Plan your trip */}
     <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '60px',
          marginLeft: '400px',
          flexDirection: 'column',
          alignItems: 'flex-start'
          
        }}
      >
        <h5
          style={{
            fontFamily: 'Itim, cursive',
            marginLeft: '130px',
            color: 'orange',
            fontWeight: 'bold',
          }}
        >
          Blog
        </h5>
        <h3 style={{ marginLeft: '10px' }}>PLAN YOUR TRIP NOW</h3>
      </div>

      <div>
           <div className="row" >
            <div className="col-2"></div>
            <div className="col-3">
                <img width={'100%'} src="https://images.pexels.com/photos/2884864/pexels-photo-2884864.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                
            </div>
            <div className="col-3">
                <img width={'100%'} src="https://images.pexels.com/photos/1537979/pexels-photo-1537979.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
                        <div className="col-3">
                            <img width={'100%'} src="https://media.istockphoto.com/id/546456042/photo/kanyakumari-mountains.jpg?b=1&s=612x612&w=0&k=20&c=DbHm6IHpU8Z2wdBM-wOr4OJ2Z0GoOQWA3GkKS7RzlbI=" alt="" />
                        </div>

           </div>


           <div className="row" style={{padding: '20px'}}>
            <div className="col-2"></div>
            <div className="col-3">

               <p style={{marginLeft: '80px',fontSize: '10PX'}}>NOV 22,2016</p> 
               <h6 style={{fontWeight:'1', marginLeft: '40px',fontSize: '10px'}}>HOW TO GET ACCLIMATED</h6>    
               <div className="row" style={{marginLeft: '5px'}}>
                <div className="col"  id='row1'><i className="fa-solid fa-user" style={{color: '#ffc800'}}></i>ADAM BROWN</div>
                <div className="col"  id='row1'><i className="fa-solid fa-eye" style={{color: '#fbcc23'}}></i>386</div>
                <div className="col"   id='row1'><i className="fa-solid fa-comment" style={{color: '#ffb005'}}></i>3</div>
               </div>
               </div>

            <div className="col-3">

               <p style={{marginLeft: '117px',fontSize: '10PX'}}>NOV 22,2016</p> 
               <h6 style={{fontWeight:'1', marginLeft: '80px',fontSize: '10px'}}>HOW TO GET ACCLIMATED</h6>    
               <div className="row" style={{marginLeft: '50px'}}>
                <div className="col"  id='row1'><i className="fa-solid fa-user" style={{color: '#ffc800'}}></i>ADAM BROWN</div>
                <div className="col"  id='row1'><i className="fa-solid fa-eye" style={{color: '#fbcc23'}}> </i>107</div>
               </div>

        </div>
                        <div className="col-3">
                            <p style={{marginLeft: '117px',fontSize: '10PX'}}>NOV 22,2016</p> 
               <h6 style={{fontWeight:'1', marginLeft: '80px',fontSize: '10px'}}>HOW TO GET ACCLIMATED</h6>    
               <div className="row" style={{marginLeft: '50px'}}>
                <div className="col" id='row1'><i className="fa-solid fa-user" style={{color: '#ffc800'}}></i>ADAM BROWN</div>
                <div className="col" style={{marginBottom: "100px"}}  id='row1'><i className="fa-solid fa-eye" style={{color: '#fbcc23'}}></i>97</div>
                
               </div>
               
                </div>

           </div>


        

            
                 </div>



 <div>
          


          

        

            
                 </div>




                 
    </div>
      </div>

  );
}

export default About; 