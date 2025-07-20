# Use official Node.js LTS image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Pass .env variables as build args (for reference, but runtime uses .env)
ARG ROCK_RMS_URL
ARG ROCK_RMS_API_KEY

# Build and run the app
CMD npm run build && node dist/index.js
