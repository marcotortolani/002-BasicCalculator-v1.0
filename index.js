

//  console.log(document.getElementById('switchDarkLight').checked);

// function switchDarkMode(checkBox){
//     if(checkBox.checked){
//             //activar DarkMode
            
//     } else {
//         //activar LightMode
//         document.getElementById('botMod').style.backgroundColor = rgb(225, 225, 225);
//         document.getElementById('botMod').style.color = rgb(193, 217, 237);
//         document.getElementById('botMod2').style.color = rgb(193, 217, 237);
//     }
//     console.log(checkBox.checked);
// }



function switchDarkMode(checkBox){
    if(checkBox.checked){
            //activar DarkMode
            document.documentElement.style.setProperty('--backgroundVentana', 'rgb(216, 216, 216)');
            document.documentElement.style.setProperty('--backgroundCalc', 'rgb(230, 230, 230)');
            document.documentElement.style.setProperty('--colorPantalla', 'rgb(250, 250, 250)');
            document.documentElement.style.setProperty('--colorBotones', 'rgb(225, 225, 225)');
            document.documentElement.style.setProperty('--colorFuente', 'rgb(55, 84, 98)');
            document.documentElement.style.setProperty('--colorFuenteBotonesModo', 'rgb(78, 171, 171)');
            document.documentElement.style.setProperty('--colorFuenteBotonesArit', 'rgb(235, 22, 22)');

            
            
    } else {
        //activar LightMode
        document.documentElement.style.setProperty('--backgroundVentana', 'rgb(39, 37, 39)');
            document.documentElement.style.setProperty('--backgroundCalc', 'rgb(32, 32, 32)');
            document.documentElement.style.setProperty('--colorPantalla', 'rgb(13, 13, 13)');
            document.documentElement.style.setProperty('--colorBotones', 'rgb(65, 68, 70)');
            document.documentElement.style.setProperty('--colorFuente', 'rgb(193, 217, 237)');
            document.documentElement.style.setProperty('--colorFuenteBotonesModo', 'rgb(40, 171, 171)');
            document.documentElement.style.setProperty('--colorFuenteBotonesArit', 'rgb(199, 20, 20)');
        
    }
    console.log(checkBox.checked);
}