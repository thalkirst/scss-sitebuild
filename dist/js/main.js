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
    navList.forEach(link => link.addEventListener ('click', () => {
        const navList = document.querySelector('.nav-list');
        if (navList.style.display == 'none')
            navList.style.display = 'block';
        else
            navList.style.display = 'none';
    }));        
}

navHide();