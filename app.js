// Dibuja una línea horizontal de 4 "X" sin funcion
let xhorizontal = "";
for (let i = 0; i < 4; i++) {
    xhorizontal += "X ";  
}
console.log(xhorizontal);  

// Dibuja una línea vertical de 4 "X" sin funcion
let xvertical = "";
for (let i = 0; i < 4; i++) {
    xvertical += "\nX ";  
}
console.log(xvertical);

// Dibuja una línea vertical de 4 "X" sin funcion
function vertical() {
    let cadena = "";
    for (let i = 1; i <= 4; i++) {
        cadena += "X "; 
    }
    console.log(cadena);
}
vertical();  

// Dibuja una línea horizontal de 4 "X" con funcion
function horizontal() {
    let cadena = "";
    for (let i = 1; i <= 4; i++) {
        cadena += "\nX"; 
    }
    console.log(cadena);
}
horizontal();  


function tablas() {
    let fila = "";  
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            fila += `${i} x ${j} = ${i * j}\n`;  
        }  
    }
    console.log(fila);
}
tablas();


function listarFrutas() {
    let frutas = ["Piña", "Cereza", "Lima", "Mandarina", "Ciruela", "Mora", "Guayaba", "Frambuesa", "Higo", "Granada", "Pera"];
    frutas.push(frutas.shift());  
    let cont = 0;
    frutas.forEach(fruta => {
        console.log(++cont + ", " + fruta);
    });
}

listarFrutas();  
  
   
