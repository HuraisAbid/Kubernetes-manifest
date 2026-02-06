FROM nginx:alpine

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Create only necessary nginx dirs & set permissions
RUN mkdir -p /var/cache/nginx /var/run/nginx /var/log/nginx /usr/share/nginx/html /etc/nginx \
 && chown -R appuser:appgroup /var/cache/nginx /var/run/nginx /var/log/nginx /usr/share/nginx/html /etc/nginx \
 && chmod 755 /var/cache/nginx /var/run/nginx /var/log/nginx

# Copy config & static files
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/

# Switch to non-root
USER appuser

EXPOSE 8080

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

# Healthcheck
HEALTHCHECK CMD wget -qO- http://localhost:8080 || exit 1
