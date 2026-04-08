

console.log('hello');

let main = document.querySelector('main')

let my_form=document.createElement('form');
let my_inp=document.createElement('input');
let my_label=document.createElement('label');
let my_submit=document.createElement('button');

my_submit.type='submit';
my_submit.textContent='submit';
my_form.method='POST';



main.appendChild(my_form);
// my_form.appendChild(my_label);
// my_form.appendChild(my_inp);
my_form.appendChild(my_submit);


