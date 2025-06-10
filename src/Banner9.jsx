import React from 'react';

function Banner9() {
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
          Team
        </h5>
        <h3 style={{ marginLeft: '50px' }}>Our Guides</h3>
      </div>

      <div>
           <div className="row">
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

               <h4 style={{marginLeft: '50px'}}>COLOMBIA</h4> 
               <p style={{fontWeight:'1', marginLeft: '15px',fontSize: '10px'}}>Colombia is ripe for discovery, and there is a little bit of everything: green Valleys, golden beaches and snow-capped mountains, colonial fortresses.</p>    
               <button style={{borderRadius: '20px', borderWidth: '2px',marginLeft:'66px'}} type="button" class="btn btn-outline-warning">LEARN MORE</button>
                      </div>
            <div className="col-3">

<h4  style={{marginLeft: '50px'}}>ARGENTINA</h4>
<p style={{fontWeight:'1', marginLeft: '15px',fontSize: '10px'}}>It has become cliche to say that Argentina is as much European as it is Latin; yet to arrive in Buenos Aires and discover this is actually true still surprise</p>  
<button style={{borderRadius: '20px', borderWidth: '2px',marginLeft:'66px'}} type="button" class="btn btn-outline-warning">LEARN MORE</button>          </div>
                        <div className="col-3">
<h4  style={{marginLeft: '50px'}}>VIETNAM</h4>
<p style={{fontWeight:'1', marginLeft: '15px',fontSize: '10px'}}>But today,the Vietnamese are focused on rocketing into furthure.In this new era of confident self-determination the atmosphere is one of palpable optimism.</p>       
<button style={{borderRadius: '20px', borderWidth: '2px',marginLeft:'66px'}} type="button" class="btn btn-outline-warning">LEARN MORE</button>                 </div>

           </div>


        

            
                 </div>



 <div>


          


        

            
                 </div>




                 
    </div>
  );
}

export default Banner9;
