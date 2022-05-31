

const espTitle = document.querySelector('.esp-title');
const espSubTitle = document.querySelector('.esp-subtitle');
const espText = document.querySelector('.esp-text');


const engTitle = document.querySelector('.eng-title');
const engSubTitle = document.querySelector('.eng-subtitle');
const engText = document.querySelector('.eng-text');



 function langSwitch(checkBox){
     if (checkBox.checked){
        espTitle.style.setProperty('display', 'none');
        espSubTitle.style.setProperty('display', 'none');
        espText.style.setProperty('display', 'none');

        engTitle.style.setProperty('display', 'flex');
        engSubTitle.style.setProperty('display', 'flex');
        engText.style.setProperty('display', 'flex');
               
     }else{
        espTitle.style.setProperty('display', 'flex');
        espSubTitle.style.setProperty('display', 'flex');
        espText.style.setProperty('display', 'flex');
        
        
        engTitle.style.setProperty('display', 'none');
        engSubTitle.style.setProperty('display', 'none');
        engText.style.setProperty('display', 'none');
        
     }
 }