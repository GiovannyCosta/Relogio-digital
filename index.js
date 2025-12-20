const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");
const timeEl = document.querySelector(".time");
const greetingEl = document.querySelector(".greeting");
const imgEl = document.querySelector("#img");

// mude para en-US ou pt-br
const langConfig = "en-US";
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
  let timeString = now.toLocaleTimeString(langConfig, optionsTime);

  // Verifica se a string contém AM ou PM - en
  if (timeString.includes("AM") || timeString.includes("PM")) {
    // Separa a hora do marcador (AM/PM)
    timeString = timeString.replace(/(AM|PM)/, '<span class="ampm">$1</span>');
    timeEl.innerHTML = timeString; // Usa innerHTML para renderizar o span
  } else {
    timeEl.textContent = timeString;
  }
}

function updateDate() {
  const now = new Date();
  dateEl.textContent = now.toLocaleDateString(langConfig, optionsDate);
  dayEl.textContent = now.toLocaleDateString(langConfig, { weekday: "long" });
}
let currentPeriod = "";

function updateWeather() {
  const hour = new Date().getHours();
  const isEn = langConfig === "en-US"; // TRUE OU FALSE
  if (hour >= 6 && hour < 12) {
    greetingEl.textContent = isEn ? "Good morning!" : "Bom dia!";
    imgEl.src = "./img/weather01.png";
    imgEl.alt = "Ícone de manhã";
  } else if (hour >= 12 && hour < 18) {
    greetingEl.textContent = isEn ? "Good afternoon!" : "Boa tarde!";
    imgEl.src = "./img/weather02.png";
    imgEl.alt = "Ícone de tarde";
  } else {
    greetingEl.textContent = isEn ? "Goodnight!" : "Boa noite!";
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
