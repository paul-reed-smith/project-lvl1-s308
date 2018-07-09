# Makefile
install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
publish:
	npm publish
test:
	npm test

.PHONY: test