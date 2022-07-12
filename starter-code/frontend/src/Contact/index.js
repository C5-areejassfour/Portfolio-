import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const Contact = () => {
  return (
    <div>
      <div>
        <h3 className="hed">Get In Touch</h3>
        <p className="hed1">
          I am available to work on your projects and bring your ideas to life.
          I am just a click away.
        </p>
      </div>
      <Container>
        <Row>
          <Col>
            {" "}
            <div>
              <div className="ff">
                <img src="https://www.kemiadeleke.com/media/contact-address.svg" />

                <p>Jordan</p>
              </div>
              <div className="ff">
                <img src="https://www.kemiadeleke.com/media/contact-phone.svg" />
                <a href="tel:+962-780-451-419">+962-780-451-419</a>
              </div>
              <div className="ff">
              <img src="https://www.kemiadeleke.com/media/contact-email.svg" />

                <a href="mailto:areej.assfour@gmail.com">
                  areej.assfour@gmail.com
                </a>
              </div>
            </div>
          </Col>
          <Col>
            {" "}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="name"
                required=""
              />
              <input
                type="email"
                placeholder="Email"
                className="name"
                required=""
              ></input>
              <input
                type="number"
                placeholder="Phone Number"
                className="name"
                required=""
              ></input>
              <textarea
                className="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Enter your message"
                required=""
              ></textarea>
              <button className="ss" type="submit">Submit</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
