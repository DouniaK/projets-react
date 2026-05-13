// Données fictives — simule un backend
let articles = [
  {
    id: 1,
    title: "Introduction à React",
    content: "React est une bibliothèque JavaScript pour construire des interfaces utilisateur. Elle est maintenue par Meta et une communauté de développeurs. React permet de créer des composants réutilisables qui gèrent leur propre état.",
    authorId: 1,
    authorName: "Alice",
    createdAt: "2026-05-01T10:00:00Z",
  },
  {
    id: 2,
    title: "Les hooks React",
    content: "Les hooks sont des fonctions spéciales de React qui permettent d'utiliser l'état et d'autres fonctionnalités de React dans des composants fonctionnels. Les plus utilisés sont useState, useEffect et useContext.",
    authorId: 1,
    authorName: "Alice",
    createdAt: "2026-05-05T14:30:00Z",
  },
  {
    id: 3,
    title: "React Router v6",
    content: "React Router est la bibliothèque de routage standard pour React. La version 6 apporte des améliorations importantes comme les routes imbriquées, les outlets et les loaders. Elle simplifie grandement la navigation dans une SPA.",
    authorId: 2,
    authorName: "Bob",
    createdAt: "2026-05-10T09:15:00Z",
  },
];

export const getArticles = () => [...articles];

export const getArticleById = (id) =>
  articles.find((a) => a.id === Number(id));

export const createArticle = (data, user) => {
  const article = {
    id: Date.now(),
    title: data.title,
    content: data.content,
    authorId: user.id,
    authorName: user.name,
    createdAt: new Date().toISOString(),
  };
  articles = [article, ...articles];
  return article;
};

export const updateArticle = (id, data) => {
  articles = articles.map((a) =>
    a.id === Number(id) ? { ...a, ...data } : a
  );
  return articles.find((a) => a.id === Number(id));
};

export const deleteArticle = (id) => {
  articles = articles.filter((a) => a.id !== Number(id));
};

export const getArticlesByAuthor = (authorId) =>
  articles.filter((a) => a.authorId === authorId);
