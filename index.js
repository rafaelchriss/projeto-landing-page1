var Leonardo = document.getElementById('Leonardo')
var samantha = document.getElementById('samantha')
var bruna = document.getElementById('bruna')
var setaDireita = document.getElementById('seta-direita')
var setaEsquerda = document.getElementById('seta-esquerda')


function RolarParaDireita(){
    Leonardo.style.display = "none"
    bruna.style.display = "flex"
    setaEsquerda.style.display = "flex"
    setaDireita.style.display = "none"
}



function RolarEsquerda(){
    Leonardo.style.display = "flex"
    bruna.style.display = "none"
    setaEsquerda.style.display = "none"
    setaDireita.style.display = "flex"
}
