const sr= ScrollReveal({
    duration:1500,
    distance:"30px",
    reset:true,
   origin:"top"

});
sr.reveal(".footer-text, .home, .services, .chefs, .contact", {interval:200})


// partie reserve au typewriter
const title=document.querySelector("h1")
const app = new Typewriter(title, {
    loop:true,
    delay:100

})
.typeString("Rencontrez les <span>chefs étoilés !</span>")
.pauseFor(2000)
.deleteAll()
.pauseFor(2000)
.start();


// partie reserves au menu burger

const menu=document.querySelector(".bars");
const navigation=document.querySelector(".navigation");
menu.addEventListener("click", ()=>{
    navigation.classList.toggle("active2")
})
window.addEventListener("scroll", ()=>{
    navigation.classList.remove("active2")
})

// Ajouter une classe active à un lien lors du défilement

const sections=document.querySelectorAll("section");
const links=document.querySelectorAll("header ul li a")

const scrollActive=()=>{
    sections.forEach(section=>{
        let top = section.offsetTop;
        let height = section.offsetHeight;
        let scroll = window.scrollY;
        if(scroll>=top - 400 && scroll<top + height){
            links.forEach(link=>{
                link.classList.remove("active")
                console.log("hello!")
            })
          
        }
    })
}

window.addEventListener("scroll", scrollActive )