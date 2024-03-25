const h1 = document.querySelector('h1');

console.log(Object.prototype.toString.call(h1));

console.log(h1.dataset);

const div = document.querySelector('[data-cor]');

console.log(div.dataset);

div.dataset.height = 1000;

console.log(div.dataset);