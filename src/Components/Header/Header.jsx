import React, { useState } from "react";
import "./Header.css";

function Header() {
  /* ================Change Background header=============*/

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    //when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 560) header.classList.add("show-header");
    else header.classList.remove("show-header");
  });

  /* ================Toggle Menu=============*/
  const [Toggle, showMenu] = useState(false); // toggle menu
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          <i className="bx bxs-ghost"></i>
        </a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav_link active-link"
                    : "nav_link"
                }
              >
                <i className="uil uil-briefcase-alt nav_icon"></i>Qualification
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav_link active-link"
                    : "nav_link"
                }
              >
                <i className="uil uil-scenery nav_icon"></i>Projects
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav_close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav_toogle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;