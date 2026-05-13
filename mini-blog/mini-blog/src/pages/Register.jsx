import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./pages.css";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Tous les champs sont requis."); return;
    }
    if (password.length < 6) {
      setError("Le mot de passe doit faire au moins 6 caractères."); return;
    }
    const result = register(email, password, name);
    if (result.error) { setError(result.error); return; }
    navigate("/");
  };

  return (
    <div className="page page-center">
      <div className="auth-card">
        <h1 className="page-title">Inscription</h1>
        {error && <div className="alert-error">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <div className="form-field">
            <label>Nom</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre nom" required />
          </div>
          <div className="form-field">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="vous@email.com" required />
          </div>
          <div className="form-field">
            <label>Mot de passe</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn-primary btn-full">Créer mon compte</button>
        </form>
        <p className="auth-switch">Déjà un compte ? <Link to="/login">Se connecter</Link></p>
      </div>
    </div>
  );
}
