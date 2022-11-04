const copy = document.getElementById('copy')
const title = document.getElementById("title")

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

export {dark, light, copy}