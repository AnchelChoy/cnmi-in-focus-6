window.addEventListener("scroll", function() {
  const logo = document.querySelector(".site-logo");
  if (window.scrollY > 50) {
    logo.style.height = "80px";
  } else {
    logo.style.height = "120px";
  }
});

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
  const modals = document.getElementsByClassName("modal"); 
  for (let i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  }
}