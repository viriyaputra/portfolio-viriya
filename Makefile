all: run-build

.PHONY: build
build:
	docker build -t portoimage:latest .

.PHONY: run
run: clean
	docker run --name portocontainer -p 3000:3000 -dit portoimage:latest

.PHONY: run-build
run-build: build run

.PHONY: clean
clean:
	docker rm portocontainer

.PHONY: start
start:
	docker start portocontainer

.PHONY: stop
stop:
	docker stop portocontainer

.PHONY: enter
enter:
	docker exec -u 0 -it portocontainer sh