# Stage 1 - Build the app
FROM node:13.10.1-slim as node
WORKDIR /app
COPY package.json /app/
RUN npm i npm@latest -g
RUN npm install
RUN npm install -g @angular/cli
COPY ./ /app/
ARG env=prod
RUN ng build

#Stage 2 - Serve the app using Nginx
FROM nginx:1.13
COPY --from=node /app/dist/weather-app /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf