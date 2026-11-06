import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";

import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

const firebaseConfig = {

  apiKey: "AIzaSyAFSnyV4wOvx3tA5YnKHsiC_lfb1p3BVa8",

  authDomain: "maquis-sous-les-tecks.firebaseapp.com",

  databaseURL: "https://maquis-sous-les-tecks-default-rtdb.firebaseio.com",

  projectId: "maquis-sous-les-tecks",

  storageBucket: "maquis-sous-les-tecks.firebasestorage.app",

  messagingSenderId: "344256282427",

  appId: "1:344256282427:web:10e90f6acc846d8cb8c11e"

};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { app, database };
