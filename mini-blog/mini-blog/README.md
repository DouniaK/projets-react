# Mini Blog — React

Exercice ESTIAM : application React multi-pages avec authentification.

## Fonctionnalités

- ✅ Inscription / Connexion (simulées, sans backend)
- ✅ Token JWT stocké dans localStorage
- ✅ Déconnexion
- ✅ Routes protégées (redirection vers /login si non connecté)
- ✅ Liste publique des articles
- ✅ Page de détail d'un article
- ✅ Création d'un article (connecté uniquement)
- ✅ Modification / Suppression (auteur uniquement)
- ✅ Mes articles
- ✅ Navbar dynamique selon l'état de connexion
- ✅ Page 404

## Compte de test

```
Email : alice@test.com
Mot de passe : alice123
```

## Structure des fichiers

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── context/
│   └── AuthContext.jsx
├── lib/
│   └── api.js
├── components/
│   ├── Navbar.jsx / .css
│   ├── ProtectedRoute.jsx
│   ├── ArticleCard.jsx / .css
│   └── ArticleForm.jsx / .css
└── pages/
    ├── Home.jsx
    ├── Login.jsx
    ├── Register.jsx
    ├── ArticleDetail.jsx
    ├── CreateArticle.jsx
    ├── EditArticle.jsx
    ├── MyArticles.jsx
    ├── NotFound.jsx
    └── pages.css
```

## Lancer le projet

```bash
npm install
npm run dev
```

## Technologies

- React 18
- React Router v6
- Vite
- CSS
