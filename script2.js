document.addEventListener('DOMContentLoaded', function () {
    const nombreInput = document.getElementById('NombreInput');
    const EmailInput = document.getElementById('EmailInput');
    const botoncito = document.getElementById('Botoncito');
    const radio1 = document.getElementById('Step1');
    const radio2 = document.getElementById('Step2');
    const radio3 = document.getElementById('Step3');
    const divname = document.getElementById('name');
    const divemail = document.getElementById('Email');
    const boton1 = document.getElementById('Opcionnumero1');
    const boton2 = document.getElementById('Opcionnumero2');
    const boton3 = document.getElementById('Opcionnumero3');
    const divopciones = document.getElementById('alertaopciones');
 
    let boton1Clicked = false;
    let boton2Clicked = false;
    let boton3Clicked = false;
    let alertaOpciones = null;

    boton1.addEventListener('click', function () {
        boton1.style.backgroundColor = "#652CD1";
        boton1.style.color = "#E5E7EB";
        boton1.style.border = "1px solid #A1A1A9";
        localStorage.setItem('opcion1', 'Software Development');
        boton1Clicked = true;
    });

    boton2.addEventListener('click', function () {
        boton2.style.backgroundColor = "#652CD1";
        boton2.style.color = "#E5E7EB";
        boton2.style.border = "1px solid #A1A1A9";
        localStorage.setItem('opcion2', 'User Experience');
        boton2Clicked = true;
    });

    boton3.addEventListener('click', function () {
        boton3.style.backgroundColor = "#652CD1";
        boton3.style.color = "#E5E7EB";
        boton3.style.border = "1px solid #A1A1A9";
        localStorage.setItem('opcion3', 'Graphic Design');
        boton3Clicked = true;
    });


function ValidacionOpciones() {
    if (boton1Clicked || boton2Clicked || boton3Clicked) {
        window.location.href = 'index3.html';
    } else {
        if (!alertaOpciones) {
            alertaOpciones = document.createElement('p');
            alertaOpciones.textContent = 'Tenés que seleccionar una opción!';
            alertaOpciones.style.color = 'white';
            alertaOpciones.style.fontFamily = "Inter,sans-serif";
            alertaOpciones.style.fontSize = "small";
            alertaOpciones.style.marginLeft = "110px";
            alertaOpciones.style.marginTop = "20px";
            alertaOpciones.style.marginBottom = "5px";
            divopciones.appendChild(alertaOpciones);
        } else if (alertaOpciones) {
            divopciones.removeChild(alertaOpciones);
        }
    }


}



    botoncito.addEventListener('click', function () {
        ValidacionOpciones();
    });



  
    radio3.addEventListener('click', function () {
        ValidacionOpciones();
    });













});


