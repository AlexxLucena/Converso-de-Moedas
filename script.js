const convertButton = document.querySelector(".convert-button")
const seletorMoedas = document.querySelector(".seletor-moedas")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valorReal = document.querySelector(".valor-real")
    const currencyValueConverted = document.querySelector(".valor")

    const dolarToday = 4.92
    const euroToday = 5.37
    const libraToday = 6.22
    const bitcoinToday = 185.815



    if (seletorMoedas.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }


    if (seletorMoedas.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
        if (seletorMoedas.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday)

        }

        if (seletorMoedas.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / bitcoinToday)

        }


   
    valorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue )

}

function changeCurrency() {
    const nomeMoeda = document.getElementById("nome-moeda")
    const currencyImage = document.querySelector(".imagem-moeda")

    if (seletorMoedas.value == "dolar") {
        nomeMoeda.innerHTML = "Dólar Americado"
        currencyImage.src = "./img/dolar.png"

    }

        if (seletorMoedas.value == "euro") {
        nomeMoeda.innerHTML = "Euro"
        currencyImage.src = "./img/euro.png"
    }

    if (seletorMoedas.value == "libra") {
        nomeMoeda.innerHTML = "Libra"
        currencyImage.src = "./img/libra.png"
    }

    if (seletorMoedas.value == "bitcoin") {
        nomeMoeda.innerHTML = "Biticon"
        currencyImage.src = "./img/bitcoin.png"

    }

    convertValues()
}
seletorMoedas.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)