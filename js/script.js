"use strict"

// burger_menu
document.addEventListener("click", documentActions);

function documentActions(e) {
    const targetElement = e.target;

    // menu_open ------ menu_open //
    if (targetElement.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu__open');
    }
    // ------------------------- //

    if (targetElement.closest('[data-goto]')) {
        document.documentElement.classList.contains('menu__open') ?
        document.documentElement.classList.remove('menu__open') : null;

        const goTo = targetElement.closest('[data-goto]').dataset.goto;
        const goToElement = document.querySelector(goTo);
        const headerHeight = document.querySelector('.header').offsetHeight;

        if(goToElement) {
            window.scrollTo({
                top: goToElement.offsetTop - (headerHeight + 15),
                behavior: "smooth"
            });
        }

        e.preventDefault();
    }
}