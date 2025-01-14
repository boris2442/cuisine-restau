const sr = ScrollReveal({
  duration: 1500,
  distance: "30px",
  reset: true,
  origin: "top",
});
sr.reveal(".footer-text, .home, .services, .chefs, .contact", {
  interval: 200,
});

// partie reserve au typewriter
const title = document.querySelector("h1");
const app = new Typewriter(title, {
  loop: true,
  delay: 100,
})
  .typeString("Rencontrez les <span>chefs étoilés !</span>")
  .pauseFor(2000)
  .deleteAll()
  .pauseFor(2000)
  .start();

// partie reserves au menu burger

const menu = document.querySelector(".bars");
const navigation = document.querySelector(".navigation");
menu.addEventListener("click", () => {
  navigation.classList.toggle("active2");
});
window.addEventListener("scroll", () => {
  navigation.classList.remove("active2");
});

// Ajouter une classe active à un lien lors du défilement

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav ul li a");

const scrollActive = () => {
  sections.forEach((section) => {
    let top = section.offsetTop;
    let height = section.offsetHeight;
    let scroll = window.scrollY;
    let id = section.getAttribute("id");
    if (scroll >= top - 400 && scroll < top + height) {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      let recuperationId = document.querySelector(`nav ul li a[href*=${id}]`);
      recuperationId.classList.add("active");
    }
  });
};

window.addEventListener("scroll", scrollActive);

window.onload = function () {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".loader").style.transition = "5s ease-out";
};

const symbols = /[^a-zA-Z0-9\s]/;
const inputCheckbox = document.querySelector("input[type ='checkbox']");
const spanName = document.getElementById("spanName");
const spanSurname = document.getElementById("spanSurname");
const spanTextarea = document.getElementById("spanTextarea");
const inputSumbit = document.querySelector("input[type='submit'");
const forms = document.querySelector("form");
const inputName = document.querySelector("#name");
const labels = document.querySelector("label");
const inputSurname = document.getElementById("surname");
inputName.addEventListener("input", (e) => {
  console.log(e.target.value);

  if (e.target.value.length < 3 || e.target.value.length > 20) {
    inputName.classList.add("error");
    spanName.textContent = "le nom doit avoir entre 3 et 30 caracteres";
  } else {
    inputName.classList.remove("error");
    spanName.textContent = "";
  }
});

inputSurname.addEventListener("input", (e) => {
  if (e.target.value.length < 3 || e.target.value.length > 20) {
    inputSurname.classList.add("error");
    spanSurname.textContent = "le nom doit avoir entre 3 et 30 caracteres";
  } else {
    inputSurname.classList.remove("error");
    spanSurname.textContent = "";
  }
});
forms.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("formulaires soumit avec succès!");
});
