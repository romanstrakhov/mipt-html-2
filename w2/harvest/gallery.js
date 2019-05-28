let num = 4; // число картинок в строке
let gap = 20; // px, расстояние между картинками 
let width = 200; // px ширина картинки


// ширина фрейма = 20*(4+1)+200*4
let frameWidth = gap * (num + 1) + width * num;

console.log(frameWidth);