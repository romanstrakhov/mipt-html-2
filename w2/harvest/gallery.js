let num = 4; // число картинок в строке
let gap = 20; // px, расстояние между картинками 
let width = 200; // px ширина картинки

// ширина фрейма = 20*(4+1)+200*4
let frameWidth = gap * (num + 1) + width * num;
// console.log('frameWidth = ' + frameWidth);

let popupImages = Array.from(document.querySelectorAll('.gallery__product__image'));
popupImages.forEach( e => {
  let url = e.getAttribute('src');
  e.parentElement.addEventListener('click', e => {
    runPopup(url);
  });
});


let numAll = popupImages.length;
let totalWidth = gap * (numAll + 1) + width * numAll;
// console.log('totalWidth = ' + totalWidth);

// console.info(popupImages);

// add action on esc key to close popup
document.addEventListener('keyup', e => { 
  if (e.key === 'Escape') closePopup();
})

// add action on clicks in nav area
document.querySelector('nav').addEventListener('click', e => {
  let position = document.querySelector('input[name="pages"]:checked').value;
  // console.log(position);
  let shift = 220 * ( Number(position) - 1 );
  // console.log(shift);
  document.querySelector('div.gallery').style.transform = 'translateX(-'+shift+'px)';
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