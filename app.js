
let users = [{ username: 'admin', password: 'admin', role: 'admin' }];
let currentUser = null;
let items = [
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
  { id: 20, name: 'Item T', quantity: 100 }
];
let logs = [];

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    const found = users.find(u => u.username === user && u.password === pass);
    if (found) {
      currentUser = found;
      document.getElementById('authContainer').classList.add('hidden');
      document.getElementById('dashboard').classList.remove('hidden');
      document.getElementById('currentUser').textContent = currentUser.username;
      if (currentUser.role === 'admin') {
        document.getElementById('adminPanel').classList.remove('hidden');
      }
      renderTable();
      renderLogs();
    } else {
      alert('Invalid credentials');
    }
  });

  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('signupUser').value;
    const pass = document.getElementById('signupPass').value;
    if (users.find(u => u.username === user)) {
      alert('Username already exists');
      return;
    }
    const newUser = { username: user, password: pass, role: 'user' };
    users.push(newUser);
    alert('Signup successful. Please login.');
    showLogin();
  });

  function showSignup() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.remove('hidden');
  }
  function showLogin() {
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
  }

  window.showSignup = showSignup;
  window.showLogin = showLogin;

  window.renderTable = function() {
    const tbody = document.getElementById('inventoryBody');
    tbody.innerHTML = '';
    items.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td><button onclick="withdraw(${item.id})">Withdraw</button></td>
      `;
      tbody.appendChild(row);
    });
  }

  window.withdraw = function(id) {
    const item = items.find(i => i.id === id);
    if (item && item.quantity > 0) {
      item.quantity--;
      logs.push({ item: item.name, user: currentUser.username, time: new Date().toLocaleString() });
      renderTable();
      renderLogs();
      alert('Withdrawn ' + item.name);
    }
  }

  window.searchItem = function() {
    const keyword = document.getElementById('searchBox').value.toLowerCase();
    const rows = document.querySelectorAll('#inventoryBody tr');
    rows.forEach(row => {
      const name = row.children[1].textContent.toLowerCase();
      row.style.display = name.includes(keyword) ? '' : 'none';
    });
  }

  window.renderLogs = function() {
    const userLog = document.getElementById('userLog');
    const adminLog = document.getElementById('adminLog');
    userLog.innerHTML = '';
    adminLog.innerHTML = '';
    logs.forEach(log => {
      const entry = `<li>${log.time} - ${log.user} withdrew ${log.item}</li>`;
      if (log.user === currentUser.username) {
        userLog.innerHTML += entry;
      }
      if (currentUser.role === 'admin') {
        adminLog.innerHTML += entry;
      }
    });
  }

  window.addItem = function() {
    const name = document.getElementById('newItemName').value.trim();
    if (!name) return;
    const id = items.length + 1;
    items.push({ id, name, quantity: 100 });
    renderTable();
    document.getElementById('newItemName').value = '';
    alert('Item added');
  }
});
