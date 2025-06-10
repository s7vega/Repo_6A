function manejar(){
var age = parseFloat(document.getElementById("age").value);
if( age > 18 ) {
   document.write("<b>Puede manejar</b>"); 
    document.write("<br><a href='#' onclick='location.reload()'>atrás</a>");
}
}
