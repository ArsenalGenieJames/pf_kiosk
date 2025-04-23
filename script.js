let orders = [];

function addToOrder(item, price) {
  orders.push({ item, price });
  updateSummary();
  updateOrdersList();
  alert(`${item} added to order!`);
}

function updateSummary() {
  const list = document.getElementById("summaryList");
  list.innerHTML = "";
  let total = 0;
  orders.forEach(order => {
    total += order.price;
    const li = document.createElement("li");
    li.textContent = `${order.item} - ₱${order.price}`;
    list.appendChild(li);
  });
  document.getElementById("totalPrice").textContent = total;
}

function updateOrdersList() {
  const list = document.getElementById("orderList");
  list.innerHTML = "";
  orders.forEach((order, index) => {
    const div = document.createElement("div");
    div.className = "py-4 flex items-center justify-between";

    const orderInfo = document.createElement("span");
    orderInfo.textContent = `${order.item} - ₱${order.price}`;
    orderInfo.className = "text-gray-900 dark:text-white";

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "flex space-x-2";

    const orderAgainButton = document.createElement("button");
    orderAgainButton.textContent = "Order Again";
    orderAgainButton.className = "bg-blue-500 text-white px-3 py-1 rounded";
    orderAgainButton.onclick = () => addToOrder(order.item, order.price);

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel Order";
    cancelButton.className = "bg-red-500 text-white px-3 py-1 rounded";
    cancelButton.onclick = () => {
      orders.splice(index, 1);
      updateSummary();
      updateOrdersList();
    };

    buttonsDiv.appendChild(orderAgainButton);
    buttonsDiv.appendChild(cancelButton);
    div.appendChild(orderInfo);
    div.appendChild(buttonsDiv);
    list.appendChild(div);
  });
}

function showSection(id) {
  const sections = ["menu", "orders", "summary", "payment", "receipt"];
  sections.forEach(section => {
    document.getElementById(section).classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

function proceedToPayment() {
  showSection("payment");
}

function completePayment(method) {
  alert(`Payment completed using ${method}.`);
  generateReceipt();
  showSection("receipt");
}

function generateReceipt() {
  const receiptList = document.getElementById("receiptList");
  receiptList.innerHTML = "";
  orders.forEach(order => {
    const li = document.createElement("li");
    li.textContent = `${order.item} - ₱${order.price}`;
    receiptList.appendChild(li);
  });
  document.getElementById("receiptTotal").textContent = document.getElementById("totalPrice").textContent;
}

function restartOrder() {
  orders = [];
  updateSummary();
  updateOrdersList();
  showSection('menu');
}