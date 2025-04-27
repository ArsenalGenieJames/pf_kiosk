# Serbesa Bar and Grill
📍 About Serbesa Bar and Grill

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
- Maintains a catalog of products (`productPrices` array) with names and prices
- Products are categorized into:
    - Drinks (alcoholic beverages)
    - Meals/Pulotan (Filipino dishes)
    - Desserts

### Order Handling Functions

#### `openPopup(productName, productPrice)`
- Opens a modal dialog for product selection
- Displays product details and quantity selector
- Initializes quantity to 1

#### `confirmAddToOrder()`
- Adds selected products to the orders array
- Handles multiple quantities of the same item
- Updates the order display
- Shows confirmation message

#### `renderOrders()`
- Displays current order summary
- Groups identical items and shows quantities
- Calculates and displays total price
- Provides controls for quantity adjustment

### Cart Management
```javascript
// Key cart manipulation functions
function decreaseOrderQuantity(productName) {
        // Removes one instance of the product
}

function increaseOrderQuantity(productName) {
        // Adds one more instance of the product
}

function removeOrder(index) {
        // Removes entire product entry
}
```

### Checkout Process
The `checkout()` function handles:
- Payment method validation
- Customer payment processing
- Change calculation
- Order summary generation
- Transaction history recording

### Navigation System
The `handleClick(category)` function manages:
- Category-based product filtering
- Section visibility control
- Navigation between:
    - Menu sections (All, Drinks, Meals, Dessert)
    - Orders view
    - Transaction summary

### Features
- Real-time order updates
- Multiple payment methods
- Quantity adjustment
- Order history tracking
- Category-based filtering
- Responsive UI elements