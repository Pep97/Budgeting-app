# Budget Buddy - A React Budgeting Application

## Overview

Budget Buddy is a comprehensive budgeting application designed to help users manage their finances with ease. Built with React and leveraging React Router for seamless navigation, this application offers robust features for tracking budgets and expenses. It ensures data persistence through local storage, allowing users to maintain their financial data across sessions. With the integration of react-toastify, users receive immediate feedback on their actions, enhancing the overall user experience.

## Features

### User Management
- Add new users with their names stored in local storage for future sessions.

### Budget Management
- Create and manage budgets with unique IDs and customizable names and amounts.
- Assign a randomly generated color to each budget for easy identification.

### Expense Management
- Add expenses to specific budgets, detailing the expense name, amount, and associated budget ID.
- Delete expenses as needed.

### Data Persistence
- Utilize local storage to keep user data, including budgets and expenses, consistent across sessions.

### Notifications
- Receive immediate feedback through react-toastify notifications for actions like creating or deleting budgets and expenses.

### Responsive UI
- A comprehensive set of React components for a seamless user interface, including forms for budget and expense management, and a navigation bar for easy access to different sections of the application.

## Technical Details

- **Frontend Framework**: React.
- **Routing**: React Router for navigating between the dashboard, budget details, and expenses page.
- **Data Storage**: Local storage for data persistence.
- **Helper Functions**: A collection of functions in `src/helpers.js` for data fetching, item deletion, budget and expense creation, and formatting.
- **Styling**: Custom CSS and react-toastify for styled notifications.

## Development

This project utilizes Vite as the build tool, supporting development mode with hot reloading. It includes predefined scripts in `package.json` for building and deploying the application.

## Getting Started

1. **Clone the repository**.
2. **Install dependencies**: Run `npm install`.
3. **Start the development server**: Execute `npm run dev`.

## Dependencies

- React
- React Router DOM
- React Toastify
- Vite

