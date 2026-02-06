FROM nginx:alpine

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Create required nginx dirs & give permissions
RUN mkdir -p \
    /var/cache/nginx \
    /var/run \
    /var/log/nginx \
    /tmp \
 && chown -R appuser:appgroup \
    /var/cache/nginx \
    /var/run \
    /var/log/nginx \
    /tmp \
    /usr/share/nginx/html \
    /etc/nginx

# Copy config
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/

USER appuser

EXPOSE 8080
HEALTHCHECK CMD wget -qO- http://localhost:8080 || exit 1
