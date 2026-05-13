import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createArticle } from "../lib/api";
import { useAuth } from "../context/AuthContext";
import ArticleForm from "../components/ArticleForm";
import "./pages.css";

export default function CreateArticle() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (data) => {
    setLoading(true);
    const article = createArticle(data, user);
    navigate(`/article/${article.id}`);
  };

  return (
    <div className="page">
      <h1 className="page-title">Nouvel article</h1>
      <ArticleForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}
