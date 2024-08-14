import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";
import Header from "./NavbarComponent/Header";
import HomePage from "./page/HomePage";
import UserRegister from "./UserComponent/UserRegister";
import UserLoginForm from "./UserComponent/UserLoginForm";
import ViewAllScheduledMetros from "./ScheduledMetroComponent/ViewAllScheduledMetros";
import Locations from "./LocationComponent/Locations";
import UpdateLocation from "./LocationComponent/UpdateLocation";
import AddMetroForm from "./MetroComponent/AddMetroForm";
import ViewAllMetros from "./MetroComponent/ViewAllMetros";
import ScheduleMetroForm from "./ScheduledMetroComponent/ScheduleMetroForm";
import ViewScheduledMetroBookings from "./BookingComponent/ViewScheduledMetroBookings";
import BookMetroTicketForm from "./BookingComponent/BookMetroTicketForm";
import ViewMyBookings from "./BookingComponent/ViewMyBookings";
import ViewAllTicketBookings from "./BookingComponent/ViewAllTicketBookings";
import AdminRegisterForm from "./UserComponent/AdminRegisterForm";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/all/hotel/location" element={<HomePage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/user/customer/register" element={<UserRegister />} />
        <Route path="/user/manager/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route
          path="/scheduled/metro/all"
          element={<ViewAllScheduledMetros />}
        />
        <Route path="/view/locations" element={<Locations />} />
        <Route path="/location/update" element={<UpdateLocation />} />
        <Route path="/metro/add" element={<AddMetroForm />} />
        <Route path="/metro/view" element={<ViewAllMetros />} />
        <Route path="/metro/schedule" element={<ScheduleMetroForm />} />
        <Route
          path="/schedule/metro/ticket/check"
          element={<ViewScheduledMetroBookings />}
        />
        <Route
          path="/schedule/metro/book/ticket/"
          element={<BookMetroTicketForm />}
        />
        <Route path="/mybooking/ticket" element={<ViewMyBookings />} />
        <Route
          path="/customer/ticket/bookings"
          element={<ViewAllTicketBookings />}
        />
        <Route path="/user/admin/register" element={<AdminRegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
