/*
let menu = document.getElementById('menu'),
    menuLinks = (...menu.querySelectorAll('a')),
    menuItems = (...menu.querySelectorAll('li'));

console.dir(menuItems[4].classList.toggle('active'));
console.dir(menuItems[4]);
console.dir(menuItems[4].children[1]);
console.dir(typeof menuItems);
console.dir(menuItems);

//Spread operator

*/


let menu = document.getElementById('menu');
let menuLinks = [].slice.call( menu.querySelectorAll('a'));
let menuItems  = [].slice.call(menu.querySelectorAll('li'));
/*
let menuLinks = Array.from(menu.querySelectorAll('a'));
let menuItems  = Array.from(menu.querySelectorAll('li'));
*/
/*
*/
console.log(typeof menuItems);
console.log(menuItems);