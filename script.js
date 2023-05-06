const btn = document.querySelector('button')
const container = document.querySelector('.container')
const message = document.querySelector('.message')
const player1 = document.querySelector('.dice1')
const player2 = document.querySelector('.dice2')
btn.addEventListener('click', () => {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1
  //html entity decimal &#9856;
  const num1 = 9855 + randomNumber1
  const char1 = '&#' + num1 + ';'

  player1.innerHTML = '<p class="char">' + char1 + '</p>'
  // console.log('1:::' + randomNumber1)
  const randomNumber2 = Math.floor(Math.random() * 6) + 1
  // console.log('2:::' + randomNumber2)
  //html entity decimal &#9856;
  const num2 = 9855 + randomNumber2
  const char2 = '&#' + num2 + ';'

  player2.innerHTML = '<p class="char">' + char2 + '</p>'

  if (randomNumber1 === randomNumber2) {
    message.innerHTML = `<p>🔥 It was Draw! 🔥</p>`
    container.classList.add('mystyle')
    message.classList.add('animate__shakeX')
  } else {
    if (randomNumber1 > randomNumber2) {
      message.innerHTML = ` <p>🎖️🏆  Player-1 Win!  🎖️🏆</p>`
      container.classList.remove('mystyle')
      message.classList.remove('animate__shakeX')
    } else {
      message.innerHTML = `<p>🎖️🏆  Player-2 Win!  🎖️🏆</p>`
      container.classList.remove('mystyle')
      message.classList.remove('animate__shakeX')
    }
  }
})
