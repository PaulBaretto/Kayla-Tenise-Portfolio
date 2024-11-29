
import {get_url_data} from './function.js';



const thebody = document.querySelector('body');

// Custom cursor START
const cursor = document.querySelector('.custom_cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
}); 

let all_link_tag = document.querySelectorAll('a');

all_link_tag.forEach(el => {
    el.addEventListener('mouseover', () => {
        cursor.classList.add("expand");
    })
    el.addEventListener('mouseout', () => {
        cursor.classList.remove("expand");
    })
})
// Custom cursor END

$('.home_carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2,
            loop:true
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})




// console.log(get_url_data('p'))
let for_query_main = document.querySelector('main');
let each_section = document.querySelectorAll('.each_sections');
let nav_wrap = document.querySelector('.the_navbar')
let nav_bar = document.querySelectorAll('.the_navbar .nav_item')

if(get_url_data('p') === 'about'){
    document.querySelector('title').innerHTML = 'Kayla Tenise Brooks | About'
    each_section.forEach(el => {
        el.classList.remove('active_section')
    })
    nav_bar.forEach(el => {
        el.classList.remove('active')
        console.log(el)
    })
    thebody.classList.add('ActiveAbout');
    for_query_main.childNodes[3].classList.add('active_section')
    console.log(nav_wrap.childNodes[3].classList.add('active'))

}else if(get_url_data('p') === 'work'){
    document.querySelector('title').innerHTML = 'Kayla Tenise Brooks | Work'
    each_section.forEach(el => {
        el.classList.remove('active_section')
    })
    nav_bar.forEach(el => {
        el.classList.remove('active')
    })
    thebody.classList.add('ActiveWork');
    for_query_main.childNodes[5].classList.add('active_section')
    console.log(nav_wrap.childNodes[5].classList.add('active'))
    
}else{
    document.querySelector('title').innerHTML = 'Kayla Tenise Brooks | Home'
}



