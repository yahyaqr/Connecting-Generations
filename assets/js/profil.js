const image1 = document.getElementById('card-image-1');
const bio1 = document.getElementById('card-bio-1');
const esai1 = document.getElementById('card-esai-1');

const image2 = document.getElementById('card-image-2');
const bio2 = document.getElementById('card-bio-2');
const esai2 = document.getElementById('card-esai-2');

var count_1 = 1;
var count_2 = 1;

function func1() {
    if (count_1 == 1) {
        image1.classList.toggle("d-none");
        bio1.classList.toggle("d-none");
        count_1 = 2;
    } else if (count_1 == 2) {
        bio1.classList.toggle("d-none");
        esai1.classList.toggle("d-none");
        count_1 = 3;
    } else if (count_1 == 3) {
        esai1.classList.toggle("d-none");
        image1.classList.toggle("d-none");
        count_1 = 1;
    }
}

function func2() {
    if (count_2 == 1) {
        image2.classList.toggle("d-none");
        bio2.classList.toggle("d-none");
        count_2 = 2;
    } else if (count_2 == 2) {
        bio2.classList.toggle("d-none");
        esai2.classList.toggle("d-none");
        count_2 = 3;
    } else if (count_2 == 3) {
        esai2.classList.toggle("d-none");
        image2.classList.toggle("d-none");
        count_2 = 1;
    }
}