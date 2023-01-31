// Variables
const screen1 = document.querySelector('.container1')
const screen2 = document.querySelector('.container2')

const Cookie = document.querySelector('.container1 .img')
const returnButton = document.querySelector('.container2 .btn')

const message = document.querySelector('.container2 .message')

const messages = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'Nada vem do nada.',
  'Sejamos diferentes, pois as festas são temporárias, já a glória de Jerusalém é eterna.',
  'Não ganhe o mundo e perca sua alma; sabedoria é melhor que prata e ouro.',
  'Não viva para que a sua presença seja notada, mas para que a sua falta seja sentida.',
  'Todos caem mas apenas os fracos continuam no chão.'
]

// Callback functions
function changeScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')

  if (screen1.classList.contains('hide')) {
    messageGiveway()
  }
}

function messageGiveway() {
  let randomNumber = Math.round(Math.random() * 5)

  message.innerHTML = messages[Number(randomNumber)]

  console.log(randomNumber)
}

// Events
Cookie.addEventListener('click', changeScreen)
returnButton.addEventListener('click', changeScreen)