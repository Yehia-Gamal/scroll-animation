let boxes = document.querySelectorAll(".main .box");

window.addEventListener("scroll", sheckBoxes);

sheckBoxes();

function sheckBoxes() {
  let triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
