// const ContactUs = () => {
//   return (
//     <div className="text-color ms-5 me-5 mr-5 mt-3">
//       <b>This is Contact Us component</b>
//     </div>
//   );
// };

// export default ContactUs;
// // 

// import React, { useState } from 'react';
// import './ContactUs.css';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement form submission logic here
//     setSubmitted(true);
//   };

//   return (
//     <div className="contact-container">
//       <header className="contact-header">
//         <h1>Contact Us</h1>
//       </header>
//       <main className="contact-main">
//         <section className="contact-info">
//           <h2>Get in Touch</h2>
//           <p>
//             If you have any questions or need assistance, feel free to reach out to us using the form below or through the contact information provided.
//           </p>
//           <ul>
//             <li><strong>Email:</strong> support@example.com</li>
//             <li><strong>Phone:</strong> (123) 456-7890</li>
//             <li><strong>Address:</strong> 123 Train St, Railway City, RC 45678</li>
//           </ul>
//         </section>
//         <section className="contact-form">
//           <h2>Contact Form</h2>
//           {submitted ? (
//             <p className="success-message">Thank you for reaching out! We will get back to you soon.</p>
//           ) : (
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="name">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="message">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <button type="submit" className="submit-button">Send Message</button>
//             </form>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// };

// export default ContactUs;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

// const ContactUs = () => {
//   return (
//     <div className="container mt-5 mb-5">
//       <header className="text-center mb-4">
//         <h1>Contact Us</h1>
//         <p>We'd love to hear from you! Please fill out the form below or reach out to us through the contact information provided.</p>
//       </header>

//       <div className="row">
//         <div className="col-md-6">
//           <h2>Get in Touch</h2>
//           <form>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Name</label>
//               <input type="text" className="form-control" id="name" placeholder="Your Name" required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email address</label>
//               <input type="email" className="form-control" id="email" placeholder="Your Email" required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="message" className="form-label">Message</label>
//               <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary">Send Message</button>
//           </form>
//         </div>
//         <div className="col-md-6">
//           <h2>Contact Information</h2>
//           <ul className="list-unstyled">
//             <li><strong>Address:</strong> 123 Train Station Road, City, Country</li>
//             <li><strong>Phone:</strong> +123 456 7890</li>
//             <li><strong>Email:</strong> contact@example.com</li>
//             <li><strong>Working Hours:</strong> Mon-Fri, 9 AM - 5 PM</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './ContactUs.css'; // Custom CSS for additional styling if needed

// const ContactUs = () => {
//   return (
//     <div className="container my-5">
//       <header className="text-center mb-4">
//         <h1 className="display-4">Contact Us</h1>
//         <p className="lead">We'd love to hear from you. Reach out to us via any of the methods below.</p>
//       </header>

//       <div className="row">
//         <div className="col-md-6">
//           <h3>Contact Information</h3>
//           <ul className="list-unstyled">
//             <li>
//               <i className="bi bi-telephone"></i> Phone: +1-234-567-890
//             </li>
//             <li>
//               <i className="bi bi-envelope"></i> Email: support@example.com
//             </li>
//             <li>
//               <i className="bi bi-geo-alt"></i> Address: 1234 Main Street, City, Country
//             </li>
//           </ul>
//         </div>

//         <div className="col-md-6">
//           <h3>Send Us a Message</h3>
//           <form>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Name</label>
//               <input type="text" className="form-control" id="name" placeholder="Your Name" required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email address</label>
//               <input type="email" className="form-control" id="email" placeholder="Your Email" required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="message" className="form-label">Message</label>
//               <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary">Send Message</button>
//           </form>
//         </div>
//       </div>

//       <footer className="text-center mt-5">
//         <p className="text-muted">© 2024 Train Ticket Booking System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default ContactUs;


// import React from 'react';
// import './ContactUs.css'; // Import CSS for custom styling

// const ContactUs = () => {
//   return (
//     <div className="container my-5">
//       <header className="text-center mb-4">
//       <h1 className="contact-us-title">Contact Us</h1>
     
//         <p>We'd love to hear from you! Please reach out with any questions or feedback.</p>
//       </header>

