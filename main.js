
fetch(
  "https://api.currencyfreaks.com/latest?apikey=4d1d53915c274c29833a636539272792"
)
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((currency) => {
    let amount = document.querySelector("#USD");
    let select = document.querySelector("#rate");

    let RateResult = Object.keys(currency.rates);
    console.log(RateResult);

    RateResult.forEach((ele) => {
      let opt = document.createElement("option");
      opt.innerHTML = ele;
      select.appendChild(opt);
    });

    document.addEventListener("click", (e) => {
      if (e.target.className === "btn") {
        if (isNaN(amount.value)) {
          console.log("false");
        } else {
          let price = amount.value * currency.rates[select.value];
          let priceSpan = document.createElement("span");
          let textPrice = document.createTextNode(
            `Amount in ${select.value} is ${price}`
          );
          priceSpan.appendChild(textPrice);
          priceSpan.classList.add("lastprice");
          document.body.appendChild(priceSpan);
          let button = document.querySelector(".btn");
          button.classList.add("done");
        }
      }
    });
  });
