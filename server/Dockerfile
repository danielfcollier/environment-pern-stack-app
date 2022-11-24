FROM node:16.13.2-alpine
RUN mkdir -p /server
WORKDIR /server

COPY package.json /server/package.json
COPY package-lock.json /server/package-lock.json

RUN npm install

CMD ["npm", "start"]