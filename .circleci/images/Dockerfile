FROM debian:latest

# switch to bash shell to source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# install essentials
RUN apt-get update && apt-get install -y -q --no-install-recommends \
apt-transport-https \
build-essential \
ca-certificates \
curl \
git \
libssl-dev \
gnupg \
wget

RUN mkdir -p /usr/local/nvm

# set envars
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 14.15.4

# install nvm
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.37.2/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# add node and npm to path
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN node -v
RUN npm -v
RUN npm install -g npm

# install puppeteer dependencies
RUN export DEBIAN_FRONTEND=noninteractive && \
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
apt-get update && \
apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 --no-install-recommends && \
rm -rf /var/lib/apt/lists/*