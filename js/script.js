document.addEventListener("DOMContentLoaded", () => {
  const togglebtn = document.querySelector(".toggle_btn");
  const togglebtnIcon = document.querySelector(".toggle_btn i");
  const active = document.querySelector(".dropdown_menu");
  const backToTop = document.querySelector(".back_to_top");

  togglebtn.onclick = function () {
    active.classList.toggle("open");
    const isOpen = active.classList.contains("open");

    if (isOpen) {
      togglebtnIcon.classList.remove("fa-bars");
      togglebtnIcon.classList.add("fa-xmark");
    } else {
      togglebtnIcon.classList.remove("fa-xmark");
      togglebtnIcon.classList.add("fa-bars");
    }
  };

  window.onscroll = function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  };

  backToTop.onclick = function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});

const links = document.querySelectorAll(".links li a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});
