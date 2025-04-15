# Customer Management System

A simple web-based Customer Management System that allows you to manage customer data with basic CRUD operations.

## Features

- View all customers
- Add new customer
- Update customer information
- Delete customer
- Search customer by ID

## Technologies Used

- **Backend**: Spring Boot (Java EE)
- **Database**: MySQL
- **Frontend**: HTML, Bootstrap, Vanilla JavaScript

## Project Structure

- `Customer-Management-Backend/` – Spring Boot backend
- `Customer-Management-Frontend/` – HTML + Bootstrap + JS frontend

## Installation and Setup

### Prerequisites
- Java 11 or higher
- Maven
- MySQL
- Web browser

### Setup Instructions

1. Clone the repository:
   ```
   https://github.com/Nugi29/Simple-Customer-Management-System.git
   ```

2. Database Setup:
   - Create a MySQL database
   - Update database credentials in `Customer-Management-Backend/src/main/resources/application.properties`

3. Backend Setup:
   - Navigate to the backend directory:
     ```
     cd Customer-Management-Backend
     ```
   - Build and run the Spring Boot application:
     ```
     mvn spring:boot:run
     ```

4. Frontend Setup:
   - Open `Customer-Management-Frontend/index.html` in your web browser

## API Endpoints

- GET `/customer/get-all` - Retrieve all customers
- POST `/customer/add` - Add a new customer
- PUT `/customer/update-customer` - Update customer information
- DELETE `/customer/delete/{id}` - Delete a customer
- GET `/customer/search-by-id/{id}` - Search for a customer by ID

⭐️ From [Nugi29](https://github.com/Nugi29)
