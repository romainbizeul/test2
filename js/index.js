document.getElementById('valid').addEventListener('touchend', valid);

function valid() {
  if (document.getElementById('name').value == 'romain') {
    document.getElementById('message').innerHTML = 'Gagné';
  } else {
    document.getElementById('message').innerHTML = 'Perdu';
  }
}