//       <div className="contact-container">
//            {/* <h2>Contact Us</h2> */}
//            <div className="contact-grid">
//                 <div className="contact-section">
//                      <h3>METRO CONNECT RAIL ADMINISTRATIVE BUILDING</h3>
//                     <p>Metro Rail Depot, Uppal Main Road,<br/>
//                     Shivaji Nagar, Pune - 411003.</p>
//                     <p>
//                         <strong>📞</strong> +91 70 1296 2675 (6:00 to 22:00 - Open All Days)<br/>
//                          <strong>📠</strong> +91 70 2312 3015
//                    </p>
                    
//                 </div>
//                 <div className="contact-section">
//                     <h3><u>COMPLAINTS & SUGGESTIONS</u></h3>
//                     <p>Please share your feedback with us.</p>
//                     <p>
//                         <strong>📞</strong> +91 40 2333 2555<br/>
//                         <strong>📧</strong> customerservice@ltmetro.com
//                     </p>
//                      <h3><u>FOR COMMERCIAL SHOOT</u></h3>
//                      <p>For film / commercial shoots at  Metro Connect Rail please contact:</p>
//                      <p>
//                         <strong>📧</strong> ccd@ltmetro.com
//                     </p>
//                 </div>
//             </div>
//        </div>

//       {/* <div className="row">
//         <div className="col-md-6">
//           {<form className="contact-form">
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Name</label>
//               <input type="text" className="form-control" id="name" placeholder="Your Name" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email address</label>
//               <input type="email" className="form-control" id="email" placeholder="Your Email" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="message" className="form-label">Message</label>
//               <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary">Send Message</button>
//           </form> 
//           }
//         </div> */}
//         <div className="col-md-6">
//           <div className="contact-details">
//             <h4><u>Contact Information</u></h4>
//             <p><i className="bi bi-telephone"></i> +91 789 489 7890</p>
//             <p><i className="bi bi-envelope"></i> support@example.com</p>
//             <p><i className="bi bi-geo-alt"></i> 1234 Metro Street, Hyderabad, India</p>
//             <div className="map mt-4">
//               {/* <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.509285587209!2d78.4766850143348!3d17.38504498805941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16e17b1b53d3%3A0x24f5e8ebd4b7760!2sHyderabad%2C%20India!5e0!3m2!1sen!2sus!4v1637638234604!5m2!1sen!2sus"
//                 width="100%"
//                 height="250"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 title="Google Maps"
//               ></iframe> */}
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default ContactUs;


// // import React from 'react';
// // import './ContactUs.css';

// // const ContactUs = () => {
// //     return (
// //         <div className="contact-container">
// //             <h2>Contact Us</h2>
// //             <div className="contact-grid">
// //                 <div className="contact-section">
// //                     <h3>HYDERABAD METRO RAIL ADMINISTRATIVE BUILDING</h3>
// //                     <p>Hyderabad Metro Rail Depot, Uppal Main Road,<br/>
// //                     Uppal, Hyderabad - 500039.</p>
// //                     <p>
// //                         <strong>📞</strong> +91 40 2333 2555 (6:00 to 22:00 - Open All Days)<br/>
// //                         <strong>📠</strong> +91 40 2312 3015
// //                     </p>
                    
// //                 </div>
// //                 <div className="contact-section">
// //                     <h3>COMPLAINTS & SUGGESTIONS</h3>
// //                     <p>Please share your feedback with us.</p>
// //                     <p>
// //                         <strong>📞</strong> +91 40 2333 2555<br/>
// //                         <strong>📧</strong> customerservice@ltmetro.com
// //                     </p>
// //                     <h3>FOR COMMERCIAL SHOOT</h3>
// //                     <p>For film / commercial shoots at Hyderabad Metro Rail please contact:</p>
// //                     <p>
// //                         <strong>📧</strong> ccd@ltmetro.com
// //                     </p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ContactUs;


// import React from 'react';
// import './ContactUs.css'; // Import CSS for custom styling

