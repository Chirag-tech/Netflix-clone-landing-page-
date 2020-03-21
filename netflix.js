const plus = document.querySelectorAll("#qna");
const about = document.getElementsByClassName("about");
function selectItem(e) {
  e.preventDefault();
  const showItem = document.querySelector(`#${this.className}-content`);
  showItem.classList.toggle("show");
}
plus.forEach(item => item.addEventListener("click", selectItem));
