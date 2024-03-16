import React from "react";

function Skills() {
  return (
    <div>
      <section className="skills" id="skills">
        <div className="title">
          <h2>skills</h2>
          <div>
            <h2>my skills</h2>
          </div>
        </div>
        <div className="row">
          <div className="item">
            <div className="item-text">
              <span>Photoshop</span>
              <span className="w-90">90%</span>
            </div>
            <div className="progress">
              <div className="progress-bar w-90"></div>
            </div>
          </div>

          <div className="item">
            <div className="item-text">
              <span>Java</span>
              <span className="w-75">75%</span>
            </div>
            <div className="progress">
              <div className="progress-bar w-75"></div>
            </div>
          </div>

          <div className="item">
            <div className="item-text">
              <span>HTML5</span>
              <span className="w-85">85%</span>
            </div>
            <div className="progress">
              <div className="progress-bar w-85"></div>
            </div>
          </div>

          <div className="item">
            <div className="item-text">
              <span>CSS3</span>
              <span className="w-80">80%</span>
            </div>
            <div className="progress">
              <div className="progress-bar w-80"></div>
            </div>
          </div>

          <div className="item">
            <div className="item-text">
              <span>SQL</span>
              <span className="w-60">60%</span>
            </div>
            <div className="progress">
              <div className="progress-bar w-60"></div>
            </div>
          </div>

          <div className="item">
            <div className="item-text">
              <span>PHP</span>
              <span className="w-68">68%</span>
            </div>
            <div className="progress">
              <div className="progress-bar w-68"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
