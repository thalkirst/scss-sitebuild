const menuButton = document.querySelector('.nav-button');
menuButton.addEventListener('click', () => {
    const navList = document.querySelector('.nav-list');
    if (navList.style.display == 'none')
        navList.style.display = 'block';
    else
        navList.style.display = 'none';
});

const navHide = () => {
    const navList = document.querySelectorAll('.nav-link');
    navList.forEach(link => link.addEventListener('click', () => {
        const navList = document.querySelector('.nav-list');
        if (navList.style.display == 'none')
            navList.style.display = 'block';
        else
            navList.style.display = 'none';
    }));
}

navHide();


const upperLinks = document.querySelectorAll(".nav-link-upper");
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
        document.querySelector(".fixed").style.backgroundColor = "white";
        upperLinks.forEach(link => link.style.color = "grey");
    }
    if (currentScrollPos === 0) {
        document.querySelector(".fixed").style.removeProperty("background-color");
        upperLinks.forEach(link => link.style.removeProperty("color"));
    }
    prevScrollpos = currentScrollPos;
}