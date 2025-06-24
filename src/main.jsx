import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import Apropos from "./components/apropos.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
