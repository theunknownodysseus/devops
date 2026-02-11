FROM node:18-alpine

WORKDIR /server

COPY . .
RUN npm install 

EXPOSE 5000

CMD ["npm", "start"]