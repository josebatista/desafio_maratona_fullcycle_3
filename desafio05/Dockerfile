FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli ts-node

WORKDIR /home/node/app

COPY maratona-3-desafio05 .

RUN [ "npm", "install" ]

CMD [ "npm", "run", "start:prod" ]
