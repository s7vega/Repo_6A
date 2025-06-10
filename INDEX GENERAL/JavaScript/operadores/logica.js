function verificar(){
    var a2 = parseFloat(document.getElementById("a2").value); 
     var b2 = parseFloat(document.getElementById("b2").value);
var linebreak = "<br />"; 
document.write("(a &&  b) => "); 
result = (a2 && b2); 
document.write(result); 
document.write(linebreak); 
 
document.write("(a || b) => "); 
result = (a2 || b2); 
document.write(result); 
document.write(linebreak); 
 
document.write("!(a && b) => "); 
result = (!(a2 && b2)); 
document.write(result); 
document.write(linebreak);
document.write("<br><a href='#' onclick='location.reload()'>atrás</a>");
}
