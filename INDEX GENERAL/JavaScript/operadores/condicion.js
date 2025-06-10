function condicion(){
     var a5 = parseFloat(document.getElementById("a5").value); 
     var b5 = parseFloat(document.getElementById("b5").value);
     var linebreak = "<br />"; 
     document.write ("((a > b) ? 100 : 200) => "); 
result = (a5 > b5) ? 100 : 200; 
document.write(result); 
document.write(linebreak); 
document.write ("((a < b) ? 100 : 200) => "); 
 result = (a5 < b5) ? 100 : 200; 
document.write(result); 
document.write(linebreak); 
     document.write("<br><a href='#' onclick='location.reload()'>atrás</a>");
}