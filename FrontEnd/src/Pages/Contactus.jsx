import React from 'react';
import { Link } from 'react-router-dom';
const ContactUs = () => {
  const containerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '50px',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
  };

  const contentStyle = {
    maxWidth: '800px',
    margin: 'auto',
  };

  const titleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#f1c40f',
  };

  const infoTitleStyle = {
    fontSize: '24px',
    color: '#f1c40f',
  };

  const infoDescriptionStyle = {
    margin: '10px 0 20px',
  };

  const formGroupStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  };

  const inputStyle = {
    width: '48%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: 'black',
    color: 'white',
  };

  const textareaStyle = {
    width: '100%',
    height: '100px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: 'black',
    color: 'white',
    resize: 'none',
  };

  const buttonStyle = {
    backgroundColor: '#f1c40f',
    color: 'black',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#e1b50f',
  };

  return (
    <div style={containerStyle}>
        <a href="/">Back to Home</a>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Get In touch</h1>
        <div className="contact-info" style={{marginBottom:"24px"}}>
          <h2 style={infoTitleStyle}>Don't Be Shy</h2>
          <p style={infoDescriptionStyle}>
            Feel free to get in touch with Us!
          </p>
          <div className="info-details" >
            <p><strong>Email: </strong><a href="mailto:contact@stocktutor.com" style={{ color: '#f1c40f' }}>contact@stocktutor.com</a></p>
            <p><strong>Phone: </strong>+91 85273 32806</p>
            <p><strong>Location: </strong>Plot-269, Udyog Vihar, Phase4, Gurugram</p>
          </div>
        </div>
        <form className="contact-form">
          <div style={formGroupStyle}>
            <input type="text" name="name" placeholder="Name" required style={inputStyle} />
            <input type="email" name="email" placeholder="Email" required style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <input type="tel" name="phone" placeholder="Phone" style={inputStyle} />
            <input type="text" name="company" placeholder="Company" style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <textarea name="message" placeholder="Message" required style={textareaStyle}></textarea>
          </div>
          <button 
            type="submit" 
            style={buttonStyle} 
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
