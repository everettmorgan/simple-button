FROM ubuntu:latest

# Update package repositories
RUN apt-get update && apt-get install -y -q --no-install-recommends \
apt-transport-https \
build-essential \
ca-certificates \
curl \
git \
libssl-dev \
gnupg \
wget

# Install nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash && \
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" && \
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" \
nvm install node

# Install Puppeteer dependencies
RUN export DEBIAN_FRONTEND=noninteractive && \
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
apt-get update && \
apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 --no-install-recommends && \
rm -rf /var/lib/apt/lists/*