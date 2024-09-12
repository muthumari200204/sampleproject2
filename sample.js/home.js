const imageLinks = document.querySelectorAll('.img a');
const imageContainers = document.querySelectorAll('.img');
const mainImage = document.querySelector('.main-image');


let currentImageId = 1;


function updateMainImage() {
  const imageWidth = document.querySelector('.main-image img').clientWidth;
  const offset = (currentImageId - 1) * imageWidth;
  mainImage.style.transform = `translateX(${-offset}px)`;
}


imageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    
    
    currentImageId = parseInt(link.dataset.id);

   
    imageContainers.forEach((container) => {
      container.classList.remove('active');
    });

    
    link.parentElement.classList.add('active');

   
    updateMainImage();
  });
});


const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');
const quantityInput = document.querySelector('#qty');


minusButton.addEventListener('click', () => {
  let quantity = parseInt(quantityInput.value);
  if (quantity > 1) { 
    quantity--;
    quantityInput.value = quantity;
  }
});


plusButton.addEventListener('click', () => {
  let quantity = parseInt(quantityInput.value);
  if (quantity >= 1 && quantity < 5) { 
    quantity++;
    quantityInput.value = quantity;
  }
});
