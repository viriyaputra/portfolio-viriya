FROM node:20.16.0-alpine3.20
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start" ]