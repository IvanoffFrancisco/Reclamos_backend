FROM node:14.16.1

# CREO EL DIRECTORIO DE TRABAJO

WORKDIR /app

#copio el package json y package-lock.json al directrio de trabajo
COPY package*.json ./

#ejecuto npm i para poder 

RUN npm install

#copio todo src dentro del directorio de trabajo
COPY . .

#ejecuto el proyecto
CMD [ "npm","start" ]

