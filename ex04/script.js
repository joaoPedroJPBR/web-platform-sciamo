let id = 0;
let counter = [];

function createCounter() {
  const text = document.getElementById('counter-name').value;

  if (text.length == 0) {
    return alert('Digite um nome para o contador!');
  }

  document.getElementById('counter-name').value = '';

  let id = getNextId();//pega o id mais alto

  const divCounters = document.getElementById('counters'); // pega o div que contém os contadores

  const elementDiv = document.createElement('div');//cria uma nova div

  elementDiv.id = id;//id da div
  elementDiv.className = 'counter';//atribui a classe

  const p = document.createElement('p');//cria um novo p para o nome
  const p2 = document.createElement('p');// cria um novo p para o contador
  const button = document.createElement('button');//cria um novo button para zerar o contador

  p2.id = id;//atribui o id

  p.innerHTML = text;//atribui o texto do input ao p
  button.innerHTML = 'Resetar';//atribui o texto do button ao button
  counter.push(0);//adiciona o contador ao array
  p2.innerHTML = counter[id];//atribui o valor do contador ao p2

  elementDiv.onclick = function () {
    incrementCounter(p2);
  };
  button.onclick = function () {
    reset(p2);
  };

  elementDiv.appendChild(p); 
  elementDiv.appendChild(p2); 
  elementDiv.appendChild(button); 
  elementDiv.style.backgroundColor = getRandomColor(); 
  divCounters.appendChild(elementDiv);
}

function getNextId() {
  return id++;
}

function getRandomColor() {
  let color =
    '#' +
    parseInt(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0');
  return color;
}

function incrementCounter(e) {
  e.innerHTML = ++counter[e.id];
}

function reset(e) {
  counter[e.id] = -1;
  e.innerHTML = counter[e.id];
}
