import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");
    setTimeout(() => {
      navigate("/home");
    }, 1000); // Redirect after 3 seconds
    window.location.reload(true);
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link
          to="/view/locations"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Location</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/metro/add" className="nav-link active" aria-current="page">
          <b className="text-color">Add Metro</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/metro/view" className="nav-link active" aria-current="page">
          <b className="text-color">View Metro</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/metro/schedule"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Schedule Metro</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/customer/ticket/bookings"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">All User Booking</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
