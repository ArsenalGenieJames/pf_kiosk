const orders = [];
let quantity = 1;
let selectedProduct = null;

const productPrices = [
  { name: "Tanduay Select", price: 150.00 },
  { name: "Tanduay Dark", price: 78.00 },
  { name: "Tanduay Rhum", price: 50.00 },
  { name: "Ginebra San Miguel", price: 57.00 },
  { name: "Redhorse Beer", price: 140.00 },
  { name: "Bacardi 151", price: 4899.00 },
  { name: "The Bar Pink Gin", price: 139.00 },
  { name: "Antonov Vodka", price: 320.00 },
  { name: "Summerity" , price: 499.00},
  { name: "Serbesa Quencher" , price: 499.00},
  { name: "Mystery Blu" , price: 499.00},
  { name: "Oranggy" , price: 499.00},
  { name: "Adobo Mani with Fried Garlic", price: 50.00 },
  { name: "Fried Bangus", price: 170.00 },
  { name: "Grilled Pork Belly", price: 115.00 },
  { name: "Kapampangan Sisig", price: 280.00 },
  { name: "Kinilaw of Northern Mindanao", price: 120.00 },
  { name: "Lechon Kawali", price: 100.00 },
  { name: "Lechon Manok", price: 350.00 },
  { name: "Pasayan", price: 250.00 },
  { name: "Buko Pandan Jelly", price: 35.00 },
  { name: "Cassava Cake", price: 50.00 },
  { name: "Chocolate Cake Slice", price: 40.00 },
  { name: "Leche Flan with Cream Cheese", price: 70.00 },
  { name: "Maja Blanca", price: 85.00 },
  { name: "Mix and Match Halo-Halo", price: 150.00 },
  { name: "Polvoron Chocolate Coated", price: 90.00 },
  { name: "Ube Ice Cream Sandwiches", price: 90.00 }
];

function openPopup(productName, productPrice) {
  selectedProduct = { name: productName, price: productPrice };
  quantity = 1;
  document.getElementById('popupProductName').textContent = productName;
  document.getElementById('popupProductPrice').textContent = `₱${productPrice.toFixed(2)}`;
  document.getElementById('quantity').textContent = quantity;
  document.getElementById('popupModal').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popupModal').classList.add('hidden');
}

function increaseQuantity() {
  quantity++;
  document.getElementById('quantity').textContent = quantity;
}

function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    document.getElementById('quantity').textContent = quantity;
  }
}

function confirmAddToOrder() {
  for (let i = 0; i < quantity; i++) {
    orders.push(selectedProduct);
  }
  alert(`${selectedProduct.name} (x${quantity}) added to Orders`);
  renderOrders();
  closePopup();
}

function renderOrders() {
  const ordersList = document.getElementById('ordersList');
  ordersList.innerHTML = '';
  const orderSummary = {};

  orders.forEach(order => {
    if (orderSummary[order.name]) {
      orderSummary[order.name].quantity++;
    } else {
      orderSummary[order.name] = { price: order.price, quantity: 1 };
    }
  });

  let total = 0;

  Object.keys(orderSummary).forEach(productName => {
    const { price, quantity } = orderSummary[productName];
    const orderItem = document.createElement('div');
    orderItem.className = 'border-b pb-2 mb-2';

    orderItem.innerHTML = `
      <div class="flex flex-col w-full">
        <div class="flex justify-between items-center">
          <span>${productName} (x${quantity})</span>
          <div class="flex space-x-2">
            <button onclick="decreaseOrderQuantity('${productName}')" class="bg-gray-200 px-2 py-1 rounded-lg">-</button>
            <button onclick="increaseOrderQuantity('${productName}')" class="bg-gray-200 px-2 py-1 rounded-lg">+</button>
          </div>
          <div class="flex items-center space-x-2">
            <span>₱${(price * quantity).toFixed(2)}</span>
            <button onclick="removeOrder('${productName}')" class="text-red-500 hover:underline">Remove</button>
          </div>
        </div>

        <div class="text-right text-sm text-gray-500 mt-1">
          Total: ₱${(price * quantity).toFixed(2)}
        </div>

      </div>
    `;

    ordersList.appendChild(orderItem);
    total += price * quantity;
  });
}



