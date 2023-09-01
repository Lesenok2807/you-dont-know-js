'use strict';

// Задание 1
const book = document.querySelectorAll('.book');
book[0].before(book[1]);
book[2].before(book[4]);
book[5].after(book[2]);

console.log(book);

// Задание 2
const body = document.querySelector('body');
body.style.backgroundImage = '';
body.style.backgroundImage = 'URL(./image/you-dont-know-js.jpg)';

// Задание 3
const title = document.querySelectorAll('h2 > a')[2];
title.innerHTML = 'Книга 3. this и <strong> Прототипы </strong> Объектов';
title.querySelector('strong').style.fontWeight = "900";

//Задание 4
const adv = document.querySelector('.adv');
adv.remove();

// Задание 5
const list = document.querySelectorAll('ul');
const link2 = list[1].querySelectorAll('li');
const link5 = list[4].querySelectorAll('li');

link2[9].after(link2[2]);
link2[9].before(link2[7]);
link2[3].after(link2[6]);
link2[6].after(link2[8]);

link5[1].after(link5[9]);
link5[9].after(link5[3]);
link5[3].after(link5[4]);
link5[8].before(link5[5]);


// Задание 6
const link6 = list[5].querySelectorAll('li');
const cloneElem = link6[7].cloneNode(true);

cloneElem.textContent = 'Глава 8: За пределами ES6';
link6[8].after(cloneElem);
