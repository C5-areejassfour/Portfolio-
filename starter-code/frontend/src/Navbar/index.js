import "./style.css";
import {  useNavigate } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import image from "../image.png"
const Navbar1=()=>{
  const history = useNavigate();


return(
    <div className="nav1">
  <Navbar bg="dark" variant="dark"  className="navv">
    <Container>
    <Navbar.Brand href="#home" ></Navbar.Brand>
    
    <div className="logo_main"><img  className="logo" src={image}/></div>
    <Nav className="me-auto">
      <Nav.Link href="home" >Home</Nav.Link>
      <Nav.Link href="about" >About</Nav.Link>
      
      <Nav.Link href="skills">Skills</Nav.Link>
      <Nav.Link href="Project">Project</Nav.Link>

      <Nav.Link href="Contact">Contact Me</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
    </div>
)
}
export default Navbar1 ;
