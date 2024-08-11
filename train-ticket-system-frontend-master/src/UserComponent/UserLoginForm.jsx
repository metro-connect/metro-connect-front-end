// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// const UserLoginForm = () => {
//   let navigate = useNavigate();

//   const [loginRequest, setLoginRequest] = useState({});

//   const handleUserInput = (e) => {
//     setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
//   };

//   const loginAction = (e) => {
//     fetch("http://localhost:9004/api/user/login", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(loginRequest),
//     })
//       .then((result) => {
//         console.log("result", result);
//         result.json().then((res) => {
//           console.log(res);

//           if (res.success) {
//             console.log("Got the success response");

//             if (res.jwtToken !== null) {
//               console.log("JWT TOKEN not null, positive response");
//               if (res.user.role === "admin") {
//                 sessionStorage.setItem(
//                   "active-admin",
//                   JSON.stringify(res.user)
//                 );
//                 sessionStorage.setItem("admin-jwtToken", res.jwtToken);
//               } else if (res.user.role === "Customer") {
//                 sessionStorage.setItem(
//                   "active-customer",
//                   JSON.stringify(res.user)
//                 );
//                 sessionStorage.setItem("customer-jwtToken", res.jwtToken);
//               }
//             }

//             if (res.jwtToken !== null) {
//               toast.success(res.responseMessage, {
//                 position: "top-center",
//                 autoClose: 1000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//               });
//               setTimeout(() => {
//                 window.location.href = "/home";
//               }, 1000); // Redirect after 3 seconds
//             } else {
//               toast.error(res.responseMessage, {
//                 position: "top-center",
//                 autoClose: 1000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//               });
//             }
//           } else {
//             console.log("Didn't got success response");
//             toast.error("It seems server is down", {
//               position: "top-center",
//               autoClose: 1000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });
//           }
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         toast.error("It seems server is down", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       });
//     e.preventDefault();
//   };

//   return (
//     <div>
//       <div className="mt-2 d-flex aligns-items-center justify-content-center">
//         <div
//           className="card form-card border-color custom-bg"
//           style={{ width: "25rem" }}
//         >
//           <div className="card-header bg-color text-center custom-bg-text">
//             <h4 className="card-title">User Login</h4>
//           </div>
//           <div className="card-body">
//             <form>
//               <div class="mb-3 text-color">
//                 <label for="role" class="form-label">
//                   <b>User Role</b>
//                 </label>
//                 <select
//                   onChange={handleUserInput}
//                   className="form-control"
//                   name="role"
//                 >
//                   <option value="0">Select Role</option>
//                   <option value="admin"> Admin </option>
//                   <option value="Customer"> Customer </option>
//                 </select>
//               </div>

//               <div className="mb-3 text-color">
//                 <label for="emailId" class="form-label">
//                   <b>Email Id</b>
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="emailId"
//                   name="emailId"
//                   onChange={handleUserInput}
//                   value={loginRequest.emailId}
//                 />
//               </div>
//               <div className="mb-3 text-color">
//                 <label for="password" className="form-label">
//                   <b>Password</b>
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   onChange={handleUserInput}
//                   value={loginRequest.password}
//                   autoComplete="on"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="btn bg-color custom-bg-text"
//                 onClick={loginAction}
//               >
//                 Login
//               </button>
//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserLoginForm;




// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// const UserLoginForm = () => {
//   const navigate = useNavigate();
//   const [loginRequest, setLoginRequest] = useState({});

//   const handleUserInput = (e) => {
//     setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
//   };

//   const loginAction = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await fetch("http://localhost:9004/api/user/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginRequest),
//       });

//       const result = await response.json();

//       if (result.success) {
//         if (result.jwtToken) {
//           sessionStorage.setItem(
//             result.user.role === "admin" ? "active-admin" : "active-customer",
//             JSON.stringify(result.user)
//           );
//           sessionStorage.setItem(
//             result.user.role === "admin" ? "admin-jwtToken" : "customer-jwtToken",
//             result.jwtToken
//           );

//           toast.success(result.responseMessage, {
//             position: "top-center",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });

//           setTimeout(() => {
//             navigate("/home"); // Redirect to home or dashboard page
//           }, 2000);
//         } else {
//           toast.error(result.responseMessage, {
//             position: "top-center",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         }
//       } else {
//         toast.error("Login failed. Please try again.", {
//           position: "top-center",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Server error. Please try again later.", {
//         position: "top-center",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8 col-lg-6">
//           <div className="card shadow-sm border-light">
//             <div className="card-header bg-primary text-white text-center">
//               <h4 className="card-title">User Login</h4>
//             </div>
//             <div className="card-body">
//               <form onSubmit={loginAction}>
//                 <div className="mb-3">
//                   <label htmlFor="role" className="form-label">
//                     <b>User Role</b>
//                   </label>
//                   <select
//                     onChange={handleUserInput}
//                     className="form-select"
//                     name="role"
//                     required
//                   >
//                     <option value="">Select Role</option>
//                     <option value="admin">Admin</option>
//                     <option value="Customer">Customer</option>
//                   </select>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="emailId" className="form-label">
//                     <b>Email Id</b>
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="emailId"
//                     name="emailId"
//                     onChange={handleUserInput}
//                     value={loginRequest.emailId || ""}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">
//                     <b>Password</b>
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     name="password"
//                     onChange={handleUserInput}
//                     value={loginRequest.password || ""}
//                     autoComplete="on"
//                     required
//                   />
//                 </div>

//                 <div className="d-flex justify-content-center">
//                   <button
//                     type="submit"
//                     className="btn btn-primary w-100"
//                   >
//                     Login
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default UserLoginForm;

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import './UserLoginForm.css';

const UserLoginForm = () => {
  const navigate = useNavigate();
  const [loginRequest, setLoginRequest] = useState({});

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:9004/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
      });

      const result = await response.json();

      if (result.success) {
        if (result.jwtToken) {
          sessionStorage.setItem(
            result.user.role === "admin" ? "active-admin" : "active-customer",
            JSON.stringify(result.user)
          );
          sessionStorage.setItem(
            result.user.role === "admin" ? "admin-jwtToken" : "customer-jwtToken",
            result.jwtToken
          );

          toast.success(result.responseMessage, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setTimeout(() => {
            navigate("/home");
          }, 2000);
        } else {
          toast.error(result.responseMessage, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        toast.error("Login failed. Please try again.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error. Please try again later.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-light">
            <div className="card-header text-center">
              <h4 className="card-title">User Login</h4>
            </div>
            <div className="card-body">
              <form onSubmit={loginAction}>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">
                    <b>User Role</b>
                  </label>
                  <select
                    onChange={handleUserInput}
                    className="form-select"
                    name="role"
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="Customer">Customer</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="emailId" className="form-label">
                    <b>Email Id</b>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailId"
                    name="emailId"
                    onChange={handleUserInput}
                    value={loginRequest.emailId || ""}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={handleUserInput}
                    value={loginRequest.password || ""}
                    autoComplete="on"
                    required
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserLoginForm;

