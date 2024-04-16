# HighTable Weather Api Technical Challenge

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
    - [Installation](#installation)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Feedback](#feedback)

## Introduction

Welcome to the HighTable Weather API, a RESTful API built with NestJS, MongoDB, and OpenWeatherAPI. This API provides weather forecast data for cities worldwide, allowing users to search for weather information based on city names and specify the temperature unit format (Celsius or Fahrenheit).

## Features

- **City Search**: Users can search for weather forecasts for cities worldwide.
- **Temperature Unit Selection**: Users can specify the desired temperature unit format (Celsius or Fahrenheit) for the weather forecast.
- **User Authentication**: Secure endpoints with user authentication using (Basic auth method) to protect sensitive operations.
- **User Management**: Manage user accounts with features such as get current logged in user.
- **Weather Data**: Retrieve current weather conditions, including temperature, humidity, wind speed, and more.


## Requirements

Before getting started, ensure that you have the following prerequisites:

- Node.js (version X.X.X)
- npm (version X.X.X)
- MongoDB (version X.X.X)

## Getting Started

Follow the steps below to set up and run the EdTech Assessment Test application.

### Installation

1. Clone the repository:

   ```bash
   https://github.com/pastorcode/hightable-weather-api.git

2. Change into the project directory:

   ```bash
   cd hightable-weather-api
   ```
3. Install dependencies:

   ```bash
    npm install
    ```
4. Database Setup:

   Create a MongoDB database for the project.

   Update the database configuration in the .env file with your database credentials:

   ```bash
    PORT=7008
    MONGO_URI=mongodb+srv://bigdan:r7iVlLKjXblTjY2a@cluster0.wvrwpyl.mongodb.net/weather_db?retryWrites=true&w=majority&appName=Cluster0
   
    ```

5. Start the application:

   ```bash
    npm run start:dev
    ```

## Project Structure

The project structure is based on the [NestJS best practices](https://docs.nestjs.com/techniques/performance).

## Design Patterns
This project uses the following design patterns:
* Repository Pattern
* Service Pattern
* Dependency Injection

The project also uses the following SOLID principles:
* Single Responsibility Principle
* Interface Segregation Principle
* Dependency Inversion Principle
* Open/Closed Principle

## API Documentation

The API documentation is available at [http://localhost:7008/api](http://localhost:8081/docs) once the application is running.


## Feedback

Feedback! would be greatly appreciated.