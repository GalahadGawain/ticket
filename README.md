# e-Ticket Purchase System

This project is a simple e-ticket purchase system developed as part of an Alura class. It allows users to select a ticket type (Lower Chair, Upper Chair, or Floor) and purchase tickets, with real-time updates to the available quantity.

## Features

* **Ticket Selection:** Users can choose from three ticket types: Lower Chair, Upper Chair, and Floor.
* **Quantity Input:** Users can specify the number of tickets they want to purchase.
* **Real-time Quantity Updates:** The available quantity of each ticket type is updated after each purchase.
* **Input Validation:** The system validates user input to ensure it is a valid quantity.
* **Error Handling:** The system displays alert messages for unavailable tickets or invalid input.
* **Responsive Design:** Basic responsive design included.

## Technologies Used

* **HTML:** For structuring the web page.
* **CSS:** For styling the web page.
* **JavaScript:** For implementing the purchase logic and updating the available quantities.

## JavaScript Code Explanation

* **`buy()` function:**
    * Retrieves the selected ticket type and quantity from the HTML form.
    * Calls the `buyTickets()` function to process the purchase.
* **`buyTickets(sectionId, quantity)` function:**
    * Retrieves the available quantity for the selected ticket type.
    * Validates the user input and available quantity.
    * Updates the available quantity and displays an alert message.
* **`buyFloor(quantity)`, `buyUpper(quantity)`, `buyLower(quantity)` functions:**
    * These functions are now redundant, and simply call the buyTickets function. They are left in the code for possible future expansion.
* The section id is converted to lowercase to prevent case sensitivity errors.

## HTML Structure

* The HTML file includes a form for ticket selection and quantity input.
* It also displays the available quantity for each ticket type.
* The buy button triggers the javascript buy function.

## CSS Styling

* The CSS files provide styling for the web page, including layout, colors, and fonts.
* The CSS uses background images, and a linear gradient for a modern look.

## Future Improvements

* Implement a more user-friendly feedback mechanism instead of `alert()` messages.
* Add more comprehensive input validation.
* Implement data persistence to save the available quantities.
* Improve the user experience.
* Make the design more responsive.
* Add pricing.
* Add a cart.

This project was developed as part of an Alura class.
