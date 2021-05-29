FROM node:14-alpine

ENV TERM xterm
WORKDIR /workspace

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

CMD ["npm", "start"]
