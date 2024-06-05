import 'normalize.css';
import '../sass/style.sass';

// --- To Delete ---
const button = document.getElementById('button');
button.addEventListener('click', function () {
  document.getElementById('answer').innerHTML = `Thats great! :)`;
  button.remove();
});
// --- To Delete ---
