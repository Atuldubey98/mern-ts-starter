#!/bin/bash
echo "PORT=9000
MONGO_URI=mongodb://mongo:27017/mern_ts_starter" > .env

#Spinning all the containers together
docker-compose up