let button = document.getElementById('generateButton');
let numberDiv = document.getElementById('number');

button.addEventListener('click', () => {
  fetch('http://localhost:3000/') 
    .then(response => response.text()) 
    .then(data => {
      numberDiv.innerText = `El número es: ${data}`; 
    })
    .catch(error => {
      console.error('Error al obtener el número:', error);
      numberDiv.innerText = '¡Hubo un error al obtener el número!'; 
    });
});
