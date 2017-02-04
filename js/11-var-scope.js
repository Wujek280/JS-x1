'use strict';


var iloscKasyMichala = 3500;
var iloscKasyKaji = 7500;
var iloscKasyMateucza = 4500;


var a = 3500;
var b = 7500;
var c = 5000;

var sumaKasy = a + b + c ;

//we funkcjach uzywaj ziennych lokalnych
// W ZADNYM WYPADKU NIE STOSOWAC

function policzHajs(a, b, c, wiek) {
   var sumaKasy;
   sumaKasy = a + b + c ;
   var osoba = [sumaKasy, wiek];
   return osoba;
   
}


console.log("OSOBA", policzHajs(200, 400, sumaKasy, 25))