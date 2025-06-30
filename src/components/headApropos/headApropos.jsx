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
          Je m'appelle Sébastien; J'ai 50 ans et je me suis passionné assez
          récemment pour le développement web. Après une carrière dans le
          secteur médical, j'ai décidé de me reconvertir dans ce domaine en
          2025. J'ai suivi une formation intensive qui m'a permis d'acquérir des
          compétences solides en HTML, CSS, JavaScript, React et Node.js. Je
          suis enthousiaste à l'idée de créer des applications web dynamiques et
          réactives, ainsi que de continer à me former sur d'autres technologies
          du web et conforter mes connaissances actuelles. Vous voulez en savoir
          plus sur moi, alors cliquez sur le bouton ci-dessous.
        </p>
      </div>
    </div>
  );
}
export default HeadApropos;
