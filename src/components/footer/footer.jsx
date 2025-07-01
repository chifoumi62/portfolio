import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h2>contact</h2>
        <a href="mailto:sebastien.denavaut@gmail.com" className="text-muted">
          mail:sebastien.denavaut@gmail.com
        </a>
        <p className="text-muted">téléphone: 07 67 88 43 89</p>
        <a
          href="https://www.linkedin.com/in/sebastien-denavaut"
          target="blank"
          className="text-muted"
        >
          linkedin: https://www.linkedin.com/in/denavaut-sebastien/
        </a>
      </div>
    </footer>
  );
}
export default Footer;
