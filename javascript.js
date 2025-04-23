const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const jokes = [
  "Pul su kimi axır, amma kran mənim əlimdə deyil.",
    "Sən məni eşitmirsənsə, deməli qulağın yox, vicdanın yoxdur.",
    "Telefonun səsi çıxır, amma dərsə zəng çatmır.",
    "Mən də sənin yerində olsaydım, mənə qulaq asardım.",
    "Ayaqqabını tapmadın deyə məktəbi buraxmaq olmaz.",
    "Çay içmədən qərar vermə, bəlkə fikrin dəyişdi.",
    "Gec gəlməyin səbəbi də 'trafik'dir, günah özündə deyil.",
    "Kitab açmasan, həyat səni 'ctrl+alt+delete' edər.",
    "Sən hələ uşaqsan, amma telefonda CEO kimisən.",
    "Hər kəs yuxuya gedir, sən isə telefona gedirsən."
];

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeEl.innerHTML = jokes[randomIndex];
}
