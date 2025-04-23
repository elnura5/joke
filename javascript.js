const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const jokes = [
  "Oğlum: Ata, mənə WiFi parolunu verərsən? Ata: Əvvəl otağını yığışdır.",
  "Ata: Oğlum, bu nə səsdir? Oğul: Caz musiqisidir. Ata: Onda televizoru səssiz et!",
  "Niyə kompyuter donur? Çünki çox pəncərə açılıb!",
  "İki pomidor yolda gedirmiş. Biri demiş: – Hara tələsirsən? O biri: – Ketçap olmağa!",
  "Ən gülməli zarafat nədir? Ata zarafatıdır – çünki özünə gülür!",
  "Qız: Ata, bu oğlan məni sevir. Ata: Mən də sənin ananı sevirdim... indi nəticəni görürsən."
];

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeEl.innerHTML = jokes[randomIndex];
}