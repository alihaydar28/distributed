# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the project (adjust the command based on your build setup)
RUN npm run build

# Expose the port your app runs on
EXPOSE 8080

# Define the command to run your app
CMD ["npm","run","start"]
