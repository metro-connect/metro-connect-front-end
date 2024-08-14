import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const ViewScheduledMetroBookings = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const metroDetail = location.state;

  const [scheduledMetroBookings, setScheduledMetroBookings] = useState([]);
  const [ticketCounts, setTicketCounts] = useState({});

  const retrieveScheduleMetroBookings = async () => {
    const response = await axios.get(
      "http://localhost:9001/api/book/fetch/scheduled/metro/tickets?scheduleMetroId=" +
      metroDetail.scheduleId
    );
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    const getScheduleMetroBookings = async () => {
      const metroTickets = await retrieveScheduleMetroBookings();
      if (metroTickets) {
        setScheduledMetroBookings(metroTickets.bookings);
      }
    };

    getScheduleMetroBookings();
  }, []);

  const retrieveScheduleMetroTicketCounts = async () => {
    const response = await axios.get(
      "http://localhost:9001/api/book/fetch/schedule/metro/ticket/count?scheduleMetroId=" +
      metroDetail.scheduleId
    );
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    const getScheduleMetroTicketCounts = async () => {
      const metroTicketCounts = await retrieveScheduleMetroTicketCounts();
      if (metroTicketCounts) {
        setTicketCounts(metroTicketCounts);
      }
    };

    getScheduleMetroTicketCounts();
  }, []);

  const bookMetroTicket = () => {
      navigate("/schedule/metro/book/ticket", { state: metroDetail }
      );
  };

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="card form-card ms-2 me-2 mb-5 custom-bg border-color "
          style={{
            height: "45rem",
            width: "40rem",
          }}
        >
          <div className="card-header custom-bg-text text-center bg-color">
            <h2>Check Metro Ticket Availablity</h2>
          </div>
          <div className="card-body" style={{ overflowY: "auto" }}>
            <div className="row">
              <div className="col-md-6">
                <b>Metro Name:</b>
                <h5 className="text-color"> {metroDetail.name}</h5>
                <div className="mt-3">
                  <b>Metro Number:</b>
                  <h5 className="text-color"> {metroDetail.number}</h5>
                </div>
                <div className="mt-3">
                  <b>Schedule Metro Id:</b>
                  <h5 className="text-color"> {metroDetail.scheduleMetroId}</h5>
                </div>
                <div className="mt-3">
                  <b>Per Seat Price (in Rs):</b>
                  <h5 className="text-color"> {metroDetail.seatPrice}</h5>
                </div>
                <div className="mt-3">
                  <b>Metro Schedule Timing:</b>
                  <h5 className="text-color"> {metroDetail.scheduleTime}</h5>
                </div>
                <hr className="my-4" />
                <div className="mt-3">
                  <b>Total Available Seat:</b>
                  <h5 className="text-color">
                    {ticketCounts.availableTicketCount}
                  </h5>
                </div>
                <div className="mt-3">
                  <b>Total Confirmed Seat:</b>
                  <h5 className="text-color">
                    {ticketCounts.confirmedTicketCount}
                  </h5>
                </div>
                <div className="mt-3">
                  <b>Total Waiting Seat:</b>
                  <h5 className="text-color">
                    {ticketCounts.waitingTicketCount}
                  </h5>
                </div>
              </div>
              <div className="col-md-5">
                <div className="table-responsive" style={{ float: "right" }}>
                  <div className="text-center">
                    <h4 className="text-color">Metro Seats</h4>
                  </div>
                  <table className="table table-hover text-color text-center">
                    <thead className="table-bordered border-color bg-color custom-bg-text">
                      <tr>
                        <th scope="col">Metro Seat</th>
                        <th scope="col">Booking Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scheduledMetroBookings.map((booking) => {
                        return (
                          <tr>
                            <td>
                              <b>{booking.metroSeat}</b>
                            </td>
                            <td>
                              <b>{booking.status}</b>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-3 d-flex justify-content-center align-items-center">
              <button
                onClick={() => bookMetroTicket()}
                className="btn btn-lg bg-color custom-bg-text"
              >
                Book Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewScheduledMetroBookings;
