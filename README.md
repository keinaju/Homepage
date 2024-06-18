Railway deployment for my homepage, hosted in Railway + NGINX server. 

By default the `site/` directory gets deployed to Railway as a static site. This can be modified by changing the `Dockerfile`.

The site is deployed using the default NGINX configuration. This can be overridden with a custom conf file by adding

```
COPY nginx.conf /etc/nginx/nginx.conf
```

to the end of the Dockerfile.
