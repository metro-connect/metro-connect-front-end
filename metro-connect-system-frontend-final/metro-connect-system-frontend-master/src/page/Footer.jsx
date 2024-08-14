import { Link } from "react-router-dom";
import React from "react";


const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h5>Metro Connect</h5>
            <p>
              Connecting you to the city's transport <br></br>network with ease and
              efficiency.
            </p>
          </div>
          <div className="col-md-4" >
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/user/login" className="text-white">
                 Login
                </a>
              </li>
             
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>
              <i className="fa fa-envelope"></i> support@metroconnect.com
            </p>
            <p>
              <i className="fa fa-phone"></i> +91 (800) 123-4567
            </p>
            <p>
              <i className="fa fa-map-marker"></i> Mumbai Metro Ltd, Maharashtra
            </p>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2024 Metro Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

