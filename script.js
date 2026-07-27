const compliments = [
    "Добро пожаловать в контору ада!",
    "Хорош одеваться в моём стиле!",
    "Скоро настанет момент соло работы, тебе жопа)))",
    "Подпивасычей одобряем)"
    
];

const btnCompliment = document.getElementById('btn-compliment');
const btnSurprise = document.getElementById('btn-surprise');
const dynamicText = document.getElementById('dynamic-text');

btnCompliment.addEventListener('click', () => {
    // Выбираем случайный комплимент
    const randomIndex = Math.floor(Math.random() * compliments.length);
    dynamicText.textContent = compliments[randomIndex];
    dynamicText.classList.remove('hidden');
});

btnSurprise.addEventListener('click', () => {
    dynamicText.textContent = "🎈 Ладно, давай уже инсту или тг, так уж и быть) 🎈";
    dynamicText.classList.remove('hidden');
    
    // Эффект конфетти прямо в консоли или можно добавить анимацию
    console.log("Секрет активирован");
});
