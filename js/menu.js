

import { database } from "./firebase.js";

import {

  ref,

  push,

  set,

  onValue

} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

// Référence vers le menu dans Firebase

const menuRef = ref(database, "menu");

// Récupération des éléments HTML

const nomInput = document.getElementById("nom");

const prixInput = document.getElementById("prix");

const descriptionInput = document.getElementById("description");

const boutonAjouter = document.getElementById("ajouter");

const listePlats = document.getElementById("liste-plats");

// Ajouter un plat

boutonAjouter.addEventListener("click", async () => {

  const nom = nomInput.value.trim();

  const prix = Number(prixInput.value);

  const description = descriptionInput.value.trim();

  if (!nom || !prixInput.value || !Number.isFinite(prix) || prix <= 0) {

    alert("Veuillez saisir un nom et un prix valide.");

    return;

  }

  try {

    const nouveauPlat = push(menuRef);

    await set(nouveauPlat, {

      nom: nom,

      prix: prix,

      description: description,

      disponible: true

    });

    alert("Plat ajouté avec succès !");

    nomInput.value = "";

    prixInput.value = "";

    descriptionInput.value = "";

  } catch (erreur) {

    console.error(erreur);

    alert("Erreur lors de l'ajout du plat.");

  }

});

// Afficher les plats enregistrés

onValue(menuRef, (snapshot) => {

  listePlats.replaceChildren();

  const plats = snapshot.val();

  if (!plats || typeof plats !== "object") {

    listePlats.textContent = "Aucun plat enregistré pour le moment.";

    return;

  }

  Object.values(plats).forEach((plat) => {

    if (!plat || typeof plat !== "object" || !plat.nom) return;

    const carte = document.createElement("div");

    carte.className = "plat";

    const nom = document.createElement("h3");

    nom.textContent = plat.nom;

    const prix = document.createElement("p");

    prix.className = "prix";

    prix.textContent = Number(plat.prix).toLocaleString("fr-FR") + " FCFA";

    const description = document.createElement("p");

    description.textContent = plat.description || "Aucune description";

    carte.append(nom, prix, description);

    listePlats.appendChild(carte);

  });

});
