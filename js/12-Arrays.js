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