import "./style.css";
import Card from 'react-bootstrap/Card';

const About= ()=>{
    //I am a full stack web developer who can work with a team and has the ability to continuously learn
return (
    <div className="mm">
        <div className="main_about">
        <h2 className="maina"><p>About Me</p></h2>

        <p className="pa1">I am a full stack web developer who can work with a team and has the ability to continuously learn</p> 
        <h2><p className="pa1">Education</p></h2>
       
        <Card>
  <Card.Header>Education</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <p className="pa1">Bootcamp in programming (FULL-STACK WEB DEVELOPER) at the MERAKI ACADEMY</p>
        <p className="pa1">6-March-2022 to 3-August-2022</p>
        <p className="pa1">Bachelor of  Civil Engineering </p>
        <p className="pa1">AL-Hussen Bin-Talal University</p>
        <p className="pa1">2013 - 2018</p>
      <footer className="blockquote-footer">
        
      </footer>
    </blockquote>
  </Card.Body>
</Card>
        </div>
     


    </div>
)
}
export default About;
