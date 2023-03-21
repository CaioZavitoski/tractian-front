import React from "react";
import "./Apresentation.css";

const Apresentation = () => {
  const executeScroll = (query) => {
    const section = document.querySelector(query);
    section.scrollIntoViewIfNeeded();
  };

  return (
    <section id="home" className="home">
      <div className="home__content">
        <div className="home__content-name">
          <h1>THE FUTURE IS HERE</h1>
        </div>
        <div className="home__content-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            cupiditate officiis fuga eos quisquam? Illo cupiditate deserunt,
            animi, amet facilis quos sit esse veritatis laborum qui hic, beatae
            adipisci eligendi.
          </p>
        </div>
        <div className="home__content-button">
          <a onClick={() => executeScroll("#about")} className="btn">
            About us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Apresentation;
