// Seleção dos elementos
const inputText = document.getElementById('input-text');
const addBtn = document.getElementById('add-btn');
const paragraphContainer = document.getElementById('paragraph-container');
const countBtn = document.getElementById('count-btn');

// Adiciona um parágrafo
addBtn.addEventListener('click', () => {
  const text = inputText.value.trim();

  // Validação para não adicionar entradas vazias
  if (text !== '') {
    // Criação do parágrafo
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    paragraphContainer.appendChild(paragraph);

    // Limpa o input
    inputText.value = '';
    inputText.focus();
  } else {
    alert('Por favor, insira um texto válido!');
  }
});

// Mostra a quantidade de parágrafos
countBtn.addEventListener('click', () => {
  const totalParagraphs = paragraphContainer.querySelectorAll('p').length;
  const message = `${totalParagraphs} linha${totalParagraphs !== 1 ? 's' : ''} foram adicionada${totalParagraphs !== 1 ? 's' : ''}.`;
  alert(message);
});
