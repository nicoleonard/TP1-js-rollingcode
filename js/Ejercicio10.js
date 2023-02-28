const numero = parseInt(prompt("ingrese un numero para verificar su divisibilidad"));

if(numero%2==0 || numero%3==0 || numero%5==0 || numero%7==0){
    document.write("<p>El numero es divisible en 2, 3, 5 o 7</p>");
}else{
    document.write("<p>El numero no es divisible en 2, 3, 5 o 7</p>");
}
