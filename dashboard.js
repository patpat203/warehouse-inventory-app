const items = [
  { id: 1, name: 'Item A', quantity: 100 },
  { id: 2, name: 'Item B', quantity: 100 },
  { id: 3, name: 'Item C', quantity: 100 },
  { id: 4, name: 'Item D', quantity: 100 },
  { id: 5, name: 'Item E', quantity: 100 },
  { id: 6, name: 'Item F', quantity: 100 },
  { id: 7, name: 'Item G', quantity: 100 },
  { id: 8, name: 'Item H', quantity: 100 },
  { id: 9, name: 'Item I', quantity: 100 },
  { id: 10, name: 'Item J', quantity: 100 },
  { id: 11, name: 'Item K', quantity: 100 },
  { id: 12, name: 'Item L', quantity: 100 },
  { id: 13, name: 'Item M', quantity: 100 },
  { id: 14, name: 'Item N', quantity: 100 },
  { id: 15, name: 'Item O', quantity: 100 },
  { id: 16, name: 'Item P', quantity: 100 },
  { id: 17, name: 'Item Q', quantity: 100 },
  { id: 18, name: 'Item R', quantity: 100 },
  { id: 19, name: 'Item S', quantity: 100 },
  { id: 20, name: 'Item T', quantity: 100 },
];

function renderTable() {
  const tbody = document.getElementById('inventoryBody');
  tbody.innerHTML = '';
  items.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.quantity}</td>
                     <td><button onclick="withdraw(${item.id})">Withdraw</button></td>`;
    tbody.appendChild(row);
  });
}

function withdraw(id) {
  const item = items.find(i => i.id === id);
  if (item.quantity > 0) {
    item.quantity--;
    renderTable();
    alert('Withdrawn ' + item.name);
  }
}

function searchItem() {
  const keyword = document.getElementById('searchBox').value.toLowerCase();
  const rows = document.querySelectorAll('#inventoryBody tr');
  rows.forEach(row => {
    const name = row.children[1].textContent.toLowerCase();
    row.style.display = name.includes(keyword) ? '' : 'none';
  });
}

renderTable();
