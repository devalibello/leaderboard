import './style.css';
import score from './modules/scores.js';

const scoreContainer = document.getElementById('names-and-scores');
for (let i = 0; i < score.scores.length; i += 1) {
  scoreContainer.innerHTML += `
  <li class='name-color-${i % 2} name-element'>Name: ${score.scores[i]}</li>
  `;
}