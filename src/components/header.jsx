import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>portfolio de Denavaut Sebastien</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">À propos</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projets">Projets</Link>
      </nav>
    </header>
  );
}
export default Header;
