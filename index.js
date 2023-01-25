/* EMAIL SEND FUN */
function sendEmail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("phone").value,
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
                document.getElementById("phone").value= "";
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
