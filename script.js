let advice = document.getElementById("advice");
let adviceNumber = document.getElementById("adviceNumber");
let reNew = document.querySelector(".icon");
let iconImg = document.querySelector("#iconImg");
let base_url = "https://api.adviceslip.com/advice";

let loading = document.querySelector("#loading");
advice.classList.add("hide");

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      loading.classList.add("hide");
      advice.classList.remove("hide");
      adviceNumber.textContent = data.slip.id;
      advice.textContent = data.slip.advice;
    });
}
getData(base_url);
let i = 0;
reNew.addEventListener("click", () => {
  i++;
  iconImg.style.transform = `rotate(${i * 360}deg)`;

  loading.classList.remove("hide");
  advice.classList.add("hide");
  getData(base_url);
});
