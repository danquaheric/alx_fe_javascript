// Array of quote objects with text and category properties
const quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
  { text: "Reading is to the mind what exercise is to the body.", category: "Reading" },
  { text: "A room without books is like a body without a soul.", category: "Books" },
  { text: "The future depends on what you do today.", category: "Motivation" }
];

// Display a random quote in the #quoteDisplay div
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");

  if (!quotes.length) {
    quoteDisplay.textContent = "No quotes available.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteDisplay.innerHTML = `
    <p>"${quote.text}"</p>
    <p><strong>Category:</strong> ${quote.category}</p>
  `;
}

// Add a new quote from the form inputs and update DOM + quotes array
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const newText = textInput.value.trim();
  const newCategory = categoryInput.value.trim();

  if (!newText || !newCategory) {
    alert("Please enter both a quote and a category.");
    return;
  }

  // Push new quote into the quotes array
  quotes.push({
    text: newText,
    category: newCategory
  });

  // Clear form inputs
  textInput.value = "";
  categoryInput.value = "";

  // Show the newly added quote (for immediate feedback)
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `
    <p>"${newText}"</p>
    <p><strong>Category:</strong> ${newCategory}</p>
  `;
}

// Wire up the "Show New Quote" button when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const newQuoteButton = document.getElementById("newQuote");
  if (newQuoteButton) {
    newQuoteButton.addEventListener("click", showRandomQuote);
  }

  // Show an initial quote on load
  showRandomQuote();
});