// const ContactUs = () => {
//   return (
//     <div className="container my-5">
//       <header className="text-center mb-4">
//         <h1 className="contact-us-title">Contact Us</h1>
//         <p>We'd love to hear from you! Please reach out with any questions or feedback.</p>
//       </header>

//       <div className="contact-container">
//         <div className="contact-grid">
//           <div className="contact-section">
//             <h3>METRO CONNECT RAIL ADMINISTRATIVE BUILDING</h3>
//             <p>Metro Rail Depot, Uppal Main Road,<br/>
//                Shivaji Nagar, Pune - 411003.</p>
//             <p>
//               <strong>📞</strong> +91 70 1296 2675 (6:00 to 22:00 - Open All Days)<br/>
//               <strong>📠</strong> +91 70 2312 3015
//             </p>
//           </div>
          
//           <div className="contact-section">
//             <h3><u>COMPLAINTS & SUGGESTIONS</u></h3>
//             <p>Please share your feedback with us.</p>
//             <p>
//               <strong>📞</strong> +91 40 2333 2555<br/>
//               <strong>📧</strong> customerservice@ltmetro.com
//             </p>
//             <h3><u>FOR COMMERCIAL SHOOT</u></h3>
//             <p>For film / commercial shoots at Metro Connect Rail please contact:</p>
//             <p>
//               <strong>📧</strong> ccd@ltmetro.com
//             </p>
//           </div>
//         </div>
        
//         <div className="contact-details">
//           <h4><u>Contact Information</u></h4>
//           <p><i className="bi bi-telephone"></i> +91 789 489 7890</p>
//           <p><i className="bi bi-envelope"></i> support@example.com</p>
//           <p><i className="bi bi-geo-alt"></i> 1234 Metro Street, Hyderabad, India</p>
//           <div className="map mt-4">
//             {/* <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.509285587209!2d78.4766850143348!3d17.38504498805941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16e17b1b53d3%3A0x24f5e8ebd4b7760!2sHyderabad%2C%20India!5e0!3m2!1sen!2sus!4v1637638234604!5m2!1sen!2sus"
//               width="100%"
//               height="250"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               title="Google Maps"
//             ></iframe> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;



import React from 'react';
import './ContactUs.css'; // Import CSS for custom styling

const ContactUs = () => {
  return (
    <div className="container my-5">
      <h1 className="contact-us-title">Contact Us</h1>
      <header className="text-center mb-4">
        <p>We'd love to hear from you! Please reach out with any questions or feedback.</p>
      </header>

      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-section">
            <h3>METRO CONNECT RAIL ADMINISTRATIVE BUILDING</h3>
            <p>
              Metro Rail Depot, Uppal Main Road,<br/>
              Shivaji Nagar, Pune - 411003.
            </p>
            <p>
              <strong>📞</strong> +91 70 1296 2675 (6:00 to 22:00 - Open All Days)<br/>
              <strong>📠</strong> +91 70 2312 3015
            </p>
          </div>
          
          <div className="contact-section">
            <h3><u>COMPLAINTS & SUGGESTIONS</u></h3>
            <p>Please share your feedback with us.</p>
            <p>
              <strong>📞</strong> +91 40 2333 2555<br/>
              <strong>📧</strong> customerservice@ltmetro.com
            </p>
            <h3><u>FOR COMMERCIAL SHOOT</u></h3>
            <p>For film / commercial shoots at Metro Connect Rail please contact:</p>
            <p>
              <strong>📧</strong> ccd@ltmetro.com
            </p>
          </div>
        </div>
        
        <div className="contact-details">
          <h4><u>Contact Information</u></h4>
          <p><i className="bi bi-telephone"></i> +91 789 489 7890</p>
          <p><i className="bi bi-envelope"></i> support@example.com</p>
          <p><i className="bi bi-geo-alt"></i> 1234 Metro Street, Hyderabad, India</p>
          <div className="map mt-4">
            {/* Uncomment and replace with your map URL when ready */}
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.509285587209!2d78.4766850143348!3d17.38504498805941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16e17b1b53d3%3A0x24f5e8ebd4b7760!2sHyderabad%2C%20India!5e0!3m2!1sen!2sus!4v1637638234604!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
