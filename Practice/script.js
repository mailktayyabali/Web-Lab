const list = document.getElementById("list");
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTodo);
list.addEventListener("click", (e) => {
  const del = e.target.closest(".delete");
  if (!del) return;
  del.closest("li").remove();
});

function addTodo() {
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  li.innerHTML = `${escapeHtml(text)} <button class="delete">Delete</button>`;
  list.appendChild(li);
  input.value = "";
}

function escapeHtml(s) {
  const div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
}
