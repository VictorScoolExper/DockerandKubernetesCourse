# builder phase steps
FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# run phase steps
FROM nginx
# Checkout nginx docker to see the documentation for the code below
# We copy /app/build from builder (above FROM).
# then we tell it where we want it saved in our container
COPY --from=builder /app/build /usr/share/nginx/html


# 591dbaaa54bbc820db21413fa619c2f7f331c6994aa4c1e65a093a7ba4d9a600
