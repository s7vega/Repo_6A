     function calcular(){
     var a = parseFloat(document.getElementById("a").value); 
     var b = parseFloat(document.getElementById("b").value); 
     var c = document.getElementById("c").value; 
     var linebreak = "<br />"; 

     document.write("a + b = "); 
     result = a + b; 
     document.write(result); 
     document.write(linebreak); 
     document.write("a - b = "); 
result = a - b; 
document.write(result); 
document.write(linebreak); 
 
document.write("a / b = "); 
result = a / b; 
document.write(result); 
document.write(linebreak); 
 
document.write("a % b = "); 
result = a % b; 
document.write(result); 
document.write(linebreak); 
 
document.write("a + b + c = "); 
result = a + b + c; 
document.write(result); 
document.write(linebreak); 
 
a = a++; 
document.write("a++ = "); 
result = a++; 
document.write(result); 
document.write(linebreak); 
 
b = b--; 
document.write("b-- = "); 
result = b--; 
document.write(result); 
document.write(linebreak);
document.write("<br><a href='#' onclick='location.reload()'>atrás</a>");
     }