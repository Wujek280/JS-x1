'use strict';

//var liczba1 = 10;
//var liczba2 = 25.11;
//var wynik;
//
//
//
//function dodajLiczby(a, b) {
//   return a+b;
//}
//
//wynik = dodajLiczby(liczba1, liczba2);
//
//console.log(wynik)

var a=2;
var b=-3;
var c=4.01;

function multiply3(a, b, c) {
   return a*b*c;   
}

function writeMe(parameter){
   
   if (parameter >= 0) {
      console.log(parameter.toFixed(2));
   }else{ 
      document.write(parameter.toFixed(2));
      document.write('<br>');
   }
   
}

multiply3(a,b,c)

for (var test = -5.849458; test<10; test++){
   writeMe(test);
}


