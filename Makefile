# Default target that runs build and run commands
all: run-build

# Build Docker image
.PHONY: build
build:
	docker build -t portoimage:latest -f .github/actions/docker/Dockerfile .

# Run Docker container
.PHONY: run
run: clean
	docker run --name portocontainer -p 3000:3000 -dit portoimage:latest

# Build Docker image and run container
.PHONY: run-build
run-build: build run

# Remove Docker container
.PHONY: clean
clean:
	docker rm -f portocontainer || true

# Start Docker container if stopped
.PHONY: start
start:
	docker start portocontainer || true

# Stop Docker container
.PHONY: stop
stop:
	docker stop portocontainer || true

# Enter Docker container shell
.PHONY: enter
enter:
	docker exec -u 0 -it portocontainer sh