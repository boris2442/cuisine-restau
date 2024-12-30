const sr= ScrollReveal({
    duration:1500,
    distance:"30px",
    reset:true,
   origin:"top"

});
sr.reveal(".footer-text, .home, .services, .chefs, .contact", {interval:200})

const title=document.querySelector("h1")
const app = new Typewriter(title, {
    loop:true,
    delay:200

})
.typeString("Rencontrez les <span>chefs étoilés !</span>")
.pauseFor(2000)
.deleteAll()
.pauseFor(2000)
.start();