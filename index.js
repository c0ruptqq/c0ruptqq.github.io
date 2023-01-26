/* EMAIL SEND FUN */
function sendEmail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_5njuenm";
    const templateID = "template_2s36wxi"
    emailjs
        .send(serviceID,templateID,params)
        .then(
            res =>{
                document.getElementById("name").value= "";
                document.getElementById("email").value= "";
                document.getElementById("message").value= "";
                console.log(res);
                alert("your message sent succesfully");
            })
}

/* NAV HAMBURGER MENU */
const primaryNav = document.querySelector('.nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
console.log(navToggle)
navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else if (visibility === "true"){
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
});
/* SCROLL EFFECT */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElemenets = document.querySelectorAll('.hidden');
hiddenElemenets.forEach((el) => observer.observe(el));

/* SCROLL SKEW EFFECT*/
const maxSkew = 20;
const maxRotate = 20;

let currentPosition = window.pageYOffset;

function skewEffect() {
  const newPosition = window.pageYOffset;
  const dif = newPosition - currentPosition;

  let skew = dif * 0.8;
  let rotate = dif * 2;
  if (skew > maxSkew || skew < -maxSkew) {
    if (skew > 0) {
      skew = maxSkew;
    } else if (skew < 0) {
      skew = -maxSkew;
    }
  }
  if (rotate > maxRotate || rotate < -maxRotate) {
    if (rotate > 0) {
      rotate = maxRotate;
    } else if (skew < 0) {
      rotate = -maxRotate;
    }
  }
  document.querySelectorAll('section').forEach(el =>  {
    el.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`;
  });
  currentPosition = newPosition;
  requestAnimationFrame(skewEffect);
}

skewEffect();

/* PRE LOADER */
const preloader = document.querySelector('.preloader')
const loader = document.querySelector('.loader')

window.addEventListener("load", () => {
  preloader.classList.add("preloader--hidden")

  preloader.addEventListener("transitionend", () => {
    loader.remove();
  });
});