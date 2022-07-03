import "./style.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";


const Skills = () => {
  return (
    <div>
      
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header className="pa12">Skills</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  
                  <p className="ps1">JavaScript </p>
                  <p className="ps2">Data Base (Mongo DB & MySQL)</p>
                  <p className="ps3">Back End Coding (Node.js , Express )</p>
                  <p className="ps4">
                    Front End Coding (React , Socket-io ,jQuery ,Redux)
                  </p>
                  <p className="ps5">HTML</p>
                  <p className="ps6">CSS</p>
                  <p className="ps7">Problem-Solving</p>
                  <p className="ps8">Strong Communication</p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          

          <Col className="col1">
            <div className="d1">
              <button className="b1">Node.js</button>
            </div>
            <div className="d2">
              <button className="b1">Express</button>
            </div>
            <div className="d3">
              {" "}
              <button className="b1">React</button>
            </div>
          
            <div className="d4">
              <button className="b1">jQuery</button>
            </div>
            <div className="d5">
              <button className="b1">Redux</button>
            </div>
            <div className="d6">
              <button className="b1">CSS</button>
            </div>
            <div className="d7">
              <button className="b1">HTML</button>
            </div>
            <div className="d8">
              {" "}
              <button className="b1">Problem-Solving</button>
            </div>
            <div className="d9">
              <button className="b1">Mongo DB </button>
            </div>
            <div className="d10">
              <button className="b1">MySQL </button>
            </div>
            <div className="d11">
              <button className="b1">Socket-io</button>
            </div>
          </Col>
        </Row>
      </Container>
 
    </div>
  );
};
export default Skills;
