import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          {/* Add Social Media links */}
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rahul-dey-bb27071a5/" target="_blank" rel="noreferrer">
                <img src={navIcon1} alt="Img"/>
              </a>
              <a href="https://github.com/RahulDey25" target="_blank" rel="noreferrer">
                <img src={navIcon4} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100008525043605" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="Img"/>
              </a>
              <a href="https://www.instagram.com/iam.rahuldey/" target="_blank" rel="noreferrer">
                <img src={navIcon3} alt="Img"/>
              </a>
            </div>
            <p>CopyRight 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
