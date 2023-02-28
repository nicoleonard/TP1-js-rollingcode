let numero1= parseInt(prompt("ingrese un numero para la comparacion"));
let numero2=parseInt(prompt("ingrese otro numero para la comparacion"));


if(numero1>numero2){
    document.write(numero1+" Es el mayor");
}else if(numero1==numero2){
    document.write("los numeros son iguales");
}else{
    document.write(numero2+" Es el mayor");
}
