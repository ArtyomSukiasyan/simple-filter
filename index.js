const filterSelectEl = document.querySelector("#filter");
const itemsEl = document.getElementById("items");

filterSelectEl.onchange = function () {
  const items = itemsEl.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains(this.value)) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
};
