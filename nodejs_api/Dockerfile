FROM node:latest

MAINTAINER JC Gil <sensukho@gmail.com>

ENV TERM=xterm

ADD start_node_api.sh /tmp/
RUN chmod 777 /tmp/start_node_api.sh

RUN apt-get update && apt-get install -y netcat-openbsd
RUN npm install -g nodemon
RUN npm install -g typescript
RUN npm install -g typings

EXPOSE 4200
CMD ["/bin/bash", "/tmp/start_node_api.sh"]