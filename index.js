const objeto = {}
const copy = document.getElementById('copy')
const title = document.getElementById("title")
const calculos = document.getElementById('calculos')
let condicao = "" 
let data = "" 
let resultado = "" 
let consultar= ""

document.getElementById('dark').addEventListener('click', dark)
 
function dark(){
  document.body.style.backgroundColor = '#05041d'
  calculos.style.color = '#ffffff'
  title.style.color = '#ffffff' 
  copy.style.color = '#ffffff'
}

document.getElementById('light').addEventListener('click', light)

function light(){
  document.body.style.backgroundColor = '#99ccc8'
  calculos.style.color = '#000000'
  title.style.color = '#000000'
  copy.style.color = '#000000'
}

const tudo = document.querySelectorAll('.Btnbg').forEach(function(valor){
  valor.addEventListener('click', function(){
    error()
    calculos.value += valor.value
    data += valor.value
  })
})

const divisao = document.getElementById('divisao')

divisao.addEventListener('click', function(){
  error()
    calculos.value += divisao.dataset.divisaum;
    data += divisao.dataset.valor
})

const multi = document.getElementById('multi')

multi.addEventListener('click', function(){
  error()
  calculos.value += multi.dataset.multi
  data += multi.dataset.valor
})

const porcentagem = document.getElementById('porcentagem')

porcentagem.addEventListener('click', function(){
  error()
  condicao = "true" 
  calculos.value += porcentagem.dataset.porcent
  data += multi.dataset.valor
})

const clear = document.getElementById('clear').addEventListener('click', function(){
  calculos.value = ''
  data = ''
})

const apagar = document.getElementById('apagar').addEventListener('click', function(){
  if(calculos.value.length){
    data = calculos.value
    calculos.value = calculos.value.substr(0, calculos.value.length -1);
    data = data.substring(0, data.length - 1)
 }
})

const igual = document.getElementById('igual').addEventListener('click', function(){
  error()
  if(condicao == "true"){
    const porcent = eval(data)
    const calculoPorcent = porcent / 100
    objeto.operacao = calculos.value + " = "
    calculos.value = calculoPorcent
    objeto.resultado = calculos.value
    consultar +=  objeto.operacao + objeto.resultado + "\n"
    condicao = ""
  }else {
   objeto.operacao = calculos.value + " = "
   calculos.value = 'ERROR'
   resultado = eval(data) 
   calculos.value = resultado
   objeto.resultado = calculos.value 
   consultar +=  objeto.operacao + objeto.resultado + "\n"
   resultado = ""
  }
})

function error(){
  if(calculos.value == 'ERROR'){
    calculos.value = ''
    data = ''
  }
} 

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
  
  const voltar = document.createElement('button')
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