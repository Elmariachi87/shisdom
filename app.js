// const generateBtn = document.getElementById("generate");
// const quoteArea = document.querySelector("q").textContent;
// const author = document.querySelector("cite").textContent;

// const newQuote = function () {};

// generateBtn.addEventListener("click", newQuote);

const options = {
  method: "GET",
  headers: {
    accept: "application/hal+json",
    "X-RapidAPI-Key": "2f5894be9amsh924951a7c27a94ep1eeedajsn10561565ef29",
    "X-RapidAPI-Host": "matchilling-tronald-dump-v1.p.rapidapi.com",
  },
};

fetch(
  "https://matchilling-tronald-dump-v1.p.rapidapi.com/search/quote?size=25&page=The%20page%20number&query=please%20explain",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
