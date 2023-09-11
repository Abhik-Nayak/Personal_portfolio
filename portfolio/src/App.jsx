import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About/About';
import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar/Navbar1';
import Project from './components/Project';
import Contact from './components/Contact';
import "./styles.css"
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Home />} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  )
}

export default App;

