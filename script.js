const inputText = document.getElementById('input-text');
const addBtn = document.getElementById('add-btn');
const paragraphContainer = document.getElementById('paragraph-container');
const countBtn = document.getElementById('count-btn');

addBtn.addEventListener('click', () => {
  const text = inputText.value.trim();

  if (text !== '') {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    paragraphContainer.appendChild(paragraph);

    inputText.value = '';
    inputText.focus();
  } else {
    alert('Por favor, insira um texto válido!');
  }
});

countBtn.addEventListener('click', () => {
  const totalParagraphs = paragraphContainer.querySelectorAll('p').length;
  const message = `${totalParagraphs} linha${totalParagraphs !== 1 ? 's' : ''} foram adicionada${totalParagraphs !== 1 ? 's' : ''}.`;
  alert(message);
});
