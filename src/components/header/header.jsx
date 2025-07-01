import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <h1>Portfolio Denavaut Sebastien</h1>
      <nav>
        <Link to="/">Projets</Link>
        <Link to="/apropos">À propo</Link>
      </nav>
    </header>
  );
}
export default Header;
