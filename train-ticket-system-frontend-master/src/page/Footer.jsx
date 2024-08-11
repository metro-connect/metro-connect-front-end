// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div>
//       <div class="container my-5">
//         <footer class="text-center text-lg-start text-color">
//           <div class="container-fluid p-4 pb-0">
//             <section class="">
//               <div class="row">
//                 <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
//                   <h5 class="text-uppercase text-color">
                  
//                   </h5>

//                   <p>
                    
//                   </p>
//                 </div>

//                 <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
//                   <h5 class="text-uppercase text-color-4"></h5>

//                   <ul class="list-unstyled mb-0">
//                     <li>
//                       <a href="#!" class="text-color">
                        
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#!" class="text-color">
                      
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#!" class="text-color">
                        
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#!" class="text-color">
                        
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
//                   <h5 class="text-uppercase text-color-4"></h5>

//                   <ul class="list-unstyled mb-0">
//                     <li>
//                       <a href="#!" class="text-color">
                      
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#!" class="text-color">
                      
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#!" class="text-color">
                        
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#!" class="text-color">
                      
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
//                   <h5 class="text-uppercase text-color-4"></h5>

//                   <ul class="list-unstyled mb-0">
//                     <li>
//                       <a href="#!" class="text-color">
                       
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#!" class="text-color">
                      
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#!" class="text-color">
                        
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#!" class="text-color">
                      
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
//                   <h5 class="text-uppercase text-color-4"></h5>

//                   <ul class="list-unstyled mb-0">
//                     <li>
//                       <a href="#!" class="text-color">
                        
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#!" class="text-color">
                        
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#!" class="text-color">
                        
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#!" class="text-color">
                        
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </section>

//             <hr class="mb-4" />

//             <section class="">
//               <p class="d-flex justify-content-center align-items-center">
//                 <span class="me-3 text-color">Login from here</span>
//                 <Link to="/user/login" class="active">
//                   <button
//                     type="button"
//                     class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
//                   >
//                     Log in
//                   </button>
//                 </Link>
//               </p>
//             </section>

//             <hr class="mb-4" />
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Footer;



import { Link } from "react-router-dom";
import "./Footer.css"; // Assuming you have a custom CSS file for additional styles
import logo from "../images/logo.png"; // Assuming you have a logo image

const Footer = () => {
  return (
    <div>
      <div className="container my-5">
        <footer className="text-center text-lg-start text-color bg-dark py-4">
          <div className="container-fluid p-4 pb-0">
            <section>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <img src={logo} alt="Logo" width="150" className="mb-3" />
                  <h5 className="text-uppercase text-color">About Us</h5>
                  <p>
                    We are committed to providing a seamless and convenient ticket booking experience for our customers.
                  </p>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color">Quick Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link to="/" className="text-color">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="text-color">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="text-color">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-color">
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color">Resources</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-color">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color">Follow Us</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-color">
                        <i className="fab fa-facebook-f me-2"></i> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        <i className="fab fa-twitter me-2"></i> Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        <i className="fab fa-instagram me-2"></i> Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        <i className="fab fa-linkedin me-2"></i> LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color">Contact</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-color">
                        Email: support@trainbooking.com
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        Phone: +1 234 567 890
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-color">
                        Address: 1234 Street Name, City, Country
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="mb-4" />

            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3 text-color">Login from here</span>
                <Link to="/user/login" className="active">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Log in
                  </button>
                </Link>
              </p>
            </section>

            <hr className="mb-4" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
