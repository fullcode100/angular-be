# Reverse Proxy

This is the application with reverse proxy server configured in `nginx` that points to a backend. 

To run this, you'll need [Docker](https://www.docker.com/). The reverse proxy server is included in the `Dockerfile` at the root. You can find the nginx configuration in `nginx-custom.conf` at the root.

By default it points to the backend from the one-server example, so you'll need to start that one as well or point it to your own backend. You can see this in the `ENV` from the `Dockerfile`.

To run the example with reverse proxy, start from the root folder and run:
```bash
npm run build reverse-proxy
docker build . -t reverse-proxy
docker run reverse-proxy -p 8080:8080
```
