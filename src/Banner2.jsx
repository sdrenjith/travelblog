import React from 'react';
import { useNavigate } from 'react-router-dom';

function Banner2() {
  const imageStyle = {
    width: '100%',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  const imageHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
    filter: 'brightness(1.1)'
  };

  const navigate = useNavigate();

  const goToBooking = () => {
    navigate('/booking');
  };

  

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '60px',
          marginLeft: '400px',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <h5
          style={{
            fontFamily: 'Itim, cursive',
            marginLeft: '100px',
            color: 'orange',
            fontWeight: 'bold',
          }}
        >
          Tours
        </h5>
        <h3 style={{ marginLeft: '10px' }}>Other destinations</h3>
      </div>

      <div>
           <div className="row">
            <div className="col-2"></div>
            <div className="col-3">
                <img 
                  style={imageStyle}
                  height={'173px'}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                    e.target.style.filter = 'brightness(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    e.target.style.filter = 'brightness(1)';
                  }}
                  src="https://images.pexels.com/photos/26524492/pexels-photo-26524492/free-photo-of-close-up-of-a-myna-perched-on-a-branch.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Colombia destination" 
                />
            </div>
            <div className="col-3">
                <img 
                  style={imageStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                    e.target.style.filter = 'brightness(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    e.target.style.filter = 'brightness(1)';
                  }}
                  src="https://th.bing.com/th/id/OSK.HEROfSJ40JoMCCMHeGGu69xzr8qVgjaRyiYz-DCTqBKpKV4?w=312&h=200&c=7&rs=1&o=6&dpr=1.5&pid=SANGAM" 
                  alt="Argentina destination" 
                />
            </div>
            <div className="col-3">
                <img 
                  style={imageStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                    e.target.style.filter = 'brightness(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    e.target.style.filter = 'brightness(1)';
                  }}
                  src="https://images.pexels.com/photos/12475573/pexels-photo-12475573.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Vietnam destination" 
                />
            </div>
           </div>

           <div className="row" style={{padding: '20px'}}>
            <div className="col-2"></div>
            <div className="col-3">
               <h4 style={{marginLeft: '50px'}}>DIGLIPUR</h4> 
               <p style={{fontWeight:'1', marginLeft: '15px',fontSize: '10px'}}>Diglipur is ripe for discovery, offering a little bit of everything — lush green forests, serene beaches, crystal-clear rivers, and the majestic Saddle Peak, the highest point in the Andaman Islands. A hidden gem waiting to be explored.</p>    
               <button style={{borderRadius: '20px', borderWidth: '2px',marginLeft:'66px'}} type="button" className="btn btn-outline-warning" onClick={goToBooking}>LEARN MORE</button>
            </div>
            <div className="col-3">
               <h4 style={{marginLeft: '50px'}}>BARATANG</h4>
               <p style={{fontWeight:'1', marginLeft: '15px',fontSize: '10px'}}>It might sound like a cliché to say Baratang feels both wild and peaceful — but the moment you witness its dense mangrove forests, limestone caves, and the rare mud volcano, you'll be amazed that such untouched beauty still exists.</p>  
               <button style={{borderRadius: '20px', borderWidth: '2px',marginLeft:'66px'}} type="button" className="btn btn-outline-warning" onClick={goToBooking}>LEARN MORE</button>
            </div>
            <div className="col-3">
               <h4 style={{marginLeft: '50px'}}>HAVELOCK</h4>
               <p style={{fontWeight:'1', marginLeft: '15px',fontSize: '10px'}}>
But today,the Vietnamese are focused on rocketing into furthure.In this new era of confident self-determination the atmosphere is one of palpable optimism.</p>       
               <button style={{borderRadius: '20px', borderWidth: '2px',marginLeft:'66px'}} type="button" className="btn btn-outline-warning" onClick={goToBooking}>LEARN MORE</button>
            </div>
           </div>
      </div>

      <div>
           <div className="row">
            <div className="col-2"></div>
            <div className="col-3">
                <img 
                  style={imageStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                    e.target.style.filter = 'brightness(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    e.target.style.filter = 'brightness(1)';
                  }}
                  src="https://th.bing.com/th/id/OSK.HERO2VO1uFErHZIjEsJaEEFjswDE49C2fsSuFmG2JDYp6RY?w=312&h=200&c=15&rs=2&o=6&dpr=1.5&pid=SANGAM" 
                  alt="Tanzania destination" 
                />
            </div>
            <div className="col-3">
                <img 
                height={'170px'}
                  style={imageStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                    e.target.style.filter = 'brightness(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    e.target.style.filter = 'brightness(1)';
                  }}
                  src="https://th.bing.com/th/id/R.5691088987fd0812abe9eaae0d72b6a6?rik=3s526oooiQbanA&riu=http%3a%2f%2fwww.go2india.in%2fandaman%2fimages%2fwandoorbeach.JPG&ehk=IhhS3cg0Z%2fIAnStTa4rU8Gymv4IbbCmsWZdaSrJc8DM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" 
                  alt="Morocco destination" 
                />
            </div>
            <div className="col-3">
                <img 
                 height={'170px'}
                  style={imageStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                    e.target.style.filter = 'brightness(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    e.target.style.filter = 'brightness(1)';
                  }}
                  src="https://www.tourmyindia.com/states/andaman/images/viper-island1.jpg" 
                  alt="Ecuador destination" 
                />
            </div>
           </div>

           <div className="row" style={{padding: '20px'}}>
            <div className="col-2"></div>
            <div className="col-3">
               <h4 style={{marginLeft: '50px'}}>NORTHBAY</h4> 
               <p style={{fontWeight:'1', marginLeft: '15px',fontSize: '10px'}}>North Bay is a treasure waiting to be explored, offering a bit of everything — vibrant coral reefs, golden sandy beaches, clear blue waters, and thrilling underwater adventures. It’s a paradise for nature lovers and adventure seekers alike.</p>    
               <button style={{borderRadius: '20px', borderWidth: '2px',marginLeft:'66px'}} type="button" className="btn btn-outline-warning" onClick={goToBooking}>LEARN MORE</button>
            </div>
            <div className="col-3">
               <h4 style={{marginLeft: '50px'}}>WANDOOR</h4>
               <p style={{fontWeight:'1', marginLeft: '15px',fontSize: '10px'}}>It may sound like a cliché to say Wandoor is both serene and spectacular — but arriving at its peaceful shores, lush forests, and coral-rich marine park still manages to surprise and delight every traveler.</p>  
               <button style={{borderRadius: '20px', borderWidth: '2px',marginLeft:'66px'}} type="button" className="btn btn-outline-warning" onClick={goToBooking}>LEARN MORE</button>
            </div>
            <div className="col-3">
               <h4 style={{marginLeft: '50px'}}>VIPER</h4>
               <p style={{fontWeight:'1', marginLeft: '15px',fontSize: '10px'}}>Once marked by its colonial past, Viper Island now looks ahead with quiet strength. In this new era of restoration and remembrance, the island carries an air of calm resilience and timeless beauty.</p>       
               <button style={{borderRadius: '20px', borderWidth: '2px',marginLeft:'66px'}} type="button" className="btn btn-outline-warning" onClick={goToBooking}>LEARN MORE</button>
            </div>
           </div>
      </div>
    </div>
  );
}

export default Banner2;