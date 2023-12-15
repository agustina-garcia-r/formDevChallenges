document.addEventListener('DOMContentLoaded', function () {
    const nombreInput = document.getElementById('NombreInput');
    const EmailInput = document.getElementById('EmailInput');
    const botoncito = document.getElementById('Botoncitop');
    const radio1 = document.getElementById('Step1');
    const radio2 = document.getElementById('Step2');
    const radio3 = document.getElementById('Step3');
    const divname = document.getElementById('name');
    const divemail = document.getElementById('Email');
    const boton1 = document.getElementById('Opcionnumero1');
    const boton2 = document.getElementById('Opcionnumero2');
    const boton3 = document.getElementById('Opcionnumero3');
const divnombre = document.getElementById('nombreguardado');
const divdelemail = document.getElementById('emailguardado');
const listita = document.getElementById('listatopics');


const nombredelstorage = document.createElement('p');
nombredelstorage.innerHTML = localStorage.getItem("name");
divnombre.appendChild(nombredelstorage);  
nombredelstorage.setAttribute('id', 'nombredelstorage');

const emaildelstorage = document.createElement('p');
emaildelstorage.innerHTML = localStorage.getItem("email");
divdelemail.appendChild(emaildelstorage);  
emaildelstorage.setAttribute('id', 'emaildelstorage');

const topic1 = document.createElement('li');
topic1.setAttribute('id', 'topic1');
const opcion1 = localStorage.getItem("opcion1");
if (opcion1) {
    topic1.innerHTML = opcion1;
    listita.appendChild(topic1);
}

const topic2 = document.createElement('li');
topic2.setAttribute('id', 'topic2');
const opcion2 = localStorage.getItem("opcion2");
if (opcion2) {
    topic2.innerHTML = opcion2;
    listita.appendChild(topic2);
}

const topic3 = document.createElement('li');
topic3.setAttribute('id', 'topic3');
const opcion3 = localStorage.getItem("opcion3");
if (opcion3) {
    topic3.innerHTML = opcion3;
    listita.appendChild(topic3);
}



    const modal = document.getElementById('myModal');
    const closeModalButton = document.getElementById('closeModal');

    botoncito.addEventListener('click', function () {
       
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function () {
       
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
  




});
});