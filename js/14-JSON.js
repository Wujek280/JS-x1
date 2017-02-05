'use strict';

{

  var jsonCars = {
   "samochody":
      [
         {marka: "Peugeot 206", moc: 120, pojemnosc: 1.2},
         {marka: "Tesla Roadster", moc: 300, pojemnosc: 0},
         {marka: "BMW M3", moc: 360, pojemnosc: 4},
         {marka: "Trabant", moc: 89, pojemnosc: 1.7}
      ]
      
  }
}


   
      jsonCars.samochody.forEach (function(samochod){
            console.log(
               "Marka: "+ samochod.marka +"\n"+
               "  Moc: "+ samochod.moc.toFixed(0) +"\n"+
               "  Poj: "+ samochod.pojemnosc.toFixed(1) +"\n" 
                       );
            
         }
      )
