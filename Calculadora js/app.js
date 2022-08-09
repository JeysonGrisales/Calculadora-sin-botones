const notaone = document.getElementById("nota1");
const notatwo = document.getElementById("nota2");
const operacion = document.getElementById("operacion");

const operacion2 = document.getElementById("operacion2");


operacion.addEventListener("keyup", (event) =>{
    let signo = event.target.value;
    let data = Number(nota1.value)
    let data1 = Number(nota2.value)
    if(signo == "+"){
        operacion2.textContent = "la solucion de la suma es: " + (data + data1);
    }else if (signo == "-"){
        operacion2.textContent = "la solucion de la resta es: " + (data - data1);
    }else if (signo == "*") {
        operacion2.textContent = "la solucion de la multiplicación es: " + (data * data1);
    }else if (signo == "/"){
        operacion2.textContent = "la solucion de la division es: " + (data / data1).toFixed(2);
    }else if(signo == "%"){
        operacion2.textContent = "El resultado del modulo es: " + (data % data1).toFixed(0);
    }

    console.log(signo);
});
