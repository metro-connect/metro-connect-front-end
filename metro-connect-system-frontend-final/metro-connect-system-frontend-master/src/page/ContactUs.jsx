
import React from 'react';
import './ContactUs.css'; // Import CSS for custom styling

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <header className="contact-us-header text-center mb-4">
        <h1 className="contact-us-title">Contact Us</h1>
        <p className="contact-us-subtitle">We’re here to help! Feel free to reach out with any questions, feedback, or suggestions.</p>
      </header>

      <div className="contact-info">
        <div className="contact-grid">
          <div className="contact-section">
            <h3><u>METRO CONNECT RAIL ADMINISTRATIVE BUILDING</u></h3>
            <p>Metro Rail Depot, Uppal Main Road,<br />
              Mumbai, Maharashtra </p>
            <p>
              <strong>📞</strong> +91 70 1296 2675 (6:00 to 22:00 - Open All Days)<br />
              <strong>📠</strong> +91 70 2312 3015
            </p>
          </div>
          <div className="contact-section">
            <h3><u>COMPLAINTS & SUGGESTIONS</u></h3>
            <p>Please share your feedback with us.</p>
            <p>
              <strong>📞</strong> +91 40 2333 2555<br />
              <strong>📧</strong> customerservice@metroconnect.com
            </p>
            <h3><u>FOR COMMERCIAL SHOOT</u></h3>
            <p>For film / commercial shoots at Metro Connect Rail please contact:</p>
            <p>
              <strong>📧</strong> ccd@metroconnect.com
            </p>
          </div>
        </div>
      </div>

      <div className="contact-details">
        <h4><u>Contact Information</u></h4>
        <p><i className="bi bi-telephone"></i> +91 983 456 7890</p>
        <p><i className="bi bi-envelope"></i> support@metroconnect.com</p>
        <p><i className="bi bi-geo-alt"></i> 1234 Mumbai, Maharashtra </p>
        
      </div>
    </div>
  );
};

export default ContactUs;