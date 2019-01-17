FROM node:carbon as builder
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN npm run build
FROM nginx
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/nginx.conf
