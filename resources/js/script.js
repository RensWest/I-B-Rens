var button1 = document.querySelector('#button_1');
var button2 = document.querySelector('#button_2');
var button3 = document.querySelector('#button_3');
var button4 = document.querySelector('#button_4');
var video = document.querySelector('#video');


button1.addEventListener('click', speel1);

function speel1() {
    video.src = "./resources/img/animation1.mp4";
    video.muted = false;
}


button2.addEventListener('click', speel2);

function speel2() {
    video.src = "./resources/img/animation2.mp4";
    video.muted = false;
}


button3.addEventListener('click', speel3);

function speel3() {
    video.src = "./resources/img/animation3.mp4";
    video.muted = false;
}

button4.addEventListener('click', speel4);

function speel4() {
    video.src = "./resources/img/karakteridle.mp4";
}
