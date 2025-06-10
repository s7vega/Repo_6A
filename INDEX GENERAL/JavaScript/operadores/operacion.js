 function operadores(){
     var a4 = parseFloat(document.getElementById("a4").value); 
     var b4 = parseFloat(document.getElementById("b4").value);
     var linebreak = "<br />"; 
     document.write("Value of a => (a = b) => "); 
result = (a4 = b4); 
document.write(result); 
document.write(linebreak); 
 
document.write("Value of a => (a += b) => "); 
result = (a4 += b4); 
document.write(result); 
document.write(linebreak); 
 
document.write("Value of a => (a -= b) => "); 
result = (a4 -= b4); 
document.write(result); 
document.write(linebreak); 
 
document.write("Value of a => (a *=  b) => "); 
result = (a4 *= b4); 
document.write(result); 
document.write(linebreak); 
 
document.write("Value of a => (a /= b) => "); 
result = (a4 /= b4); 
document.write(result); 
document.write(linebreak); 
 
document.write("Value of a => (a %= b) => "); 
result = (a4 %= b4); 
document.write(result); 
document.write(linebreak);
document.write("<br><a href='#' onclick='location.reload()'>atrás</a>");
    }