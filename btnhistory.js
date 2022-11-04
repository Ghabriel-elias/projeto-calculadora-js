export {botHistorico, voltar}

import { consultar } from "./btnCalculation.js"
import { copy } from "./btntheme.js"

const voltar = document.createElement('button')

const div = document.getElementById('input')
const botHistorico = document.getElementById('historico')
const divBtn = document.getElementById('btn-theme')
const body = document.getElementById('mainBtn')
const span = document.getElementById("span")
const divall = document.getElementById('tudo')
const btnApagar = document.getElementById('btnApagar')

botHistorico.addEventListener('click', function(){

  divall.remove()
  span.removeChild(btnApagar)

  const Input = document.createElement('textarea')
  Input.disabled = 'on'
  Input.id = 'inputHistoric'
  Input.value = consultar
  div.appendChild(Input)

  botHistorico.remove()
  
  voltar.innerText = 'Voltar para a calculadora'
  voltar.className = 'buttonTheme'
  divBtn.appendChild(voltar)

   voltar.addEventListener('click', function(){
    Input.remove()
    copy.remove()
    body.append(divall, copy)
    voltar.remove()
    divBtn.appendChild(botHistorico)
    span.appendChild(btnApagar)
  })
})