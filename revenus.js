// // Récupérer les éléments du DOM
// let formRevenu = document.getElementById("formRevenu");
// let TitreRevenuError = document.getElementById("TitreRevenuError");
// let MontantRevenuError = document.getElementById("MontantRevenuError");

// formRevenu.addEventListener("submit", function (event) {
//   event.preventDefault(); // Empêche la soumission normale du formulaire et le rechargement de la page

//   // Récupérer les valeurs des inputs
//   let inputTitreRevenu = document
//     .getElementById("inputTitreRevenu")
//     .value.trim();
//   let inputMontantRevenu = document
//     .getElementById("inputMontantRevenu")
//     .value.trim();

//   // Réinitialiser les messages d'erreur
//   TitreRevenuError.textContent = "";
//   MontantRevenuError.textContent = "";

//   // Validation des champs
//   let validation = true;

//   // Vérifier le titre du revenu
//   if (inputTitreRevenu === "") {
//     TitreRevenuError.textContent = "Le titre est requis.";
//     validation = false;
//   }

//   // Vérifier le montant du revenu
//   if (
//     inputMontantRevenu === "" ||
//     isNaN(inputMontantRevenu) ||
//     parseInt(inputMontantRevenu) <= 0
//   ) {
//     MontantRevenuError.textContent = "Le montant doit être un nombre positif.";
//     validation = false;
//   }

//   // Si les champs sont valides, on ajoute le revenu
//   if (validation) {
//     // Créer un objet revenu
//     let newRevenu = {
//       titre: inputTitreRevenu,
//       montant: parseInt(inputMontantRevenu),
//     };

//     // Charger les revenus existants depuis localStorage
//     let revenus = JSON.parse(localStorage.getItem("revenus")) || [];

//     // Ajouter le nouveau revenu au tableau
//     revenus.push(newRevenu);

//     // Sauvegarder les revenus mises à jour dans localStorage
//     localStorage.setItem("revenus", JSON.stringify(revenus));

//     // Afficher un message de succès
//     alert("Revenu ajouté avec succès !");

//     // Réinitialiser le formulaire après ajout
//     formRevenu.reset();

//     // Rediriger vers la page principale
//     window.location.href = "index.html"; // Remplacez par l'URL de votre page principale
//   }
// });

// Récupérer les éléments du DOM
let formRevenu = document.getElementById("formRevenu");
let TitreRevenuError = document.getElementById("TitreRevenuError");
let MontantRevenuError = document.getElementById("MontantRevenuError");
let btnAjoutRevenus = document.getElementById("btnAjoutRevenus");

btnAjoutRevenus.addEventListener("click", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupérer les valeurs des inputs
  let inputTitreRevenu = document
    .getElementById("inputTitreRevenu")
    .value.trim();
  let inputMontantRevenu = document
    .getElementById("inputMontantRevenu")
    .value.trim();

  // Réinitialiser les messages d'erreur
  TitreRevenuError.textContent = "";
  MontantRevenuError.textContent = "";

  // Validation des champs
  let validation = true;

  // Vérifier le titre du revenu
  if (inputTitreRevenu === "") {
    TitreRevenuError.textContent = "Le titre est requis.";
    validation = false;
  }

  // Vérifier le montant du revenu
  if (
    inputMontantRevenu === "" ||
    isNaN(inputMontantRevenu) ||
    parseInt(inputMontantRevenu) < 0
  ) {
    MontantRevenuError.textContent =
      "Le montant doit être un nombre positif et non nul.";
    validation = false;
  }

  // Si les champs sont valides, on ajoute le revenu
  if (validation) {
    // Créer un objet revenu
    let newRevenu = {
      titre: inputTitreRevenu,
      montant: parseInt(inputMontantRevenu),
    };

    // Charger les revenus existants depuis localStorage
    let revenus = JSON.parse(localStorage.getItem("revenus")) || [];

    // Ajouter le nouveau revenu au tableau
    revenus.push(newRevenu);

    // Sauvegarder les revenus mis à jour dans localStorage
    localStorage.setItem("revenus", JSON.stringify(revenus));

    // Afficher un message de succès
    alert("Revenu ajouté avec succès !");

    // Réinitialiser le formulaire après ajout
    formRevenu.reset();

    // Rediriger vers la page principale
    window.location.href = "index.html";
  }
});
