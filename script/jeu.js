console.log(localStorage);
let LS = localStorage.getItem("player");
const playerLS = JSON.parse(LS);
console.log(playerLS);

let d;
let Resultat;
const resultatDiv = document.querySelector("#result");

function diplayResultat() {
  resultatDiv.innerHTML = "";
  for (i = 0; i < playerLS.length; i++) {
    let pScore = document.createElement("p");
    pScore.innerText = `Score du joueur ${playerLS[i].nom}: ${playerLS[i].score}`;
    resultatDiv.appendChild(pScore);
  }
}

diplayResultat();

function chouette(d) {
  return (Resultat = d * d);
}

function velute(d) {
  return (Resultat = 2 * (d * d));
}

function culDeChouette(d) {
  return (Resultat = 40 + 10 * d);
}

let animationTour = document.querySelector(".animationTour");

let animationScore = document.querySelector("#modifScoreAnimation");

function hideClass() {
  animationTour.classList.remove("animationTourDisplay");
  animationScore.classList.remove("animationTourDisplay");
}

const validButton = document.querySelector("#valid");

function diplayPlayer() {
  const playerInput = document.getElementById("player");
  const playerInputModifier = document.getElementById("playerScore");
  for (i = 0; i < playerLS.length; i++) {
    let playerList = document.createElement("option");
    playerList.setAttribute("value", `${playerLS[i].nom}`);
    playerList.innerText = `${playerLS[i].nom}`;
    playerInput.appendChild(playerList);
  }
}

diplayPlayer();

function diplayPlayerModifier() {
  const playerInputModifier = document.getElementById("playerScore");
  for (i = 0; i < playerLS.length; i++) {
    let playerList = document.createElement("option");
    playerList.setAttribute("value", `${playerLS[i].nom}`);
    playerList.innerText = `${playerLS[i].nom}`;
    playerInputModifier.appendChild(playerList);
  }
}

diplayPlayerModifier();

function play() {
  validButton.addEventListener("click", function () {
    let dInputValue = document.querySelector("#dInput").value;
    let dInputValueNumber = parseInt(dInputValue, 10);
    const combinaisonInput = document.getElementById("combinaison");
    let combinaisonSelected = combinaisonInput.options[combinaisonInput.selectedIndex].value;
    const playerInput = document.getElementById("player");
    let playerSelected = playerInput.options[playerInput.selectedIndex].value;

    function calculResultat() {
      if (combinaisonSelected == "chouette") {
        chouette(dInputValueNumber);
      } else if (combinaisonSelected == "velute") {
        velute(dInputValue);
      } else if (combinaisonSelected == "cul de chouette") {
        culDeChouette(dInputValue);
      }
    }

    function scoreJoueur() {
      const findPlayer = playerLS.find((test) => test.nom == playerSelected);
      console.log(findPlayer);
      calculResultat();
      findPlayer.score = findPlayer.score + Resultat;
    }

    if (dInputValue == "") {
      alert("merci de mettre le jet de dé!");
    } else {
      scoreJoueur();
      animationTour.classList.add("animationTourDisplay");
      setTimeout(hideClass, 3500);
    }

    document.querySelector("#dInput").value = "";

    diplayResultat();

    winner();
  });
}

play();

let modifScoreButton = document.querySelector("#modifScoreButton");

function modifyScore() {
  modifScoreButton.addEventListener("click", function () {
    const playerInput = document.getElementById("playerScore");
    let playerSelected = playerInput.options[playerInput.selectedIndex].value;
    let scoreInput = document.getElementById("modifScore").value;
    let scoreInputNumber = parseInt(scoreInput);

    function modifyScoreJoueur() {
      const findPlayer = playerLS.find((test) => test.nom == playerSelected);
      findPlayer.score = findPlayer.score + scoreInputNumber;
    }

    modifyScoreJoueur();

    document.getElementById("modifScore").value = "";

    diplayResultat();

    animationScore.classList.add("animationTourDisplay");
    setTimeout(hideClass, 3500);

    winner();
  });
}

modifyScore();

function winner() {
  for (i = 0; i < playerLS.length; i++) {
    if (playerLS[i].score >= 343) {
      localStorage.clear();
      alert(`${playerLS[i].nom} remporte la partie!`);
      window.location.href = "../index.html";
    }
  }
}
