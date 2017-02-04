'use strict';
/*

Petla FOR

*/

//for (var i=-4; i<=10; i++) console.log(i+" ");


/*

Petla WHILE

*/

//var it = 0;
//
//while( it<9 ) {
//   console.log(it); 
//   it++;
//}

/*

Petla DO WHILE
//
//*/
//
//var iter = 11;
//
//do { console.log(iter) }
//while (iter < 10)
//
//////Post vs preinkrememntacja
// console.log("PREINKREMENTACJA");
// for (var i=-4; i<=10; ) console.log(++i);
//
// console.log("POSTINKREMENTACJA");
// for (var i=-4; i<=10; ) console.log(i++);
//
//// -------------------------

console.log("Przerywanie petli w łajlu");
var a = 0;

   while( a<=9 ) {   
      
      if(a == 5) {a++; continue;}
      else console.log(a++);
      
   }

console.log("Przerywanie petli w forze");

   for (var b=0; b<=9; b++){

      console.log(b);   
      if (b == 5) {continue}

   }
