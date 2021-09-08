import menuTpl from '../templates/menu-template.hbs';
import menu from '../menu.json';

const menuList = document.querySelector('.js-menu');

menuList.innerHTML = menuTpl(menu);