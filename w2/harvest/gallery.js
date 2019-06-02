let num = 4; // число картинок в строке
let gap = 20; // px, расстояние между картинками 
let width = 200; // px ширина картинки

// ширина фрейма = 20*(4+1)+200*4
let frameWidth = gap * (num + 1) + width * num;
console.log('frameWidth = ' + frameWidth);

let popupImages = Array.from(document.querySelectorAll('.gallery__products__image'));
popupImages.forEach( e => {
  let url = e.getAttribute('src');
  e.parentElement.addEventListener('click', e => {
    runPopup(url);
  });
});

let numAll = popupImages.length;
let totalWidth = gap * (numAll + 1) + width * numAll;
console.log('totalWidth = ' + totalWidth);

// console.info(popupImages);

document.addEventListener('keyup', e => {
  if (e.key === 'Escape') closePopup();
})

function closePopup() {
  let divPopup = document.querySelector('.popup');
  divPopup.classList.add('hidden');
}

function runPopup(image) {
  let divPopup = document.querySelector('.popup');
  divPopup.querySelector('img').setAttribute('src',image);
  divPopup.classList.remove('hidden');

}