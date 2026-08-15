const compliments = [
    "Самые красивые глаза",
    "Много не пей)",
    "Дудеу не дам",
    "Охуенные ноги",
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
    dynamicText.textContent = "🎈 Улыбнись, если стало грустно🎈";
    dynamicText.classList.remove('hidden');
    
    // Эффект конфетти прямо в консоли или можно добавить анимацию
    console.log("Секрет активирован");
});
