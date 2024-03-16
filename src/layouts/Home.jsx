import React from "react";
import MyImage from "../images/home.png";
import TypedJsControl from "../components/TypedJsControl";
import Resume from "../Resume/Resume.pdf";
// import 'boxicons';
function Home() {
  return (
    <div>
      <section className="home" id="home">
        <div className="home-content">
          <h3 className="heading">Hello, It's Me</h3>
          <h1>Shekhar Roy</h1>
          <h3>
            And I'm a <span className="autotype">Web Designer</span>
          </h3>
          <p>
            As an aspiring web development enthusiast with a strong interest in
            Front-End design, I'm eager to learn and grow. My goal is to craft
            engaging user experiences, merging design and code with a genuine
            passion for creating captivating web interfaces.
          </p>

          <div className="social-media">
            <a href="https://www.facebook.com/shekhar.roy.121772/">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://twitter.com/shekhar87024135">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.instagram.com/itz_duniq_shekhar/">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/shekhar-roy-296579216/">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <a href={Resume} className="btn">
            Download CV
          </a>
        </div>

        <div className="home-img">
          <img src={MyImage} alt="" />
        </div>
      </section>
      <TypedJsControl />
    </div>
  );
}

export default Home;
