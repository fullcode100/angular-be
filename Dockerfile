FROM nginx:1.14-alpine

EXPOSE 8080

COPY ./dist/reverse-proxy/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

RUN ls /usr/share/nginx/html
RUN cat /etc/nginx/conf.d/default.conf
