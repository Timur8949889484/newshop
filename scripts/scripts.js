document.addEventListener("DOMContentLoaded", function () {
  const companyButton = document.querySelector(".company-button");
  const companyDropdown = document.querySelector(".company-dropdown");
  const buyersButton = document.querySelector(".buyers-button");
  const buyersDropdown = document.querySelector(".buyers-dropdown");

  companyButton.addEventListener("click", function () {
    companyDropdown.style.display =
      companyDropdown.style.display === "block" ? "none" : "block";
    buyersDropdown.style.display = "none"; // Закрываем другой дропдаун
  });

  buyersButton.addEventListener("click", function () {
    buyersDropdown.style.display =
      buyersDropdown.style.display === "block" ? "none" : "block";
    companyDropdown.style.display = "none"; // Закрываем другой дропдаун
  });

  // Закрываем дропдауны при клике вне кнопок и списков
  document.addEventListener("click", function (event) {
    if (
      !companyButton.contains(event.target) &&
      !companyDropdown.contains(event.target)
    ) {
      companyDropdown.style.display = "none";
    }
    if (
      !buyersButton.contains(event.target) &&
      !buyersDropdown.contains(event.target)
    ) {
      buyersDropdown.style.display = "none";
    }
  });
});
