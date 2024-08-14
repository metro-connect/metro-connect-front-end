import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { resolvePath, useNavigate } from "react-router-dom";

const UserRegister = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    contact: "",
    street: "",
    city: "",
    pincode: "",
    role: "Customer",
    age: "",
    gender: "",
  });

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = (e) => {
    fetch("http://localhost:9004/api/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((result) => {
        console.log("result", result);
        result.json().then((res) => {
          console.log(res);

          if (res.success) {
            console.log("Got the success response");

            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setTimeout(() => {
              window.location.reload(true);
            }, 1000); // Redirect after 3 seconds
          } else {
            console.log("Didn't got success response");
            toast.error("It seems server is down", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 1000); // Redirect after 3 seconds
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
        setTimeout(() => {
          window.location.reload(true);
        }, 1000); // Redirect after 3 seconds
      });
    e.preventDefault();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "600px" }}>
        <h3 className="text-center mb-4">Register User</h3>

        <form onSubmit={saveUser}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName" className="form-label" required>
                First Name <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                onChange={handleUserInput}
                value={user.firstName}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName" className="form-label" required>
                Last Name <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                onChange={handleUserInput}
                value={user.lastName}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="emailId" className="form-label" required>
              Email Id <span class="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="emailId"
              name="emailId"
              onChange={handleUserInput}
              value={user.emailId}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" required>
              Password
              <span class="text-danger">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleUserInput}
              value={user.password}
              required
            />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                className="form-select"
                id="gender"
                name="gender"
                onChange={handleUserInput}
                value={user.gender}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="contact" className="form-label">
                Contact No
              </label>
              <input
                type="number"
                className="form-control"
                id="contact"
                name="contact"
                onChange={handleUserInput}
                value={user.contact}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                onChange={handleUserInput}
                value={user.age}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="pincode*" className="form-label">
                Pincode
              </label>
              <input
                type="number"
                className="form-control"
                id="pincode"
                name="pincode"
                onChange={handleUserInput}
                value={user.pincode}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="street" className="form-label">
              Street
            </label>
            <textarea
              className="form-control"
              id="street"
              name="street"
              rows="2"
              onChange={handleUserInput}
              value={user.street}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              onChange={handleUserInput}
              value={user.city}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-outline-primary">
              Register User
            </button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
