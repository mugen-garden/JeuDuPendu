# Pendu

"Le Pendu est un jeu consistant à trouver un mot en divinant quelles sont les lettres qui le composent." [source](https://fr.wikipedia.org/wiki/Le_Pendu_(jeu))

## Etats

On peut avoir 8 états durant le jeu.

[1] - Potence qui ne pend rien. C'est le début du jeu.
[2] - Première fausse lettre : on pends la tête.
[3] - Deuxieme fausse lettre, on pends le buste.
[4][5][6][7] - Les erreurs suivants, une partie du corps à chaque fois.
[8] - Erreur fatale : la mort ! Fin du jeu.

On peut arrêter le jeu avant le 8eme état si l'on trouve toute les lettres.

## Déroulement

Le jeu se joue à deux.

Deux implémentations sont possibles :

- IA : on récupère un dictionnaire de mots, on demande au programme d'en sortir un au hasard, et on simule un joueur comme ça.

- Interactif : On fait une connection en websocket pour faire jouer 2 joueurs.

On va faire en IA. Plus simplez pour le début.