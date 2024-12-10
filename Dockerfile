# Step 1: Use Node.js for building the React app
FROM node:16 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application source code
COPY . .

# Build the app for production
RUN npm run build

# Step 2: Use Nginx to serve the static files
FROM nginx:alpine

# Copy the React app build files to the Nginx container
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"] 
#The -g flag allows you to pass global directives to Nginx.
#The daemon off; directive tells Nginx to run in the foreground, which is a requirement for Docker containers since containers terminate if the main process exits.
