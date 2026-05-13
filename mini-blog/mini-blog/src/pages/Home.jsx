import { getArticles } from "../lib/api";
import ArticleCard from "../components/ArticleCard";
import "./pages.css";

export default function Home() {
  const articles = getArticles();

  return (
    <div className="page">
      <h1 className="page-title">Tous les articles</h1>
      {articles.length === 0 ? (
        <p className="empty">Aucun article pour le moment.</p>
      ) : (
        <div className="articles-grid">
          {articles.map((a) => <ArticleCard key={a.id} article={a} />)}
        </div>
      )}
    </div>
  );
}
