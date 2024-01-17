const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  circle.addEventListener("click", function () {
    document.querySelectorAll(".mini-circle").forEach((miniCircle) => {
      miniCircle.style.display = "none";
    });

    const miniCircle = circle.querySelector(".mini-circle");
    miniCircle.style.display = "block";

    circles.forEach((c) => {
      c.style.borderColor = "black";
    });

    circle.style.borderColor = "blue";
  });
});

function toggleSwitch(element) {
  element.classList.toggle('active');
}
