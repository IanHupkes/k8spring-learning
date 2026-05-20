# Build stage
FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Run stage
FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

CMD ["java", "-jar", "app.jar"]


# # Base image met Java
# FROM eclipse-temurin:21-jdk
#
# # Workdirectory in container
# WORKDIR /app
#
# # Copy jar file
# COPY target/*.jar app.jar
#
# # Start
# ENTRYPOINT ["java","-jar","/app/app.jar"]