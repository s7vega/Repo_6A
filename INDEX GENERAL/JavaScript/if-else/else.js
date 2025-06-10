function materia(){
   var materia = document.getElementById("materia").value; 
if( materia == "historia" ){ 
   document.write("<b>materia de historia</b>"); 
}else if( materia == "matematica" ){ 
   document.write("<b>materia de matematica</b>"); 
}else if( materia == "economia" ){ 
   document.write("<b>materia de economia</b>"); 
}else { 
  document.write("<b>Materia desconocida</b>");
}
  document.write("<br><a href='#' onclick='location.reload()'>atrás</a>");
}
