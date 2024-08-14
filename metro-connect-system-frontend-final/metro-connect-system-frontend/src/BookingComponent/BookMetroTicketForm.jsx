import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";

const BookMetroTicketForm = () => {
  const location = useLocation();
  const metroDetails = location.state;

  var customerToken = sessionStorage.getItem("customer-jwtToken");

  const [bookRequest, setBookRequest] = useState({
    scheduleMetroId: "",
    userId: "",
    totalSeat: "",
  });

  const handleUserInput = (e) => {
    setBookRequest({
      ...bookRequest,
      [e.target.name]: e.target.value,
    });
  };

  const bookTicket = (e) => {
    if (customerToken !== null) {
      var customer = JSON.parse(sessionStorage.getItem("active-customer"));

      bookRequest.userId = customer.id;
      bookRequest.scheduleMetroId = metroDetails.scheduleId;

      fetch("http://localhost:9001/api/book/metro", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookRequest),
      })
        .then((result) => {
          console.log("result", result);
          result.json().then((res) => {
            console.log(res);

            if (res.success) {
              console.log("Got the success response");

              toast.success(res.responseMessage, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            //   setTimeout(() => {
            //     window.location.href = "/home";
            //   }, 2000); // Redirect after 3 seconds
            } else {
              toast.error("It seems server is down", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          });
        })
        .catch((error) => {
          console.error(error);
          toast.error("It seems server is down", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
      e.preventDefault();
    } else {
      toast.warn("Please Login to Book the Ticket..!!!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      e.preventDefault();
    }
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "50rem" }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h4 className="card-title">Book Metro</h4>
          </div>
          <div className="card-body">
            <form onSubmit={bookTicket} className="row g-3">
              <div className="col-md-6 mb-3 text-color">
                <label for="totalSeat" class="form-label">
                  <b>Metro Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleUserInput}
                  value={metroDetails.name}
                  readOnly
                />
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label for="totalSeat" class="form-label">
                  <b>Metro Number</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleUserInput}
                  value={metroDetails.number}
                  readOnly
                />
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label for="totalSeat" class="form-label">
                  <b>Metro Schedule Id</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleUserInput}
                  value={metroDetails.scheduleMetroId}
                  readOnly
                />
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label for="totalSeat" class="form-label">
                  <b>From Location</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleUserInput}
                  value={metroDetails.fromLocation}
                  readOnly
                />
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label for="totalSeat" class="form-label">
                  <b>To Location</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleUserInput}
                  value={metroDetails.toLocation}
                  readOnly
                />
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label for="totalSeat" class="form-label">
                  <b>Fare Per Seat</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleUserInput}
                  value={metroDetails.seatPrice}
                  readOnly
                />
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label for="totalSeat" class="form-label">
                  <b>Metro Schedule Time</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleUserInput}
                  value={metroDetails.scheduleTime}
                  readOnly
                />
              </div>
              <div className="mb-3 text-color">
                <label for="totalSeat" class="form-label">
                  <b>
                    Total Seat <span className="text-danger">(required)</span>
                  </b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="totalSeat"
                  name="totalSeat"
                  onChange={handleUserInput}
                  value={bookRequest.totalSeat}
                  required
                />
              </div>

              <button type="submit" className="btn bg-color custom-bg-text">
                Book Ticket
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMetroTicketForm;
