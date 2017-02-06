BIN_DOCKER = 'docker'
BIN_DOCKER_COMPOSE = 'docker-compose'

CONTAINER_NODE_API = node_api
CONTAINER_NODE_WEB = node_web
CONTAINER_NODE_MONGO = mongo

up:
	$(BIN_DOCKER_COMPOSE) up -d

down:
	$(BIN_DOCKER_COMPOSE) down

ps:
	$(BIN_DOCKER_COMPOSE) ps

logs:
	$(BIN_DOCKER_COMPOSE) logs -f

stats:
	$(BIN_DOCKER) stats $(docker ps --format={{.Names}})