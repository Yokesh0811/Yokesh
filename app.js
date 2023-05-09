var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    relativeInput: true
});

document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".circle").forEach(function (move) {
        var movingvalue = move.getAttribute("data-value");
        var x = (e.clientX * movingvalue) / 100;
        var y = (e.clientY * movingvalue) / 100;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

const tl = gsap.timeline();

tl.fromTo(".circle5", { width: "0%", height: "0%" }, { width: "50%", height: "50%", duration: 0.5 })
tl.fromTo(".circle4", { width: "0%", height: "0%" }, { width: "60%", height: "60%" }, "-=0.3")
tl.fromTo(".circle3", { width: "0%", height: "0%" }, { width: "70%", height: "70%" }, "-=0.3")
tl.fromTo(".circle2", { width: "0%", height: "0%" }, { width: "80%", height: "80%" }, "-=0.3")
tl.fromTo(".circle1", { width: "0%", height: "0%" }, { width: "90%", height: "90%" }, "-=0.3")
tl.fromTo(".introUp", { y: "100%" }, { y: "0", duration: 0.5 })
tl.fromTo(".intro2Up", { y: "100%" }, { y: "0", duration: 0.5 }, "-=0.2")
tl.fromTo(".introLine", { opacity: "0" }, { opacity: "1" })
tl.to(".line2", { x: "60" }, "-=.5")

gsap.registerPlugin(ScrollTrigger);
gsap.to(".moooon", {
    scrollTrigger: {
        trigger: ".page1",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: 1,
    },
    x: 500,
    opacity: 0,
    duration: 1,
});
gsap.to(".circle", {
    scrollTrigger: {
        trigger: ".page1",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: 1,
    },
    opacity: 0,
    duration: 1,
});


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "page2",
        start: "bottom 400",
        end: "bottom ",
        scrub: 1,
    }
})
    .to(".page2wrapper", { width: "100%", height: "100%", duartion: 1 })
    .fromTo(".aboutmeContainer", { scale: "0.1" }, { scale: "1", duartion: 1 })
    .fromTo(".parara", { scale: "0.1", opacity: 0 }, { scale: "1", opacity: "1", duartion: 1 });

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "page3",
        start: "top 100",
        end: "bottom 150",
        scrub: 1,
    }
})

gsap.to(".projectletters", {
    scrollTrigger: {
        trigger: ".page2",
        start: "bottom 300",

    },
    y: "0%",
    duration: 0.5,
    stagger: 0.15,
});

gsap.to(".skillsContent", {
    scrollTrigger: {
        trigger: ".page2",
        start: "bottom 250",

    },
    scale: 1,
    opacity: 1,
    duration: 0.5,
});

gsap.to(".skillscontent1", {
    scrollTrigger: {
        trigger: ".page2",
        start: "bottom 200",

    },
    scale: 1,
    opacity: 1,
    duration: 0.5,
});

const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'React',
    'Python', 'Sass', 'Bootstrap',
    'Tailwind', 'Gsap', 'Figma',
    'illustrator', 'Photoshop', 'Github',
];

var tagCloud = TagCloud('.skillsContent', myTags, {
    radius: 180,
    maxSpeed: 'normal',
    initSpeed: 'fast',
    direction: 135,
    keep: true

});

gsap.to(".project01img", {
    scrollTrigger: {
        trigger: ".page3",
        start: "bottom 200",

    },
    scale: 1,
    opacity: 1,
    duration: 1,
});
gsap.to(".project1content", {
    scrollTrigger: {
        trigger: ".page3",
        start: "bottom 200",

    },
    scale: 1,
    opacity: 1,
    duration: 1,
});
gsap.to(".p4heading", {
    scrollTrigger: {
        trigger: ".page3",
        start: "bottom 300",

    },
    x: 0,
    opacity: 1,
    duration: 1,
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
});
