document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const itemInput = document.getElementById('itemInput');
    const addItemBtn = document.getElementById('addItemBtn');
    const itemList = document.getElementById('itemList');
    const clearListBtn = document.getElementById('clearListBtn');

    // Modal elements
    const editModal = document.getElementById('editModal');
    const editInput = document.getElementById('editInput');
    const saveEditBtn = document.getElementById('saveEditBtn');
    const closeModalBtn = document.querySelector('.close');

    // Store the items in an array
    let items = [];
    let currentEditItem = null;

    // Add item to the list
    addItemBtn.addEventListener('click', () => {
        const itemText = itemInput.value.trim();
        if (itemText) {
            addItem(itemText);
            itemInput.value = '';
        }
    });

    // Mark item as purchased or open modal to edit
    itemList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('purchased');
        } else if (e.target.classList.contains('edit')) {
            currentEditItem = e.target.parentElement;
            editInput.value = currentEditItem.firstChild.textContent;
            editModal.style.display = 'block';
        }
    });

    // Clear the list
    clearListBtn.addEventListener('click', () => {
        itemList.innerHTML = '';
        items = [];
    });

    // Save edited item
    saveEditBtn.addEventListener('click', () => {
        if (currentEditItem) {
            currentEditItem.firstChild.textContent = editInput.value;
            editModal.style.display = 'none';
            currentEditItem = null;
        }
    });

    // Close the modal
    closeModalBtn.addEventListener('click', () => {
        editModal.style.display = 'none';
    });

    // Function to add item to the list
    function addItem(text) {
        items.push(text);
        const li = document.createElement('li');
        li.textContent = text;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit';

        li.appendChild(editBtn);
        itemList.appendChild(li);
    }
});