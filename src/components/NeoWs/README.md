# A propos du composant `NeoWsError`

## Syntaxe

Le composant se présente sous cette forme :

```JSX
//...
const NeoWsError = ({ error }) => (
    error && <Alert type="danger" message={error.message} />
);
//...
```

Le composant `NeoWsError` est un composant **fonctionnel**.

Par ailleurs, nous l'avons écrit sous forme de [fonction fléchée](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es).

Une forme non condensée et avec une syntaxe de fonction classique ressemblerait à ça :

```JSX
//...
const NeoWsError = function(props) {
  const error = props.error;
  if (error) {
    return <Alert type="danger" message={error.message} />;
  } else {
    return null;
  }
};
//...
```

Dans un premier temps, nous pouvons récupérer l'erreur directement dans les arguments avec la [syntaxe de décomposition](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition) d'objet :

> Les commentaires avec '---' signifient qu'il faut supprimer la ligne

```JSX
//...
const NeoWsError = function({ error }) {
  // --- const error = props.error;
  if (error) {
    //...
```

Ensuite, nous allons passer à une syntaxe de fonction fléchée :

```JSX
//...
const NeoWsError = ({ error }) => {
// --- const NeoWsError = function({ error }) {
  if (error) {
    //...
```

Pour finir, nous voulons condenser la syntaxe de notre condition `if - else` :

```JSX
if (error) {
  return <Alert type="danger" message={error.message} />;
} else {
  return null;
}
```

Cela signifie que si `error` est évaluée à `true`, alors on va retourner le composant `Alert`. Sinon on retourne `null`.

On pourrait donc combiner l'évaluation de la variable `error` avec le rendu de notre `Alert` :

```JSX
error && <Alert type="danger" message={error.message} />
```

Si `error` vaut `null`, cette expression retournera `null`, car `error`, première partie de l'expression, sera différente de `true`. L'interpréteur ne va donc pas évaluer la seconde partie de l'expression.

### Pourquoi l'interpréteur ne va pas évaluer la seconde partie de l'expression

En logique propositionnelle, il existe ce qu'on appelle des **opérateurs logiques**. Ils permettent de combiner des expressions par un `ET`, ou bien `OU`, ou encore un `OU EXCLUSIF` par exemple.

Prenons deux expressions A et B, qui peuvent chacune être `VRAIE (1)` ou `FAUSSE (0)`.

La liaison de ces deux expressions par un opérateur logique `ET` donnera la table d'évaluations suivante :

A | B | A ET B |
--|:-:|:------:|
0 | 0 |    0   |
0 | 1 |    0   |
1 | 0 |    0   |
1 | 1 |    1   |

Pour que l'expression `A ET B` soit vraie, il faut que `A` et `B` soient vraies toutes les deux.

Quand on a un opérateur logique `&&` (soit `ET`), l'interpréteur sait donc que si la première expression est évaluée à `false`, ça ne sert à rien d'évaluer la seconde.

On retournera donc `null` dans notre cas s'il n'y a pas d'erreur, donc que `error` vaut null.

En revanche, s'il y a une erreur, l'interpréteur continue son évaluation, et retourne la seconde partie de l'expression, soit notre contenu JSX.
