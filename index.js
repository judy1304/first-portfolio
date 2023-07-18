// Typing Effects

let typed = new Typed('.typing', {
    strings: ['Full-Stack Developer', 'Software Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});
// End of Typing Effects

// Header toggle 

let menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", function (e) {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("fa-xmark");
});

// Active Link State on Scroll


// Get All Links
let navLinks = document.querySelectorAll('nav ul li a');

// Get All Sections
let sections = document.querySelectorAll('section');

window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (section.getAttribute("id") === link.getAttribute("href").substring(1)) {
                    link.classList.add("active");
                };
            });
        };
    });

});