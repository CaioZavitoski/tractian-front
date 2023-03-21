import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about_content-title">
        <h2>About Us</h2>
        <span>
          Here you will find more information about us, what we do, and our
          current products mostly in terms of tracking and technology
        </span>
      </div>
      <div className="about_content-info">
        <div className="about_content-info-main">
          <h3 className="about_content-info-title">Get to know us!</h3>
          <div className="about_content-info-details">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              deserunt et ullam ipsa tenetur, aperiam facilis eum vitae
              accusantium exercitationem tempore placeat ad voluptatem voluptate
              maiores consequuntur dolores suscipit harum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              error, dolore delectus qui et sapiente assumenda aperiam
              voluptates repudiandae illo deleniti facilis cupiditate quibusdam
              in quis asperiores, iste suscipit corrupti.
            </p>
            <a className="contact-button">Contact</a>
          </div>
        </div>
        <div className="about_content-skills">
          <h3 className="about_content-info-title">Our Tech</h3>
          <div className="about_content-info-details-skills">
            <div className="about_content-info-skill">Javascript</div>
            <div className="about_content-info-skill">React</div>
            <div className="about_content-info-skill">SASS</div>
            <div className="about_content-info-skill">Node</div>
            <div className="about_content-info-skill">
              Predictive Maintenance
            </div>
            <div className="about_content-info-skill">IoT</div>
            <div className="about_content-info-skill">Machine Learning</div>
            <div className="about_content-info-skill">Data Science</div>
            <div className="about_content-info-skill">Data Analytics</div>
            <div className="about_content-info-skill">Data Visualization</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
