# Use the official Node.js image as a base image
FROM node:latest as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining project files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use nginx image as a base image
FROM nginx:alpine

# Copy the built React app from the previous stage to the nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

#  docker build -t donalds:1.1 .  
#  docker run -p 3000:80 mcdonald:1.0