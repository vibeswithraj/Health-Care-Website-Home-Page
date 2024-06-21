gsap.from(".left ", {
  x: -350,
  duration: 1,
  delay: 0.8,
  opacity: 0,
});

gsap.from(".right", {
  x: 350,
  duration: 1,
  delay: 0.8,
  opacity: 0,
});

gsap.from(".title-2 , .line , .para-2", {
  y: 200,
  duration: 1,
  //delay: .2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".title-2 , .line , .para-2",
    scroller: "body",
  },
});

gsap.from(".container-2 .card-row-1", {
  y: 200,
  duration: 1,
  //delay: .2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".container-2 .card-row-1",
    scroller: "body",
    // scrub: true,
  },
});

gsap.from(".container-2 .card-row-2", {
  y: 200,
  duration: 1,
  //delay: .2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".container-2 .card-row-2",
    scroller: "body",
    // scrub: true
  },
});

gsap.from(".container-3", {
  y: 200,
  duration: 1,
  //delay: .2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".container-3",
    scroller: "body",
    // scrub: true
  },
});

gsap.from(".container-4", {
  y: 200,
  duration: 1,
  //delay: .2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".container-4",
    scroller: "body",
    // scrub: true
  },
});

gsap.from(".container-5", {
  y: 200,
  duration: 1,
  //delay: .2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".container-5",
    scroller: "body",
    // scrub: true
  },
});

gsap.from(".container-6", {
  y: 200,
  duration: 1,
  //delay: .2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".container-6",
    scroller: "body",
    // scrub: true
  },
});
