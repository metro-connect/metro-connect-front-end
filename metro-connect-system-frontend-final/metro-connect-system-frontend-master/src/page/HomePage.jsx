import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import travel_1 from "../images/travel_1.png";
import travel_2 from "../images/travel_2.png";
import TravelGuide from "./TravelGuide"
import metroline from "../images/metrolines.png"

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
           { <h1 className="text-color">Welcome to Metro Connect </h1>}
           <p>
        Metro Connect is your go-to solution for navigating the city’s transportation network with ease.
         Whether you're a daily commuter or a tourist, our app offers latest information and tools to streamline your travel experience.
      </p>
      <h2>Key Features:</h2>
      <ul>
        <li><strong>Updates on the Go :</strong> Get updates on schedules, delays, and service changes.</li>
        <li><strong>Route Planning:</strong> Easily plan your trips with our route map.</li>
        <li><strong>Fare Information:</strong> Access detailed fare information and payment options.</li>
        <li><strong>Accessibility:</strong> Find accessible stations and facilities for a comfortable journey.</li>
      </ul>
      <p>
        With Metro Connect, you can navigate the city's public transport system more efficiently and confidently. 
        Explore our app and start planning your journeys today!
      </p>
          {  <Link to="/user/customer/register" className="btn bg-color custom-bg-text">
              Get Started </Link>}
          </div>
          <div className="col-md-4">
            {<img
              src={travel_2}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"/>}
          </div>
        </div>
          
        <div className="row mt-5">
          <div className="col-md-4">
           { <img
              src={travel_1}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"/>}
          </div>
          <div className="col-md-7">
           { <h1 className="text-color ms-6"  >
             Availability and Instant Confirmation </h1>}
              <p>
                In our Metro Connect app, we prioritize keeping you informed with the most up-to-date information and 
                ensuring a seamless user experience. With our new feature, Latest Information Availability and Instant Confirmation, 
                you can stay informed and confirm details in real-time, right at your fingertips.
              </p>
            <ul>
                <li>
                  This feature is seamlessly integrated into the Metro Connect app, making it easy 
                  for you to manage and confirm your travel arrangements without switching between different platforms or applications.
                </li>
                <li>
                  By incorporating the Latest Information Availability and Instant Confirmation feature, 
                  we aim to enhance your travel experience, providing you with the reliability and convenience you need 
                  to make the most out of your journey with Metro Connect.
                </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="container">
  <div className="row mt-5">
    <div className="col-md-6"  >
      <h3 className="text-center">Metro Stations Map</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d221682.59781022774!2d72.78111031899797!3d19.060059816691258!3m2!1i1024!2i768!4f13.1!2m1!1smumbai%20metro%20line!5e0!3m2!1sen!2sin!4v1720253726534!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div className="col-md-6 ms-auto">
      <h1 className="text-color ms-6 text-center " > Enhanced Navigation</h1>
        <p className="ps-5 ">
          The Metro Station locations map helps you effortlessly find nearby stations in just a few clicks, check real-time updates on station services, 
          and find out about facilities like restrooms, accessibility options, and nearby amenities. With just a few clicks,
          you can plan your route, make informed decisions, and ensure a hassle-free journey on the metro.
        </p>
        <h1 className="text-color ms-6 text-center " > Metro Lines</h1>
        <img src={metroline}></img>

      
    </div>
  </div>
</div>
      <TravelGuide/>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
