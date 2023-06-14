import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {

    return (
      <header className="header">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </header>
    )
  }
  
  export default Header;