


//console.log(document.documentElement.style.setProperty(".english", "flex"));

const espTitle = document.querySelector('.espTitle');
const espSubTitle = document.querySelector('.espSubTitle');
const espText = document.querySelector('.espText');


const engTitle = document.querySelector('.engTitle');
const engSubTitle = document.querySelector('.engSubTitle');
const engText = document.querySelector('.engText');



// console.log(document.querySelector('.english'));
// console.log(subTitleEnglish.toggleAttribute("hidden", ""));
// console.log(document.querySelector('.espaniol'));
// console.log(subTitleEspaniol.toggleAttribute("hidden", "true"));




 function langSwitch(checkBox){
     if (checkBox.checked){
        espTitle.style.setProperty('display', 'none');
        espSubTitle.style.setProperty('display', 'none');
        espText.style.setProperty('display', 'none');

        engTitle.style.setProperty('display', 'flex');
        engSubTitle.style.setProperty('display', 'flex');
        engText.style.setProperty('display', 'flex');
        


         //document.english.style.setProperty(".english", "flex");
         //document.boxEnglish.style.setProperty("background-color", '#5ff325');
         //boxEnglish.style.setProperty("display", "flex");
         //subTitleEnglish.toggleAttribute("hidden", "");
         //subTitleEspaniol.toggleAttribute("hidden", "true");
         


         

         //boxEnglish.innerHTML.setProperty("hidden", "false");
         
     }else{
        espTitle.style.setProperty('display', 'flex');
        espSubTitle.style.setProperty('display', 'flex');
        espText.style.setProperty('display', 'flex');
        
        
        engTitle.style.setProperty('display', 'none');
        engSubTitle.style.setProperty('display', 'none');
        engText.style.setProperty('display', 'none');
        
        
        //boxEnglish.style.setProperty("background-color", "#1f0385");
         //document.documentElement.style.setProperty('.espaniol','display:flex');
         //boxEnglish.innerHTML.setProperty("hidden", "true");
         //subTitleEnglish.toggleAttribute("hidden", "true");
         //subTitleEspaniol.toggleAttribute("hidden", "");
        //  subTitleEspaniol.style.setProperty('display', 'none');
        // subTitleEnglish.style.setProperty('display', 'flex');
        

         
     }
 }