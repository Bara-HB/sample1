//Toggler bočního menu
function toggleClassName(){
    var sidebar = document.querySelector('.sidebar');
    var wrapper = document.querySelector('.wrapper');
    var toggle = document.querySelector('.toggle');
    sidebar.classList.toggle('active')
    wrapper.classList.toggle('active')
    toggle.classList.toggle('active')
}

// funkce zabarvení menu při scroll
window.addEventListener('scroll', function(){
    var header = this.document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0 )
}) 