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
    
    // Carousel state
    const [currentSlide, setCurrentSlide] = useState(0);
  
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

    // Carousel images
    const images = [
      "https://images.pexels.com/photos/7970786/pexels-photo-7970786.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/30188165/pexels-photo-30188165/free-photo-of-colorful-boat-on-crystal-clear-waters-in-port-blair.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/28581876/pexels-photo-28581876/free-photo-of-beautiful-tropical-seascape-with-limestone-cliffs.jpeg?auto=compress&cs=tinysrgb&w=600"
    ];

    // Carousel functions
    const goToSlide = (slideIndex) => {
      setCurrentSlide(slideIndex);
    };

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
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
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
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
      <div className="container my-5 p-4">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2 className="mb-3" style={{ fontWeight: "300", fontSize: "2rem", color: "orange",fontFamily: 'Satisfy, cursive', }}>
              Explore with Us
            </h2>
            <h3 className="mb-3" style={{ fontWeight: "700", fontSize: "1.8rem", color: "#3f3f3f" }}>
              Discover the World, One Journey at a Time
            </h3>
            <p className="mb-4" style={{ color: "#3f3f3f", fontSize: "0.8rem",lineHeight:'1.8',fontWeight:'normal',maxWidth: '60%' }}>
              Embark on a journey of discovery with us. From pristine beaches to cultural landmarks,
              we bring you closer to the world's most captivating destinations. Our expertly curated
              packages ensure an unforgettable travel experience tailored to your dreams commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
            </p>
          </div>

          {/* Image Carousel Section */}
          <div className="col-12 col-md-6" style={{paddingLeft:'100px'}}>
            <div className="position-relative carousel-container">
              {/* Add custom styles */}
              <style>
                {`
                  .carousel-container {
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s ease;
                  }
                  
                  .carousel-container:hover {
                    transform: scale(1.02);
                  }

                  .carousel-nav-button {
                    opacity: 0;
                    transition: all 0.3s ease;
                    background: rgba(0, 0, 0, 0.6) !important;
                    border: none !important;
                    width: 40px;
                    height: 40px;
                    border-radius: 50% !important;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }

                  .carousel-container:hover .carousel-nav-button {
                    opacity: 1;
                  }

                  .carousel-nav-button:hover {
                    background: rgba(0, 0, 0, 0.8) !important;
                    transform: scale(1.1);
                  }

                  .carousel-indicator {
                    transition: all 0.3s ease;
                    transform: scale(1);
                  }

                  .carousel-indicator:hover {
                    transform: scale(1.2);
                  }

                  .carousel-image {
                    transition: transform 0.5s ease;
                  }

                  .carousel-image:hover {
                    transform: scale(1.05);
                  }

                  @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                  }

                  .fade-in {
                    animation: fadeIn 0.5s ease-in;
                  }
                `}
              </style>

              {/* Navigation bars/indicators */}
              <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4" style={{zIndex: 10}}>
                <div className="d-flex gap-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => goToSlide(index)}
                      className={`carousel-indicator btn p-0 ${currentSlide === index ? 'bg-white' : 'bg-white opacity-50'}`}
                      style={{
                        width: '40px',
                        height: '4px',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '2px'
                      }}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Images */}
              <div className="rounded overflow-hidden">
                <div 
                  style={{
                    display: 'flex',
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: 'transform 0.5s ease-in-out'
                  }}
                >
                  {images.map((src, index) => (
                    <div key={index} style={{flexShrink: 0, width: '100%'}}>
                      <img
                        style={{
                          width: '700px', 
                          height: '340px', 
                          objectFit: 'cover'
                        }}
                        src={src}
                        className="d-block w-100 carousel-image"
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Previous button */}
              <button 
                className="carousel-nav-button position-absolute top-50 start-0 translate-middle-y btn ms-3"
                type="button" 
                onClick={prevSlide}
              >
                <span aria-hidden="true" style={{color: 'white', fontSize: '24px'}}>&lsaquo;</span>
                <span className="visually-hidden">Previous</span>
              </button>

              {/* Next button */}
              <button 
                className="carousel-nav-button position-absolute top-50 end-0 translate-middle-y btn me-3"
                type="button" 
                onClick={nextSlide}
              >
                <span aria-hidden="true" style={{color: 'white', fontSize: '24px'}}>&rsaquo;</span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            {/* Add description section below carousel */}
           
          </div>
        </div>
      </div>

      {/* Rest of your component remains the same */}
      <div className="row mt-5 pt-5">
        <div className="row container" style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="col-1"></div>
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
                  src="https://i.pinimg.com/736x/76/92/47/76924770ea8177d35e37542d13595ac5.jpg"
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

            {/* Slide 2 */}
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

            {/* Slide 3 */}
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


      {/* gallary */}
     
     <div className='marquee-container'>
      <div className='marquee-track'>

        <img src="https://images.pexels.com/photos/7970786/pexels-photo-7970786.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
         <img src="https://images.pexels.com/photos/28581876/pexels-photo-28581876/free-photo-of-beautiful-tropical-seascape-with-limestone-cliffs.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <img src="https://images.pexels.com/photos/10914023/pexels-photo-10914023.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           <img src="https://images.pexels.com/photos/30188165/pexels-photo-30188165/free-photo-of-colorful-boat-on-crystal-clear-waters-in-port-blair.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

           {/* repeat again for looping effect */}

           <img src="https://images.pexels.com/photos/10794420/pexels-photo-10794420.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
         <img src="https://images.pexels.com/photos/10794387/pexels-photo-10794387.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <img src="https://images.pexels.com/photos/7970769/pexels-photo-7970769.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           <img src="https://images.pexels.com/photos/16827207/pexels-photo-16827207/free-photo-of-sea-coast-with-island.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

      </div>
     </div>
     





      {/* Plan your trip */}
      {/* <div>
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
                <div className="col" id='row1'><i className="fa-solid fa-user" style={{color: '#ffc800'}}></i>ADAM BROWN</div>
                <div className="col" id='row1'><i className="fa-solid fa-eye" style={{color: '#fbcc23'}}></i>386</div>
                <div className="col" id='row1'><i className="fa-solid fa-comment" style={{color: '#ffb005'}}></i>3</div>
              </div>
            </div>

            <div className="col-3">
              <p style={{marginLeft: '117px',fontSize: '10PX'}}>NOV 22,2016</p> 
              <h6 style={{fontWeight:'1', marginLeft: '80px',fontSize: '10px'}}>HOW TO GET ACCLIMATED</h6>    
              <div className="row" style={{marginLeft: '50px'}}>
                <div className="col" id='row1'><i className="fa-solid fa-user" style={{color: '#ffc800'}}></i>ADAM BROWN</div>
                <div className="col" id='row1'><i className="fa-solid fa-eye" style={{color: '#fbcc23'}}></i>107</div>
              </div>
            </div>

            <div className="col-3">
              <p style={{marginLeft: '117px',fontSize: '10PX'}}>NOV 22,2016</p> 
              <h6 style={{fontWeight:'1', marginLeft: '80px',fontSize: '10px'}}>HOW TO GET ACCLIMATED</h6>    
              <div className="row" style={{marginLeft: '50px'}}>
                <div className="col" id='row1'><i className="fa-solid fa-user" style={{color: '#ffc800'}}></i>ADAM BROWN</div>
                <div className="col" style={{marginBottom: "100px"}} id='row1'><i className="fa-solid fa-eye" style={{color: '#fbcc23'}}></i>97</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;