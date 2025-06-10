function comparar(){
     var a1 = parseFloat(document.getElementById("a1").value); 
     var b1 = parseFloat(document.getElementById("b1").value);
     var linebreak = "<br />";
     document.write("(a == b) => "); 
result = (a1 == b1); 
document.write(result); 
document.write(linebreak); 
document.write("(a < b) => "); 
result = (a1 < b1); 
document.write(result); 
document.write(linebreak); 
 
document.write("(a > b) => "); 
result = (a1 > b1); 
document.write(result); 
document.write(linebreak); 
 
document.write("(a != b) => "); 
result = (a1 != b1); 
document.write(result); 
document.write(linebreak); 
 
document.write("(a >= b) => "); 
result = (a1 >= b1); 
document.write(result); 
document.write(linebreak); 
 
document.write("(a <= b) => "); 
result = (a1 <= b1); 
document.write(result); 
document.write(linebreak);
document.write("<br><a href='#' onclick='location.reload()'>atrás</a>");
}