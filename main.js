const form = document.getElementById('form-agenda')
const nome = []
const numero = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
}) 

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('número-contato')

    if (nome.includes(inputNomeContato.value)) {
        alert(`O nome: ${inputNomeContato.value} já foi inserido`)
    } else {
        nome.push(inputNomeContato.value)
    }

    if (numero.includes(inputNumeroContato.value)) {
        alert(`O número: ${inputNumeroContato.value} já foi inserido`)
    } else {
        numero.push(inputNumeroContato.value)

        let linha = '<tr>'
        linhas += `<td>${inputNomeContato.value}</td>`
        linhas += `<td>${inputNumeroContato.value}</td>`
        linhas += '</tr>'

        linhas += linha
    }

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}