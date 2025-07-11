import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App.jsx";
import Apropos from "./pages/apropos.jsx";
import ProjetCard from "./components/projetCard/projetCard.jsx";
import Error from "./components/erreur/erreur.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/projet/:id" element={<ProjetCard />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
