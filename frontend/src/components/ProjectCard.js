import React from 'react';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4} >
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Img" style={{ height: "750px" }} />
        <div className="proj-txtx">
          <h3>{title}</h3>
          <span>{description}</span>
          {/* Added for the link  */}
          <br/>
          {link && <a href={link}>Visit Website</a>}
        </div>
      </div>
    </Col>
  );
};

