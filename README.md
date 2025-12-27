📦 INVENTORY MANAGEMENT SYSTEM

A full-stack web application designed to manage inventory efficiently for small and medium-scale businesses.
The system automates product management, tracks stock levels in real time, and highlights low-stock items to support better decision-making.

🚀 Features

Add, update, delete, and search products
View complete inventory in tabular format
Low-stock alert using threshold logic
Inventory report generation (All products / Low stock)
Clean and responsive user interface
REST API based frontend–backend communication

🛠 Tech Stack
Frontend-
React.js
HTML5
CSS3
JavaScript
Axios

Backend-
Spring Boot
Java
Spring Data JPA

Database-
MySQL

Tools & Testing
VS Code
Eclipse
MySQL Workbench
Postman
JUnit
Git & GitHub

🏗 Architecture

The project follows the MVC (Model–View–Controller) architecture:

View: React.js frontend
Controller: Spring Boot REST Controllers
Service: Business logic layer
Model & Repository: JPA entities and MySQL database

This separation ensures scalability, maintainability, and clean code structure.

⚙️ Installation & Setup
Prerequisites

Java JDK 17 or higher
Node.js & npm
MySQL Server
Git

Backend Setup

Clone the repository
git clone https://github.com/your-username/inventory-management-system.git
Open backend folder in Eclipse / IntelliJ
Configure MySQL credentials in application.properties

Create database:
CREATE DATABASE inventory_db;
Run the Spring Boot application

Backend runs on:
http://localhost:8080

Frontend Setup
Open frontend folder in VS Code
Install dependencies:
npm install


Start the React app:
npm run dev

Frontend runs on:
http://localhost:5173

📊 Database Schema (Product Table)
Field Name	Data Type
product_id	INT (PK)
product_name	VARCHAR
category	VARCHAR
price	FLOAT
quantity	INT
rating	INT
supplier_contact	BIGINT

🧪 Testing

Backend: Unit testing using JUnit
API Testing: Postman
Frontend: Manual testing and browser dev tools
All CRUD operations and reports were tested successfully.

⚠️ Limitations

No user authentication or role-based access
No supplier or purchase order module
Local deployment only (no cloud hosting)
Basic reporting (no advanced analytics)

🔮 Future Enhancements

User authentication & role management
Supplier and purchase modules
Cloud deployment
Barcode / QR code integration
Automated database backup
Mobile application support
Advanced analytics and dashboards

📄 License

This project is developed for academic purposes and learning.
Free to use and modify for educational use.
