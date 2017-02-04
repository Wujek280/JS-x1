'use strict';

var imiona = ['Monia', 'Jula', 'Seba'];

   imiona[3] = 'Stian';

   imiona.push('Geralt');  // dodaje na koncu 
   imiona.shift('Robert'); // usuwa el. pierwszy i zwraca mozna wyswietlic consol.logiem

//   imiona.pop(); // usuwa ostatni element 


for (var i=imiona.length-1; i>=0 ; i--) console.log(imiona[i])

imiona.forEach( function (element, i) {
   console.log('Element nr. ' + (i+1) + ' = ' + element);
});


console.log(imiona.join(" - ")); // dodaje string miedzy elementami
console.log( imiona.sort() ); // nie soruje polskich znakow 
console.log( imiona.reverse() ); // nie soruje polskich znakow 

var imionaMeskie = [ ' Marcin ', 'Jakub', 'Krystian'];
var zbiorImion;

zbiorImion=imiona.concat(imionaMeskie);
console.log(zbiorImion)
   

console.log(zbiorImion.indexOf('Jakub'));

console.log(Array.isArray(zbiorImion))
console.log(Array.isArray(3.0))

console.log(zbiorImion.slice(2,4))

console.log(zbiorImion.toString())





