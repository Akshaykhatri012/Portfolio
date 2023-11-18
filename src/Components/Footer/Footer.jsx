import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Akshay Khatri</h1>
        <ul className="footer_list">
          <li>
            <a href="#home" className="footer_link">
              Home
            </a>
          </li>

          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="footer_link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://www.linkedin.com/in/akshay-khatri/"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/Akshaykhatri012"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/akshaykhatri012/"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footer_copy-item">
          FrontEnd React Developer 🚀 | CS Graduate 🎓
        </span>
        <span className="footer_copy-location">
          📍Faridabad , Delhi/NCR , Haryana
        </span>
        <span className="footer_copy-item">
          Made with ❤️ by Akshay Khatri 🧑
        </span>
        {/* <span className="footer_copy">
          &#169; Akshay Khatri. All rights reserved
        </span> */}
      </div>
    </footer>
  );
}

export default Footer;
