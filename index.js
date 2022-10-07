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

const copy = document.getElementById('copy')

const title = document.getElementById("title")

const calculos = document.getElementById('calculos')

const abre = document.getElementById('abreParentese')

abre.addEventListener('click', function(){
  calculos.value += abre.value
})

const fecha = document.getElementById('fechaParentese')

fecha.addEventListener('click', function(){
  calculos.value += fecha.value
})

const divisao = document.getElementById('divisao')


divisao.addEventListener('click', function(){
  calculos.value += divisao.value
})

const sete = document.getElementById('7')

sete.addEventListener('click', function(){
  calculos.value += sete.value
})

const oito = document.getElementById('8')

oito.addEventListener('click', function(){
  calculos.value += oito.value
})

const nove = document.getElementById('9')

nove.addEventListener('click', function(){
  calculos.value += nove.value
})

const multi = document.getElementById('multi')

multi.addEventListener('click', function(){
  calculos.value += multi.value
})

const quatro = document.getElementById('4')

quatro.addEventListener('click', function(){
  calculos.value += quatro.value
})

const cinco = document.getElementById('5')

cinco.addEventListener('click', function(){
  calculos.value += cinco.value
})

const seis = document.getElementById('6')

seis.addEventListener('click', function(){
  calculos.value += seis.value
})

const sub = document.getElementById('sub')

sub.addEventListener('click', function(){
  calculos.value += sub.value
})

const um = document.getElementById('1')

um.addEventListener('click', function(){
  calculos.value += um.value
})

const dois = document.getElementById('2')

dois.addEventListener('click', function(){
  calculos.value += dois.value
})

const tres = document.getElementById('3')

tres.addEventListener('click', function(){
  calculos.value += tres.value
})

const soma = document.getElementById('soma')

soma.addEventListener('click', function(){
  calculos.value += soma.value
})

const mod = document.getElementById('resto')

mod.addEventListener('click', function(){
  calculos.value += mod.value
})

const zero = document.getElementById('0')

zero.addEventListener('click', function(){
  calculos.value += zero.value
})

const virgula = document.getElementById('virgula')

virgula.addEventListener('click', function(){
  calculos.value += virgula.value
})

const igual = document.getElementById('igual')
let resultado

igual.addEventListener('click', function(){ 
   objeto.operacao = calculos.value + "="
   resultado = (eval(calculos.value))
   calculos.value = resultado
   objeto.resultado = calculos.value
   consultar +=  objeto.operacao + objeto.resultado + "\n"
})

const clear = document.getElementById('clear')

clear.addEventListener('click', function(){
  calculos.value = ''
})

let consultar = ""
const objeto = {operacao: "",resultado: ""}
const botHistorico = document.getElementById('historico')

botHistorico.addEventListener('click', function(){
  if(objeto.operacao === ""){
    alert("Não possui hitórico de contas.")
  } else {
  alert("Histórico das suas contas: \n" + consultar)
  }
})