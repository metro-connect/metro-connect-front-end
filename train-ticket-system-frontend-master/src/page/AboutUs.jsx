// import React from 'react';
// import './AboutUs.css'; // Create and import a CSS file for custom styles

// const AboutUs = () => {
//   return (
//     <div className="about-us-container">
//       <h1>About Us</h1>
//       <p>
//         Welcome to the Train Ticket Booking System. We aim to provide the best service for booking train tickets easily and efficiently.
//       </p>
//       <p>
//         Our platform offers a user-friendly interface, secure payment options, and real-time updates on train schedules.
//       </p>
//       <div className="about-us-image">
//         <img src="path/to/your/image.jpg" alt="Train" />
//       </div>
//     </div>
//   );
// };

// export default AboutUs;



import React from 'react';
import './AboutUs.css'; // Import custom CSS for styling
import aboutImage from '../images/abtback1.jpg'; // Ensure this path is correct

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header text-center">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-subtitle">Learn more about our mission and values</p>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={aboutImage} alt="About Us" className="about-us-image img-fluid" />
          </div>
          <div className="col-lg-6">
            <div className="about-us-content">
              <h2>Who We Are</h2>
              <p>
                Welcome to our Train Ticket Booking System! Our platform is dedicated to providing you with a seamless ticket booking experience. Our mission is to make train travel easy and convenient for everyone.
              </p>
              <h3>Our Vision</h3>
              <p>
                We aim to revolutionize the way people travel by offering a reliable and user-friendly ticketing solution. Our team is committed to innovation and customer satisfaction.
              </p>
              <h3>Our Values</h3>
              <ul>
                <li>Customer Focus</li>
                <li>Innovation</li>
                <li>Integrity</li>
                <li>Excellence</li>
              </ul>
              <p>
                Thank you for choosing us. We look forward to serving you and ensuring a comfortable and enjoyable journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
