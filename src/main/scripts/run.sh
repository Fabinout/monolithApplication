#!/usr/bin/env bash
 ./mvnw verify -Pprod dockerfile:build
docker-compose -f src/main/docker/app.yml up -d
docker-compose -f src/main/docker/jenkins.yml up -d
