const navlistCont = document.querySelector('.navlist-cont');
const filter = document.querySelector('.filter');

const openMenu = () => {
    navlistCont.style.display = 'flex';
    filter.classList.remove('dissapear');
}

const closeMenu = () => {
    navlistCont.style.display = 'none';
    filter.classList.add('dissapear');
}