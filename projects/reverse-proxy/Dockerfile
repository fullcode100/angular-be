FROM nginx:1.14-alpine

EXPOSE 8080

COPY ./dist /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
