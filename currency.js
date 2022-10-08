class Currency {

    constructor(firstCurrency, secondCurrency, amount) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.amount = amount;
    }
    exchange() {

        return new Promise((resolve, reject) => {
            const myHeaders = new Headers();
            myHeaders.append("apikey", "ng31JE91nr3NOScmbMQoPwyWMeXkUPWf");
            fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${this.firstCurrency}&from=${this.secondCurrency}&amount=${this.amount}`, { method: 'GET', redirect: 'follow', headers: myHeaders })
                .then(response => response.json())
                .then(result => {
                    // console.log(result.result);
                    resolve(result.result);
                }
                )
                .catch(err => {
                    // console.error(err);
                    reject(err);
                })

        })


    }

    changeAmount(amount) {
        this.amount = amount
    }
    changeFirstCurrency(firstCurrency) {
        this.firstCurrency = firstCurrency;
    }
    changeSecondCurrency(secondCurrency) {
        this.secondCurrency = secondCurrency;
    }

}



