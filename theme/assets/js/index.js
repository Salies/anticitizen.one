/* HAMBURGER MENU */
document.querySelector('.hamburger').addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle("display");
});

/* COPYRIGHT DATE GENERATOR */
document.querySelector('.year').innerHTML = new Date().getFullYear();

hljs.initHighlightingOnLoad();