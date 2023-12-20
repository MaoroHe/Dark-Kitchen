/*
function validateForm() {
    let customerName = document.getElementById('customerName').value;
    let customerAddress = document.getElementById('customerAddress').value;
    let items = document.getElementById('items').value;

    if (customerName === "" || customerAddress === "" || items === "") {
        alert("Veuillez remplir tous les champs du formulaire.");
        return false;
    }

    return true;
}*/

//

let currentIndex = 0;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.item');
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + '%';
  carousel.style.transform = 'translateX(' + translateValue + ')';
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}