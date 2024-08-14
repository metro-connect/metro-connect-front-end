import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain, faParking } from '@fortawesome/free-solid-svg-icons';

const TravelGuide = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">TRAVEL GUIDE</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
              <FontAwesomeIcon icon={faTrain} size="2x" color="#28a745" />
              <h5 className="card-title mt-3">Fare Rules</h5>
              <p className="card-text">
                The commuters can select their desired station of entry and exit
                on the Metro Connect App. After selecting stations, the fare for the
                travel is automatically calculated.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
              <FontAwesomeIcon icon={faTrain} size="2x" color="#dc3545" />
              <h5 className="card-title mt-3">Metro Timings</h5>
              <p className="card-text">
                Additional trains from select intermediate stations will be
                operated in case of any surge in the travel demand.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
              <FontAwesomeIcon icon={faTrain} size="2x" color="#28a745" />
              <h5 className="card-title mt-3">Metro Tickets</h5>
              <p className="card-text">
               Passengers are provided ticket booking interface with seat selection and payment options.
               With Metro Connect Viewing and Managing tickets is possible.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
              <FontAwesomeIcon icon={faTrain} size="2x" color="#dc3545" />
              <h5 className="card-title mt-3">Facilities at Stations</h5>
              <p className="card-text">
                The Customer care is located on the station to assist
                passengers regarding any problem about their tickets. It is
                usually located between entry and exit gates and is accessible
                from both paid and unpaid area.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
              <FontAwesomeIcon icon={faTrain} size="2x" color="#28a745" />
              <h5 className="card-title mt-3">
                Metro Station Map
              </h5>
              <p className="card-text">
              Our Metro Station Map feature allows passengers to easily locate the nearest metro stations 
              and access vital information about each station. 
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
              <FontAwesomeIcon icon={faTrain} size="2x" color="#dc3545" />
              <h5 className="card-title mt-3">User Authentication</h5>
              <p className="card-text">
              Metro Connect prioritizes the security of your data and access. Our comprehensive login and registration system 
              ensures that users benefit from seamless access.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelGuide;