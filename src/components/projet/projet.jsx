import "./projet.css";
import { Link } from "react-router-dom";

const projet = [];
await fetch("/data/projet.json")
  .then((Response) => Response.json())
  .then((data) => {
    projet.push(...data);
    console.log(data);
    console.log(projet);
  })
  .catch((error) => {
    console.error("error fetching data:", error);
  });

function Projet() {
  return (
    <div className="projets-container">
      <h1>Mes projets</h1>
      <div className="projets-card-container">
        {projet.map((item) => (
          <div className="projets-card" key={item.id}>
            <Link
              to={`/projet/${item.id}`}
              className="projets-card-link"
              key={item.id}
            >
              <img src={item.image} alt={item.title} />
              <div className="projets-card-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projet;
