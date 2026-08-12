const compliments = [
    "Колян хуесос",
    "Колян легендыч!",
    "Нас всех ждёт настя",
    "галант топ"
    
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
    dynamicText.textContent = "🎈 Пиво лучший напиток🎈";
    dynamicText.classList.remove('hidden');
    
    // Эффект конфетти прямо в консоли или можно добавить анимацию
    console.log("Секрет активирован");
});
