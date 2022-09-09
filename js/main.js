const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});

// scroll top

function scrollTop(){
    const scrollTop = document.getElementById("move-up");
    const nav = document.getElementById("nav");

    // When the scroll is higher than 900 viewport height, add the show-move-up
    if(this.scrollY >= 900) scrollTop.classList.add("show-move-up"); else scrollTop.classList.remove("show-move-up")
    if(nav.classList.contains('collapse')) nav.classList.remove("collapse")
}
window.addEventListener('scroll', scrollTop);


// form

const userName = document.querySelector(".user-name");
const displayName = document.querySelector(".display-name");

const formGmail1 = document.querySelector(".gmail1");
const formGmail2 = document.querySelector(".gmail2");
formBtn1 = document.querySelector(".form-btn1");
formBtn2 = document.querySelector(".form-btn2");

formBtn1.addEventListener("click", () =>{
    if(localStorage.getItem("email") == formGmail1.value){
        console.log("already signed in " + localStorage.getItem("email"));
    }
    else{
        if(formGmail1.value !== ""){
            localStorage.setItem("email", formGmail1.value);
            console.log("hello " + formGmail1.value);
        }
        else{
            console.log("please enter your mail");
        }
    }

    setName();
})
function setName(){
    if(userName.value !== ""){    
        localStorage.setItem("userName", userName.value);
    }
    getName();
}
function getName(){
    displayName.innerHTML = "Welcome " + localStorage.getItem("userName");
}
if(localStorage.getItem("userName") !== null){
    displayName.innerHTML = "Welcome Back! " + localStorage.getItem("userName");
}
formBtn2.addEventListener("click", () =>{
    if(localStorage.getItem("email") == formGmail2.value){
        console.log("already signed in " + localStorage.getItem("email"));
    }
    else{
        if(formGmail2.value !== ""){
            localStorage.setItem("email", formGmail2.value);
            console.log("hello " + formGmail2.value);
        }
        else{
            console.log("please enter your mail");
        }
    }
})









