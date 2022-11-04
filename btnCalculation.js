export { consultar, tudo}

let condicao = "" 
let data = "" 
let resultado = ""
let consultar = ""

const objeto = {}
const calculos = document.getElementById('calculos')

const tudo = document.querySelectorAll('.Btnbg').forEach(function(valor){
  valor.addEventListener('click', function(){
    error()
    calculos.value += valor.value
    data += valor.value
  })
})

const divisao = document.getElementById('divisao').addEventListener('click', () => {
  calculos.value += "÷"
  data += "/"
})

const multi = document.getElementById('multi').addEventListener('click',() => {
  calculos.value += "x"
  data += "*"
})

const porcentagem = document.getElementById('porcentagem')

porcentagem.addEventListener('click', function(){
  error()
  condicao = "true" 
  calculos.value += porcentagem.dataset.porcent
  data += "*"
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