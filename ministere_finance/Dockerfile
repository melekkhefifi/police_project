FROM node:latest


WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install  -g npm@8.15.1


COPY . .


CMD ["npm","run","dev"]