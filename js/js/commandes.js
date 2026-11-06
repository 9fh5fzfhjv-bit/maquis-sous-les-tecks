import { database } from "./firebase.js";

import {

  ref,

  push,

  set

} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

export async function envoyerCommande(commande) {

  const commandesRef = ref(database, "commandes");

  const nouvelleCommande = push(commandesRef);

  await set(nouvelleCommande, {

    ...commande,

    date: new Date().toISOString(),

    statut: "En attente"

  });

}
