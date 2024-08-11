import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import travel_1 from "../images/travel_1.png";
import travel_2 from "../images/travel_2.png";

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
           {/* <h1 className="text-color">Welcome to Ticket Booking System</h1>*/}
  
          {/*  <Link to="/user/login" className="btn bg-color custom-bg-text">
              Get Started
  </Link>*/}
          </div>
          <div className="col-md-4">
            {/*<img
              src={travel_2}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
/>*/}
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
           {/* <img
              src={travel_1}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
/>*/}
          </div>
          <div className="col-md-8">
           {/* <h1 className="text-color ms-5">
              Real-time Availability and Instant Confirmation
</h1>*/}
            <p className="ms-5">
              
            </p>
            <p className="ms-5">
             
            </p>
          {/*  <Link to="/user/login" className="btn bg-color custom-bg-text ms-5">
              Get Started
</Link>*/}
          </div>
        </div>
      </div>
<div className="map" style={{marginLeft:"25%",marginTop:"5%"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d221682.59781022774!2d72.78111031899797!3d19.060059816691258!3m2!1i1024!2i768!4f13.1!2m1!1smumbai%20metro%20line!5e0!3m2!1sen!2sin!4v1720253726534!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <hr />


      <Footer />
    </div>
  );
};

export default HomePage;
