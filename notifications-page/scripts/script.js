const button = document.getElementById("read");

button.addEventListener('click', (e) => {
 e.preventDefault(); // Prevent default anchor behavior

 // Remove unseen state and dots
 document.querySelectorAll('.single-box.unseen').forEach(notification => {
  notification.classList.remove('unseen');
  const dot = notification.querySelector('.dot');
  if (dot) dot.remove();
 });

 // Update counter
 document.getElementById('num').textContent = '0';
});