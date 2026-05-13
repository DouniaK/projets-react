import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getArticleById, updateArticle } from "../lib/api";
import { useAuth } from "../context/AuthContext";
import ArticleForm from "../components/ArticleForm";
import "./pages.css";

export default function EditArticle() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const article = getArticleById(id);

  if (!article) return <div className="page"><p>Article introuvable. <Link to="/">Retour</Link></p></div>;
  if (user.id !== article.authorId) return <div className="page"><p>Accès refusé. <Link to="/">Retour</Link></p></div>;

  const handleSubmit = (data) => {
    setLoading(true);
    updateArticle(id, data);
    navigate(`/article/${id}`);
  };

  return (
    <div className="page">
      <h1 className="page-title">Modifier l'article</h1>
      <ArticleForm initial={article} onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}
