const accordion = document.querySelector(".accordion");
const item = document.querySelectorAll(".item");
console.log(accordion);
item.forEach((items) => {
  items.addEventListener("click", () => {
    items.classList.toggle("open");
  });
});
