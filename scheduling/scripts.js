const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



document.addEventListener("DOMContentLoaded", () => {
  
  gsap.registerPlugin(ScrollTrigger);
  
  const cardsContainer = document.querySelector(".cards")
  const featureContent = document.querySelector("#feature__content")
  const cardsOverlayWrapper = document.querySelector(".cards_overlay_wrapper")

  function getScrollAmount(){
    let cardsWidth = cardsContainer.offsetWidth;
    return -(cardsWidth + 200  - window.innerWidth);
    
  }

  const tween = gsap.to(cardsContainer, {
    x: getScrollAmount,  
    delay: 0.5,
    duration:8,
    ease: "none",
  })

  ScrollTrigger.create({
    trigger: "#feature__hero__section",
    start: "top 20%",
    end: () => `+=${getScrollAmount() * -1}`,
    pin:true,
    scrub:3,
    animation: tween,
    markers:false,
    invalidatedOnRefresh: true,
  })  


})
