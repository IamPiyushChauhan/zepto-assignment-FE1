# Zepto Assignment FE1 - React Project

## Project Overview

This React project, titled "Zepto Assignment FE1," is a simple implementation where clicking on the input field displays a list of items. As you type, the list dynamically filters to show only items that match your input. The project incorporates the functionality of turning selected items into chips at the top of the input field, with each chip featuring an "X" icon for removal. Removed chips are added back to the list.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/IamPiyushChauhan/zepto-assignment-FE1.git
    cd zepto-assignment-FE1
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Run the Application:**

    ```bash
    npm start
    ```

    This command will start the development server, and you can view the application in your browser at `http://localhost:3000`.

## Project Structure

The project is organized with the following directory structure:

- **src/components**: Contains React components.
- **src/App.js**: The main application component.
- **src/App.css**: Styles for the application.

## Usage

1. **Input Field Interaction:**

    Click on the input field, and a list of items will appear.

2. **Dynamic Filtering:**

    As you type in the input field, the list will show only items that match your input.

3. **Chips Creation:**

    Clicking on an item in the list will turn it into a chip at the top of the input field. The input field will adjust automatically.

4. **Chip Removal:**

    Each chip has an "X" icon. Clicking the "X" icon removes the chip and adds the item back to the list.

## Technologies Used

- React.js

## Dependencies

- React
- React-dom
- React-scripts
