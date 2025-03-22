// Sample data (replace with API calls later)
let items = [];
let nextId = 1;

// Form submission
document.getElementById('add-item-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const quantity = parseInt(document.getElementById('quantity').value);
  const category = document.getElementById('category').value;
  const price = parseFloat(document.getElementById('price').value);

  // Create new item
  const newItem = {
    id: nextId++,
    name,
    quantity,
    category,
    price: price ? $${price.toFixed(2)} : 'N/A',
  };

  // Add to items array
  items.push(newItem);

  // Clear form
  e.target.reset();

  // Refresh table
  renderTable();
});

// Render table
function renderTable() {
  const tbody = document.getElementById('item-list');
  tbody.innerHTML = items.map(item => 
    <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.category || 'N/A'}</td>
      <td>${item.price}</td>
      <td>
        <button class="btn btn-sm btn-warning" onclick="editItem(${item.id})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteItem(${item.id})">Delete</button>
      </td>
    </tr>
  ).join('');
}

// Edit item (placeholder)
function editItem(id) {
  alert(Edit item with ID: ${id});
}

// Delete item
function deleteItem(id) {
  items = items.filter(item => item.id !== id);
  renderTable();
}

// Initial render
renderTable();