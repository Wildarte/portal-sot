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

//=============================== menu mobile ======================================
const menu_itens = document.querySelectorAll('nav.menu > ul > li.has-submenu');
const sub_menu = document.querySelectorAll('nav.menu > ul > li.has-submenu > ul.sub-menu');

menu_itens.forEach((item, index) => {

    item.addEventListener('click', (e) => {

        e.preventDefault();

        if(sub_menu[index].classList.contains('open_submenu')){
            sub_menu[index].classList.remove('open_submenu')
        }else{
            sub_menu.forEach((item2) => {
                item2.classList.remove('open_submenu');
            });
    
            sub_menu[index].classList.add('open_submenu')
        }

        

    });

});
//=============================== menu mobile ======================================