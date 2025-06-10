 function bitwise(){
     var a3 = parseFloat(document.getElementById("a3").value); 
     var b3 = parseFloat(document.getElementById("b3").value);
     var linebreak = "<br />"; 
document.write("(a &  b) => "); 
result = (a3 & b3); 
document.write(result); 
document.write(linebreak);
document.write("(a | b) => "); 
result = (a3 | b3); 
document.write(result); 
document.write(linebreak); 
 
document.write("(a ^ b) => "); 
result = (a3 ^ b3); 
document.write(result); 
document.write(linebreak); 
 
document.write("(~b) => "); 
result = (~b3); 
document.write(result); 
document.write(linebreak); 
 
document.write("(a << b) => "); 
result = (a3 << b3); 
document.write(result); 
document.write(linebreak); 
 
document.write("(a >> b) => "); 
result = (a3 >> b3); 
document.write(result); 
document.write(linebreak); 
document.write("<br><a href='#' onclick='location.reload()'>atrás</a>");
            }