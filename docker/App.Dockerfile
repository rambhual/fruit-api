FROM node:16-slim

WORKDIR /var/www/app

COPY . .
EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
