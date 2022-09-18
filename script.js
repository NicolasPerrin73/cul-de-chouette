let d;

let scoreJ1 = 0;
let scoreJ2 = 0;
let scoreJ3 = 0;
let scoreJ4 = 0;

let Resultat;

let spanScoreP1 = document.querySelector("#scoreP1");
let spanScoreP2 = document.querySelector("#scoreP2");
let spanScoreP3 = document.querySelector("#scoreP3");
let spanScoreP4 = document.querySelector("#scoreP4");

spanScoreP1.innerText = scoreJ1;
spanScoreP2.innerText = scoreJ2;
spanScoreP3.innerText = scoreJ3;
spanScoreP4.innerText = scoreJ4;

function chouette(d) {
  return (Resultat = d * d);
}

function velute(d) {
  return (Resultat = 2 * (d * d));
}

function culDeChouette(d) {
  return (Resultat = 40 + 10 * d);
}

const validButton = document.querySelector("#valid");

validButton.addEventListener("click", function () {
  let dInputValue = document.querySelector("#dInput").value;
  let dInputValueNumber = parseInt(dInputValue, 10);
  console.log(dInputValueNumber);
  const combinaisonInput = document.getElementById("combinaison");
  let combinaisonSelected = combinaisonInput.options[combinaisonInput.selectedIndex].value;
  console.log(combinaisonSelected);
  const playerInput = document.getElementById("player");
  let playerSelected = playerInput.options[playerInput.selectedIndex].value;
  console.log(playerSelected);

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
    if (playerSelected == "player1") {
      calculResultat();
      scoreJ1 = Resultat + scoreJ1;
    } else if (playerSelected == "player2") {
      calculResultat();
      scoreJ2 = Resultat + scoreJ2;
    } else if (playerSelected == "player3") {
      calculResultat();
      scoreJ3 = Resultat + scoreJ3;
    } else if (playerSelected == "player4") {
      calculResultat();
      scoreJ4 = Resultat + scoreJ4;
    }
  }

  scoreJoueur();

  spanScoreP1.innerText = scoreJ1;
  spanScoreP2.innerText = scoreJ2;
  spanScoreP3.innerText = scoreJ3;
  spanScoreP4.innerText = scoreJ4;
});

let modifScoreButton = document.querySelector("#modifScoreButton");

modifScoreButton.addEventListener("click", function () {
  const playerInput = document.getElementById("playerScore");
  let playerSelected = playerInput.options[playerInput.selectedIndex].value;
  let scoreInput = document.getElementById("modifScore").value;
  let scoreInputNumber = parseInt(scoreInput);

  function scoreJoueur() {
    if (playerSelected == "player1") {
      scoreJ1 = scoreInputNumber + scoreJ1;
    } else if (playerSelected == "player2") {
      scoreJ2 = scoreInputNumber + scoreJ2;
    } else if (playerSelected == "player3") {
      scoreJ3 = scoreInputNumber + scoreJ3;
    } else if (playerSelected == "player4") {
      scoreJ4 = scoreInputNumber + scoreJ4;
    }
  }

  scoreJoueur();

  spanScoreP1.innerText = scoreJ1;
  spanScoreP2.innerText = scoreJ2;
  spanScoreP3.innerText = scoreJ3;
  spanScoreP4.innerText = scoreJ4;

  alert("score modifier");
});
