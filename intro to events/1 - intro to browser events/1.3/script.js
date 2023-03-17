const button = document.querySelector('.btn');

button.addEventListener('click', () => alert('1')); // этот

button.removeEventListener('click', () => alert('1'));

button.onclick = () => alert(2); // и этот
