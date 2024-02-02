const board = new Array(100).fill(0);

board[25] = 1;

const barcos = [
  {
    name: 'Battleship',
    lenght: 4,
  },
  {
    name: 'Submarine',
    lenght: 3,
    hits: 0,
  },
];

function prepararManejadoresDeEventos() {
  const boardCells = document.querySelectorAll('.board__cell');

  let id = 0;
  for (const cell of boardCells) {
    const idActual = id;
    cell.addEventListener('click', () => {
      if (
        !cell.classList.contains('board__cell--hit') &&
        !cell.classList.contains('board__cell--miss')
      ) {
        atacarCelda(idActual, cell);
      }
    });
    id += 1;
  }
}

function atacarCelda(id, element) {
  if (board[id] === 0) {
    element.classList.add('board__cell--miss');
  } else {
    if (board[id] === 1) {
    }
    element.classList.add('board__cell--hit');
  }
}

prepararManejadoresDeEventos();

const x = Math.floor(Math.random() * 10);
const y = Math.floor(Math.random() * 10);
