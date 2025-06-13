# puissance4-badjiry.diakite
# 🎯 Puissance 4 en JavaScript (avec Babel)

Un jeu **Puissance 4** réalisé en **JavaScript moderne (ES6+)**, transpilé avec **Babel** pour une compatibilité maximale avec tous les navigateurs. Ce projet repose sur du JavaScript natif.

## 🔍 Aperçu

Un jeu local pour deux joueurs avec une interface simple en HTML/CSS. Le but est d’aligner 4 pions de la même couleur horizontalement, verticalement ou en diagonale.

## 🚀 Fonctionnalités

- Interface en HTML/CSS
- Tour à tour pour deux joueurs
- Vérification de victoire (4 alignés)
- Redémarrage de partie
- Code écrit en ES6+ (let/const, classes, fonctions fléchées, etc.)
- Utilisation de **Babel** pour compatibilité large

## 📁 Structure du projet
├── JS # partie JavaScript
  ├── index.html # Structure de la page
  ├── style.css # Style du jeu
  ├── .babelrc # Config Babel
  ├── package.json # Dépendances (Babel)
  └── README.md # Documentation

## 🛠️ Installation et exécution

1. **Cloner le projet :**

```bash
git clone https://github.com/votre-utilisateur/puissance4-js.git
cd puissance4-js

npm install

npx babel src --out-dir dist

⚙️ Fichier .babelrc
{
  "presets": ["@babel/preset-env"]
}

