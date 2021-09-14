// gsap.registerPlugin(scrollTrigger);
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text-right", { y: "0%", duration: 1.5, stagger: 0.25 });
tl.to(".hide-left", { x: "0%", duration: 1.5 },"-=0.75");
tl.to(".text-left", { y: "0%", duration: 0.75, stagger: 0.75 },"-=0.5");
tl.to(".intro", { y: "-100%", duration: 1.75, delay: 1.5  });
// tl.to(".intro", { y: "-100%", duration: 1, delay: 0.5  });





// tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
// tl.to(".intro", { y: "-100%", duration: 1 }, "-=1"); 
// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");



// var tl1 = new TimelineMax({onUpdate:updatePercentage});
// var tl2 = new TimelineMax();
// const controller = new ScrollMagic.Controller();


// tl1.from('#Kodowanie-left', .5, {x:-100, opacity: 0.3});
// tl1.from('#Kodowanie-right', .5, {x:100, opacity: 0.3},"-=0.5");




// const scene = new ScrollMagic.Scene({
//     triggerElement:"#Kodowanie",
//     triggerHook: "onLeave",
//     duration: "100%",
//     offset: -15
// })
// .setPin("#Kodowanie")
// .setTween(tl1)
// .addTo(controller);


// function updatePercentage() {
//     //percent.innerHTML = (tl.progress() *100 ).toFixed();
//      tl1.progress();
//     // console.log(tl1.progress());
//   }



  // let tl1 = gsap.timeline({
  //   // yes, we can add it to an entire timeline!
  //   scrollTrigger: {
  //     trigger: "#Kodowanie",
  //     pin: true,   // pin the trigger element while active
  //     start: "top top", // when the top of the trigger hits the top of the viewport
  //     end: "+=500", // end after scrolling 500px beyond the start
  //     // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //     // snap: {
  //     //   snapTo: "labels", // snap to the closest label in the timeline
  //     //   duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
  //     //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
  //     //   ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
  //     // }
  //   }
  // });
  // tl1.from('#Kodowanie-left', .5, {x:-100, opacity: 0});




// // add animations and labels to the timeline
// tl.addLabel("start")
//   .from(".box p", {scale: 0.3, rotation:45, autoAlpha: 0})
//   .addLabel("color")
//   .from(".box", {backgroundColor: "#28a92b"})
//   .addLabel("spin")
//   .to(".box", {rotation: 360})
//   .addLabel("end");

gsap.to("#AutoElektronika-title",{
  scrollTrigger:{
    trigger: "#AutoElektronika",
    start: "top bottom",
    endtrigger: "#AutoElektronika-left",
    end:"bottom 90%",
    scrub: 1,
    // pin: true,
    // pinSpacing: false,
    toggleActions:"restart pause reverse pause"
  },
  x:"0%",
  duration: 1
})
// gsap.from("#AutoElektronika-left",{
//   scrollTrigger:{
//     trigger: "#AutoElektronika-left",
//     start: "top 80%",
//     endtrigger: "#AutoElektronika",
//     end:"bottom 95%",
//     scrub: 1,
//     // pin: true,
//     // pinSpacing: false,
//     toggleActions:"restart pause reverse pause"
//   },
//   x: 20, 
//   opacity: 0,
//   duration:3,
//   delay: 0.5
// })
// gsap.from("#AutoElektronika-right",{
//   scrollTrigger:{
//     trigger: "#AutoElektronika",
//     start: "top center",
//     endtrigger: "#AutoElektronika",
//     end:"bottom 80%",
//     scrub: 1,
//     toggleActions:"restart pause reverse pause"
//   },
//   x:"-100%", 
//   opacity: 0.1,
//   duration: 2
// })


gsap.to("#Kodowanie-title",{
  scrollTrigger:{
    trigger: "#Kodowanie",
    start: "top bottom",
    endtrigger: "#Kodowanie-left",
    end:"bottom 90%",
    scrub: 1,
    // pin: true,
    // pinSpacing: false,
    toggleActions:"restart pause reverse pause"
  },
  x:"0%",
  duration: 1
})

// gsap.from("#Kodowanie-left",{
//   scrollTrigger:{
//     trigger: "#Kodowanie",
//     start: "top center",
//     endtrigger: "#Kodowanie",
//     end:"bottom 90%",
//     scrub: 1,
//     // pin: true,
//     // pinSpacing: false,
//     toggleActions:"restart pause reverse pause"
//   },
//   x:-100, 
//   opacity: 0.3,
//   duration:1,
//   delay: 0.5
// })
// gsap.from("#Kodowanie-right",{
//   scrollTrigger:{
//     trigger: "#Kodowanie",
//     start: "top center",
//     endtrigger: "#Kodowanie",
//     end:"bottom 80%",
//     scrub: 1,
//     toggleActions:"restart pause reverse pause"
//   },
//   x:10, 
//   opacity: 0.1,
//   duration: 2
// })

