function loading() {
    var tl = gsap.timeline()

    tl.to(".yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    })

    tl.from(".yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    }, "anim")

    tl.to("#loader h1", {
        delay: 0.5,
        duration: 0.7,
        color: "black"
    }, "anim")

    tl.to("#loader", {
        opacity: 0
    })

    tl.to("#loader", {
        display: "none"
    })
}
loading()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elements = document.querySelectorAll(".elem")
var page2 = document.querySelector(".page2")
elements.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var bgimg = elem.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`
    })
})

document.querySelector(".footer h2").addEventListener("click",()=>{
    scroll.scrollTo(0)
})