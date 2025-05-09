
up:
	docker compose build
	docker ps -q | xargs -r docker stop
	docker compose run --rm ui npm install
	docker compose stop
	docker compose up -d