// MENU ANIMATION 

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("#menu li a");

    menuItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();

            const targetId = item.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});


//FIREFOX SCROLLBAR

document.documentElement.addEventListener('mouseover', function (event) {
    if (event.target === document.documentElement) {
      document.documentElement.style.scrollbarColor = '#bc4b51 #14110f';
      document.documentElement.style.scrollbarWidth = 'thin';
    }
});
  
  document.documentElement.addEventListener('mouseout', function (event) {
    if (event.target === document.documentElement) {
      document.documentElement.style.scrollbarColor = '#d56f3e #14110f';
      document.documentElement.style.scrollbarWidth = 'thin';
    }
});


//SMOOTH SCROLL EFFECT

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical', 
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    console.log({ scroll, limit, velocity, direction, progress })
})
  
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
  
requestAnimationFrame(raf)