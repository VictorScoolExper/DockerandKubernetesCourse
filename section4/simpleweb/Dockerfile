# Specify a base image
# alpine is the smallest package for node version
FROM node:alpine
# fixes npm ERR! Tracker "idealTree" already exists
# also the working directory in vid 48
WORKDIR /usr/app

# Copy files into you container
# Copies from current directory to container current directory
COPY ./package.json ./

# Install some dependencies
RUN npm install
# this insures that we do no reinstall our dependencies unles modified
# and only all the others files get copied
COPY ./ ./

# Default command
CMD ["npm", "start"]