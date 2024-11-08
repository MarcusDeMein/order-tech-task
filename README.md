# Order Management App

This is an Angular application for managing orders, built with Angular Material. It allows users to add, view, and delete orders. The app uses a modal form for adding new orders and displays the orders in a reactive table.

## Features

- Add new orders using a modal form.
- View orders in a responsive table.
- Delete orders.
- Data is stored in `localStorage` for persistence.
- Responsive design for mobile and desktop.

## Installation Instructions

Follow these steps to set up the project on your local machine.

### Prerequisites

- Node.js (>= 14.0.0)
- npm (Node Package Manager)

### Step 1: Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/order-management-app.git

### Step 2: Install Dependencies

Navigate into the project directory and install the project dependencies by running:

```bash
cd order-management-app
npm install

### Step 3: Serve the Application

To start the application locally, run the following command:

```bash
ng serve

The app will be available at http://localhost:4200.

Usage
Click the Add Order button to open the order form in a modal.
Fill in the order details (name, quantity, price) and click Save.
The order will be added to the table below.
To delete an order, click the Delete button next to the respective order.

Technologies Used
Angular (for building the web application)
Angular Material (for UI components)
TypeScript (for development)
LocalStorage (for storing orders)
