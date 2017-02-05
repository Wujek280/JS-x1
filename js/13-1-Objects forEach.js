'use strict';

function Car(marka) {
   
   this.marka = marka;
   this.pojemnosc;
   this.moc;
   this.neony=false;
   this.specs = function() {
      console.log( 
         "Marka: " +this.marka+ "\n"+
         "  Pojemność: " +this.pojemnosc.toFixed(1)+ " Ltr \n"+
         "  Moc: " +this.moc+ " KM\n"
      );
   }
}

var cars = new Array();

   var peugeot = new Car("Peugeot 206")
      peugeot.pojemnosc = 1.2;
      peugeot.moc = 89;
      peugeot.neony = true;
//      peugeot.specs();
         cars.push(peugeot);

   var bmwm3 = new Car("BMW M3")
      bmwm3.pojemnosc = 4.0;
      bmwm3.moc = 150;
//      bmwm3.specs();
         cars.push(bmwm3);


   var tesla  = new Car("Tesla Roadster")
      tesla.pojemnosc = 0.0;
      tesla.moc = 350;
//      tesla.specs();
         cars.push(tesla);

   var trabant = new Car("Trabant")
      trabant.pojemnosc = 1.7;
      trabant.moc = 120;
//      trabant.specs();
         cars.push(trabant);

cars.forEach( function(Car){
   Car.specs();
})

console.log(cars);
