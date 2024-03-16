import React from "react";
import MyImg from "../images/about.png";
function About() {
  return (
    <div>
      <section className="about" id="about">
        <div className="about-img">
          <img src={MyImg} alt="" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>Full-Stack Developer</h3>
          <p>
            <span id="hii"> Hii, </span>
            <br />
            Myself <span id="name">Shekhar Roy</span> <br />
            from Jalpaiguri, West Bengal. Currently I am pursuing my
            <span>Masters of Computer Application Degree from MAKAUT </span>
            (Maulana Abul Kalam Azad University Of Techonology). <br />
            <br />I have completed my Bachelors from
            <span>Ananda Chandra College</span> in the field of Computer Science
            with an aggregate CGPA of <span>8.56 </span>in the academic Year
            2019-2022
          </p>

          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
