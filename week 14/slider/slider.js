let i = 0;
let images = [];

images[0] = 'img1.jpg';
images[1] = 'img2.jpg';
images[2] = 'img3.jpg';
images[3] = 'img4.jpg';

function changeImgAfter() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
}

function changeImgBefore() {
    document.slide.src = images[i];
    if (i > images.length - 1) {
        i++;
    } else {
        i = 0;
    }
}
document.querySelector('img').innerHTML = changeImgAfter();