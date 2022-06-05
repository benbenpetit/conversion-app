# Conversion App

## Lancer le projet

```bash
cd svelte-app
npm install / yarn
npm run dev / yarn dev
```

## Fonctionnement de l'application

### Router
Pour séparer les vues des trois convertisseurs pour la distance, le poids, la température, nous avons utilisé la librairie svelte-routing qui a un fonctionnement très similaire au routeur de ReactJS.
On entoure notre application avec un `<Router>` qui agit comme un `context` dans lequel s'échangent les informations liées à la navigation. `<Link path="/">` est l'équivalent d'une balise `<a href="/">` interprétée par la librairie de routing et `<Route path="about">` affiche le composant donné en fonction de l'url de la web app.

### Données
Dans le dossier `data` nous avons établi dans des tableaux d'objets les unités avec le label associé.
