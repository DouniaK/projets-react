import { Link } from "react-router-dom";
import "./ArticleCard.css";

export default function ArticleCard({ article }) {
  const date = new Date(article.createdAt).toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric",
  });

  return (
    <div className="article-card">
      <h2 className="article-card-title">
        <Link to={`/article/${article.id}`}>{article.title}</Link>
      </h2>
      <p className="article-card-excerpt">
        {article.content.slice(0, 120)}...
      </p>
      <div className="article-card-meta">
        <span>✍ {article.authorName}</span>
        <span>{date}</span>
      </div>
      <Link to={`/article/${article.id}`} className="article-card-link">
        Lire la suite →
      </Link>
    </div>
  );
}
