FROM node:9-alpine

RUN mkdir /app
WORKDIR /app

# Install deps
COPY ./package* ./
RUN npm install && \
    npm cache clean --force

COPY . .

# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE 3000

#Labels
LABEL maintainer="Mike M" \
      version="1.0.0"

# Start the app
CMD [ "npm", "start" ]
