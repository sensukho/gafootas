#!/bin/bash
while ! nc -z mongo 27017; do sleep 3; done
cd /var/www/gafootas_admin

npm install
npm start