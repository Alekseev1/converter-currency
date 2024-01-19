const rates = {};
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');

const input = document.querySelector("#input");
const result = document.querySelector("#result");

getCurrencies();

async function getCurrencies() {
  const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
  const data = await response.json();
  const result = await data;

  rates.USD = result.Valute.USD;
  rates.EUR = result.Valute.EUR;
  rates.JPY = result.Valute.JPY;
  rates.GBP = result.Valute.GBP;
  rates.AUD = result.Valute.AUD;
  rates.CAD = result.Valute.CAD;
  rates.CHF = result.Valute.CHF;
  rates.CNY = result.Valute.CNY;
  rates.SEK = result.Valute.SEK;
  rates.MXN = result.Valute.MXN;
  rates.NZD = result.Valute.NZD;
  rates.SGD = result.Valute.SGD;
  rates.HKD = result.Valute.HKD;
  rates.NOK = result.Valute.NOK;
  rates.KRW = result.Valute.KRW;
  rates.TRY = result.Valute.TRY;
  rates.INR = result.Valute.INR;
  rates.RUB = result.Valute.RUB;
  rates.BRL = result.Valute.BRL;

  elementUSD.textContent = rates.USD.Value.toFixed(2);
  elementEUR.textContent = rates.EUR.Value.toFixed(2);
  elementGBP.textContent = rates.GBP.Value.toFixed(2);

  if (rates.USD.Value > rates.USD.Previous) {
    elementUSD.classList.add("bottom");
  } else {
    elementUSD.classList.add("top");
  }
  if (rates.EUR.Value > rates.EUR.Previous) {
    elementEUR.classList.add("bottom");
  } else {
    elementEUR.classList.add("top");
  }
  if (rates.GBP.Value > rates.GBP.Previous) {
    elementGBP.classList.add("bottom");
  } else {
    elementGBP.classList.add("top");
  }
}

var swiper = new Swiper(".mySwiper", {
  loop: true,
  direction: "vertical",
  navigation: {
    nextEl: "#arrow-down",
    prevEl: "#arrow-up",
  },
});
let currentSlide = document.querySelector("#first-slide");

let swiperEl = document.querySelector(".mySwiper");
let arrow = document.querySelector(".arrow-wrapper");

swiperEl.addEventListener("click", function () {
  currentSlide = document.querySelector(".swiper-slide-active");
  result.value = (
    parseFloat(input.value) / rates[currentSlide.dataset.value1].Value
  ).toFixed(2);
});

input.oninput = function () {
  console.log("changed!");
  result.value = (
    parseFloat(input.value) / rates[currentSlide.dataset.value1].Value
  ).toFixed(2);
};

swiperEl.oninput = function () {
  console.log("changed!");
  result.value = (
    parseFloat(input.value) / rates[currentSlide.dataset.value1].Value
  ).toFixed(2);
};

arrow.addEventListener("click", function () {
  currentSlide = document.querySelector(".swiper-slide-active");
  result.value = (
    parseFloat(input.value) / rates[currentSlide.dataset.value1].Value
  ).toFixed(2);
});
