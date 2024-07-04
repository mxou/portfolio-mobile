window.addEventListener('DOMContentLoaded', function () {
    const boutonMenu = document.querySelector('#boutonMenu');
    const menu = document.querySelector('#menu');
    const boutonClose = document.querySelector('#boutonClose');
    const swipe = document.querySelector('#swipe');
    const insta = document.querySelector('#insta');
    const git = document.querySelector('#git');
    const mail = document.querySelector('#mail');
    const phone = document.querySelector('#phone');
    const contactoutput = document.querySelector('#contactoutput');




    let compteur = 0;


    boutonMenu.addEventListener('click', function () {
        if (compteur == 1) {
            boutonMenu.className = "fa-solid fa-bars";
            menu.style.transform = 'translateX(-600px)';
        } else {
            menu.style.transform = 'translateX(0px)';
            boutonMenu.className = "fa-regular fa-circle-xmark";
        }
        compteur = compteur + 1;
        if (compteur > 1) {
            compteur = 0;
        }

        menu.style.transition = 'transform 0.2s ease-in-out';
    });




    window.addEventListener("scroll", function () {
        var positionDeScroll = window.scrollY;

        if (positionDeScroll > 30) {
            swipe.style.visibility = "hidden";
            swipe.style.opacity = "0";

        } else {
            swipe.style.visibility = "visible";
            swipe.style.opacity = "1";


        }
    });

    insta.addEventListener('click', function () {

        contactoutput.innerHTML = '@monInstagram';

    });

    git.addEventListener('click', function () {

        contactoutput.innerHTML = '@monGitHub';

    });

    mail.addEventListener('click', function () {

        contactoutput.innerHTML = 'mail@mail.fr';

    });

    phone.addEventListener('click', function () {

        contactoutput.innerHTML = '06-66-70-66-70';

    });




});