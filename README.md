# NASA API - Asteroid NeoWS

## Affichage de données d'une API de la NASA avec ReactJS

Vous allez réaliser une application ReactJS affichant des informations sur les astéroïdes passés près de la Terre, en vous appuyant sur les données de l'API de la Nasa.

>Portail des API de la Nasa : [https://api.nasa.gov/index.html](https://api.nasa.gov/index.html)

## Objectif

Avec l'API NeoWs de la Nasa, vous pouvez récupérer des objets sur une période donnée, pour le jour-même, selon un ID récupéré depuis un objet, etc...

Nous allons partir sur un filtre de date (date de début, date de fin) qui permettra de définir une période.

Vous récupérerez donc la liste des astéroïdes passés près de la Terre sur cette période.

Pour chaque élément de la liste, vous êtes libres d'afficher les informations que vous voulez, mais il en faut au minimum 4 ou 5.

Chaque élément aura un lien vers une "fiche individuelle", permettant d'afficher les informations d'un astéroïde.

Sur une fiche individuelle, on aura la possibilité de retourner à la page d'accueil.

>Il ne sera pas nécessaire, au retour sur la page d'accueil, d'avoir gardé les informations de filtre (période sélectionnée, etc...). Si vous le souhaitez, au lieu de faire une page individuelle à part (avec du routing), vous pouvez faire une *SPA (Single Page Application)*, donc utiliser une seule page dans laquelle vous affichez la liste, et la fiche quand vous sélectionnez un astéroïde

## Composants

Vous pouvez utiliser des composants sous forme de classe, de fonction ou les deux à la fois.

## Design

Vous êtes libres sur la libraire / le framework CSS que vous utiliserez. Le seul pré-requis est que l'application soit complètement responsive.
