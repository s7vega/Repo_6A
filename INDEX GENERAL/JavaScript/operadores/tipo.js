function tipo(){
    var a6 = document.getElementById("a6").value; 
    var b6 = document.getElementById("b6").value; 
    var linebreak = "<br />"; 
result = (typeof b6 == "string" ? "B es texto" : "B es un número"); 
document.write("Result => "); 
document.write(result); 
document.write(linebreak); 
result = (typeof a6 == "string" ? "A es texto" : "A es un número"); 
document.write("Result => "); 
document.write(result); 
document.write(linebreak);
document.write("<br><a href='#' onclick='location.reload()'>atrás</a>");
}