// Récupérer les éléments du DOM
let formDepense = document.getElementById("formDepense");
let TitreDepenseError = document.getElementById("TitreDepenseError");
let MontantDepenseError = document.getElementById("MontantDepenseError");

formDepense.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupérer les valeurs des inputs
  let inputTitreDepense = document
    .getElementById("inputTitreDepense")
    .value.trim();
  let inputMontantDepense = document
    .getElementById("inputMontantDepense")
    .value.trim();

  // Réinitialiser les messages d'erreur
  TitreDepenseError.textContent = "";
  MontantDepenseError.textContent = "";

  // Validation des champs
  let validation = true;

  // Vérifier le titre de la dépense
  if (inputTitreDepense === "") {
    TitreDepenseError.textContent = "Le titre est requis.";
    validation = false;
  }

  // Vérifier le montant de la dépense
  if (
    inputMontantDepense === "" ||
    isNaN(inputMontantDepense) ||
    parseInt(inputMontantDepense) < 0
  ) {
    MontantDepenseError.textContent = "Le montant doit être positif.";
    validation = false;
  }

  // Si les champs sont valides, on ajoute la dépense
  if (validation) {
    // Créer un objet dépense
    let newDepense = {
      titre: inputTitreDepense,
      montant: parseInt(inputMontantDepense),
    };

    // Charger les dépenses existantes depuis localStorage
    let depenses = JSON.parse(localStorage.getItem("depenses")) || [];

    // Ajouter la nouvelle dépense au tableau
    depenses.push(newDepense);

    // Sauvegarder les dépenses mises à jour dans localStorage
    localStorage.setItem("depenses", JSON.stringify(depenses));

    // Afficher un message de succès
    alert("Dépense ajoutée avec succès !");

    // Réinitialiser le formulaire après ajout
    formDepense.reset();

    // Rediriger vers la page principale
    window.location.href = "index.html";
  }
});
