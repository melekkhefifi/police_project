FROM node:current-alpine 

WORKDIR /app



copy package.json package.json 
COPY package-lock.json package-lock.json  


RUN npm install 
COPY . . 


CMD ["npm","start"]

