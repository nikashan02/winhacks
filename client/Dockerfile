FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000

ENV REACT_APP_BASE_URL=http://localhost:5000/api

CMD [ "yarn", "start" ]