function decreaseOrderQuantity(productName) {
  const orderIndex = orders.findIndex(order => order.name === productName);
  if (orderIndex !== -1) {
    orders.splice(orderIndex, 1);
    renderOrders();
  }
}

function increaseOrderQuantity(productName) {
  const product = productPrices.find(item => item.name === productName);
  if (product) {
    orders.push(product);
    renderOrders();
  }
}

function removeOrder(productName) {
  for (let i = orders.length - 1; i >= 0; i--) {
    if (orders[i].name === productName) {
      orders.splice(i, 1);
    }
  }
  renderOrders();
}

function checkout() {
  if (orders.length === 0) {
    alert("You must select at least one item or product before you can checkout.");
    return;
  }

  const customerMoney = parseFloat(document.getElementById('customerMoney').value);
  const total = orders.reduce((sum, order) => sum + order.price, 0);
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

  if (!paymentMethod) {
    alert("Please select a payment method.");
    return;
  }

  if (isNaN(customerMoney) || customerMoney <= 0) {
    alert("Please enter a valid amount for customer money.");
    return;
  }

  if (customerMoney < total) {
    alert("Insufficient funds. Please enter a higher amount.");
    return;
  }

  const change = customerMoney - total;

  const orderSummary = orders.reduce((summary, order) => {
    if (summary[order.name]) {
      summary[order.name].quantity++;
    } else {
      summary[order.name] = { price: order.price, quantity: 1 };
    }
    return summary;
  }, {});

  let orderDetails = "";
  Object.keys(orderSummary).forEach(productName => {
    const { price, quantity } = orderSummary[productName];
    orderDetails += `${productName} (x${quantity}) - ₱${(price * quantity).toFixed(2)}\n`;
  });

  alert(`Payment Method: ${paymentMethod.value}\n${orderDetails}Total: ₱${total.toFixed(2)}\nChange: ₱${change.toFixed(2)}`);

  const historyList = document.getElementById('historyList');
  const historyItem = document.createElement('div');
  historyItem.className = 'border-b pb-2 mb-2';
  historyItem.innerHTML = `
    <p><strong>Payment Method:</strong> ${paymentMethod.value}</p>
    <p>${orderDetails.replace(/\n/g, '<br>')}</p>
    <p><strong>Total:</strong> ₱${total.toFixed(2)}</p>
    <p><strong>Change:</strong> ₱${change.toFixed(2)}</p>
  `;
  historyList.appendChild(historyItem);

  orders.length = 0;
  renderOrders();
  document.getElementById('customerMoney').value = '';
}

function addToOrder(productName) {
  const product = productPrices.find(item => item.name === productName);
  if (product) {
    openPopup(product.name, product.price);
  } else {
    alert("Product not found!");
  }
}

function handleClick(category) {
  const sections = document.querySelectorAll('.category-section');
  const ordersSection = document.getElementById('ordersSection');
  const summarySection = document.getElementById('summarySection');
  const filterDiv = document.querySelector('.flex.justify-center.space-x-4');

  sections.forEach(section => section.style.display = 'none');

  if (category === 'Orders') {
    ordersSection.classList.remove('hidden');
    if (filterDiv) filterDiv.style.display = 'none';
    if (summarySection) summarySection.classList.add('hidden');
  } else if (category === 'Summary') {
    if (summarySection) summarySection.classList.remove('hidden');
    ordersSection.classList.add('hidden');
    if (filterDiv) filterDiv.style.display = 'none';
  } else {
    ordersSection.classList.add('hidden');
    if (summarySection) summarySection.classList.add('hidden');

    const indexMap = {
      'Drinks': 0,
      'Pulotan': 1,
      'Dessert': 2
    };
    const idx = indexMap[category];
    if (typeof idx !== 'undefined') {
      sections[idx].style.display = 'flex';
    }

    if (filterDiv) filterDiv.style.display = 'flex';
  }

  console.log(`Category selected: ${category}`);
}



// qrcode g cash display when i click niya ang gcash button 

  const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
  const gcashImage = document.getElementById('gcashImageContainer');

  paymentRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'gcash' && radio.checked) {
        gcashImage.style.display = 'block';
      } else if (radio.checked) {
        gcashImage.style.display = 'none';
      }
    });
  });