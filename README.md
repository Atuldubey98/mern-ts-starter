
# Mongodb Express ReactJS Nodejs (MERN) starter project template using typescript

It is starter template project for MERN app having docker enabled for production and development both. The frontend and backend will be served using nginx in the production which is a part of the container.

The project template enables you to start the work directly without the overhead of setting up everything using typescript.


## Features

- Docker enabled
- Nginx enabled
- mongodb express ui enabled for mongodb database access in development
- eslint enabled


## Starting with the project

Clone the project repo

```bash
git clone https://github.com/Atuldubey98/mern-ts-starter.git project_name
```
By default `.env` will be used for production environment. `.env.${NODE_ENV}` will load the corresponding .env files according to the environment.
```bash
touch .env .env.development
``` 


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=YOUR_PORT`

If you are using local mongodb or mongodb atlas you can specify the MONGO_URI like this.

`MONGO_URI=YOUR_MONGO_URI`

Else if you are planning to use mongodb of docker container itself you can specify the MONGO_URI like this where your_db_name can be filled by your database name.
 
`MONGO_URI=mongodb://127.0.0.1/your_db_name`

Eg. .env.development if using docker container mongodb

`PORT=9000`

`MONGO_URI=mongodb://127.0.0.1/mern_ts_starter`

## Run Locally

Using make file
#### Nodejs Server

```bash
make docker-build-backend-dev
```

#### Reactjs Server

```bash
make docker-build-frontend-dev
```
Without make file

#### Nodejs Server



```bash
npm run install:backend
```

```bash
docker build -t backend -f ./backend/Dockerfile.dev ./backend
```

#### Reactjs Server

Without make file

```bash
npm run install:frontend
```

```bash
docker build -t frontend -f ./backend/Dockerfile.dev ./frontend
```

### Spinning the servers - development

Using make file

```bash
make docker-run-dev
```

Without make file

Open two terminals -:
- frontend 

```bash
cd frontend && npm run dev
```
- frontend 

```bash
cd backend && npm run dev
```


## Deployment

Without make file without docker

Additional setup will be required for setting up nginx so that http requests can be routed to frontend and backend accordingly.

```bash
npm run build
```

```bash
npm start
```

Without make file with docker

```bash
docker-compose up
```

With make file with docker

```bash
make docker-run-prod
```
## Authors

- [@Atuldubey98](https://github.com/Atuldubey98)


## Feedback

If you have any feedback, please reach out to us at atuldubey017@gmail.com


## Related

Here are some related projects

- [Mongo Docker Image](https://hub.docker.com/_/mongo)

- [Nginx](https://hub.docker.com/_/nginx)

- [Node](https://hub.docker.com/_/node)

- [Mongodb Express](https://hub.docker.com/_/mongo-express)

## Appendix

Minimum setup has beend done for development and production purposes with the benefits of docker in development and docker with nginx in production. Mongodb has also been deployed to the Docker container. 

### To avoid all the above setup using scripts

Development

```bash
chmod +x ./dev-start.sh
```

```bash
./dev-start.sh
```


Production

```bash
chmod +x ./prod-start.sh
```

```bash
./prod-start.sh
```
In case of any queries feel free to contact me.