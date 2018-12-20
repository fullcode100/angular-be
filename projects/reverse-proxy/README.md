# Reverse Proxy

This is the application with reverse proxy server configured in `nginx` that points to a backend. 

To run this example, you'll need [Docker](https://www.docker.com/). 

The reverse proxy server is included in the `Dockerfile` at `projects/reverse-proxy`. You can find the nginx configuration in `nginx-custom.conf` in the same folder.

By default it points to the backend from the `one-server` example, which will run in its own docker container.

The two containers will be orchestrated and networked by `docker-compose`. You can find the configuration for this in `docker-compose.yaml`.

To run the example with reverse proxy, start from the root folder and build the applications and docker containers as follows:
```bash
# Build the applications
cd projects/one-server-api
npm run build:app
cd ../../
npm run build reverse-proxy -- --output-path=./projects/reverse-proxy/dist

# Build the docker containers which copy the applications to the servers
docker-compose build

# Run them in one network
docker-compose up
```
