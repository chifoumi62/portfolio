import HeadApropos from "../components/headApropos/headApropos";
import BodyApropos from "../components/bodyApropos/bodyApropos";
import "../apropos.css";
import { useState } from "react";

function Apropos() {
  const items = {
    id: 1,
    titre: "Etat civil",
    description:
      "Je m'appelle Denavaut Sebactien,je suis né le 24/12/1973 à NOYON(60), mon adresse actuelle est situé au  32 place du général de gaulle 62780 Cucq, je suis divorcé et j'ai 1 enfant;je suis titulaire du permis B et je possède un véhicule.",
  };

  const items2 = {
    id: 2,
    titre: "Parcours professionnel",
    description:
      "J'ai commencé ma carrière professionnelle en tant qu'ambulancier dans les hauts de France, puis j'ai évolué vers le métier de chauffeur de taxi que j'ai exercé a mon compte pendant 10 ans avant de revenir à mon métier d'origine. En 2024, j'ai décidé de me reconvertir dans le développement web et j'ai suivi plusieurs cours sur openclassroom avant de décider de me lancer dans une formation diplomante de developpeur web auprès de cet organisme. .",
  };

  const items3 = {
    id: 3,
    titre: "Formation",
    description:
      "En 1992, j'ai obtenu un baccalauréat serie C puis j'ai préparer un DEUG MIAS (mathématique, informatique appliqués aux sciences) de 1992 à 1995 avant de m'orienté vers une formation d'ambulancier et d'obtenir un CCA (certificat de capacité d'ambulancier) en 1996. en 2007,j'ai obtenu ma capacité de taxi et en 2025 j'ai décidé de me reconvertir dans le développement web et j'ai obtenu un diplôme de développeur web.",
  };

  const items4 = {
    id: 4,
    titre: "Compétences en informatique",
    description:
      "la formation que j'ai suivi m'a permis d'acquérir des compétences en HTML, CSS, JavaScript, React, Node.js et Express. J'ai également appris à utiliser des outils de gestion de version comme Git et GitHub, ainsi que des bases de données comme MongoDB. Je suis capable de créer des applications web dynamiques et réactives.",
  };

  const items5 = {
    id: 5,
    titre: "Loisirs",
    description:
      "Je suis passionné de plongée sous-marine et pour ce faire je voyage régulièrement sur le contour méditéranéen (Grèce, Turquie, Tunisie,Espagne); J'espère un jour pouvoir élargir mon horizon et partir plonger dans d'autres mers à travers le monde.",
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="apropos">
      <HeadApropos />
      <div className="apropos__line">
        <button onClick={toggleDescription} className="apropos__button">
          En savoir plus ...
        </button>
        {isOpen && (
          <div className="apropos__description">
            <div className="animation_text1">
              <BodyApropos item={items} />
            </div>
            <div className="animation_text2">
              <BodyApropos item={items2} />
            </div>
            <div className="animation_text1">
              <BodyApropos item={items3} />
            </div>
            <div className="animation_text2">
              <BodyApropos item={items4} />
            </div>
            <div className="animation_text1">
              <BodyApropos item={items5} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Apropos;
