let slideIndex = 1;
showSlides(slideIndex);

function atvie(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mycol");
    let imgb = document.getElementById("myimg");
    let Boxes = document.getElementsByClassName("apibox");
    for (i=0; i<slides.length; i++) {
        slides[i].style.backgroundColor = "white";
        slides[i].style.color = "black";
    }
    for(i=0;i<Boxes.length;i++){
        Boxes[i].style.display = "none";
    }
    document.getElementById('airplain-btn').src = "./icons/plain-logo.png";
    document.getElementById('hotel-btn').src = "./icons/hotel-logo.png";
    document.getElementById('fly-btn').src = "./icons/fly-logo.png";
    document.getElementById('train-btn').src = "./icons/train-logo.png";
    document.getElementById('bus-btn').src = "./icons/bus-logo.png";
    document.getElementById('ins-btn').src = "./icons/Insurance-logo.png";
    slides[n-1].style.backgroundColor = "#723c80";
    slides[n-1].style.color = "white";
    switch (n){
        case 1:
            imgb.style.backgroundImage = "url(./img/plain2.jpg)";
            document.getElementById('airplain-btn').src = "./icons/plain-logo-2.png";
            break;
        case 2:
            imgb.style.backgroundImage = "url('./img/hotel.jpg')";
            document.getElementById('hotel-btn').src = "./icons/hotel-logo-2.png";
            break;
        case 3:
            imgb.style.backgroundImage = "url('./img/port.jpg')";
            document.getElementById('fly-btn').src = "./icons/fly-logo-2.png";
            break; 
        case 4:
            imgb.style.backgroundImage = "url('./img/train2.jpg')";
            document.getElementById('train-btn').src = "./icons/train-logo-2.png";
            break;
        case 5:
            imgb.style.backgroundImage = "url('./img/bus.jpg')";
            document.getElementById('bus-btn').src = "./icons/bus-logo-2.png";
            break;
        case 6:
            imgb.style.backgroundImage = "url('./img/insecurance.jpg')";
            document.getElementById('ins-btn').src = "./icons/Insurance-logo-2.png";
            break;
    }
    Boxes[n-1].style.display = "flex";
}