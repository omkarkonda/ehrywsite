
// JavaScript to detect when the SVG container comes into view
const svg = document.querySelector('.svg');
const path = svg.querySelector('.purpleline');

/**
 * This function gets called whenever the user scrolls.
 * It calculates how much of the purple line should be shown based on how far down the user has scrolled.
 */
function scroll(){
    const distance = window.scrollY;
    const height = svg.clientHeight - window.innerHeight;
    const percentage = distance / height;
    const pathLength = path.getTotalLength();  
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = `${pathLength * (1 - percentage * 0.78)}`;      
}

scroll();

window.addEventListener('scroll', scroll);
