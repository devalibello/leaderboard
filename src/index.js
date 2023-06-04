import './style.css';
import PostObject from './modules/postobject.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ali-microverse/scores/';
const getButton = document.getElementById('refresh-btn');
const scoreContainer = document.getElementById('names-and-scores');
const addGame = document.getElementById('submit-btn');
const userName = document.getElementById('user-name');
const userScore = document.getElementById('user-score');

// EVENT LISTENER FOR ADD BTN AND POST API

addGame.addEventListener('click', async () => {
  const newPostObject = new PostObject(userName.value, userScore.value);
  userName.value = '';
  userScore.value = '';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPostObject),
  };
  await fetch(url, options)
    .then((response) => response.json());
});

// FOR API GET

getButton.addEventListener('click', () => {
  getFunction();
});

const getFunction = async () => {
  await fetch(url).then((response) => response.json())
  .then((responseData) => {
    const realData = responseData.result;
    if (realData.length !== 0) {
      scoreContainer.classList.add('border');
    }
    scoreContainer.innerHTML = '';
    for (let i = 0; i < realData.length; i += 1) {
      scoreContainer.innerHTML += `
        <li class='name-color-${i % 2} name-element'>${realData[i].user}: ${realData[i].score}</li>
        `;
    }
  });
};

window.onload = getFunction;


