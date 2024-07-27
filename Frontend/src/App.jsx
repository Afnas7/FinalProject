import React from 'react'
import Home from './home/Home'
import Event from "./components/Event";
import {Route,Routes} from "react-router-dom" 
import Events from './event/Events';
const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events /> }/>
        </Routes>
    </div>
  )
}

export default App