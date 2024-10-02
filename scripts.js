const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


document.addEventListener("DOMContentLoaded",animation)


function animation(){
  const herotl = gsap.timeline()
  gsap.set("body", {opacity:1})
  gsap.set(".hero h1", {opacity:1})
  gsap.set(".behavioral", {opacity:1})
  gsap.set(".inpatient", {opacity:1})
  gsap.set(".medical", {opacity:1})

  herotl.from(".hero h1",{
    opacity:0,
    y:-100,
    duration:1,    
    ease:"bounce.out",    
  })

  herotl.from(".hero p",{
    opacity:0,
    duration:0.3
  })

  herotl.from(".behavioral",{
    opacity:0,
    x:-50,
    duration:0.5
  })


  herotl.from(".inpatient",{
    opacity:0,    
    duration:0.5,
    scale:0.5,

  })

  herotl.from(".medical",{
    opacity:0,
    x:50,
    duration:0.5
  })

  herotl.from(".main__CTA__btn",{
    opacity:0,
    scale:0.2,
    duration:0.5,
    y:50,    
    ease:"bounce.out",
  })
  
  if(window.innerWidth > 1024){
  //left
    animateLeftTiles(".documentation")
    animateLeftTiles(".billing")
    animateLeftTiles(".inbox")
    animateLeftTiles(".reporting")

  // right
    animateRightTiles(".workforce")
    animateRightTiles(".labs")
    animateRightTiles(".reminders")
    animateRightTiles(".portal")

    //center
    // animateCenterTiles(".scheduling")    
    // animateCenterTiles(".telehealth")
  }  
  
}


function animateLeftTiles(tile){
    gsap.from(tile, {
      scrollTrigger: {
        trigger: tile,
        start: "top 70%",
        end: "bottom 80%",
        scrub: true,        
        markers: false,
      },      
      x: -200,
      y: -150,     
      opacity: 0, 
      duration: 8,
      stagger: 1,      
      rotation: 30,
      ease: "power2.out",
    })
}


function animateRightTiles(tile){
  gsap.from(tile, {
    scrollTrigger: {
      trigger: tile,
      start: "top 70%",
      end: "bottom 80%",
      scrub: true,      
      markers: false,
    },    
    x: 200,
    y: -150,
    opacity: 0,
    duration: 8,
    stagger: 1,
    rotation: -30,
    ease: "power2.out",
  })
}

function animateCenterTiles(tile){
  gsap.from(tile, {
    scrollTrigger: {
      trigger: tile,
      start: "top 70%",
      end: "bottom 90%",
      scrub: true,      
      markers: false,
    },
    opacity: 0,
    
    duration: 3,
    stagger: 1,      
    ease: "power2.in",
  })
}
