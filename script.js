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
    

    let pAlertaNombre = null;
    let pAlertaEmail = null;

    nombreInput.addEventListener('input', function () {
        validacionName()
    });

    EmailInput.addEventListener('input', function () {
        validacionEmail()
    });

    function validacionName() {
        if (nombreInput.value === "") {
            if (!pAlertaNombre) {
                pAlertaNombre = document.createElement('p');
                pAlertaNombre.textContent = 'Ingresá un nombre!';
                pAlertaNombre.style.color = 'white';
                pAlertaNombre.style.fontFamily = "Inter,sans-serif";
                pAlertaNombre.style.fontSize = "small";
                pAlertaNombre.style.marginLeft = "1px";
                pAlertaNombre.style.marginBottom = "5px";
                divname.appendChild(pAlertaNombre);
            }
        } else {
            if (pAlertaNombre) {
                divname.removeChild(pAlertaNombre);
                pAlertaNombre = null;
            }
        }
    }

    function validacionEmail() {
        if (EmailInput.value === "") {
            if (!pAlertaEmail) {
                pAlertaEmail = document.createElement('p');
                pAlertaEmail.textContent = 'Ingresá un email!';
                pAlertaEmail.style.color = 'white';
                pAlertaEmail.style.fontFamily = "Inter,sans-serif";
                pAlertaEmail.style.fontSize = "small";
                pAlertaEmail.style.marginLeft = "40px";
                divemail.appendChild(pAlertaEmail);
            }
        } else {
            if (pAlertaEmail) {
                divemail.removeChild(pAlertaEmail);
                pAlertaEmail = null;
            }
        }
    }

    botoncito.addEventListener('click', function () {
        validacionName();
        validacionEmail();
        if (nombreInput.value !== "" && EmailInput.value !== "") {
            localStorage.setItem('name', nombreInput.value);
            localStorage.setItem('email', EmailInput.value);
            window.location.href = 'index2.html';
        }
    });


    radio2.addEventListener('click', function () {
        validacionName();
        validacionEmail();
        if (nombreInput.value != "" && EmailInput.value !="") {
            window.location.href = 'index2.html'
        }
    });


});
