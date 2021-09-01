const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text-right", { y: "0%", duration: 0.75, stagger: 0.25 });
tl.to(".hide-left", { x: "0%", duration: 0.75 },"-=0.75");
tl.to(".text-left", { y: "0%", duration: 0.75, stagger: 0.25 },"-=0.5");

tl.to(".intro", { y: "-100%", duration: 1, delay: 0.25  });





// tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
// tl.to(".intro", { y: "-100%", duration: 1 }, "-=1"); 
// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");