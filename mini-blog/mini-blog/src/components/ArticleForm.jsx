import { useState } from "react";
import "./ArticleForm.css";

export default function ArticleForm({ initial = {}, onSubmit, loading }) {
  const [title, setTitle] = useState(initial.title || "");
  const [content, setContent] = useState(initial.content || "");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!title.trim()) e.title = "Le titre est requis.";
    if (!content.trim()) e.content = "Le contenu est requis.";
    if (content.trim().length < 20) e.content = "Le contenu doit faire au moins 20 caractères.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      onSubmit({ title: title.trim(), content: content.trim() });
    }
  };

  return (
    <form className="article-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="title">Titre</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre de l'article"
          className={errors.title ? "has-error" : ""}
        />
        {errors.title && <span className="error-msg">{errors.title}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="content">Contenu</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Contenu de l'article..."
          rows={10}
          className={errors.content ? "has-error" : ""}
        />
        {errors.content && <span className="error-msg">{errors.content}</span>}
      </div>
      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? "Envoi..." : "Publier"}
      </button>
    </form>
  );
}
