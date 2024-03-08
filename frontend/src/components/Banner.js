import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  // Animation for the words which will be shown in the Banner
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Full Stack Web Developer",
    "Web Designer",
    "UI/UX Designer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  // Function taking care for the typing and deleting text in the Banner
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  // Defining the tick function
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        {/* Banner Headings */}
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm RahulDey `}
                    <span className="wrap">{text}</span>
                  </h1>

                  {/* About myself paragraph */}
                  <p>
                  Hi there! 👋 I'm a passionate MERN stack web developer, eager to
                    dive into the world of coding and create innovative
                    solutions. As a fresher, I bring fresh perspectives and a
                    hunger to learn and grow. With a solid understanding of
                    MongoDB, Express.js, React.js, and Node.js, I'm equipped to
                    tackle various challenges in web development. I thrive in
                    collaborative environments and enjoy brainstorming with
                    others to come up with creative solutions. My goal is to
                    leverage my skills and enthusiasm to contribute positively
                    to any project or team I'm a part of. Let's build something
                    amazing together!
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
