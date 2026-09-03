const compliments = [
    "Очень красивый голос :D",
    "Эх, скоро 19, уже взрослая",
    "123 не приговор, всё будет, но не сразу",
    "Волейбол наше всё",
    "Улыбнись, ведь у тебя прекрасная улыбка",
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
    dynamicText.textContent = "🎈 Жду когда отдадут тебе ноут🎈";
    dynamicText.classList.remove('hidden');
    
    // Эффект конфетти прямо в консоли или можно добавить анимацию
    console.log("Секрет активирован");
});
