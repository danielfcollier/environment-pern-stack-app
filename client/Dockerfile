FROM node:16.13.2-alpine
EXPOSE 8000
RUN mkdir -p /client
WORKDIR /client

COPY package.json /client/package.json
COPY package-lock.json /client/package-lock.json

RUN npm install

CMD ["npm", "start"]