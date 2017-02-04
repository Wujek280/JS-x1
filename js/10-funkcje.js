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
      console.log(parameter);
   }else{ 
      document.write(parameter);
   }
   
}

/* ----------------------- */
writeMe( multiply3(a,b,c) )
/* ----------------------- */



