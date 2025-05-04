# Serbesa Bar and Grill POS System

## 📍 About Serbesa Bar and Grill

Serbesa Bar and Grill is the ultimate hangout spot in Iligan City — famous for its energetic crowd, cold drinks, and good times. 🍻🎉

Every night hits different with live DJs dropping beats, setting the perfect vibe whether you're there to chill or go full-on party mode. 🎶🕺

The place is built for good times: comfy spots to sit, dance floors to move, and an atmosphere that just feels right.
Security stays tight too — with police presence at the entrance, making sure everyone inside is safe while they let loose. 👮✅

Whether you're rolling deep with the barkada or just pulling up for a night out, Serbesa Bar and Grill is where the memories are made.
Come through for the food, the beats, the drinks — and stay for the vibes. 🔥

## Tech Stack

- **Frontend**
    - HTML
    - CSS
    - JavaScript 
    - Tailwind CSS

- **Plugin**
    - [Flowbite](https://flowbite.com/)

- **State Management**
    - Local Storage
    - Session Storage

- **UI Components**
    - Modal Dialogs
    - Dynamic Tables
    - Responsive Grid

- **Tools**
    - Git
    - VSCode
    - Chrome DevTools
    - Github Desktop

## Core Components

### Product Management
- Maintains a catalog of products (`productPrices` array) with names and prices.
- Products are categorized into:
    - **Drinks** (alcoholic beverages)
    - **Meals/Pulotan** (Filipino dishes)
    - **Desserts**

### Order Handling Functions

#### `openPopup(productName, productPrice)`
- **Purpose**: Opens a modal for product selection.
- **Details**:
    - Displays the product name and price.
    - Initializes the quantity to 1 and allows the user to adjust the quantity using buttons.
    - This function gets triggered when a user selects a product.

#### `closePopup()`
- **Purpose**: Closes the product selection modal.
- **Details**: Hides the modal when the user is done selecting their item.

#### `increaseQuantity()`
- **Purpose**: Increases the quantity of the selected product.
- **Details**: 
    - Every time the user clicks the "Increase" button, the quantity of the product increases by 1.

#### `decreaseQuantity()`
- **Purpose**: Decreases the quantity of the selected product.
- **Details**:
    - The quantity is reduced by 1 but can't go below 1.
    - This prevents negative quantities from being displayed.

#### `confirmAddToOrder()`
- **Purpose**: Adds the selected product(s) to the order list.
- **Details**:
    - The selected product is added to the orders array according to the specified quantity.
    - The order is confirmed with an alert showing the product name and quantity.

#### `renderOrders()`
- **Purpose**: Renders the current order summary.
- **Details**:
    - This function groups the orders by product name and displays them.
    - It also updates the total price.
    - Provides controls for adjusting the quantity of ordered products (i.e., increasing, decreasing, and removing items).

#### `decreaseOrderQuantity(productName)`
- **Purpose**: Decreases the quantity of a specific product in the order.
- **Details**:
    - This function removes one instance of the product from the order list.
    - The `renderOrders()` function is called after this to update the displayed order.

#### `increaseOrderQuantity(productName)`
- **Purpose**: Increases the quantity of a specific product in the order.
- **Details**:
    - The function adds another instance of the selected product to the order list.
    - `renderOrders()` is called to refresh the displayed order and show the updated quantity.

#### `removeOrder(productName)`
- **Purpose**: Removes all instances of a product from the order.
- **Details**:
    - This function goes through the orders array and removes all instances of the specified product.
    - `renderOrders()` is called to update the order list after removal.

### Checkout Process

#### `checkout()`
- **Purpose**: Finalizes the order and processes the payment.
- **Details**:
    - Validates if the customer has entered a valid payment amount.
    - Confirms the selected payment method.
    - Calculates the total order price and generates the change if necessary.
    - Displays the order summary and processes the transaction, saving it to the history list.
    - Clears the current order and updates the order display.

### Navigation System

#### `handleClick(category)`
- **Purpose**: Manages navigation and product filtering by category.
- **Details**:
    - Based on the selected category (Drinks, Pulotan, Desserts), this function shows the relevant product section while hiding others.
    - It also hides or shows the filter and order summary sections based on the category selected.

### Cart Management
These are key cart manipulation functions that handle product quantity adjustments and removal.

```javascript
// Decreases one instance of the product from the order
function decreaseOrderQuantity(productName) {
    // Removes one instance of the product from orders
}

// Increases one instance of the product in the order
function increaseOrderQuantity(productName) {
    // Adds one more instance of the product to the order
}

// Removes all instances of the specified product from the order
function removeOrder(productName) {
    // Removes all instances of the product from orders
}

### Features
- Real-time order updates: As the user selects products and adjusts quantities, the order summary updates in real time.

- Multiple payment methods: Supports different payment options such as cash or card.

- Quantity adjustment: Allows users to modify the quantity of ordered items.

 - Order history tracking: Each transaction is recorded with details such as payment method, total, and change.

- Category-based filtering: Products are grouped into categories for easy navigation (Drinks, Pulotan, Desserts).

- Responsive UI elements: The user interface adapts to different screen sizes for optimal viewing on any device.