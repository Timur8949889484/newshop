document.addEventListener("DOMContentLoaded", function () {
  const companyButton = document.querySelector(".company-button");
  const companyDropdown = document.querySelector(".company-dropdown");
  const buyersButton = document.querySelector(".buyers-button");
  const buyersDropdown = document.querySelector(".buyers-dropdown");

  companyButton.addEventListener("click", function () {
    companyDropdown.style.display =
      companyDropdown.style.display === "block" ? "none" : "block";
    buyersDropdown.style.display = "none";
  });

  buyersButton.addEventListener("click", function () {
    buyersDropdown.style.display =
      buyersDropdown.style.display === "block" ? "none" : "block";
    companyDropdown.style.display = "none";
  });

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

document.addEventListener("DOMContentLoaded", () => {
  const mainPageLink = document.querySelector(".main-page-link-js");

  if (mainPageLink) {
    mainPageLink.addEventListener("click", (event) => {
      event.preventDefault();

      const currentPath = window.location.pathname;

      let targetUrl = "";

      if (currentPath.includes("/htmls/")) {
        targetUrl = "../index.html";
      } else {
        targetUrl = "index.html";
      }

      window.location.href = targetUrl;
    });
  }
});