gsap.to("#Doposażanie-title",{
  scrollTrigger:{
    trigger: "#Doposażanie",
    start: "top bottom",
    endtrigger: "#Doposażanie-title",
    end:"bottom 90%",
    scrub: 1,
    // pin: true,
    // pinSpacing: false,
    toggleActions:"restart pause reverse pause"
  },
  x:"0%",
  duration: 1
})

// gsap.from("#Doposażanie-left-img",{
//   scrollTrigger:{
//     trigger: "#Doposażanie-left",
//     start: "top center",
//     endtrigger: "#Doposażanie",
//     end:"bottom 90%",
//     scrub: 1,
//     // pin: true,
//     // pinSpacing: false,
//     toggleActions:"restart pause reverse pause"
//   },
//   x: "100%", 
//   opacity: 0.2,
//   duration:3,
//   delay: 0.5
// })

// gsap.from("#Doposażanie-right",{
//   scrollTrigger:{
//     trigger: "#Doposażanie",
//     start: "top center",
//     endtrigger: "#Doposażanie",
//     end:"bottom 80%",
//     scrub: 1,
//     toggleActions:"restart pause reverse pause"
//   },
//   x:10, 
//   opacity: 0.1,
//   duration: 2
// })

gsap.to("#Klimatyzacja-title",{
  scrollTrigger:{
    trigger: "#Klimatyzacja",
    start: "top bottom",
    endtrigger: "#Klimatyzacja-title",
    end:"bottom 90%",
    scrub: 1,
    // pin: true,
    // pinSpacing: false,
    toggleActions:"restart pause reverse pause"
  },
  x:"0%",
  duration: 1
})

// gsap.from("#Klimatyzacja-det",{
//   scrollTrigger:{
//     trigger: "#Klimatyzacja",
//     start: "top center",
//     endtrigger: "#Klimatyzacja",
//     end:"bottom 90%",
//     scrub: 1,
//     // pin: true,
//     // pinSpacing: false,
//     toggleActions:"restart pause reverse pause"
//   },
//   x:10, 
//   opacity: 0.2,
//   duration:2,
//   delay: 0.5
// })

gsap.to("#Map-title",{
  scrollTrigger:{
    trigger: "#Map",
    start: "top bottom",
    endtrigger: "#Map-title",
    end:"bottom 90%",
    scrub: 1,
    // pin: true,
    // pinSpacing: false,
    toggleActions:"restart pause reverse pause"
  },
  x:"0%",
  duration: 1
})


// gsap.from("#Map-left",{
//   scrollTrigger:{
//     trigger: "#Map",
//     start: "top center",
//     endtrigger: "#Map",
//     end:"bottom 90%",
//     scrub: 1,
//     // pin: true,
//     // pinSpacing: false,
//     toggleActions:"restart pause reverse pause"
//   },
//   x:-100,
//   duration: 1
// })

// gsap.from("#Map-right-img",{
//   scrollTrigger:{
//     trigger: "#Map",
//     start: "center center",
//     endtrigger: "#Map",
//     end:"bottom 90%",
//     scrub: 1,
//     // pin: true,
//     // pinSpacing: false,
//     toggleActions:"restart pause reverse pause"
//   },
//   x:10, 
//   opacity: 0.1,
//   duration:2,
//   delay: 0.5
// })



gsap.to("#Uslugi-title",{
  scrollTrigger:{
    trigger: "#Uslugi",
    start: "top bottom",
    endtrigger: "#Uslugi-title",
    end:"bottom 90%",
    scrub: 1,
    // pin: true,
    // pinSpacing: false,
    toggleActions:"restart pause reverse pause"
  },
  x:"0%",
  duration: 1
})

// gsap.from("#Uslugi-top",{
//   scrollTrigger:{
//     trigger: "#Uslugi",
//     start: "top top",
//     endtrigger: "#Uslugi",
//     end:"bottom 90%",
//     scrub: 1,
//     // pin: true,
//     // pinSpacing: false,
//     toggleActions:"restart pause reverse pause"
//   },
//   y:20, 
//   opacity: 0.1,
//   duration:2,
//   delay: 0.5
// })
// gsap.from("#Uslugi-down",{
//   scrollTrigger:{
//     trigger: "#Uslugi",
//     start: "top top",
//     endtrigger: "#Uslugi",
//     end:"bottom 90%",
//     scrub: 1,
//     // pin: true,
//     // pinSpacing: false,
//     toggleActions:"restart pause reverse pause"
//   },
//   y:-20, 
//   opacity: 0.1,
//   duration:2,
//   delay: 0.5
// })
