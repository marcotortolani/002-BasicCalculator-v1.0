

const espSubTitle = document.querySelector('.esp-subtitle');
const espText = document.querySelector('.esp-text');
const espButton = document.querySelector('.esp-contact');

const engSubTitle = document.querySelector('.eng-subtitle');
const engText = document.querySelector('.eng-text');
const engButton = document.querySelector('.eng-contact');



 function langSwitch(checkBox){
     if (checkBox.checked){
        espSubTitle.style.setProperty('display', 'none');
        espText.style.setProperty('display', 'none');
        espButton.classList.toggle('hidden');

        engSubTitle.style.setProperty('display', 'flex');
        engText.style.setProperty('display', 'flex');
        engButton.classList.toggle('hidden');
               
     }else{
        espSubTitle.style.setProperty('display', 'flex');
        espText.style.setProperty('display', 'flex');
        espButton.classList.toggle('hidden');
        
        engSubTitle.style.setProperty('display', 'none');
        engText.style.setProperty('display', 'none');
        engButton.classList.toggle('hidden');
     }
 }