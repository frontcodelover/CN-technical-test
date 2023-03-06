# Test technique React.JS

Cette application permet de voir, d'éditer, de supprimer et d'ajouter des appartements une fois connecté.
Aucun backoffice n'a été mis en place, il s'agit uniquement de données qui sont affiché via un json server situé dans `db.json`.
Les données pour se connecter en tant qu'administrateur sont

- nom d'utilisateur : admin
- mot de passe : password

## Prérequis

- [NPM](https://www.npmjs.com/)
- [NodeJS](https://nodejs.org/en/)

## Installation

1. Après avoir cloné le repo `npm i` pour installer les packages
2. `npm run dev` permet de lancer l'application
3. L'application est accessible à l'adresse `http://127.0.0.1:5173/`
4. Dans un second terminal il faut aussi lancer le serveur en faisant simplement `npx npx json-server --watch data/db.json --port 8000`

## Dépendances

- [React](https://fr.reactjs.org/)
- [React-Router-Dom](https://v5.reactrouter.com/web/guides/quick-start)
- [Axios](https://axios-http.com/)
- [Tailwind](https://tailwindcss.com/)
- [JSON Server](https://www.npmjs.com/package/json-server)
- [React icons](https://react-icons.github.io/react-icons/)
