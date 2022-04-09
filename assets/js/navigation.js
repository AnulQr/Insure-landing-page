const   navMenu         = document.getElementById('nav-menu'),
        navNavigation   = document.getElementById('nav-toggle'),
        toggleHamburger = document.getElementById('hamburger'),
        toggleClose     = document.getElementById('close'),
        navlink         = document.querySelectorAll('.menu-link');

/*hamburger*/ 
if(toggleHamburger){
    toggleHamburger.addEventListener('click', ()=>{
        navMenu.classList.add('navbar-show')
    });

    toggleHamburger.addEventListener('click', ()=>{
        navNavigation.classList.add('toggle-switch')
    });
}

/*close*/
if(toggleClose){
    toggleClose.addEventListener('click', ()=>{
        navMenu.classList.remove('navbar-show')
    });

    toggleClose.addEventListener('click', ()=>{
        navNavigation.classList.remove('toggle-switch')
    });
}

/*link*/
function linkAction(){
    const   navMenu         = document.getElementById('nav-menu'),
            navNavigation   = document.getElementById('nav-toggle');

            navMenu.classList.remove('navbar-show');
            navNavigation.classList.remove('toggle-switch');
}

navlink.forEach(n => n.addEventListener('click', linkAction));