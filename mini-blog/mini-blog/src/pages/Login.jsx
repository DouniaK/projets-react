import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./pages.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (result.error) { setError(result.error); return; }
    navigate("/");
  };

  return (
    <div className="page page-center">
      <div className="auth-card">
        <h1 className="page-title">Connexion</h1>
        {error && <div className="alert-error">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <div className="form-field">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="alice@test.com" required />
          </div>
          <div className="form-field">
            <label>Mot de passe</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn-primary btn-full">Se connecter</button>
        </form>
        <p className="auth-switch">Pas encore de compte ? <Link to="/register">S'inscrire</Link></p>
        <p className="auth-hint">💡 Compte test : alice@test.com / alice123</p>
      </div>
    </div>
  );
}
