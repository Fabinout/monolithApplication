#!/usr/bin/env bash
# install ansible for the rest of your life
brew install ansible

#install your tools
ansible-playbook -i "localhost," -c local src/main/ansible/playbook.yml

# build and deploy your application
 ./mvnw verify -Pprod dockerfile:build
docker-compose -f src/main/docker/app.yml up -d

# deploy your ci-cd tool
docker-compose -f src/main/docker/jenkins.yml up -d
