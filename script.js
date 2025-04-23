let order = [];

function showSection(sectionId) {
  const sections = ['menu', 'summary', 'payment', 'receipt'];
  sections.forEach(id => {
    document.getElementById(id).classList.add('d-none');
  });
  document.getElementById(sectionId).classList.remove('d-none');
}

function showCategory(categoryId) {
  const categories = ['drinks', 'dessert', 'meals'];
  categories.forEach(id => {
    document.getElementById(id).classList.add('d-none');
  });
  document.getElementById(categoryId).classList.remove('d-none');
}

function addToOrder(itemName, price) {
  order.push({ name: itemName, price: price });
  alert(`${itemName} added to order!`);
}

function proceedToPayment() {
  if (order.length === 0) {
    alert("Your order is empty!");
    return;
  }

  const summaryList = document.getElementById('summaryList');
  const totalPriceElem = document.getElementById('totalPrice');
  summaryList.innerHTML = '';

  let total = 0;
  order.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    li.textContent = item.name;
    const span = document.createElement('span');
    span.classList.add('badge', 'bg-primary', 'rounded-pill');
    span.textContent = `₱${item.price}`;
    li.appendChild(span);
    summaryList.appendChild(li);
    total += item.price;
  });

  totalPriceElem.textContent = total;
  showSection('payment');
}

function completePayment(method) {
  const now = new Date();
  const receiptDate = document.getElementById('receiptDate');
  const orderNumber = document.getElementById('orderNumber');
  const receiptList = document.getElementById('receiptList');
  const receiptTotal = document.getElementById('receiptTotal');

  receiptDate.textContent = now.toLocaleDateString();
  orderNumber.textContent = Math.floor(Math.random() * 1000000);
  receiptList.innerHTML = '';

  let total = 0;
  order.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td class="text-end">₱${item.price}</td>
    `;
    receiptList.appendChild(row);
    total += item.price;
  });

  receiptTotal.textContent = total;
  showSection('receipt');
}

function restartOrder() {
  order = [];
  showSection('menu');
}
