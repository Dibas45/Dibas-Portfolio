const hamburger = document.getElementById("hamburger");
const navbarLinks = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("show");
});

// Hero section animation
gsap.from("#leftsection h3", {
  opacity: 0,
  x: -50,
  duration: 1,
  ease: "power2.out",
});
gsap.from("#leftsection p", {
  opacity: 0,
  x: -50,
  delay: 0.5,
  duration: 1,
  ease: "power2.out",
});
gsap.from("#btn1", {
  opacity: 0,
  scale: 0.8,
  delay: 1,
  duration: 0.8,
  ease: "bounce.out",
});
gsap.from("#rightsection img", {
  opacity: 0,
  x: 50,
  delay: 0.8,
  duration: 1,
  ease: "power2.out",
});

// About Section animation
gsap.from("#aboutcontent", {
  scrollTrigger: {
    trigger: "#aboutcontent",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
});
gsap.from("#aboutcontent > div", {
  scrollTrigger: {
    trigger: "#aboutcontent",
    start: "top 80%",
  },
  opacity: 0,
  x: -50,
  stagger: 0.3,
  duration: 1,
  ease: "power2.out",
});

// Skills Progress Bar animation
gsap.from(".skill", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
});
gsap.to(".progress", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
  },
  width: (i, target) => target.style.width,
  duration: 1,
  ease: "power2.out",
});

// Services Section animation
gsap.from(".service-card .service", {
  scrollTrigger: {
    trigger: "#services",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.3,
  ease: "power2.out",
});

// Project section animation
 gsap.from("#projects", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top bottom",
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.3,
  ease: "power2.out",
});


// Contact Section animation
gsap.from("#contact-container h3, #contact-container h2", {
  scrollTrigger: {
    trigger: "#contact-container",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
});
gsap.from("form input, form textarea, form button", {
  scrollTrigger: {
    trigger: "form",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 0.8,
  ease: "power2.out",
});


