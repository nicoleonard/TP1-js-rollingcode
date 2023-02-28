const cadena = prompt("ingrese una cadena de caracteres");

document.write("<p>");
for(let i=0; i<cadena.length ;i++){
    switch(cadena.charAt(i).toLowerCase()){
        case "a":   document.write("a");
        break;

        case "e":   document.write("e");
        break;

        case "i":   document.write("i");
        break;

        case "o":   document.write("o");
        break;

        case "u":   document.write("u");
        break;

        default:         
        break;
    }
}
document.write("</p>");

