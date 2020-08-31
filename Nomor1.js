var p = 20.5;
var l = 30;

var hargaTanah = p * l * 1500000;
var pajak = hargaTanah * (15/100);
var total = hargaTanah + pajak;

console.log("Panjang Tanah  : 20.5 meter");
console.log("Lebar Tanah    : 30 meter");
console.log("Harga Tanah /m : Rp.1.500.000");
console.log("Harga Tanah    : Rp." + hargaTanah);
console.log("Harga Pajak    : Rp." + pajak);
console.log("Total          : Rp." + total);