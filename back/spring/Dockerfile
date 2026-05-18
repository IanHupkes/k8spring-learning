# Base image met Java
FROM eclipse-temurin:21-jdk

# Workdirectory in container
WORKDIR /app

# Copy jar file
COPY target/*.jar app.jar

# Start
ENTRYPOINT ["java","-jar","/app/app.jar"]