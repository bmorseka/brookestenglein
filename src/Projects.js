import React from "react";
import { Card, Button } from "react-bootstrap";
import bellsPic from "./bells-pic.png";
import spineifyPic from "./Spineify.png";

const Projects = (props) => {
  return (
    <section id="projects-container">
      <div className="projects-container">
        <h2 id="projects-title">My Projects</h2>
        <div className="card-container">
          <Card style={{ width: "40rem" }} id="project-card">
            <Card.Img
              variant="top"
              src={bellsPic}
              alt="bells-pic"
              id="bells-image"
            />
            <Card.Body>
              <Card.Title id="card-title">Bell's Custom Worx</Card.Title>
              <Card.Text>
                An e-commerce website for custom wood carvings.
              </Card.Text>
              <Card.Text>
                Tech Stack: React, Redux, Express, Node, Sequelize, Bootstrap
              </Card.Text>
              <a
                href="https://github.com/GH2202-Team-Worx/Worx"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primary" id="card-button">
                  See Repo
                </Button>
              </a>
              <a
                href="https://bells-custom-worx.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primary" id="card-button">
                  See Website
                </Button>
              </a>
            </Card.Body>
          </Card>
          <Card style={{ width: "40rem" }} id="spineify-card">
            <Card.Img
              variant="top"
              src={spineifyPic}
              alt="spineify-pic"
              id="project-image"
            />
            <Card.Body>
              <Card.Title id="card-title">Spineify</Card.Title>
              <Card.Text>
                A desktop application to help users track and improve their
                posture.
              </Card.Text>
              <Card.Text>
                Tech Stack: Electron, React, Redux, Express, Node, Sequelize,
                Bootstrap, Google Teachable Machine
              </Card.Text>
              <a
                href="https://github.com/Spineify/Spineify-capstone"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primary" id="card-button">
                  See Repo
                </Button>
              </a>
              <a
                href="http://spineify.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primary" id="card-button">
                  See Website
                </Button>
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
