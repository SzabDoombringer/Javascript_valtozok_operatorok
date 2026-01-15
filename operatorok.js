console.log(5 == "5"); // true
console.log(typeof(5))
console.log(typeof("5"))

console.log(5 == "5"); // false

// logikai operátorok && (és), || (vagy), ! (name)
console.log("LOGIKAI OPERÁTOROK")
let szam = 6
console.log(szam > 5 && szam < 10) // true
console.log(szam === 5 || szam === 10) // true

//ARUMETIKAI OPERÁTOROK +, -, *, /, %, **
let z;
z=3+4; // összeadás
z=3-4; // kivonás
z=2*3; // szorzás
z=2/3; // osztás
z=3%2; // modulo
console.log(z) // modul eredménye 1
z=3**2; // hatványképzés (hatványalap**hatványkitevő)
console.log(z) //

//PRE ÉS POST INCREMENT
let x,y;
x=5;
y=++x; // preinkrement
console.log(`x=${x}, y=${y}`);

x=5;
y=x++; // posztinkrement
console.log(`x=${x}, y=${y}`);

x=5;
y=--x; // predekrement
console.log(`x=${x}, y=${y}`);

x=5;
y=x--; // posztdekrement
console.log(`x=${x}, y=${y}`);

let b = 4
let c = 10
let d = 20
let a = b > 2 ? c : d
console.log('a=' +a)

// VÁLTOZÓ HAETÓKÖRE globális, függvény 

function myFunction() {
    let valtozo = 5;
    let valtozo2 = 10;
    let valtozo3 = 15;
    return valtozo
}

console.log(myFunction())
// console.log(valtozo) a változó csak a függvényen belül létezik, függvényen kívül nem érhető el
