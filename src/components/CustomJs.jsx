import { useEffect } from "react";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";

function CustomJs() {
  useEffect(() => {
    /*========= toggle icon navbar ==========*/
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    const handleMenuClick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };

    menuIcon.addEventListener("click", handleMenuClick);

    /*========= scroll secton active ==========*/
    let sections = document.querySelectorAll("section");
    let navlinks = document.querySelectorAll("header nav a");

    const handleScroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navlinks.forEach((links) => {
            links.classList.remove("active");
            document
              .querySelector(`header nav a[href*=${id}]`)
              .classList.add("active");
          });
        }
      });

      /*========= sticky navbar ==========*/
      let header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 100);

      /*========= remove toggle icon and  navbar when click navbar link ==========*/
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    /*======== scroll reveal ==========*/
    ScrollReveal({
      distance: "80px",
      duration: 1000,
      delay: 200,
    });

    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(
      ".home-img, .services-container, .portfolio-box, contact form",
      { origin: "bottom" }
    );
    ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
    ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

    /*======== typed js ==========*/


    /*=======Email========*/
    // function openEmailClient() {
    //   const fullName = document.getElementById("full-name").value;
    //   const email = document.getElementById("email").value;
    //   const mobileNumber = document.getElementById("mobile-number").value;
    //   const emailSubject = document.getElementById("email-subject").value;
    //   const message = document.getElementById("message").value;

    //   const emailBody = `Full Name: ${fullName} \nEmail: ${email} \nMobile Number: ${mobileNumber} \nSubject: ${emailSubject} \nMessage: ${message}`;

    //   const mailtoLink = `mailto:shekharroy5292@gmail.com?subject=${encodeURIComponent(
    //     emailSubject
    //   )}&body=${encodeURIComponent(emailBody)}`;

    //   // Open the email client in a new tab
    //   window.open(mailtoLink, "_blank");
    // };

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      menuIcon.removeEventListener("click", handleMenuClick);
    };
  }, []); // Empty dependency array means this effect runs once after mount

  // Since this component doesn't render anything, return null
  return null;
}

export default CustomJs;
