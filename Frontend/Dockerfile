FROM nginx:alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/

RUN chown -R appuser:appgroup /usr/share/nginx/html
USER appuser

EXPOSE 8080
HEALTHCHECK CMD wget -qO- http://localhost:8080 || exit 1

