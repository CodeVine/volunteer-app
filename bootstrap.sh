#!/usr/bin/env bash

# Get latest version of node and npm
curl -sL https://deb.nodesource.com/setup | sudo bash -

# Get latest version of Mongo
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | tee /etc/apt/sources.list.d/mongodb.list

# Update system and install needed things
apt-get update
apt-get -y dist-upgrade
apt-get -y install nodejs mongodb-org  g++ flex bison gperf ruby perl libsqlite3-dev libfontconfig1-dev libicu-dev libfreetype6 libssl-dev libpng-dev libjpeg-dev

# Get latest phantom binary
# Waiting until builders are online
#wget -O /usr/bin/phantomjs  http://build1.codevine.io/phantomjs
#chmod +x /usr/bin/phantomjs
