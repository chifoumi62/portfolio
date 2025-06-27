import "../headApropos/headApropos.css";

function HeadApropos() {
  return (
    <div className="head-apropos">
      <h1 className="head-apropos__title">À propos de moi</h1>
      <div className="head-apropos__line">
        <img
          className="head-apropos__image"
          src="/assets/seb.jpg"
          alt="Image de sebastien"
        />
        <p className="head-apropos__description">
          Découvrez qui je suis, mon parcours et mes passions.
        </p>
      </div>
    </div>
  );
}
export default HeadApropos;
