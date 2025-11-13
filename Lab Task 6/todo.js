// Get references to elements
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");
// Add event listener to button
addBtn.addEventListener("click", () => {
  const task = input.value.trim(); // get and clean input text
  if (task === "") {
    alert("Please enter a task!");
    return;
  }
  // Create a new list item (li)
  const li = document.createElement("li");
  li.textContent = task;
  // Append li to the list
  list.appendChild(li);
  // Clear the input field
  input.value = "";
});
