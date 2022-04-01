const taxa = document.getElementById("inputTaxa")
const dolar = document.getElementById("ïnputDolar")
const real = document.getElementById("inputReal")
const buttonIn = document.getElementById("btInsere")
const buttonDelete = document.getElementById("btDelete")

buttonIn.disable = true;
buttonDelete.disable = true; 

function converterRD() {//convertendo de real para dólar
  let dolar = 0;
  if(taxa.value === '') {//se for vazio
    return alert('Por vafor, inserir taxa de conversão.')
  }
  dolar = real.value * taxa.value;
  console.log(dolar);
  alert('$'+dolar);
}

function converterDR() {//convertendo de dólar para real 
  let real = 0;

  if(taxa.value === '') {//se for vazio
    return alert('Por vafor, inserir taxa de conversão.')
  }
  real = dolar.value / taxa.value;
  console.log(real);
  alert('$R'+real);
}

