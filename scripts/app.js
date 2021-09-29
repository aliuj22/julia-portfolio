// // Experiment
// // create references to the modal...
// var modal = document.getElementById('myModal');
// // to all images -- note I'm using a class!
// var images = document.getElementsByClassName('myImages');
// // the image in the modal
// var modalImg = document.getElementById("img01");
// // and the caption in the modal
// var captionText = document.getElementById("caption");

// // Go through all of the images with our custom class
// for (var i = 0; i < images.length; i++) {
//     var img = images[i];
//     // and attach our click listener for this image.
//     img.onclick = function (evt) {
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//     }
// }

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function () {
//     modal.style.display = "none";
// }





//Carousel Section

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;




document.
getElementById('carousel__button--next')
    .addEventListener("click", function () {
        moveToNextSlide();
    });

document.
getElementById('carousel__button--prev')
    .addEventListener("click", function () {
        moveToPrevSlide();
    });

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }

    slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}