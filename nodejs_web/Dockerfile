FROM node:latest

MAINTAINER JC Gil <sensukho@gmail.com>

ENV TERM=xterm

ADD start_node_web.sh /tmp/
RUN chmod 777 /tmp/start_node_web.sh

RUN apt-get update && apt-get install -y netcat-openbsd
RUN npm install -g nodemon
RUN npm install -g typescript
RUN npm install -g typings

EXPOSE 3000
CMD ["/bin/bash", "/tmp/start_node_web.sh"]