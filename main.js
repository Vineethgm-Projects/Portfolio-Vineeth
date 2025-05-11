let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* ============= toogle icon navbar ================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*============== sticky toogle ==================*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=================== remove toogle icon and navbar =============*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*============scroll reveal=============*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-contrent', { origin: 'right' });

/*============type js=============*/
const typed = new Typed('.multiple-text', {
    strings: ['Aspiring Software Developer'],
    typeSpeed: 70,
    loop: false
});


/*================*/

document.getElementById('read-more-btn').addEventListener('click', function() {
    var moreContent = document.getElementById('more-content');
    var btn = document.getElementById('read-more-btn');

    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        btn.textContent = 'Read less';
    } else {
        moreContent.style.display = 'none';
        btn.textContent = 'Read more';
    }
});

function toggleMoreContent(id, btn) {
    var moreContent = document.getElementById(id);

    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        btn.textContent = 'Read Less';
    } else {
        moreContent.style.display = 'none';
        btn.textContent = 'Read More';
    }
}


