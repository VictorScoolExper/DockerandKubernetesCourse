# Specify a base image
# alpine is the smallest package for node version
# You must specify 14-alpine otherwise you will get idealTree error
FROM node:14-alpine

# Creates directory in container or checks if exists if it already created
# This will hold all our files and directory
WORKDIR /usr/app

# Copy the package.json file first before the npm install cmd 
# because it dimishes the possibity of reinstalling the dependencies
COPY ./package.json ./

# Install some dependencies
RUN npm install

# Copy files into you container
# Copies from current directory to container current directory
COPY ./ ./

# Default command
CMD ["npm", "start"]