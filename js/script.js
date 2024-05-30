const togglebtn = document.querySelector('.toggle_btn');
const togglebtnIcon = document.querySelector('.toggle_btn i');
const active = document.querySelector('.dropdown_menu');

togglebtn.onclick = function () {
  active.classList.toggle("open"); // Corrigido o uso do toggle
  const isOpen = active.classList.contains("open");

  if (isOpen) {
    togglebtnIcon.classList.remove('fa-bars');
    togglebtnIcon.classList.add('fa-xmark');
  } else {
    togglebtnIcon.classList.remove('fa-xmark');
    togglebtnIcon.classList.add('fa-bars');
  }
};
