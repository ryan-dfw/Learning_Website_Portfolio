document.addEventListener("DOMContentLoaded", function () {
  const hireButton = document.getElementById("hireButton");

  hireButton.addEventListener("click", function (e) {
    e.preventDefault();
    alert("You've just hired Ryan for a starting salary of $30k/yr.");
  });
});
