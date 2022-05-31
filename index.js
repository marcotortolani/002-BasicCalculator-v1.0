
let numeroString="";
let signoFuncionArit="";

let primerNum = 0;
let segundoNum=0;
let resultadoNum;
let flagResultado = 0;
let flagDigitos = 0;


// es llamada al clickear el switch, selecciona entre un modo u otro
function switchDarkMode(checkBox){
    if(checkBox.checked){
        //activar Modo Claro / activate Light Mode
        document.documentElement.style.setProperty('--backgroundVentana', 'rgb(216, 216, 216)');
        document.documentElement.style.setProperty('--backgroundCalc', 'rgb(230, 230, 230)');        
        document.documentElement.style.setProperty('--colorPantalla', 'rgb(250, 250, 250)');
        document.documentElement.style.setProperty('--colorBotones', 'rgb(210, 210, 210)');
        document.documentElement.style.setProperty('--colorFuente', 'rgb(55, 84, 98)');
        document.documentElement.style.setProperty('--colorFuenteBotonesModo', 'rgb(78, 171, 171)');
        document.documentElement.style.setProperty('--colorFuenteBotonesArit', 'rgb(235, 22, 22)');        
            
    } else {
        //activar Modo Oscuro / activate Dark Mode
        document.documentElement.style.setProperty('--backgroundVentana', 'rgb(39, 37, 39)');
        document.documentElement.style.setProperty('--backgroundCalc', 'rgb(32, 32, 32)');
        document.documentElement.style.setProperty('--colorPantalla', 'rgb(13, 13, 13)');
        document.documentElement.style.setProperty('--colorBotones', 'rgb(65, 68, 70)');
        document.documentElement.style.setProperty('--colorFuente', 'rgb(193, 217, 237)');
        document.documentElement.style.setProperty('--colorFuenteBotonesModo', 'rgb(40, 171, 171)');
        document.documentElement.style.setProperty('--colorFuenteBotonesArit', 'rgb(247, 66, 66)');   
    }
}

// funcion para concatenar ingreso de numeros / function for concatenate input of numbers
function concatNum(input){
    
    if (flagResultado===1){     // si se presiono el boton "=", borra la pantalla / if the "=" botton was pressed, it erases the display
        document.querySelector("h3").innerText = "";
        document.querySelector("h5").innerText = "";
    }
    numeroString = numeroString.concat ((input.value).toString());
    flagResultado = 0;

    if ((flagDigitos === 0)){
        document.querySelector("h5").innerText = document.querySelector("h5").innerText.concat (input.value);
        console.log("lala");
    } else {
        document.querySelector("h5").innerText = document.querySelector("h5").innerText.concat(" ", input.value);   // agrega un espacio en blanco despues del signo / it adds a blank space after of the sign (+,-,x,/)
        flagDigitos = 0;   
    }  
}

// guarda el primer numero ingresado en una variable y agrega el signo en la concatenacion
function funcionArit(signo){
    primerNum = parseFloat(numeroString);
    numeroString ="";
    signoFuncionArit = signo.value;
    document.querySelector("h5").innerText = document.querySelector("h5").innerText.concat(' ' , signoFuncionArit.toString());
    flagDigitos = 1;
}

// guarda el segundo resultado, resuelve la ecuacion segun el signo ingresado y muestra el resultado total en h3
function resultado(){
    segundoNum = parseFloat(numeroString);
    numeroString = "";
    flagResultado = 1 ;
    
   
    switch (signoFuncionArit) {
        case "+":
            resultadoNum = primerNum + segundoNum;
            break;
        case "-":
            resultadoNum = primerNum - segundoNum;
            break;
        case "x":
            resultadoNum = primerNum * segundoNum;
            break;
        case "/":
            resultadoNum = primerNum / segundoNum;
            break;
    }

    document.querySelector("h3").innerText = resultadoNum.toString();
    primerNum=0;
    segundoNum=0;

}

// borra e inicializa todas las variables / delete and inicializate all the variables
function borraTodo(){
    primerNum = 0;
    segundoNum = 0;
    numeroString = "";
    flagDigitos = 0;
    document.querySelector("h3").innerText = "";
    document.querySelector("h5").innerText = "";

}


function funny (){
    document.querySelector("h3").innerText = "Bazinga!";
    document.querySelector("h5").innerText = "Try again";

    setTimeout(() => {
        document.querySelector("h3").innerText = "";
        document.querySelector("h5").innerText = "";
    }, 1000);
    primerNum=0;
    segundoNum=0;

}
