const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");
const timeEl = document.querySelector(".time");
const greetingEl = document.querySelector(".greeting");
const imgEl = document.querySelector("#img");

const langConfig = "pt-BR";
const optionsDate = {
  day: "2-digit",
  month: "long",
  year: "numeric",
};
const optionsTime = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

function updateHours() {
  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString(langConfig, optionsTime);
}

function updateDate() {
  const now = new Date();
  dateEl.textContent = now.toLocaleDateString(langConfig, optionsDate);
  dayEl.textContent = now.toLocaleDateString(langConfig, { weekday: "long" });
}
let currentPeriod = "";
function updateWeather() {
  const hour = new Date().getHours();
    let newPeriod = "";
  if (hour >= 6 && hour < 12) {
    greetingEl.textContent = "Bom dia!";
    imgEl.src = "./img/weather01.png";
    imgEl.alt = "Ícone de manhã";
  } else if (hour >= 12 && hour < 18) {
    greetingEl.textContent = "Boa tarde!";
    imgEl.src = "./img/weather02.png";
    imgEl.alt = "Ícone de tarde";
  } else {
    greetingEl.textContent = "Boa noite!";
    imgEl.src = "./img/weather03.png";
    imgEl.alt = "Ícone de noite";
  }
}

function update() {
  updateHours();
  updateDate();
  updateWeather();
}

update(); // executa imediatamente
setInterval(update, 1000); // atualiza a cada segundo
