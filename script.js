const compliments = [
    "Ты делаешь этот мир ярче! ✨",
    "Ты большая молодец, что сдала экзамен 😊",
    "Ты довольно интересный человек ☀️",
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
    dynamicText.textContent = "🎈 А что по планам на выходные? :3 🎈";
    dynamicText.classList.remove('hidden');
    
    // Эффект конфетти прямо в консоли или можно добавить анимацию
    console.log("🎉 Сюрприз активирован!");
});
