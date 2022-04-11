const buttonIn = document.getElementById('btIncrement');
const buttonDelete = document.getElementById('btZerar');

buttonIn.disable = true;
buttonDelete.disable = true;

let cont = 0;
function incrementar() {
  alert(++cont);
}

function zerar() {
  cont = 0;
  alert('Contador zerado!');
}
