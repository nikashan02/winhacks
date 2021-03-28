build-dev:
	docker build -t react-app .

build-local:
	docker build \
		-t bdirect-client:local \
		--build-arg CADDYFILE=Caddyfile.local \
		--build-arg BASE_URL=http://localhost:5000/api \
		-f Dockerfile.production .

build-production:
	docker build \
	-t bdirect-client:production \
	--build-arg CADDYFILE=Caddyfile.production \
	--build-arg BASE_URL=https://bdirect.online/api \
	-f Dockerfile.production .