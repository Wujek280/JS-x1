'use strict';

/*var kaja = {
   imie: "Kaja",
   wzrost: 152,
   przedstawOsobe: function() {console.log("Jestem "+ this.imie)}
}

var krystian = {
   imie: "Krystian",
   wzrost: 168,
   przedstawOsobe: function() {console.log("Jestem "+ this.imie)}
}


console.log(kaja.wzrost+" cm")

kaja.przedstawOsobe();
krystian.przedstawOsobe();*/

/*-------CLASS--------------*/

function Osoba(imie, nazwisko) {
   this.imie = imie;
   this.nazwisko = nazwisko;
   this.wzrost = null;
   this.oczy;
   this.wyswietlInfo = function() {
      console.log(   "/*---------------*/ \n"+
                     "Imię: " +this.imie+ "\n"+
                     "Nazwisko: " +this.nazwisko+ "\n"+
                     "Wzrost: " +this.wzrost+ "\n"+
                     "Oczy: " +this.oczy+
                     "\n/*---------------*/ ")
   }
}

/*-------------------------*/

var krystian = new Osoba('Krystian', 'Dziopa');
krystian.wyswietlInfo();

var prezydent = new Osoba('Andrzej', 'Duda');
prezydent.wyswietlInfo();

