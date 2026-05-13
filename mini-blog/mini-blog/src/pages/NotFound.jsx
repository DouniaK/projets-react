import { Link } from "react-router-dom";
import "./pages.css";

export default function NotFound() {
  return (
    <div className="page page-center">
      <div className="not-found">
        <h1 className="not-found-code">404</h1>
        <p className="not-found-msg">Page introuvable</p>
        <Link to="/" className="btn-primary">Retour à l'accueil</Link>
      </div>
    </div>
  );
}
