
    window.onload = async () => {
        let Table; // La grille de jeu
        let TableGUI = document.querySelector("#table"); // Référence à l'élément HTML de la grille
        let buttonsDiv = document.querySelector(".buttons"); // Référence aux boutons de jeton
        let currPlayer = "R"; // Le joueur actuel (R pour Player 1, Y pour Player 2)
       
        // Lors du clic sur le bouton de configuration
        document.querySelector("#setup").addEventListener("click", () => {
          console.log("cliqué");
          // Récupère le nombre de lignes et de colonnes du formulaire
          rows = parseInt(document.querySelector("#rows").value);
          columns = parseInt(document.querySelector("#columns").value);
          // Configure le jeu avec le nombre de lignes et de colonnes
          setup(rows, columns);
        });
       
        // Fonction qui configure la grille de jeu
        function setup(rows, columns) {
          // Crée une matrice vide (la grille de jeu)
          Table = new Array(rows);
          for (let i = 0; i < rows; i++) {
            Table[i] = new Array(columns).fill(0); // Remplie la grille de 0 (case vide)
          }
          TableGUI.innerHTML = ""; // Vide l'affichage de la grille
          let rowHTML = ""; // HTML de base pour une ligne
          buttonsDiv.innerHTML = ""; // Vide les boutons de jetons
       
          // Crée une ligne vide d'éléments (cases) et des boutons pour chaque colonne
          for (let i = 0; i < columns; i++) {
            rowHTML += "<div class='case'></div>"; // Crée une case vide
            buttonsDiv.innerHTML += "<div class='jeton R'></div>"; // Crée un bouton pour le jeton R
          }
          // Ajoute les lignes à l'affichage de la grille
          for (let i = 0; i < rows; i++) {
            TableGUI.innerHTML += "<div class='row'>" + rowHTML + "</div>";
          }
       
          // Ajoute des écouteurs d'événements aux boutons de jetons
          document.querySelectorAll(".buttons>div").forEach((button, index) => {
            button.addEventListener("click", () => {
              // Place le jeton dans la colonne choisie
              placeCoin(currPlayer, index);
              // Vérifie si un joueur a gagné après ce coup
              if (checkWinner()) {
                alert(currPlayer === "R" ? "Le Player 1 gagne !" : "Le Player 2 gagne !");
              } else if (isBoardFull()) {
                alert("Match nul !");
              }
              // Change de joueur
              nextPlayer();
            });
          });
        }
       
        // Configure la grille par défaut (6 lignes, 7 colonnes)
        window.onload = setup(6, 7);
       
        // Change le joueur actuel après chaque coup
        function nextPlayer() {
          // Si c'est le joueur "R", c'est au joueur "Y" de jouer et vice versa
          currPlayer == "R" ? (currPlayer = "Y") : (currPlayer = "R");
          // Met à jour l'apparence des boutons de jeton pour refléter le joueur actuel
          document.querySelectorAll(".buttons>div").forEach((button) => {
            if (currPlayer == "R") {
              button.classList.replace("Y", "R");
            } else {
              button.classList.replace("R", "Y");
            }
          });
        }
       
        // Place un jeton dans la colonne choisie
        function placeCoin(coin, column) {
          let isPlaced = false; // Indique si le jeton a été placé
          // Parcourt la colonne de bas en haut
          for (let i = Table.length - 1; i >= 0; i--) {
            if (!isPlaced) {
              // Si la case est vide (valeur 0), place le jeton
              if (Table[i][column] == 0) {
                Table[i][column] = coin;
                let cellGUI = document
                  .querySelectorAll("div.row")
                  [i].querySelectorAll("div")[column];
                // Met à jour l'apparence de la case avec le jeton
                cellGUI.classList.remove("case");
                cellGUI.classList.add("jeton");
                cellGUI.classList.add(coin);
                isPlaced = true;
              }
            }
          }
          if (!isPlaced) {
            console.log("Plus de Place"); // Si aucune case n'est libre dans la colonne
          }
        }
       
        // Fonction qui vérifie si un joueur a gagné
        function checkWinner() {
          // Parcours chaque case de la grille
          for (let row = 0; row < Table.length; row++) {
            for (let col = 0; col < Table[row].length; col++) {
              // Si la case n'est pas vide
              if (Table[row][col] !== 0) {
                // Vérifie horizontalement (4 jetons consécutifs)
                if (col + 3 < Table[row].length &&
                  Table[row][col] === Table[row][col + 1] &&
                  Table[row][col] === Table[row][col + 2] &&
                  Table[row][col] === Table[row][col + 3]) {
                  return true;
                }
                // Vérifie verticalement (4 jetons consécutifs)
                if (row + 3 < Table.length &&
                  Table[row][col] === Table[row + 1][col] &&
                  Table[row][col] === Table[row + 2][col] &&
                  Table[row][col] === Table[row + 3][col]) {
                  return true;
                }
                // Vérifie diagonale descendante (4 jetons consécutifs)
                if (row + 3 < Table.length && col + 3 < Table[row].length &&
                  Table[row][col] === Table[row + 1][col + 1] &&
                  Table[row][col] === Table[row + 2][col + 2] &&
                  Table[row][col] === Table[row + 3][col + 3]) {
                  return true;
                }
                // Vérifie diagonale montante (4 jetons consécutifs)
                if (row - 3 >= 0 && col + 3 < Table[row].length &&
                  Table[row][col] === Table[row - 1][col + 1] &&
                  Table[row][col] === Table[row - 2][col + 2] &&
                  Table[row][col] === Table[row - 3][col + 3]) {
                  return true;
                }
              }
            }
          }
          return false; // Retourne false si aucun joueur n'a gagné
        }
       
        // Vérifie si la grille est pleine
        function isBoardFull() {
          // Parcourt chaque case de la grille
          for (let row = 0; row < Table.length; row++) {
            for (let col = 0; col < Table[row].length; col++) {
              if (Table[row][col] === 0) { // Si une case est vide, retourne false
                return false;
              }
            }
          }
          return true; // Si aucune case n'est vide, retourne true
        }
      };