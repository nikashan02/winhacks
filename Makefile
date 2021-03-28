build-dev:
	cd client && $(MAKE) -B build-dev
	cd server && $(MAKE) build

run-dev:
	docker-compose -f docker-compose-dev.yml up

###

build-local:
	cd client && $(MAKE) -B build-local
	cd server && $(MAKE) build

run-local:
	ENV=local docker-compose -f docker-compose-production.yml up

###

build-production:
	cd client && $(MAKE) -B build-production
	cd server && $(MAKE) build

run-production:
	ENV=production docker-compose -f docker-compose-production.yml up

stop:
	docker-compose down

SSH_STRING:=root@157.230.216.113

ssh:
	ssh $(SSH_STRING)

copy-files:
	scp -r ./* $(SSH_STRING):/root/