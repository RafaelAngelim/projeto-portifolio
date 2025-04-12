let secret = generateSecret();
const history = [];

function generateSecret() {
  let digits = [];
  while (digits.length < 4) {
    let d = Math.floor(Math.random() * 10).toString();
    if (!digits.includes(d)) digits.push(d);
  }
  return digits.join('');
}

function checkGuess() {
  const input = document.getElementById('guessInput');
  const guess = input.value;
  if (guess.length !== 4 || new Set(guess).size !== 4 || /\\D/.test(guess)) {
    alert('Digite 4 dígitos diferentes.');
    return;
  }

  let bulls = 0, cows = 0;
  for (let i = 0; i < 4; i++) {
    if (guess[i] === secret[i]) bulls++;
    else if (secret.includes(guess[i])) cows++;
  }

  history.unshift(`${guess}: ${bulls} Bulls, ${cows} Cows`);
  renderHistory();
  input.value = '';
}

function renderHistory() {
  const ul = document.getElementById('history');
  ul.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
}

function revealSecret() {
  alert(`A senha secreta é: ${secret}`);
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => {
      sec.style.display = (sec.id === sectionId) ? 'block' : 'none';
    });
  }

  function mostrarEmail() {
    alert('rafaelvangelim@gmail.com');
  }
  
  