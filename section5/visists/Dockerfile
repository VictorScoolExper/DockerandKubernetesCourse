FROM node:alpine

WORKDIR '/app'
# Copy package.json, to ensure that everytime the package gets built
# it does install all the packages.
COPY package.json .
# install npm
RUN npm install
# copies the rest of files
COPY . .

CMD ["npm", "start"]