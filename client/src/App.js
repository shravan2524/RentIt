import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Favourites from "./Containers/Favourites";
import About from "./Containers/About";
import Search from "./Containers/Search";
import Login from "./Containers/Login";
import Register from "./Containers/Register";
import Profile from "./Components/Profile";
import LNavbar from "./Components/LNavbar";
import LAddListing from "./Components/LAddListing";
import appState from "./context/appState";
import DetailListing from "./Containers/DetailListing";
import ProtectedRoute from "./Components/ProtectedRoute";
import BusinessLogin from "./Containers/BusinessLogin";
import BusinessRegister from "./Containers/BusinessRegister";
import MyListings from "./Components/MyListings";
import { BrowserRouter } from 'react-router-dom';
import Routes from "./Routes/routes";
const protect = (component) => {
  return <ProtectedRoute>{component}</ProtectedRoute>;
};
const homeRoutes = ["/", "/home"];

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
