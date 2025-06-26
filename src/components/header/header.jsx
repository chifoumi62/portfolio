import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <h1>Portfolio Denavaut Sebastien</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">À propos</Link>
      </nav>
    </header>
  );
}
export default Header;
