import React from "react";
import project1 from "../images/pro1.png";
import project2 from "../images/pro2.png";
import project3 from "../images/pro3.png";
function Projects() {
  return (
    <div>
      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Project</span>
        </h2>
        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src={project1} alt="" />
            <div className="portfolio-layer">
              <h4>Portfolio in React</h4>
              <p>
                My Portfolio site showcases my professional journey and
                projects, elegantly designed and powered by React for seamless
                interactivity and user experience.
              </p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={project2} alt="" />
            <div className="portfolio-layer">
              <h4>Chief Minister's 54-Point Report System</h4>
              <p>
                web-based project created using the Laravel, HTML, CSS, and
                Bootstrap for efficient Chief Minister reporting with 54
                projects.
              </p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={project3} alt="" />
            <div className="portfolio-layer">
              <h4>Stu-Hub student accommodation System</h4>
              <p>
                Stu-Hub is a student accommodation web application powered by
                Laravel, offering a convenient platform for students to find and
                book accommodations within their College/University area.
              </p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          {/* <div className="portfolio-box">
            <img src="./images/pro 4.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                minus aliquid voluptates consequuntur.
              </p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Projects;
