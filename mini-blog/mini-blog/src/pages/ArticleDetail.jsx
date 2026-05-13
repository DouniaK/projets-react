import { useParams, useNavigate, Link } from "react-router-dom";
import { getArticleById, deleteArticle } from "../lib/api";
import { useAuth } from "../context/AuthContext";
import "./pages.css";

export default function ArticleDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const article = getArticleById(id);

  if (!article) return (
    <div className="page page-center">
      <p>Article introuvable. <Link to="/">Retour</Link></p>
    </div>
  );

  const isAuthor = user && user.id === article.authorId;
  const date = new Date(article.createdAt).toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric",
  });

  const handleDelete = () => {
    if (window.confirm("Supprimer cet article ?")) {
      deleteArticle(article.id);
      navigate("/");
    }
  };

  return (
    <div className="page">
      <Link to="/" className="back-link">← Retour</Link>
      <article className="article-detail">
        <h1 className="article-detail-title">{article.title}</h1>
        <div className="article-detail-meta">
          <span>✍ {article.authorName}</span>
          <span>{date}</span>
        </div>
        <p className="article-detail-content">{article.content}</p>
        {isAuthor && (
          <div className="article-actions">
            <Link to={`/edit/${article.id}`} className="btn-secondary">Modifier</Link>
            <button onClick={handleDelete} className="btn-danger">Supprimer</button>
          </div>
        )}
      </article>
    </div>
  );
}
