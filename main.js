import "./scss/style.scss";

const form = document.querySelector("header form");

form.addEventListener("submit", (e) => {
  console.log(e.target);
  e.preventDefault();
  getCoinData();
});

const getCoinData = async () => {
  const input = document.querySelector("header form input").value;
  console.log(input);
  const API_KEY = "coinranking5ee965ec6e62498f585603ededb1b9ea25b9ac0bae84330a";
  const options = { headers: { "x-access-token": "API_KEY" } };

  const url = `https://api.coinranking.com/v2/coins?search={input}`;
  //   const res = await fetch();
  console.log(url);
};
