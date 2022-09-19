console.log(localStorage);
const addPlayerButton = document.querySelector("#addPlayer");

let player = {};
let playerArray = [];

let playerList = document.querySelector("#playerList");

function pushPlayerNamer() {
  addPlayerButton.addEventListener("click", function () {
    const nomDuJoueur = document.querySelector("#joueurInput");
    const nomDuJoueurValue = nomDuJoueur.value;
    if (nomDuJoueurValue == "") {
      alert("saisissez un nom de joueur");
    } else {
      player = { nom: nomDuJoueurValue, score: 0 };
      playerArray.push(player);
    }

    playerList.innerHTML = ``;

    for (i = 0; i < playerArray.length; i++) {
      const player = document.createElement("li");
      player.innerHTML = `<li>${playerArray[i].nom}</li>`;

      playerList.appendChild(player);
    }

    document.querySelector("#joueurInput").value = "";
  });
}

pushPlayerNamer();

const resetButton = document.querySelector("#reset");

function reset() {
  resetButton.addEventListener("click", function () {
    localStorage.clear();
    playerArray = [];
    playerList.innerHTML = ``;
  });
}

reset();

const validButton = document.querySelector("#valider");

function goToGame() {
  validButton.addEventListener("click", function (e) {
    if (playerArray.length < 2) {
      e.preventDefault();
      alert("merci de renseigner au moins 2 joueurs!");
    } else {
      const stringLS = JSON.stringify(playerArray);
      localStorage.setItem("player", stringLS);
    }
  });
}

goToGame();
