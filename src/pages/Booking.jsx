import React, { useRef } from 'react'
import emailjs from 'emailjs-com';

function Booking() {

    


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4f4fhbi',     // ✅ your Service ID
      'template_dna836s',     // ✅ your Template ID (check in EmailJS)
      form.current,
      'rrf3ari749KxgfBFs' // ✅ your Public key (EmailJS dashboard > Account > API Keys)
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send message. Try again.');
      }
    );

    e.target.reset(); // reset form after send
  };

  return (
    <div >
      

      {/* reach out of expirence */}

        <div style={{marginTop: '100px',marginBottom: '200px'}}>
          <h1 style={{marginLeft: "330px"}}>REACH OUT FOR THE BEST <br /> <span style={{color: 'orange', marginLeft: '140px'}}>EXPERIENCE</span> </h1>

          <form ref={form} onSubmit={sendEmail} style={{marginLeft: '400px',marginTop: '50px'}}>
            <label style={{marginRight: '75px'}}>Name</label>
              <input style={{backgroundColor: 'white',borderColor: 'white',borderRadius: '10px',borderColor:'black'}} type="text" name="name" placeholder='Type your Name....' required />
 <br /><br />
              <label style={{marginRight: '7px'}}>Phone Number</label>
              <input style={{backgroundColor: 'white',borderColor: 'white',borderRadius: '10px',borderColor:'black'}} type="text" name="phone" placeholder='Type your Phone Number....' required />
              <br /><br />
              <label style={{marginRight: '75px'}}>Email</label>
              <input style={{backgroundColor: 'white',borderColor: 'white',borderRadius: '10px',borderColor:'black'}} type="email" name="email" placeholder='Type your Email....' required />
              <br /><br />
              <label style={{marginRight: '52px'}}>Message</label>
              <textarea style={{backgroundColor: 'white',borderColor: 'white',borderRadius: '10px',borderColor:'black'}} name="message" placeholder='Type your Message....' required />
              
                 <button style={{
          backgroundColor: "orange",
          color: "white",
          border: "none",
          padding: "15px 40px",
          borderRadius: "30px",
          fontSize: "16px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          boxShadow: "0 4px 12px rgba(249, 115, 22, 0.2)",
          marginLeft: "180px",
          marginTop: "50px"
        }}   type="submit"
        >
          BOOK YOUR TRAVEL
        </button>
          </form>
        </div>
    </div>
  )
}

export default Booking;
