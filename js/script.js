// gsap.registerPlugin(scrollTrigger);
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text-right", { y: "0%", duration: 1.5, stagger: 0.25 });
// tl.to(".hide-left", { x: "0%", duration: 1.5 },"-=0.75");
tl.to(".text-left", { y: "0%", duration: 0.75, stagger: 0.75 },"-=0.5");
// testing
tl.to(".intro", { y: "-100%", duration: 0.1, delay: 0.1  });

// production
// tl.to(".intro", { y: "-100%", duration: 1.75, delay: 1.5  });
// tl.to(".intro", { y: "-100%", duration: 1, delay: 0.5  });


gsap.to("#AutoElektronika-title",{
  scrollTrigger:{
    trigger: "#AutoElektronika",
    start: "top center",
    endtrigger: "#AutoElektronika-left",
    end:"top 40%",
    scrub: 1,
    // pin: true,
    // pinSpacing: false,
    toggleActions:"restart pause reverse pause"
  },
  x:"0%",
  duration: 1
})

gsap.to("#Kodowanie-title",{
  scrollTrigger:{
    trigger: "#Kodowanie",
    start: "top center",
    endtrigger: "#Kodowanie-left",
    end:"top 40%",
    scrub: 1,
    // pin: true,
    // pinSpacing: false,
    toggleActions:"restart pause reverse pause"
  },
  x:"0%",
  duration: 1
})

gsap.to("#Doposażanie-title",{
  scrollTrigger:{
    trigger: "#Doposażanie",
    start: "top center",
    endtrigger: "#Doposażanie-title",
    end:"top 40%",
    scrub: 1,
    // pin: true,
    // pinSpacing: false,
    toggleActions:"restart pause reverse pause"
  },
  x:"0%",
  duration: 1
})

gsap.to("#Klimatyzacja-title",{
  scrollTrigger:{
    trigger: "#Klimatyzacja",
    start: "top center",
    endtrigger: "#Klimatyzacja-title",
    end:"top 40%",
    scrub: 1,
    // pin: true,
    // pinSpacing: false,
    toggleActions:"restart pause reverse pause"
  },
  x:"0%",
  duration: 1
})

gsap.to("#Map-title",{
  scrollTrigger:{
    trigger: "#Map",
    start: "top center",
    endtrigger: "#Map-title",
    end:"top 40%",
    scrub: 1,
    // pin: true,
    // pinSpacing: false,
    toggleActions:"restart pause reverse pause"
  },
  x:"0%",
  duration: 1
})

gsap.to("#Uslugi-title",{
  scrollTrigger:{
    trigger: "#Uslugi",
    start: "top center",
    endtrigger: "#Uslugi-title",
    end:"top 40%",
    scrub: 1,
    // pin: true,
    // pinSpacing: false,
    toggleActions:"restart pause reverse pause"
  },
  x:"0%",
  duration: 1
})

gsap.to("#cennik-title",{
  scrollTrigger:{
    trigger: "#cennik",
    start: "top center",
    endtrigger: "#cennik",
    end:"top 40%",
    scrub: 1,
    // pin: true,
    // pinSpacing: false,
    toggleActions:"restart pause reverse pause"
  },
  x:"0%",
  duration: 1
})

gsap.to("#dpf-title",{
  scrollTrigger:{
    trigger: "#dpf",
    start: "top center",
    endtrigger: "#dpf",
    end:"top 40%",
    scrub: 1,
    // pin: true,
    // pinSpacing: false,
    toggleActions:"restart pause reverse pause"
  },
  x:"0%",
  duration: 1
})

gsap.to("#about-title",{
  scrollTrigger:{
    trigger: "#about",
    start: "top center",
    endtrigger: "#about",
    end:"top 40%",
    scrub: 1,
    // pin: true,
    // pinSpacing: false,
    toggleActions:"restart pause reverse pause"
  },
  x:"0%",
  duration: 1
})
