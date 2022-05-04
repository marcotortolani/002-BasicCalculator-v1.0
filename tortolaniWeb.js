


//console.log(document.documentElement.style.setProperty(".english", "flex"));

const english = document.getElementById('.english');

 function langSwitch(checkBox){
     if (checkBox.checked){
         //document.english.style.setProperty(".english", "flex");
         document.english.style.setProperty('background-color', '#5ff325');
         //document.english.style.setProperty('.english','display:none');
     }else{
         document.documentElement.style.setProperty('.espaniol','display:flex');
     }
 }