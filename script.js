const burgerMenu = document.querySelector('.burger');
const burgerMenuClose = document.querySelector('.close');
const navLinks = document.querySelector('nav ul');
const emailBtn = document.querySelector('#email');

const name = document.querySelector('.name').value;
const email = document.querySelector('.email').value;
const subject = document.querySelector('.subject').value;
const message = document.querySelector('.message').value;
const statusElm = document.querySelector('.status');


burgerMenu.onclick = () => {
    burgerMenu.style.display = 'none';
    navLinks.style.display = 'flex';
    navLinks.style.zIndex = '-1';
    burgerMenuClose.style.display = 'block';
};

burgerMenuClose.onclick = () => {
    burgerMenuClose.style.display = 'none';
    navLinks.style.display = 'none';
    navLinks.style.zIndex = '0';
    burgerMenu.style.display = 'block';
};

// Contact Form
document.querySelector('.submit').addEventListener('click', (event) => {
    function invalidForm(msg) {
        statusElm.style.display = 'flex';
        event.preventDefault();
        statusElm.innerHTML = '*Invalid form: fill in all the form inputs*';
    }

    if (!(name.length >= 3) && !(typeof name === 'string')) invalidForm();

    if (!(email.length >= 5) && !(email.includes('@')) && !(email.includes('.'))) invalidForm();

    if (!(subject.length >= 3)) invalidForm();

    if (!(message.length >= 12)) invalidForm();

});

statusElm.onclick = () => {
    statusElm.style.opacity = '0';
    statusElm.style.zIndex = '-1';
}