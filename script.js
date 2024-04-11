// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function page4Animation() {
    // var a=document.querySelector("#elem1");
    // console.log(a)

    // var a= document.querySelector(".elem");
    // var b= a.getAttribute("data-image")
    // console.log(b)

    // real code start now :

    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter", function () {
        // alert("you got the alert box.");
        fixed.style.display = "block";
    })
    elemC.addEventListener("mouseleave", function () {
        // alert("you got the alert box.");
        fixed.style.display = "none";
    })

    // var elem1 = document.querySelector("#elem1");
    // elem1.addEventListener("mouseenter",function(){
    //     var image = elem1.getAttribute("data-image");
    //     fixed.style.backgroundImage=`url(${image})`;
    // })

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        })

    })
}
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 50,
        freeMode: true,

    });

}

function loader() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        // console.log("hello");
        loader.style.top = "-100%";

    },3500)
}


loader()
swiperAnimation()
page4Animation()