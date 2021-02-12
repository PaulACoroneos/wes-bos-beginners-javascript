const form = document.querySelector('.shopping');
const list = document.querySelector('.list');

// need an array to hold our state
let listState = [];

function displayItems() {
  const html = listState
    .map(
      item =>
        `<li class='shopping-item'>
        <input value="${item.id}" type="checkbox" ${
          item.complete ? 'checked' : ''
        }>
        <span class="itemName">${item.name}</span>
        <button aria-label="Remove ${item.name}" value="${
          item.id
        }">&times;</button>
    </li>`
    )
    .join('');
  list.innerHTML = html;
}

function handleSubmit(e) {
  e.preventDefault();

  if (!e.currentTarget.item.value) return;

  const item = {
    name: e.currentTarget.item.value,
    id: Date.now(),
    complete: false,
  };
  listState.push(item);
  e.currentTarget.reset();
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function mirrorToLocalStorage() {
  console.info('Saving to local localstorage');
  localStorage.setItem('items', JSON.stringify(listState));
}

function restoreFromLocalStorage() {
  console.info('Restoring from localstorage');
  const listItems = JSON.parse(localStorage.getItem('items'));
  if (listItems.length) {
    listState.push(...listItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  listState = listState.filter(item => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  const itemRef = listState.find(item => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

form.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// event delegation. we listen to click on list ul, but then delegate the click over to the button if that was what was clicked
list.addEventListener('click', function(e) {
  if (e.target.matches('button')) {
    deleteItem(parseInt(e.target.value));
  }
  if (e.target.matches('input[type="checkbox')) {
    markAsComplete(parseInt(e.target.value));
  }
});
restoreFromLocalStorage();
