const compliments = [
    "Ты делаешь этот мир ярче! ✨",
    "У тебя очень красивые глаза)",
    "Ты очень мило картавишь😅",
    "Красотка, среди этой массовки 🚀"
    
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
    dynamicText.textContent = "🎈 Жду побольше кружков от тебя 🎈";
    dynamicText.classList.remove('hidden');
    
    // Эффект конфетти прямо в консоли или можно добавить анимацию
    console.log("🎉 Сюрприз активирован!");
});
