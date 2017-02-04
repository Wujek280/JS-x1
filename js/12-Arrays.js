'use strict';

var imiona = ['Monia', 'Jula', 'Seba'];

   imiona[3] = 'Stian';

   imiona.push('Geralt');  // dodaje na koncu 
   imiona.shift('Robert'); // usuwa el. pierwszy i zwraca mozna wyswietlic consol.logiem

//   imiona.pop(); // usuwa ostatni element 


console.log(imiona)

for (var i=0; i<imiona.length; i++) console.log(imiona[i])