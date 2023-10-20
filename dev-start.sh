#!/bin/bash

# Creating .env.development file
echo "PORT=9000
MONGO_URI=mongodb://mongo:27017/mern_ts_starter" > .env.development
# Installing backend dependencies
npm run install:backend

# Creating the image
docker build -t backend -f ./backend/Dockerfile.dev ./backend

# Installing frontend dependencies
npm run install:frontend

# Creating the image
docker build -t frontend -f ./frontend/Dockerfile.dev ./frontend

# Spinning development container
docker-compose -f docker-compose.dev.yml up