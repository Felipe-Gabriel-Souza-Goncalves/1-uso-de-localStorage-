// declaração de elementos como constantes
const bemVindo = document.getElementById('texto')
const nicknameUsuario = document.getElementById('nicknameUsuario')
const sairLogar = document.getElementById('sairLogar')
// const popUp = document.getElementById("popUp")


function textos(){
    if(localStorage.getItem("logado") == "true"){
        bemVindo.innerHTML = "Olá " + localStorage.getItem('nome') + "!"
        nicknameUsuario.innerHTML = localStorage.getItem("nome")
        sairLogar.innerHTML = "Sair"

    }else if (localStorage.getItem("logado") == "false"){
        bemVindo.innerHTML = "Olá anônimo!"
        nicknameUsuario.innerHTML = "Anônimo"
        sairLogar.innerHTML = "Logar"
    }
}

document.getElementById('sairLogar').addEventListener("click", () =>{
    localStorage.setItem("logado", false)
    location.href = "index.html"
})

// var mostrando = false
document.getElementById('informacaoUsuario').addEventListener("click", () =>{


})

var i = 0
var j = 0

function displayEducacional(){
    const exEducacional = document.getElementsByClassName("exEducacional")

    for(let k = 0; k<exEducacional.length; k++){
        exEducacional[k].style.display = "none"
    }

    exEducacional[i].style.display = "flex"

    i++
    if(i == exEducacional.length){
        i = 0
    }
    
}
function displayPessoal(){
    const exPessoal = document.getElementsByClassName("exPessoal")

    for(let k = 0; k<exPessoal.length; k++){
        exPessoal[k].style.display = "none"
    }

    exPessoal[j].style.display = "flex"
     
    j++
    if(j == exPessoal.length){
        j = 0
    }
}

displayEducacional()
setInterval(displayEducacional, 10000)
displayPessoal()
setInterval(displayPessoal, 10000)
textos()