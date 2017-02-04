'use strict';

var wzrostMateusza = 190;
var wzrostKaji = 152;
var kolor = 'czerwony';


/*
Waruunek IF, IF ELSE
*/

if (wzrostKaji < wzrostMateusza) console.log("Kaja niższa")
else console.log("Mateusz nizszy")

if ( wzrostKaji > wzrostMateusza ) console.log("kaja jest wyzsza")
 else if ( wzrostKaji == wzrostMateusza ) console.log("są rowni")
    else console.log("mateusz jest wyższy")
    
    
/* 
Słicz
*/
    
switch(kolor) {
   case 'czerwony': console.log("Kolor jest czerwony"); break;
      
   case 'zielony': console.log("Kolor jest zielony")
   break;
      
   default: console.log("Inny kolor...");
}
