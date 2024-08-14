import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AdminRegisterForm = () => {
  let navigate = useNavigate();

  const [registerRequest, setRegisterRequest] = useState({});

  const handleUserInput = (e) => {
    setRegisterRequest({ ...registerRequest, [e.target.name]: e.target.value });
  };

  const loginAction = (e) => {
    fetch("http://localhost:9004/api/user/admin/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerRequest),
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
              window.location.href = "/user/login";
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
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="card form-card shadow-lg" style={{ width: "25rem" }}>
        <div className="text-center ">
          <h4 className="card-title">Register Admin </h4>
        </div>
        <div className="card-body">
          <form onSubmit={loginAction}>
            <div className="mb-3 text-color">
              <label htmlFor="emailId" className="form-label">
                <b>Email Id <span class="text-danger">*</span></b>
              </label>
              <input
                type="email"
                className="form-control"
                id="emailId"
                name="emailId"
                onChange={handleUserInput}
                value={registerRequest.emailId || ""}
                required
              />
              <div className="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>
            <div className="mb-3 text-color">
              <label htmlFor="password" className="form-label">
                <b>Password <span class="text-danger">*</span> </b>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={handleUserInput}
                value={registerRequest.password || ""}
                autoComplete="on"
                required
                minLength="6"
              />
              <div className="invalid-feedback">
                Please enter a password with at least 6 characters.
              </div>
            </div>
            <button type="submit" className="btn btn-outline-primary w-100">
              Register
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminRegisterForm;
