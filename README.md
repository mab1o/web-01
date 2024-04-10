# Bienvenue dans MEME-Ory !
MEME-Ory est un jeu de mémoire basé sur les memes ¯(ツ)/¯.

## Objectifs
Ce projet a été réalisé dans le cadre de la formation de **developpement web** de 
4e année proposé à l'[EPF école d'ingénieur](https://www.epf.fr/).
Ce cours a été créé et dispensé par [Takima](https://www.takima.fr/).
Son objectif est d'enseigner le **développement web** en transformant un 
projet écrit en JavaScript ES5 en un projet utilisant ES6.

## Démarrer et Essayer l'Application
Installer et démarrer le back-end :

```bash
cd back-end
npm install
npm run start
```
Démarrer le serveur HTTP pour le front-end :

```bash
cd front-end
npm install
npm run start
```
Testez l'application en accédant à http://localhost:8080/ et jouez à travers tout le jeu.

## Vues
Comme vous pouvez le voir, le jeu se compose de trois vues :

* __Game view__ : vue du jeux en lui-même
* __Score view__ : vue du score obtenue à la partie
* __Welcome view__ : vue de l'accueil du jeux

## Reponses au questions du TP

#### 1. `npm install` command also generated a **package-lock.json** file along with **package.json**. What is the purpose of this file?

Le fichier **package-lock.json** a pour but de donner la version exacte de chaque dépendance installée, y compris ses sous-dépendances et leurs versions.Cela rend le build reproductible et donc plus facile à partager avec d'autres développeurs. Ainsi, si le projet est récupéré par quelqu'un d'autre, il pourra lancer le projet avec les mêmes bibliothèques et les mêmes versions de celle-ci.

#### 2. By convention, all `NPM` dependencies use a 3-digit format for version numbers. How do you call this?

Les dépendances dans NPM utilisent une convention pour le nommage de leur version qui est le Semantic Versioning (SemVer).

#### 3. What is a devDependency exactly? What are the differences with a dependency?

Les dépendances régulières sont les packages nécessaires pour que l'application fonctionne correctement en production. Les devDependency sont des dépendances uniquement utilisées lors du développement, telles que celle de test. Elles ne sont pas utiles pour l'application finale livrée au client.

#### 4. What is a closure/iife ? What was it used for ? What replaced it?

L’ iife est utilisé pour encapsuler des variables et fonctions en créant de nouveaux scopes . Cela permet d’éviter la pollution du scope global. Cette pratique est bien moins utilisée, car l’ES6 permet désormais de choisir grâce au mot `export` les fonctions et variables qui pourront être dans le scope global.

#### 5. What is the difference between `import * from './utils'` and import `{ parseUrl } from './utils'`? What can be the consequences of using one instead of the other?

`import * from './utils'` importe toutes les fonctions importables de `'./utils'`.
`{ parseUrl } from './utils'` importe uniquement la fonction `parseUrl` de `'./utils'`.
La première option peut amener à importer des fonctions dont on ne se sert pas.
Cela va alourdir le fichier inutilement à la compilation.

#### 6. Can you think of at least 2 things that are possible with `Java` classes, but cannot be done with `ES6` classes?

Les classes `Java` permettent de créer des interfaces et d'overloaded des fonctions.
Ces deux pratiques ne peuvent pas être faites avec les classes ES6.

#### 7. What are the differences between `var` and `let`?

La différence est que : `var` est déclaré dans un scope et est donc accessible partout dans le scope (si elle est à la racine du fichier, partout dans le code) ; alors que `let` est déclaré uniquement dans un bloc, elle ne sera accessible que dans le bloc. 

#### 8. What is the `.bind(this)` stuff? What happens if you delete it? Is it needed when using an arrow function ? Why ?

`.bind(this)` sert à lier le contexte de `this` à une fonction. S’il est supprimé, la fonction prendra le contexte de la fonction dans laquelle elle est appelée. Cela peut générer une erreur si ce contexte n’est pas le même que celui désiré ou n’est pas défini.

Dans un arrow fonction, `.bind(this)` n’est pas nécessaire. Le contexte prit n’est pas celui de la fonction dans laquelle elle est appelée, mais celui dans laquelle elle est définit donc plus besoin de lier le contexte puisque celui lié par défaut et déjà le bon.

#### 9. What does the @ symbol mean in `@babel/***`?

Le symbole @ permet de désigner un plugin ou modules que Babel utilise pour fonctionner. Cela permet de plus facilement de comprendre ce qu'utiliser Babel et de les « ranger » au même endroit.

#### 10. What are the advantages of Promises?

Les promesses permettent de gérer les opérations asynchrones de façon plus compréhensibles. Elles permettent de comprendre plus simplement l’enchainement de plusieurs opérations asynchrone à la suite.

#### 11. What version of ECMAScript `async / await` was released in ?

L'utilisation de `async / await` a été introduite dans ECMAScript 2017.

#### 12. Component-oriented programming for the web is considered more maintainable. Why?

Le Component-oriented programming est considéré comme plus maintenable, car il regroupe les fichiers gérant le même composant. Cela permet entre autres de faciliter la réutilisation d’un composant et son évolution dans le temps.

#### 13. What is Functional programming?

La programmation fonctionnelle est un paradigme de programmation où les programmes sont construits en appliquant et en composant des fonctions (tel que `map()`,`filter()`,…).

#### 14. Explain what the `map()` function does ?

La fonction `map()` crée un tableau avec chaque élément de la liste d’origine et applique la fonction donnée en argument à chacun des éléments du tableau. Le tableau ainsi modifié est renvoyé en sortie.

#### 15. Explain what the `filter()` function does ?

La fonction `filter()` renvoie un tableau contenant uniquement les éléments qui correspondent à la condition donnée en argument de la fonction.

#### 16. Explain what the `reduce()` function does ?

La fonction `reduce()` prends en entrée un tableau et renvoie une valeur. L’argument pris en entrée décrit à la fonction comment elle doit accumuler les valeurs du tableau pour qu’à la fin il ne soit plus qu’une valeur.

#### 17. What is the difference between `.then()` and `async/await` when handling asynchronous functions?

`.then()` est utilisé pour traiter le résultat d’une promesse. `async/await` ont un fonctionnement similaire à `.then()` et plus moderne de gérer les opérations asynchrones. lLes fonctions `async` renvoient des promesses et `await` permet d’appeler d’autres `async` fonction à la suite sans avoir à définir une chaine de promesse comme avec `.then()`.

#### 18. What does the _ prefix mean on a `SASS` file?

Le préfixe “_” sur un fichier `SASS` indique qu’il s’agit d’un fichier partiel. Ce fichier doit être inclus dans un autre fichier SASS avec l’annotation `@import` pour être compilé en `CSS`. (NB : pas vue lors du TP)

