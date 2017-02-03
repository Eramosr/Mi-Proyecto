// Elementos
const nameInput = document.getElementById('name');
const mailInput = document.getElementById('mail');
const introParticipant = document.getElementById('intro');
const encabezado= document.querySelector ('header');
const infoPlayers= document.getElementById ('memberForm');
const listaNames= document.getElementById('memberName');
const listaMails= document.getElementById('memberMail');
const year= document.createElement ('h2');
const errorMessage= document.getElementById('errorMessage');
var playersName= document.getElementsByClassName('name__item');
var playersMail= document.getElementsByClassName('mail__item');

const finPlayers= document.getElementById ('fin');
const mailshow= document.getElementById ('show');

// Eventos

introParticipant.addEventListener('click', add);
finPlayers.addEventListener ('click', finishPlayers);




// Fecha
var fecha = new Date();
year.innerHTML= fecha.getFullYear();
encabezado.appendChild(year);


// Constructores
function participante(nombre, correo) {
  this.nombre = nombre;
  this.correo = correo;
};


// Funciones
function clearInputs() {
  nameInput.value ='';
  mailInput.value ='';
}

function showErrorMessage() {
  errorMessage.removeAttribute('hidden');
}

function removeErrorMessage() {
  errorMessage.setAttribute('hidden', '');
}

function createNameElement(name) {
  var playerName = document.createElement('tr');
  playerName.className = 'name__item';
  playerName.innerHTML = name;
  listaNames.appendChild(playerName);

}

function createMailElement(mail) {
  var playerMail = document.createElement('tr');
  playerMail.className = 'mail__item';
  playerMail.innerHTML = mail;
  listaMails.appendChild(playerMail);
}

function checkMail (mail){
  for (let i=0; i<playersMail.length; i++) {
    if (playersMail[i].textContent.includes('@')== false) {
      alert ('¡Mail no valido!');
      listaMails.removeChild(playersMail[i]);
      
    }
  }
}

function finishPlayers(){
  infoPlayers.setAttribute('hidden', '');
}



function add() {
  const nombre = nameInput.value;
  const correo = mailInput.value;
  var miembro = new participante(nombre, correo);

      if (Boolean(miembro.nombre)) {
        createNameElement(miembro.nombre);
        createMailElement(miembro.correo);
        for (let i=0; i<playersName.length-1; i++) {
          if (playersName[i].textContent==nameInput.value) {
            alert ('¡Nombre repetido!');
            listaNames.removeChild(playersName[i]);
            listaMails.removeChild(playersMail[i]);
            }

          };
        clearInputs();
        removeErrorMessage();
        checkMail(miembro.correo);
        }
        else {
        showErrorMessage();
      }
    }
