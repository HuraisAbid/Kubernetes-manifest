FROM nginx:alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

RUN rm /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/cache/nginx /var/run \
    && chown -R appuser:appgroup \
       /var/cache/nginx \
       /var/run \
       /etc/nginx \
       /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/

USER appuser

EXPOSE 8080

HEALTHCHECK CMD wget -qO- http://localhost:8080 || exit 1

CMD ["nginx", "-g", "daemon off;"]
