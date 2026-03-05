# démarer sur un serveur nginx
FROM nginx:alpine

# supprime les fichier html par defaut dans le serveur nginx qu'on vient de créer
RUN rm -rf /usr/shre/nginx/html/*

# copie mon projet dans le dossier cible
COPY . /usr/share/nginx/html

# nginx ecoute sur le port 80
EXPOSE 80