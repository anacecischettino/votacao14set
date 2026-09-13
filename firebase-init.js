// Configuracao do SEU projeto Firebase.
// Onde encontrar: Firebase Console > (icone de engrenagem) Configuracoes
// do projeto > aba "Geral" > secao "Seus aplicativos" > app Web > "SDK
// setup and configuration" > opcao "Config".
// Esses valores NAO sao secretos - fazem parte normal de qualquer app
// web que usa Firebase e podem ficar visiveis no codigo do site.
const firebaseConfig = {
  apiKey: "AIzaSyCoZ-H6dfDD4f1EsF5WiT3tl_qMEvjRhkw",
  authDomain: "vote-eb7ad.firebaseapp.com",
  projectId: "vote-eb7ad",
  storageBucket: "vote-eb7ad.firebasestorage.app",
  messagingSenderId: "468128761638",
  appId: "1:468128761638:web:2516bfe1560b009cf7e3e7",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
