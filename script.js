
const resultado = document.querySelector(".resultado")
const pontuacao = document.querySelector("#pontuacao")
const pontuacaoMaquina = document.querySelector("#pontuacao-maquina")

let pontuacaoHumano = 0
let pontosMaquina = 0

const jogar = (humano) => {
    console.log(humano)

    jogo(humano, maquina())
}

const maquina = () => {
    const opcoes = ['pedra', 'papel', 'tesoura']
    const randomNumero = Math.floor(Math.random() * 3)
    
    return opcoes[randomNumero] 
}

const jogo = (humano, maquina) => {
    console.log('Humano: ' + humano + 'Máquina: ' + maquina)

    if(humano === maquina){
        resultado.innerHTML = "Deu empate!"
    } else if(
        humano === 'papel' && maquina === 'pedra' || 
        humano === 'pedra' && maquina === 'tesoura' ||
        humano === 'tesoura' && maquina === 'papel'){
        pontuacaoHumano++
        pontuacao.innerHTML = pontuacaoHumano
        resultado.innerHTML = "Você ganhou!"
    } else{
        pontosMaquina++
        pontuacaoMaquina.innerHTML = pontosMaquina
        resultado.innerHTML = "Você perdeu para a Máquina!"
    }
}