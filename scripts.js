// Fonction pour charger les dépenses depuis localStorage et les afficher dans le tableau
function loadDepenses() {
  const depenses = JSON.parse(localStorage.getItem("depenses")) || [];
  const tableBodyDepense = document.getElementById("list-depense");

  // Vider le tableau avant de le remplir avec les nouvelles dépenses
  tableBodyDepense.innerHTML = ""; // Réinitialiser le contenu du tableau

  // Ajouter les dépenses dans le tableau
  depenses.forEach((depense, index) => {
    let newRow = document.createElement("tr");

    let titreCellule = document.createElement("td");
    titreCellule.textContent = depense.titre;
    newRow.appendChild(titreCellule);

    let montantCellule = document.createElement("td");
    montantCellule.textContent = depense.montant + " .00 FCFA";
    newRow.appendChild(montantCellule);

    // Créer la cellule pour l'action (supprimer)
    let deleteCellule = document.createElement("td");
    let delButton = document.createElement("button");
    delButton.textContent = "Supprimer";
    delButton.classList.add("delete-btn");
    deleteCellule.appendChild(delButton);
    newRow.appendChild(deleteCellule);

    // Ajouter l'événement de suppression
    delButton.addEventListener("click", function () {
      // Supprimer la dépense du tableau
      depenses.splice(index, 1);

      // Mettre à jour localStorage après suppression
      localStorage.setItem("depenses", JSON.stringify(depenses));

      // Recharger la page pour afficher les changements
      loadDepenses();
    });

    tableBodyDepense.appendChild(newRow);
  });

  // Ajouter la ligne "AJOUTER DEPENSE" en dernier
  let addRow = document.createElement("tr");

  let titreAddCellule = document.createElement("td");
  titreAddCellule.colSpan = 3; // Faire en sorte que la cellule occupe toute la ligne
  titreAddCellule.innerHTML = `
    <span>AJOUTER DEPENSE</span>
    <a href="depenses.html">
      <i class="ri-add-circle-line"></i>
    </a>
  `;
  addRow.appendChild(titreAddCellule);

  tableBodyDepense.appendChild(addRow);

  // Mettre à jour la fonction loadDepenses pour afficher le total après le chargement
  afficherTotalDepenses();
}

// Fonction pour calculer la somme des dépenses
function calculateTotalDepenses() {
  const depenses = JSON.parse(localStorage.getItem("depenses")) || [];
  return depenses.reduce((total, depense) => total + depense.montant, 0);
}

// Fonction pour afficher la somme des dépenses dans le tableau
function afficherTotalDepenses() {
  const totalDepenses = calculateTotalDepenses();
  const totalDepensesElement = document.getElementById("TotalDepenses");

  // Vider le contenu précédent
  totalDepensesElement.innerHTML = "";

  // Créer une nouvelle ligne pour afficher le total
  const newRow = document.createElement("tr");
  const totalCellDepense = document.createElement("td");
  totalCellDepense.textContent = totalDepenses + ".00 FCFA"; // Afficher le total
  newRow.appendChild(totalCellDepense);
  totalDepensesElement.appendChild(newRow);
}

// Charger les dépenses lorsqu'on accède à la page
document.addEventListener("DOMContentLoaded", function () {
  loadDepenses();
});

// Fonction pour charger les revenus depuis localStorage et les afficher dans le tableau
function loadRevenus() {
  const revenus = JSON.parse(localStorage.getItem("revenus")) || [];
  const tableBodyRevenu = document.getElementById("list-revenus");
  // Vider le tableau avant de le remplir avec les nouvelles revenus
  tableBodyRevenu.innerHTML = ""; // Réinitialiser le contenu du tableau

  // Ajouter les revenus dans le tableau
  revenus.forEach((revenu, index) => {
    let NewRow = document.createElement("tr");

    let TitreCellule = document.createElement("td");
    TitreCellule.textContent = revenu.titre;
    NewRow.appendChild(TitreCellule);

    let MontantCellule = document.createElement("td");
    MontantCellule.textContent = revenu.montant + ".00 FCFA";
    NewRow.appendChild(MontantCellule);

    // Créer la cellule pour l'action (supprimer)

    let DeleteCellule = document.createElement("td");
    let DelButton = document.createElement("button");
    DelButton.textContent = "Supprimer";
    DelButton.classList.add("delete-btn");
    DeleteCellule.appendChild(DelButton);
    NewRow.appendChild(DeleteCellule);

    // Ajouter l'événement de suppression
    DelButton.addEventListener("click", function () {
      // Supprimer le revenu du tableau
      revenus.splice(index, 1);

      // Mettre à jour localStorage après suppression
      localStorage.setItem("revenus", JSON.stringify(revenus));

      // Recharger la page pour afficher les changements
      loadRevenus();
    });
    tableBodyRevenu.appendChild(NewRow);
  });
  // Ajouter la ligne "AJOUTER REVENU" en dernier
  let AddRow = document.createElement("tr");

  let TitreAddCellule = document.createElement("td");
  TitreAddCellule.colSpan = 3; // Faire en sorte que la cellule occupe toute la ligne
  TitreAddCellule.innerHTML = ` 
     <span>AJOUTER REVENU</span>
    <a href="revenus.html">
      <i class="ri-add-circle-line"></i>
    </a>
  `;
  AddRow.appendChild(TitreAddCellule);

  tableBodyRevenu.appendChild(AddRow);

  // Mettre à jour la fonction loadRevenus pour afficher le total après le chargement
  afficherTotalRevenus();
}

// Fonction pour calculer la somme des revenus
function calculateTotalRevenus() {
  const revenus = JSON.parse(localStorage.getItem("revenus")) || [];
  return revenus.reduce((total, revenu) => total + revenu.montant, 0);
}

// Fonction pour afficher la somme des reven dans le tableau
function afficherTotalRevenus() {
  const totalRevenus = calculateTotalRevenus();
  const totalRevenusElement = document.getElementById("budget");

  // Vider le contenu précédent
  totalRevenusElement.innerHTML = "";

  // Créer une nouvelle ligne pour afficher le total
  const newRow = document.createElement("tr");
  const totalCellRevenu = document.createElement("td");
  totalCellRevenu.textContent = totalRevenus + ".00 FCFA"; // Afficher le total
  newRow.appendChild(totalCellRevenu);
  totalRevenusElement.appendChild(newRow);
}

// Charger les revenus lorsqu'on accède à la page
document.addEventListener("DOMContentLoaded", function () {
  loadRevenus();
});

// Fonction pour calculer et afficher le solde
function afficherSolde() {
  const totalRevenus = calculateTotalRevenus();
  const totalDepenses = calculateTotalDepenses();
  const soldeElement = document.getElementById("solde");
  // Vider le contenu précédent
  soldeElement.innerHTML = "";

  if (totalRevenus >= totalDepenses) {
    // Créer une nouvelle ligne pour afficher le total
    const newRow = document.createElement("tr");
    const solde = document.createElement("td");
    solde.textContent = totalRevenus - totalDepenses + ".00 FCFA"; // Afficher le solde
    newRow.appendChild(solde);
    soldeElement.appendChild(newRow);
  } else {
    alert("Votre Buget est insuffisant");
    const newRow = document.createElement("tr");
    const solde = document.createElement("td");
    solde.innerHTML = `Vous avez une dette de <br> ${
      -totalRevenus + totalDepenses
    } .00 FCFA`; // Afficher le solde
    
    newRow.appendChild(solde);
    soldeElement.appendChild(newRow);
  }
}

// Charger le solde lorsqu'on accède à la page
document.addEventListener("DOMContentLoaded", function () {
  afficherSolde();
});
