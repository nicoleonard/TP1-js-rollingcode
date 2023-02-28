
const numeros= [];
for (let i=0; i<3;i++){
    numeros[i]= parseInt(prompt("ingrese un numero para la comparacion"));
}

numeros.sort();
document.write(numeros[2]);
