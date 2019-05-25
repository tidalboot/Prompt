FROM node:latest as installation

WORKDIR /app
COPY ./package.json /app

RUN npm install

FROM node:alpine as run

WORKDIR /app
COPY --from=installation /app /app
COPY ./ /app

ENTRYPOINT npm start