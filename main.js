const flashcardsData = [
  {
    word: 'Serendipity',
    meaning:
      'The occurrence and development of events by chance in a happy or beneficial way',
  },
  { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
  { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
  { word: 'Mellifluous', meaning: 'Sweet or musical; pleasant to hear' },
  {
    word: 'Quixotic',
    meaning: 'Extremely idealistic; unrealistic and impractical',
  },
  {
    word: 'Pernicious',
    meaning: 'Having a harmful effect, especially in a gradual or subtle way',
  },
  { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing' },
  {
    word: 'Resilience',
    meaning: 'The capacity to recover quickly from difficulties; toughness',
  },
  {
    word: 'Ineffable',
    meaning: 'Too great or extreme to be expressed or described in words',
  },
  {
    word: 'Sycophant',
    meaning:
      'A person who acts obsequiously toward someone important in order to gain advantage',
  },
];

console.log(typeof(flashcardsData))

const cardContainer = document.getElementById('card-container');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const doneButton = document.getElementById('done-button');
const done_list = [];
score_card = document.getElementById("score-card");


const handleStart = () => {
  cardContainer.innerHTML = ''
  var score = 10;
  var wrong = 10 - score

  flashcardsData.forEach((item) => {
    //* Card add section
    const cardElement = document.createElement('div');
    cardElement.className = 'border-2 border-green-500 rounded-md p-5 h-full';
    cardElement.innerText = item.word;
    cardContainer.appendChild(cardElement);
    score_card.textContent = "You got " + wrong + " words wrong. Score = " + score

    //* Card click event
    cardElement.addEventListener('click', () => {
      console.log(item.word);
      cardElement.classList.add('border-red-500');
      cardElement.innerText = item.meaning;
      score -= 1
      wrong = 10-score
      console.log(score)
      done_list.push(item)
      
      score_card.textContent = "You got " + wrong + " words wrong. Score = " + score 
      
    });
  });

  resetButton.classList.remove('hidden');
  startButton.classList.add('hidden');
  doneButton.classList.remove('hidden');
};

const handleReset = () => {
  cardContainer.innerHTML = '';

  startButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
  doneButton.classList.add('hidden');
  done_list.splice(0, done_list.length)
};



function handleDone(){
  cardContainer.innerHTML = '';
  console.log(done_list)
  done_list.forEach((item2) => {
    const cardElement2 = document.createElement('div');
    cardElement2.className = 'border-2 border-red-500 rounded-md p-5 h-full';
    cardElement2.innerText = item2.word.toString() + `
    ` + item2.meaning.toString();
    cardContainer.appendChild(cardElement2);
  });
  doneButton.classList.add('hidden')
  resetButton.classList.add('hidden')
  startButton.classList.remove('hidden')
  done_list.splice(0, done_list.length)
}


