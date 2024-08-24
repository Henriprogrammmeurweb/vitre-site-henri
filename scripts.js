window.addEventListener('scroll', function(){
    const nav = document.querySelector('header nav');
    nav.classList.toggle("sticky", window.scrollY > 0 );
});

function toggleMenu(){
    const navbar = document.querySelector('nav');
    navbar.classList.toggle('active');
}

(function toggle_menu(){

    const body = document.querySelector('body');
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', ()=>{
        burger.classList.toggle('open');

        if (burger.classList.contains('open')){
            body.classList.add('non-scroll');
            menu.classList.add('active');
        }else{
            body.classList.remove('non-scroll');
            menu.classList.remove('active');
        };
    });
})();