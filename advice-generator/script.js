const adviceId = document.querySelector('#adviceId');
const adviceText = document.querySelector('#adviceText');
const btn = document.querySelector('#btn');

// Function to fetch advice from the API
async function getAdvice() {
 try {
  // Show loading state
  adviceId.textContent = '...';
  adviceText.innerHTML = `<p>Loading advice...</p>`;

  // Fetch advice from the API
  const response = await fetch('https://api.adviceslip.com/advice');
  if (!response.ok) {
   throw new Error('Failed to fetch advice. Please try again.');
  }

  const adviceData = await response.json();
  const adviceIdd = adviceData.slip.id;
  const advice = adviceData.slip.advice;

  // Update the DOM with the new advice
  adviceId.textContent = adviceIdd;
  adviceText.innerHTML = `<p>"${advice}"</p>`;
 } catch (error) {
  // Handle errors
  console.error(error);
  adviceText.innerHTML = `<p>Failed to fetch advice. Please try again.</p>`;
 }
}

// Event listener for the button click
btn.addEventListener('click', () => {
 getAdvice();
});

// Fetch advice when the page loads
window.onload = () => {
 getAdvice();
};