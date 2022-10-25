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

let data = ''

const copy = document.getElementById('copy')

const title = document.getElementById("title")

const calculos = document.getElementById('calculos')

const abre = document.getElementById('abreParentese')

abre.addEventListener('click', function(){
  error()
  calculos.value += abre.value
  data += abre.value
})

const fecha = document.getElementById('fechaParentese')

fecha.addEventListener('click', function(){
  error()
  calculos.value += fecha.value
  data += fecha.value
})

const divisao = document.getElementById('divisao')

divisao.addEventListener('click', function(){
  error()
    calculos.value += divisao.dataset.divisaum;
    data += divisao.value
})

const sete = document.getElementById('7')

sete.addEventListener('click', function(){
  error()
  calculos.value += sete.value
  data += sete.value
})

const oito = document.getElementById('8')

oito.addEventListener('click', function(){
  error()
  calculos.value += oito.value
  data += oito.value
})

const nove = document.getElementById('9')

nove.addEventListener('click', function(){
  error()
  calculos.value += nove.value
  data += nove.value
})

const multi = document.getElementById('multi')

multi.addEventListener('click', function(){
  error()
  calculos.value += multi.dataset.multi
  data += multi.value
})

const quatro = document.getElementById('4')

quatro.addEventListener('click', function(){
  error()
  calculos.value += quatro.value
  data += quatro.value
})

const cinco = document.getElementById('5')

cinco.addEventListener('click', function(){
  error()
  calculos.value += cinco.value
  data += cinco.value
})

const seis = document.getElementById('6')

seis.addEventListener('click', function(){
  error()
  calculos.value += seis.value
  data += seis.value
})

const sub = document.getElementById('sub')

sub.addEventListener('click', function(){
  error()
  calculos.value += sub.value
  data += sub.value
})

const um = document.getElementById('1')

um.addEventListener('click', function(){
  error()
  calculos.value += um.value
  data += um.value
})

const dois = document.getElementById('2')

dois.addEventListener('click', function(){
  error()
  calculos.value += dois.value
  data += dois.value
})

const tres = document.getElementById('3')

tres.addEventListener('click', function(){
  error()
  calculos.value += tres.value
  data += tres.value
})

const soma = document.getElementById('soma')

soma.addEventListener('click', function(){
  error()
  calculos.value += soma.value
  data += soma.value
})

const porcentagem = document.getElementById('porcentagem')
let condicao = ""

porcentagem.addEventListener('click', function(){
  error()
  condicao = "true" 
  calculos.value += porcentagem.dataset.porcent
  data += multi.value
})

const zero = document.getElementById('0')

zero.addEventListener('click', function(){
  error()
  calculos.value += zero.value
  data += zero.value
})

const virgula = document.getElementById('virgula')

virgula.addEventListener('click', function(){
  error()
  calculos.value += virgula.value
  data += virgula.value
})

const igual = document.getElementById('igual')
let resultado = ''

function error(){
  if(calculos.value == 'ERROR'){
    calculos.value = ''
    data = ''
  }
}

igual.addEventListener('click', function(){
  error()
  if(condicao == "true"){
    const porcent = eval(data)
    console.log(porcent)
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

const clear = document.getElementById('clear')

clear.addEventListener('click', function(){
  calculos.value = ''
  data = ''
})

const apagar = document.getElementById('apagar')

apagar.addEventListener('click', function(){
 
  if(calculos.value.length){
    data = calculos.value
    calculos.value = calculos.value.substr(0, calculos.value.length -1);
    data = data.substring(0, data.length - 1)
    console.log(data)
 }
})

let consultar = ""
const objeto = {}

const div = document.getElementById('input')
const botHistorico = document.getElementById('historico')
const divBtn = document.getElementById('btn-theme')
const coluna1 = document.getElementById('coluna1')
const coluna2 = document.getElementById('coluna2')
const coluna3 = document.getElementById('coluna3')
const coluna4 = document.getElementById('coluna4')
const coluna5 = document.getElementById('coluna5')
const span = document.getElementById("span")

botHistorico.addEventListener('click', function(){
  
  clear.remove()
  abre.remove()
  fecha.remove()
  divisao.remove()
  sete.remove()
  oito.remove()
  nove.remove()
  multi.remove()
  quatro.remove()
  cinco.remove()
  seis.remove()
  sub.remove()
  um.remove()
  dois.remove()
  tres.remove()
  soma.remove()
  porcentagem.remove()
  zero.remove()
  virgula.remove()
  igual.remove()
  calculos.remove()
  apagar.remove()

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
    // Coluna1
    coluna1.append(clear, abre, fecha, divisao)
    // Coluna 2
    coluna2.append(sete, oito, nove, multi)
    //  Coluna 3
    coluna3.append(quatro,cinco, seis, sub)
    //  Coluna 4
    coluna4.append(um, dois, tres, soma)
    //  Coluna 5
    coluna5.append(porcentagem, zero, virgula, igual)
    // Outros
    voltar.remove()
    divBtn.appendChild(botHistorico)
    span.append(calculos, apagar)
  })
  
})