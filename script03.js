const buttonIn = document.getElementById("btIncrement")
const buttonDelete = document.getElementById("btZerar")

buttonIn.disable = true; 
buttonDelete.disable = true; 

var cont = 0;
function incrementar () {
  alert(++cont)
}

function zerar () {
alert('Contador = '+cont)
}

