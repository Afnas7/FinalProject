import React from 'react'
import Home from './home/Home'
import Event from "./components/Event";
import {Navigate, Route,Routes} from "react-router-dom" 
import Events from './event/Events';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Contact from './components/Contact';
import EventDetails from './components/EventDetails';
import { Toaster } from "react-hot-toast";
import { useAuth } from './context/AuthProvider';
import BookingPage from './components/Bookingpage';
const App = () => {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={authUser?<Events />:<Navigate to="/signup"/> }/>
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Signup" element={<Signup/> }/>
          <Route path="/event-details/:eventId" element={<EventDetails/>} />
          <Route path="/booking/:eventId" element={<BookingPage/>} />
        </Routes>
        <Toaster />
    </div>
  )
}
export default App;