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
            <h3 className="header">
              <p className="p1">Hello </p>
              <p className="p2">There</p>
            </h3>
            <h3>
              <p className="p3">I'am Areej Asfour</p>
            </h3>
            <h3>
              <p className="p3">Full Stack Web Developer</p>
            </h3>
          </Col>
          <Col>
            <div>
              <div className="circle"></div>
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
              <div className="circle4"></div>
              <div className="circle5"></div>
              <div className="circle6"></div>
              <div className="circle7"></div>
              <div className="sq1"></div>
              <div className="sq2"></div>
              <div className="sq3"></div>
              <div className="sq4"></div>
              <div className="sq5"></div>
              <div className="sq6"></div>


              <img src="https://res.cloudinary.com/dejiabiola/image/upload/v1607804394/envato_2.0/kem-hero.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
