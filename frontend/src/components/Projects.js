import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Amazonclone from "../assets/img/amazonClone-Img.png";
import Flashcard from "../assets/img/flashcard-Img.png";
import Portfolio from "../assets/img/portfolio-Img.png";
import TodoApp from "../assets/img/todo-Img.png";
import Weatherapp from "../assets/img/weatherApp-Img.png";
import GetYutbSubs from "../assets/img/youtubSubs-Img.png";

export const Projects = () => {
  // Project information with images
  const projects = [
    {
      title: "Amazon Clone",
      description:
        "A basic Amazon clone project using HTML and CSS to replicate the user interface and layout of the Amazon website",
      imgUrl: Amazonclone,
    },
    {
      title: "Flashcard Generator",
      description:
        "A versatile flashcard generator tool that allows users to create, read, update, and remove cards, with additional functionalities including download, share, and print options",
      imgUrl: Flashcard,
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personalized portfolio website showcasing my skills, projects, and accomplishments in web development",
      imgUrl: Portfolio,
    },
    {
      title: "Todo App",
      description:
        "A minimalist task management application designed for efficient organization and prioritization of daily tasks",
      imgUrl: TodoApp,
    },
    {
      title: "Weather App",
      description:
        "A weather app that provides real-time weather information and forecasts for any location",
      imgUrl: Weatherapp,
    },
    {
      title: "Get Youtube Subscribers",
      description:
        "A web service designed to retrieve relevant information about subscribers upon receiving specific GET requests, facilitating effective management and analysis of YouTube audience engagement",
      imgUrl: GetYutbSubs,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  {/* Project Heading and about Description */}
                  <h2>Projects</h2>
                  <p>
                    Explore a diverse array of innovative projects crafted with
                    the powerful MERN (MongoDB, Express.js, React, Node.js)
                    stack. These full-stack web development endeavors seamlessly
                    integrate front-end and back-end technologies to deliver
                    dynamic and immersive user experiences. From interactive
                    social platforms to robust e-commerce solutions, each
                    project showcases the versatility and proficiency of MERN
                    stack development. Dive into a world where creativity meets
                    functionality, and witness firsthand the transformative
                    capabilities of MERN stack projects.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {/* Different Tabs under Project section */}
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    {/* Tab Contents with panes */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                        Stay tuned for exciting updates as we continue to expand our project portfolio!
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                        Stay tuned for exciting updates as we continue to expand our project portfolio!
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Img"></img>
    </section>
  );
};
