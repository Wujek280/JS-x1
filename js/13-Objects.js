'use strict';

var kaja = {
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
krystian.przedstawOsobe();