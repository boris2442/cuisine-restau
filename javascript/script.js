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
const links=document.querySelectorAll("nav ul li a")

const scrollActive=()=>{
    sections.forEach(section=>{
        let top = section.offsetTop;
        let height = section.offsetHeight;
        let scroll = window.scrollY;
        let id=section.getAttribute("id");
        if(scroll>=top - 400 && scroll<top + height){
            links.forEach(link => {
                link.classList.remove("active")
             
            })
            let recuperationId=document.querySelector(`nav ul li a[href*=${id}]`)
            recuperationId.classList.add("active")
        }
    })
}

window.addEventListener("scroll", scrollActive );


window.onload = function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.loader').style.transition='5s ease-out'
  };


  const symbols = /[^a-zA-Z0-9\s]/;
  const spanName = document.getElementById("spanName");
  const spanSurname = document.getElementById("spanSurname");
  const spanTextarea=document.getElementById("spanTextarea");
