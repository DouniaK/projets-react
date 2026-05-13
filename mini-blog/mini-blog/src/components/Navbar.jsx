import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">✦ MiniBlog</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Accueil</Link>
          {user ? (
            <>
              <Link to="/create" className="nav-link">+ Article</Link>
              <Link to="/my-articles" className="nav-link">Mes articles</Link>
              <span className="nav-user">👤 {user.name}</span>
              <button onClick={handleLogout} className="btn-logout">Déconnexion</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Connexion</Link>
              <Link to="/register" className="nav-btn">Inscription</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
