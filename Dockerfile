# Dockerfile for PokeCity ASP.NET Core app

# STEP 1: Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy csproj and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy the rest of the project and publish
COPY . ./
RUN dotnet publish -c Release -o out

# STEP 2: Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

# Copy published files from build stage
COPY --from=build /app/out ./

# Set environment variable for Render's dynamic port
ENV ASPNETCORE_URLS=http://+:$PORT
EXPOSE $PORT

# Start the application
ENTRYPOINT ["dotnet", "PokeCity.dll"]
