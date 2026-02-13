import { updateQuoteBlock } from './api.js';

const quoteTextField = document.querySelector('.QuoteText');
const quoteAuthorField = document.querySelector('.QuoteAuthor');

initQuote();

async function initQuote() {
  const quoteData = await updateQuoteBlock();

  if (quoteData) {
    renderQuote(quoteData);
  } else {
    quoteTextField.textContent =
      "Don't think about the start of the race. Think about the ending.";
    quoteAuthorField.textContent = 'Usain Bolt';
  }
}

function renderQuote(data) {
  quoteTextField.textContent = data.quote;
  quoteAuthorField.textContent = data.author;
}