import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import javascript from "../assets/skills/javascript.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import tailwindcss from "../assets/skills/Tailwindcss.svg";
import dom from "../assets/skills/dom.svg";
import jquery from "../assets/skills/jquery-icon.svg";
import reactjs from "../assets/skills/reactjs.svg";
import nextjs from "../assets/skills/nextjs.svg";
import mongodb from "../assets/skills/mongodb.svg";
import mongoose from "../assets/skills/mongoose.svg";
import mariadb from "../assets/skills/mariadb.svg";
import nodejs from "../assets/skills/nodejs.svg";
import expreesjs from "../assets/skills/expressjs.svg";
import git from "../assets/skills/giT.svg";
import github from "../assets/skills/github.svg";
import vercel from "../assets/skills/vercel.svg";
import netlify from "../assets/skills/netlify.svg";
import aws from "../assets/skills/aws.svg";
import jesT from "../assets/skills/jest.svg";
import chai from "../assets/skills/chai.svg";
import mocha from "../assets/skills/mocha.svg";
import dsa from "../assets/skills/dsa.svg";
import uiux from "../assets/skills/UiUx.svg";
import ajax from "../assets/skills/ajax.svg";
import scalablesys from "../assets/skills/scalablesystems.svg";
import fedlogreg from "../assets/skills/federtd Lgin & Regs.svg";



import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                "Hi! I specialize in the MERN stack, which stands for MongoDB,
                Express.js, React.js, and Node.js. With strong proficiency in
                each component, I bring the power of these technologies together
                to develop robust and efficient web applications. From database
                management with MongoDB to server-side scripting with Node.js
                and Express.js, and crafting dynamic user interfaces with
                React.js, I leverage the full potential of the MERN stack to
                create modern, scalable, and responsive web solutions."
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {/* Setting skills with svg image mentioned as meter1,2,3. in assests image*/}
                <div className="item">
                  <img src={html} alt="" />
                  <h5>HTML</h5>
                </div>

                <div className="item">
                  <img src={css} alt="Img" />
                  <h5>CSS</h5>
                </div>

                <div className="item">
                  <img src={javascript} alt="Img" />
                  <h5>Javascript</h5>
                </div>

                <div className="item">
                  <img src={dsa} alt="Img" />
                  <h5>Data Structures and Algorithms</h5>
                </div>

                <div className="item">
                  <img src={bootstrap} alt="Img" />
                  <h5>Bootstrap</h5>
                </div>

                 <div className="item">
                  <img src={tailwindcss} alt="Img" />
                  <h5>Tailwind CSS</h5>
                </div>

                <div className="item">
                  <img src={dom} alt="Img" />
                  <h5>DOM</h5>
                </div>

                <div className="item">
                  <img src={jquery} alt="Img" />
                  <h5>jQuery</h5>
                </div>

                <div className="item">
                  <img src={ajax} alt="Img" />
                  <h5>AJAX</h5>
                </div>

                <div className="item">
                  <img src={reactjs} alt="Img" />
                  <h5>ReactJS</h5>
                </div>

                <div className="item">
                  <img src={nextjs} alt="Img" />
                  <h5>Next.js</h5>
                </div>

                <div className="item">
                  <img src={mongodb} alt="Img" />
                  <h5>MongoDB</h5>
                </div>

                <div className="item">
                  <img src={mongoose} alt="Img" />
                  <h5>Mongoose</h5>
                </div>

                <div className="item">
                  <img src={mariadb} alt="Img" />
                  <h5>MariaDB</h5>
                </div>

                <div className="item">
                  <img src={nodejs} alt="Img" />
                  <h5>Node.js</h5>
                </div>

                <div className="item">
                  <img src={expreesjs} alt="Img" />
                  <h5>Express.js</h5>
                </div>

                <div className="item">
                  <img src={git} alt="Img" />
                  <h5>Git</h5>
                </div>

                <div className="item">
                  <img src={github} alt="Img" />
                  <h5>GitHub</h5>
                </div>

                 <div className="item">
                  <img src={vercel} alt="Img" />
                  <h5>Vercel</h5>
                </div>

                <div className="item">
                  <img src={netlify} alt="Img" />
                  <h5>Netlify</h5>
                </div>

                <div className="item">
                  <img src={aws} alt="Img" />
                  <h5>AWS</h5>
                </div>

                <div className="item">
                  <img src={scalablesys} alt="Img" />
                  <h5>Scalable Systems</h5>
                </div>

                <div className="item">
                  <img src={fedlogreg} alt="Img" />
                  <h5>Federated Login & Registration</h5>
                </div>

                <div className="item">
                  <img src={uiux} alt="Img" />
                  <h5>UI/UX Design</h5>
                </div>

                <div className="item">
                  <img src={jesT} alt="Img" />
                  <h5>Jest</h5>
                </div>

                <div className="item">
                  <img src={chai} alt="Img" />
                  <h5>Chai</h5>
                </div>

                <div className="item">
                  <img src={mocha} alt="Img" />
                  <h5>Mocha</h5>
                </div> 
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Img" />
    </section>
  );
};
