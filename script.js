
let playMatrix = ['empty','empty','empty','empty','empty','empty','empty','empty','empty'];
let currentPlayer = 'cross';
let gameEnd = false;

function play(index) {
  if (playMatrix[index] == 'empty' && !gameEnd) {
    if (currentPlayer == 'cross') {
      document.getElementById(`cross-${index}`).classList.remove('d-none');
      currentPlayer = 'circle';
      setPiece('cross', index);
      checkForWinner();
      document.getElementById('player-2').classList.remove('player-inactive');
      document.getElementById('player-1').classList.add('player-inactive');
    } else {
      document.getElementById(`circle-${index}`).classList.remove('d-none');
      currentPlayer = 'cross';
      setPiece('circle', index);
      checkForWinner();
      document.getElementById('player-1').classList.remove('player-inactive');
      document.getElementById('player-2').classList.add('player-inactive');
    }
  }
}

function checkForWinner() {
  let winner;

  if (playMatrix[0] == playMatrix[1] && playMatrix[1] == playMatrix[2] && playMatrix[0] != 'empty') {
    winner = playMatrix[0];
    document.getElementById('line-0').style.transform = "scaleX(1)";
  }

  if (playMatrix[3] == playMatrix[4] && playMatrix[4] == playMatrix[5] && playMatrix[3] != 'empty') {
    winner = playMatrix[3];
    document.getElementById('line-1').style.transform = "scaleX(1)";
  }

  if (playMatrix[6] == playMatrix[7] && playMatrix[7] == playMatrix[8] && playMatrix[6] != 'empty') {
    winner = playMatrix[6];
    document.getElementById('line-2').style.transform = "scaleX(1)";
  }

  if (playMatrix[0] == playMatrix[3] && playMatrix[3] == playMatrix[6] && playMatrix[0] != 'empty') {
    winner = playMatrix[0];
    document.getElementById('line-3').style.transform = "rotate(90deg) scaleX(1)";
  }

  if (playMatrix[1] == playMatrix[4] && playMatrix[4] == playMatrix[7] && playMatrix[1] != 'empty') {
    winner = playMatrix[1];
    document.getElementById('line-4').style.transform = "rotate(90deg) scaleX(1)";
  }

  if (playMatrix[2] == playMatrix[5] && playMatrix[5] == playMatrix[8] && playMatrix[2] != 'empty') {
    winner = playMatrix[2];
    document.getElementById('line-5').style.transform = "rotate(90deg) scaleX(1)";
  }

  if (playMatrix[0] == playMatrix[4] && playMatrix[4] == playMatrix[8] && playMatrix[0] != 'empty') {
    winner = playMatrix[0];
    document.getElementById('line-6').style.transform = "rotate(45deg) scaleX(1.2)";
  }

  if (playMatrix[2] == playMatrix[4] && playMatrix[4] == playMatrix[6] && playMatrix[2] != 'empty') {
    winner = playMatrix[2];
    document.getElementById('line-7').style.transform = "rotate(-45deg) scaleX(1.2)";
  }

  let full = playMatrix.includes('empty');
  console.log(full);
  if (winner || !full) {
    setTimeout(() => {
      document.getElementById('game-over-img').classList.remove('d-none');
      document.getElementById('btn-restart').classList.remove('d-none');
    }, 1000);
    gameEnd = true;
  } 

}

function setPiece(side, index) {
  playMatrix[index] = side;
  console.log(playMatrix);
}

function restart() {
  playMatrix = ['empty','empty','empty','empty','empty','empty','empty','empty','empty'];;
  gameEnd = false;
  currentPlayer = 'cross';

  document.getElementById('game-over-img').classList.add('d-none');
  document.getElementById('btn-restart').classList.add('d-none');

  document.getElementById('line-0').style.transform = "scaleX(0)";
  document.getElementById('line-1').style.transform = "scaleX(0)";
  document.getElementById('line-2').style.transform = "scaleX(0)";
  document.getElementById('line-4').style.transform = "rotate(90deg) scaleX(0)";
  document.getElementById('line-5').style.transform = "rotate(90deg) scaleX(0)";
  document.getElementById('line-3').style.transform = "rotate(90deg) scaleX(0)";
  document.getElementById('line-6').style.transform = "rotate(45deg) scaleX(0)";
  document.getElementById('line-7').style.transform = "rotate(-45deg) scaleX(0)";

  for (let i = 0; i < 9; i++) {
    document.getElementById('circle-' + i).classList.add('d-none');
    document.getElementById('cross-' + i).classList.add('d-none');
  }
}
