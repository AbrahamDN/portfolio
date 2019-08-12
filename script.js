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


burgerMenuWrap.addEventListener('click', () => {
    MenuToggle(burgerMenuWrap, 'burgerMenuClose');
    MenuClose();
});


function markPage() {

    window.addEventListener('scroll', () => {
        if (window.scrollY <= 580) homeClass.style.color = 'orange';
        else homeClass.style.color = 'inherit';

        if (window.scrollY >= 580 && window.scrollY <= 1200) aboutClass.style.color = 'orange';
        else aboutClass.style.color = 'inherit';

        if (window.scrollY >= 1200 && window.scrollY <= 3000) portfolioClass.style.color = 'orange';
        else portfolioClass.style.color = 'inherit';

        if (window.scrollY >= 3000 && window.scrollY <= 5000) contactClass.style.color = 'orange';
        else contactClass.style.color = 'inherit';
    });
}


window.onload = markPage();