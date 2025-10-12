import { Link } from "react-router-dom";
import "../navBar.css"
import { HashLink } from "react-router-hash-link";


const Navbar = () => {

  return (
    <nav className="navbar text-base text-white font-[Pixelify_Sans]">
      <div className="nav-content">
        <Link to="/" className="nav-link">Home</Link>
        <HashLink smooth to="/schedule-section" className="nav-link">Schedule</HashLink>
        <Link to="/team" className="nav-link">Team</Link>
        <a href="https://airtable.com/appE94lSN4LzuVA8T/pag9913jUMrtO3XF1/form" className="nav-link">Volunteer</a>
        <a href="https://lu.ma/hwyplw5v" className="nav-link-button">
          <button className="get-started-btn">Register</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;