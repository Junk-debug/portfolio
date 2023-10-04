let offset = 0; 
const sliderLine = document.querySelector('.slider-line');
let imageWidth = 700;

document.querySelector('.slider-next').addEventListener('click', function(){
    offset += imageWidth;
    if (offset > 3*imageWidth) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset -= imageWidth;
    if (offset < 0) {
        offset = 3*imageWidth;
    }
    sliderLine.style.left = -offset + 'px';
});