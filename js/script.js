const navigationNav = document.querySelector('nav');
window.addEventListener('scroll', fixNavigation);


function fixNavigation() {
    if (window.scrollY > window.innerHeight - 100) {
        navigationNav.classList.add('navbar-light');
        navigationNav.classList.add('bg-light');
        navigationNav.classList.remove('navbar-dark');
    } else {
        navigationNav.classList.add('navbar-dark');
        navigationNav.classList.remove('bg-light');

    }

}


// scrollBtn

const btnTopScroll = document.getElementById('btnTopScroll');
window.addEventListener('scroll', showArrow);

function showArrow() {
    if (window.scrollY > window.innerHeight) {
        btnTopScroll.classList.add('active');
    } else {
        btnTopScroll.classList.remove('active');

    }
}


btnTopScroll.addEventListener('click', clickArrowToTop);

function clickArrowToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}