const burgerMenu = document.querySelector('.burger');
const burgerMenuClose = document.querySelector('.close');
const navLinks = document.querySelector('nav ul');
const headerContent = document.querySelector('.header_content');

burgerMenu.onclick = () => {
    burgerMenu.style.display = 'none';
    navLinks.style.display = 'flex';
    navLinks.style.zIndex = '-1';
    headerContent.style.zIndex = '-2';
    burgerMenuClose.style.display = 'block';
}

burgerMenuClose.onclick = () => {
    burgerMenuClose.style.display = 'none';
    navLinks.style.display = 'none';
    navLinks.style.zIndex = '0';
    headerContent.style.zIndex = '1';
    burgerMenu.style.display = 'block';
}