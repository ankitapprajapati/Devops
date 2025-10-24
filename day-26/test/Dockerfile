FROM node:22-alpine

WORKDIR /app

# RUN ./index.js ./index.js
# RUN ./packages.json ./packages.json

# copy everything from current directory to working directory
COPY . .

RUN npm install
# RUN npm run build

EXPOSE 3000

# we have only one cmd
CMD [ "node", "index.js"]
