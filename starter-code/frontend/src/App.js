import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar1 from "./Navbar";
import Home from "./Home";
import About from "./About";








function App() {
  return <div className="App">
  
   <Navbar1/>
  
   <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />

        

        
    
      </Routes>
  </div>;
}

export default App;
