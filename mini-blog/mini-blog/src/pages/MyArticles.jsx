import { useNavigate } from "react-router-dom";
import { getArticlesByAuthor, deleteArticle } from "../lib/api";
import { useAuth } from "../context/AuthContext";
import ArticleCard from "../components/ArticleCard";
import "./pages.css";

export default function MyArticles() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const articles = getArticlesByAuthor(user.id);

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Mes articles</h1>
        <button className="btn-primary" onClick={() => navigate("/create")}>+ Nouvel article</button>
      </div>
      {articles.length === 0 ? (
        <p className="empty">Vous n'avez pas encore écrit d'article.</p>
      ) : (
        <div className="articles-grid">
          {articles.map((a) => <ArticleCard key={a.id} article={a} />)}
        </div>
      )}
    </div>
  );
}
