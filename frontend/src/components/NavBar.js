import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  //  Onclick Function of the navbar components
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home" style={{ marginTop: "-8px" }}>
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navlinks for the NavBar with an onClick function*/}
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>

              
              <Nav.Link
                href="#aboutme"
                className={
                  activeLink === "aboutme"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("aboutme")}
              >
                About Me
              </Nav.Link>
            </Nav>

            {/* Social Media icons with links */}
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/rahul-dey-bb27071a5/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a
                  href="https://github.com/RahulDey25"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon4} alt="Icon" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100008525043605"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a
                  href="https://www.instagram.com/iam.rahuldey/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon3} alt="Icon" />
                </a>
              </div>

              <HashLink to="#connect">
                <button className="vvd" onClick={() => console.log("connect")}>
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
