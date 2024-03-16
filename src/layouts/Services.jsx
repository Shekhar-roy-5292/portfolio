import React from "react";

function Services() {
  return (
    <div>
      <section className="services" id="services">
        <h2 className="heading">
          Our <span>Services</span>
        </h2>
        <div className="services-container">
          <div className="services-box">
            <i className="bx bx-code-alt" />
            <iconify-icon
              icon="fluent:developer-board-20-regular"
              style={{ color: "#0ef" }}
              width={100}
              height={100}
            />
            <h3>Full-Stack Developer</h3>
            <p>
              Contributed to a diverse range of full-stack projects, including
              an Online Food Ordering System, showcasing adaptability,
              problem-solving skills, and a passion for creating meaningful
              technological solutions.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <i className="bx bxs-paint" />
            <iconify-icon
              icon="fa6-brands:laravel"
              style={{ color: "#0ef" }}
              width={100}
              height={100}
            />
            <h3>Website Designer</h3>
            <p>
              Participated in a collaborative Laravel project focused on the
              development of the Chief Minister's 54-Point Report System, a
              solid understanding of web development and a dedication to
              creating effective.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <i className="bx bx-bar-chart-alt" />
            <iconify-icon
              icon="ion:camera-outline"
              style={{ color: "#0ef" }}
              width={100}
              height={100}
            />
            <h3>photography</h3>
            <p>
              Skilled in photography with Adobe Photoshop, Lightroom, and Adobe
              Premiere for image and video editing. I bring a creative edge to
              capturing moments and enhancing them for impactful results.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
