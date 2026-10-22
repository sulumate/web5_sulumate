const paragraph = document.getElementById("changeable-paragraph");
const changeTextButton = document.getElementById("change-text-button");

changeTextButton.addEventListener("click", function () {
  paragraph.textContent = "The paragraph has been changed with JavaScript!";
});

const styleBlock = document.getElementById("style-block");
let changedColor = false;
let largeText = false;

document.getElementById("change-color-button").addEventListener("click", function () {
  changedColor = !changedColor;
  styleBlock.style.backgroundColor = changedColor ? "#dcfce7" : "#eff4ff";
});

document.getElementById("change-size-button").addEventListener("click", function () {
  largeText = !largeText;
  styleBlock.style.fontSize = largeText ? "24px" : "16px";
});

const itemList = document.getElementById("item-list");
const removeItemButton = document.getElementById("remove-item-button");
const itemCount = document.getElementById("item-count");
let nextItemNumber = 1;

function updateItemCount() {
  const count = itemList.children.length;
  itemCount.textContent = count + (count === 1 ? " item" : " items");
  removeItemButton.disabled = count === 0;
}

document.getElementById("add-item-button").addEventListener("click", function () {
  const item = document.createElement("li");
  item.textContent = "Item " + nextItemNumber;
  nextItemNumber += 1;
  itemList.appendChild(item);
  updateItemCount();
});

removeItemButton.addEventListener("click", function () {
  if (itemList.lastElementChild) {
    itemList.lastElementChild.remove();
  }
  updateItemCount();
});
