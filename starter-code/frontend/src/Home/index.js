import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="main1">
          <h3 className="header"><p className="p1">Hello </p><p className="p2">There</p></h3>
         <h3><p className="p3">I'am Areej Asfour</p></h3> 
          <h3><p className="p3">Full Stack Web Developer</p></h3>
          </Col>
          <Col>
            <div>
              <img src="https://res.cloudinary.com/dejiabiola/image/upload/v1607804394/envato_2.0/kem-hero.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
