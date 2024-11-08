window.addEventListener("DOMContentLoaded", () => {    
    const cardsContainer = document.querySelector(".cards");    
    const menuItems = document.querySelectorAll("#menu > li");

    const animateCards = (id) => {   
        const card = document.querySelector(`.long__card[data-card="${id}"]`);        
        const cardYval = card.offsetTop;
        gsap.to(cardsContainer, {
            y: -cardYval,
            opacity: 1,
            duration: 0.9,                       
            ease: "back"
        })
    }
    
    
    menuItems.forEach(item => {           
        item.addEventListener("click", () => {            
            menuItems.forEach(listItem => listItem.classList.remove("active"));
            item.classList.add("active");
            const id = item.dataset.menuId;
            animateCards(id);
        })
    })

})