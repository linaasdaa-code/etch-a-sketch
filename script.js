const container = document.querySelector('#container');
const resizeBtn = document.querySelector('#resize');

function createGrid(size) {
  // Kosongkan grid lama
  container.textContent = '';

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // Ukuran tiap kotak = papan dibagi jumlah kotak per sisi
    square.style.width = (100 / size) + '%';
    square.style.height = (100 / size) + '%';

    square.addEventListener('mouseenter', () => {
      square.classList.add('drawn');
    });

    container.appendChild(square);
  }
}

resizeBtn.addEventListener('click', () => {
  const answer = prompt('Berapa kotak per sisi? (1 - 100)');
  const size = Number(answer);

  if (!Number.isInteger(size) || size < 1 || size > 100) {
    alert('Masukkan angka bulat antara 1 dan 100.');
    return;
  }

  createGrid(size);
});

// Grid awal saat halaman dibuka
createGrid(16);