FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install -g npm@10.3.0

RUN npm install && npm install qrcode-terminal

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
