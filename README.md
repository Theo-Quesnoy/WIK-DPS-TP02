# Docker

Voici comment créer et lancer une image docker sur petit serveur web TS/Express créer dans le tp précédent

Pour pouvoir ainsi créer et lancer une image, voici les étapes à suivre :

- Installer docker desktop `https://www.docker.com/products/docker-desktop/`
- Installer ensuite ubuntu directement sur le microsoft store
- Installer WSL2 que vus pouvez retrouver sur ce lien dans la rubrique `Comment installer linux sur windows10/Windows 11` -> `https://korben.info/installer-wsl2-windows-linux.html`, il faudra redémarrer l'ordinateur
- Cloner le repo git ATTENTION : pas directement sur le bureau sinon le build de l'image ne fonctionnera pas
- Aller dans le dossier TP
- Build l'image docker avec cette commande : `docker build -t tp .`
- Faites ensuite un `docker run --name tp -p 80:4888 -d tp`
- Aller sur `localhost` et `localhost/ping` pour vérifier que le site fonctionne correctement
- Pour arreter le conteneur, aller sur docker desktop -> containers -> cliquer sur le carré stop du conteneur
