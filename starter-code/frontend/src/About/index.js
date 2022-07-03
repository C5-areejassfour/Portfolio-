import "./style.css";
import Card from "react-bootstrap/Card";

const About = () => {
  //I am a full stack web developer who can work with a team and has the ability to continuously learn
  return (
    <div className="mm">
        
             
      <div className="main_about">
        <Card>
          <Card.Header className="pa12">About Me</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p className="pa1">
                I am a full stack web developer who can work with a team and has
                the ability to continuously learn
              </p>
            </blockquote>
          </Card.Body>
        </Card>
<br/>
        <Card>
          <Card.Header className="pa12" >Education</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p className="pa1">
                Bootcamp in programming (FULL-STACK WEB DEVELOPER) at the MERAKI
                ACADEMY
              </p>
              <p className="pa1">March-2022 to August-2022</p>
              <p className="pa1">Bachelor of Civil Engineering </p>
              <p className="pa1">AL-Hussen Bin-Talal University</p>
              <p className="pa1">October-2013 to June-2018</p>
              
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default About;
