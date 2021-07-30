const button = document.querySelector('#button')
var tipoDeMoeda = document.querySelector("#conversor2")



async function convertendoMoedas(){
    let atualizacaoMoedas = await fetch ("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta){return resposta.json()})

    let euro = atualizacaoMoedas.EURBRL.high
    let dolar = atualizacaoMoedas.USDBRL.high

    const valorEmReais = Number(document.querySelector("#valor").value)
    let moedas = document.querySelector('#input-moedas')
    let moedaEmReal = document.querySelector("#input-real")
 
    if (tipoDeMoeda.value === 'dolar') {
        let resultadoDaConversao = valorEmReais / dolar

        moedas.innerHTML = resultadoDaConversao.toLocaleString('en-US',{style: 'currency', currency: 'USD'})

    } else if (tipoDeMoeda.value === 'euro') {
        let resultadoDaConversao = valorEmReais / euro

        moedas.innerHTML = resultadoDaConversao.toLocaleString('de-DE',{style: 'currency', currency: 'EUR'})


    }
    moedaEmReal.innerHTML = valorEmReais.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}


function alterandoMoedas (){
    let bandeiras = document.querySelector('#bandeiras')
    let nomeDaMoeda = document.querySelector("#nome-da-moeda")


    if (tipoDeMoeda.value === 'dolar') {
        bandeiras.src = './assets/eua.png'

        nomeDaMoeda.innerHTML = 'Dólar Americano'

    } else if (tipoDeMoeda.value === 'euro') {

        bandeiras.src = './assets/euro.png'

        nomeDaMoeda.innerHTML =  'Euro'
    }

    convertendoMoedas()
}




 
button.addEventListener('click', convertendoMoedas)
tipoDeMoeda.addEventListener('change', alterandoMoedas)



