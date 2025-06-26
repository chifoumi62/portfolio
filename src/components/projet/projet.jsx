import "./projet.css";

const projet = [
  {
    id: 1,
    title: "Projet booki",
    description:
      "developpement de la page d'accueil d'une application de location de logements",
    image: "/assets/booki.jpg",
    link: "https://github.com/chifoumi62/projet_booki/tree/main",
  },
  {
    id: 2,
    title: "Projet Sophie Bluel",
    description: "Création d'un portfolio pour une architecte",
    image: "/assets/abajour-tahina.png",
    link: "https://github.com/chifoumi62/Portfolio-architecte-sophie-bluel",
  },
  {
    id: 3,
    title: "Projet nina carducci",
    description: "optimisation SEO d'un site de photographie",
    image: "/assets/nina.png",
    link: "https://github.com/chifoumi62/Nina-Carducci-Dev",
  },
  {
    id: 4,
    title: "Kasa",
    description:
      "Création d'une application de location de logements avec React",
    image: "/assets/LOGO (1).png",
    link: "https://github.com/chifoumi62/react-kasa",
  },
  {
    id: 5,
    title: "Projet mon vieux grimoire",
    description: "Création du back-end d'une application de gestion de livres",
    image: "/assets/book_add.jpg",
    link: "https://github.com/chifoumi62/backend",
  },
];

function Projet() {
  return (
    <div className="projets-container">
      <h1>Mes projets</h1>
      <div className="projet-grid">
        {projet.map((item) => (
          <div key={item.id} className="projet-card">
            <img src={item.image} alt={item.title} />
            <div className="projet-card-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Voir le projet
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projet;
