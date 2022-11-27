FROM node:16.13.2
ENV NODE_ENV=production
WORKDIR /TP
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install typescript
RUN npm install --production --silent && mv node_modules ../
COPY . .
USER node
EXPOSE 4888
CMD node build/index.js
