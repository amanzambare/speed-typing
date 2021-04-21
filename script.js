const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Set difficulty to value in lS else use medium.
let difficulty = localStorage.getItem('difficulty') != null ? localStorage.getItem('difficulty') : 'medium';

difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate a random word

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameEl.innerHTML =
    `<h1>Time ran out </h1>
  <p> Your final score is ${score} </p> 
  <button onclick = "location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex';
}

addWordToDOM();

// event listeners

text.addEventListener('input', e => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    e.target.value = '';


    if (difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium') {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
});

settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});
// const words = [
//   'sigh',
//   'aman',
//   'airplane',
//   'ball',
//   'pies',
//   'juice',
//   'warlike',
//   'bad',
//   'good',
//   'dependant',
//   'steer',
//   'silver',
//   'highfalutin',
//   'superficial',
//   'mumbai',
//   'pune',
//   'loving'
// ];
// const word = document.getElementById('word');
// const text = document.getElementById('text');
// const scoreE1 = document.getElementById('score');
// const timeE1 = document.getElementById('time');
// const endgameE1 = document.getElementById('end-game-container');
// const settingsbtn = document.getElementById('settings-btn');
// const settings = document.getElementById('settings');
// const settingsForm = document.getElementById('settings-form');
// const difficultyselect = document.getElementById('difficulty');

// // initial score
// let score = 0;
// // initial time
// let time = 10;
// let difficulty = localStorage.getItem('difficulty') != null ? localStorage.getItem('difficulty') : 'medium';
// difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';
// const timeInterval = setInterval(updateTime, 1000);

// function getRandomWord() {
//   return words[Math.floor(Math.random() * words.length)];
// }

// function addWordToDOM() {
//   randomWord = getRandomWord();
//   word.innerHTML = randomWord;
// }
// function updateScore() {
//   score++;
//   scoreE1.innerHTML = score;
// }
// function updateTime() {
//   time--;
//   timeE1.innerHTML = time + 's';
//   if (time == 0) {
//     clearInterval(timeInterval);
//     gameOver();
//   }
// }

// function gameOver() {

//   endgameE1.innerHTML =
//     `
//        <h1> Time ran out</h1>
//        <p> Your final score is ${score}</p>
//        <button onclick=" location.reload()">Reload</button>
//        `;
//   endgameE1.style.display = 'flex';
// }
// text.aadEventListener('input', e => {
//   const insertText = e.target.value;
//   if (insertedText === randomword) {
//     addwordToDom();
//     updateScore();
//     e.target.value = '';
//   }
//   if (difficulty == 'hard') {
//     time += 2;
//   } else if (difficulty == 'medium') {
//     time += 3;
//   } else {
//     time += 5;
//   }
//   updateTime();
// });
// setingsbtn.addEventListener('click'()=> settings.classList.toggle('hide'));
// settingsForm.addEventListener('change', e => {
//   difficulty = e.target.value;
//   localStorage.setItem.apply('difficulty', difficulty)
// });

