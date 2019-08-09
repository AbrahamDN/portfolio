const navLists = document.querySelector('nav ul');
const burgerMenuWrap = document.querySelector('.burgerMenuWrap div');
const burgerMenuClose = document.querySelector('.burgerMenuClose');
const homePage = document.querySelector('#home');
const aboutPage = document.querySelector('#about');
const portfolioPage = document.querySelector('#portfolio');
const contactPage = document.querySelector('#contact');
const homeClass = document.querySelector('.homePage');
const aboutClass = document.querySelector('.aboutPage');
const portfolioClass = document.querySelector('.portfolioPage');
const contactClass = document.querySelector('.contactPage');



function MenuToggle(parentElement, domElement) {
    parentElement.classList.toggle(domElement);
}

function MenuClose() {
    for (const value of burgerMenuWrap.classList) {
        if (value === 'burgerMenuClose')
            navLists.classList.add('mobile-nav');
        else
            navLists.classList.remove('mobile-nav');

    }
}


function smoothScroll(target, duration) {
    let targets = aboutPage;
    let targetPosition = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };


    requestAnimationFrame(animation);

}

function applySmoothScroll(eventTarget, scrollToTarget) {
    eventTarget.addEventListener('click', () => {
        smoothScroll(scrollToTarget, 500);
    });
}

applySmoothScroll(homeClass, homePage);
applySmoothScroll(aboutClass, aboutPage);
applySmoothScroll(portfolioClass, portfolioPage);
applySmoothScroll(contactClass, contactPage);


burgerMenuWrap.addEventListener('click', () => {
    MenuToggle(burgerMenuWrap, 'burgerMenuClose');
    MenuClose();
});


function markPage() {

    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        if (window.scrollY <= 580) homeClass.style.color = 'orange';
        else homeClass.style.color = 'inherit';

        if (window.scrollY >= 580 && window.scrollY <= 1200) aboutClass.style.color = 'orange';
        else aboutClass.style.color = 'inherit';

        if (window.scrollY >= 1200 && window.scrollY <= 3000) portfolioClass.style.color = 'orange';
        else portfolioClass.style.color = 'inherit';

        if (window.scrollY >= 3000 && window.scrollY <= 3800) contactClass.style.color = 'orange';
        else contactClass.style.color = 'inherit';
    });
}


window.onload = markPage();