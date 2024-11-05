
const hamburger = document.getElementById('hamburger');
const navbarLinks = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  navbarLinks.classList.toggle('show');
});

function page1Animation() {
    const tl = gsap.timeline();
    tl.from("#home #rightsection", {
        opacity: 0,
        x: 100,
        duration: 0.6,
    });
}
page1Animation();

function page2Animation() {
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#aboutSection",
            start: "top 80%",
            scroller: "body", 
        }
    });
    tl2.from("#aboutSection #aboutleft", {
        opacity: 0,
        x: 100,
        duration: 0.5,
    })
    .from("#aboutSection #aboutright", {
        opacity: 0,
        x: 100,
        duration: 0.5,
    });
}
page2Animation();

function page3Animation() {
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#services",
            start: "top 80%",
            scroller: "body",
        }
    });
    tl3.from(".service-card", {
        opacity: 0,
        x: -50,
        duration: 0.5,
    })
}
page3Animation();

function page4Animation() {
    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact-container",
            start: "top 80%",
            scroller: "body",
        }
    });

    tl4.from("#contact-container h3", {
        opacity: 0,
        y: -50,
        duration: 0.5,
    })
    .from("#contact-container form", {
        opacity: 0,
        y: 50,
        duration: 0.5,
    }, "<")
    .from(".social-icons", {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.2,
    });
}
page4Animation();
