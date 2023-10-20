docker-build-backend-dev:
	npm run install:backend
	docker build -t backend -f ./backend/Dockerfile.dev ./backend
docker-build-frontend-dev:
	npm run install:frontend
	docker build -t frontend -f ./frontend/Dockerfile.dev ./frontend
docker-run-dev:
	docker-compose -f docker-compose.dev.yml up
docker-run-prod:
	docker-compose up