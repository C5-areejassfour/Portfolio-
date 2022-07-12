import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar1 from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";  
 
import Contact from "./Contact";






function App() {
  return <div className="App">
 
   <Navbar1/>
   <Home/>
  
   <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />

    
      </Routes>
  </div>;
}

export default App;
