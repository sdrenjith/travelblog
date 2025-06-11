import React from 'react';

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
                  src="https://images.pexels.com/photos/2884864/pexels-photo-2884864.jpeg?auto=compress&cs=tinysrgb&w=600" 
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
                  src="https://images.pexels.com/photos/1537979/pexels-photo-1537979.jpeg?auto=compress&cs=tinysrgb&w=600" 
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
                  src="https://media.istockphoto.com/id/546456042/photo/kanyakumari-mountains.jpg?b=1&s=612x612&w=0&k=20&c=DbHm6IHpU8Z2wdBM-wOr4OJ2Z0GoOQWA3GkKS7RzlbI=" 
                  alt="Vietnam destination" 
                />
            </div>
           </div>

           <div className="row" style={{padding: '20px'}}>
            <div className="col-2"></div>
            <div className="col-3">
               <h4 style={{marginLeft: '50px'}}>COLOMBIA</h4> 
               <p style={{fontWeight:'1', marginLeft: '15px',fontSize: '10px'}}>Colombia is ripe for discovery, and there is a little bit of everything: green Valleys, golden beaches and snow-capped mountains, colonial fortresses.</p>    
               <button style={{borderRadius: '20px', borderWidth: '2px',marginLeft:'66px'}} type="button" className="btn btn-outline-warning">LEARN MORE</button>
            </div>
            <div className="col-3">
               <h4 style={{marginLeft: '50px'}}>ARGENTINA</h4>
               <p style={{fontWeight:'1', marginLeft: '15px',fontSize: '10px'}}>It has become cliche to say that Argentina is as much European as it is Latin; yet to arrive in Buenos Aires and discover this is actually true still surprise</p>  
               <button style={{borderRadius: '20px', borderWidth: '2px',marginLeft:'66px'}} type="button" className="btn btn-outline-warning">LEARN MORE</button>
            </div>
            <div className="col-3">
               <h4 style={{marginLeft: '50px'}}>VIETNAM</h4>
               <p style={{fontWeight:'1', marginLeft: '15px',fontSize: '10px'}}>But today,the Vietnamese are focused on rocketing into furthure.In this new era of confident self-determination the atmosphere is one of palpable optimism.</p>       
               <button style={{borderRadius: '20px', borderWidth: '2px',marginLeft:'66px'}} type="button" className="btn btn-outline-warning">LEARN MORE</button>
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
                  src="https://images.pexels.com/photos/3361818/pexels-photo-3361818.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Tanzania destination" 
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
                  src="https://media.istockphoto.com/id/544676786/photo/casablanca-mosque.jpg?b=1&s=612x612&w=0&k=20&c=cDPKsrjgN4e9o8sj-gtHaZGaPfvhpJ8lL1bD-Kejgdc=" 
                  alt="Morocco destination" 
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
                  src="https://images.pexels.com/photos/3025835/pexels-photo-3025835.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Ecuador destination" 
                />
            </div>
           </div>

           <div className="row" style={{padding: '20px'}}>
            <div className="col-2"></div>
            <div className="col-3">
               <h4 style={{marginLeft: '50px'}}>TANZANIA</h4> 
               <p style={{fontWeight:'1', marginLeft: '15px',fontSize: '10px'}}>Colombia is ripe for discovery, and there is a little bit of everything: green Valleys, golden beaches and snow-capped mountains, colonial fortresses.</p>    
               <button style={{borderRadius: '20px', borderWidth: '2px',marginLeft:'66px'}} type="button" className="btn btn-outline-warning">LEARN MORE</button>
            </div>
            <div className="col-3">
               <h4 style={{marginLeft: '50px'}}>MOROCCO</h4>
               <p style={{fontWeight:'1', marginLeft: '15px',fontSize: '10px'}}>It has become cliche to say that Argentina is as much European as it is Latin; yet to arrive in Buenos Aires and discover this is actually true still surprise</p>  
               <button style={{borderRadius: '20px', borderWidth: '2px',marginLeft:'66px'}} type="button" className="btn btn-outline-warning">LEARN MORE</button>
            </div>
            <div className="col-3">
               <h4 style={{marginLeft: '50px'}}>ECUADOR</h4>
               <p style={{fontWeight:'1', marginLeft: '15px',fontSize: '10px'}}>But today,the Vietnamese are focused on rocketing into furthure.In this new era of confident self-determination the atmosphere is one of palpable optimism.</p>       
               <button style={{borderRadius: '20px', borderWidth: '2px',marginLeft:'66px'}} type="button" className="btn btn-outline-warning">LEARN MORE</button>
            </div>
           </div>
      </div>
    </div>
  );
}

export default Banner2;