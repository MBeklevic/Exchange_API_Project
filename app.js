// Elementleri Seçiyoruz.
const form = document.querySelector("#currency-form");
const amount = document.querySelector("#amount");
const firstCurrencyList = document.querySelector("#firstCurrency");
const secondCurrencyList = document.querySelector("#secondCurrency");
const currency = new Currency("try", "eur", amount.value);
const ui = new UI(firstCurrencyList, secondCurrencyList);





// Event Listeners

eventListeners();


function eventListeners() {
    form.addEventListener("submit", exchangeCurrency); //Değişiklikleri dinamik olarak algımak için input eventini kullandık.
    firstCurrencyList.onchange = function () {

        // currency.changeFirstCurrency(firstCurrencyList.value.toLowerCase());
        currency.changeFirstCurrency(firstCurrencyList.options[firstCurrencyList.selectedIndex].textContent); //Alternatif yöntem
        // console.log(firstCurrencyList.value.toLowerCase())
        ui.changeFirst();

    }

    secondCurrencyList.onchange = function () {

        // currency.changeSecondCurrency(secondCurrencyList.value.toLowerCase());
        currency.changeSecondCurrency(secondCurrencyList.options[secondCurrencyList.selectedIndex].textContent); //Alternatif yöntem
        // console.log(secondCurrencyList.value.toLowerCase())
        ui.changeSecond();
    }

}

function exchangeCurrency(e) {

    currency.exchange()
        .then(resolve => {
            ui.displayResult(resolve);
            console.log(resolve)
        })
        .catch(err => console.error(err));


    currency.changeAmount(amount.value);
    console.log(amount.value);
    e.preventDefault();
}