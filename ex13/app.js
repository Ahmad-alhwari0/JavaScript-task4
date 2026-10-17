const keyInput = document.querySelector("#key");
const valueInput = document.querySelector("#value");

const saveBtn = document.querySelector("#save");
const readBtn = document.querySelector("#read");
const removeBtn = document.querySelector("#remove");
const clearBtn = document.querySelector("#clear");

const count = document.querySelector("#count");
const contents = document.querySelector("#contents");
const message = document.querySelector("#message");

count.textContent = localStorage.length;

saveBtn.addEventListener("click", () => {
  const key = keyInput.value;
  const value = valueInput.value;

  localStorage.setItem(key, value);

  renderStorage();
  message.textContent = "Data saved successfully!";
});

readBtn.addEventListener("click", () => {
  const key = keyInput.value;
  const value = localStorage.getItem(key);

  if (value !== null) {
    message.textContent = `Value: ${value}`;
  } else {
    message.textContent = "Key not found!";
  }
});
removeBtn.addEventListener("click", () => {
  const key = keyInput.value;

  localStorage.removeItem(key);

  renderStorage();

  message.textContent = `Item "${key}" removed!`;
});
clearBtn.addEventListener("click", () => {
  localStorage.clear();

  renderStorage();

  message.textContent = "All storage items cleared!";
});

function renderStorage() {
  contents.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const item = document.createElement("li");
    item.textContent = `${key}: ${value}`;
    contents.appendChild(item);
  }
  count.textContent = localStorage.length;
}
renderStorage();
