docker-build-backend-dev:
	docker build -t backend -f ./backend/Dockerfile.dev .
docker-build-frontend-dev:
	docker build -t frontend -f ./frontend/Dockerfile.dev .
docker-run-dev:
	docker-compose -f docker-compose.dev.yml up
docker-run-prod:
	docker-compose up