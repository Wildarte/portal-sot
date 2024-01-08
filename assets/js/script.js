const btn_close_menu = document.querySelector('.btn_close_menu');
const btn_menu = document.querySelector('.btn_menu');
const bottom_header = document.querySelector('.bottom_header');
const over_background = document.querySelector('.over_background');

btn_menu.addEventListener('click', () => {

    over_background.classList.add('d-block');
    bottom_header.classList.add('open_bottom_header');

});

btn_close_menu.addEventListener('click', () => {

    over_background.classList.remove('d-block')
    bottom_header.classList.remove('open_bottom_header');

});

over_background.addEventListener('click', () => {

    over_background.classList.remove('d-block');
    bottom_header.classList.remove('open_bottom_header');

});

const btn_search = document.querySelector('.btn_search');
const over_search = document.querySelector('.over_search');

btn_search.addEventListener('click', () => {

    if(over_search.classList.contains('open_over_search')){
        over_search.classList.remove('open_over_search');
    }else{
        over_search.classList.add('open_over_search');
    }

});