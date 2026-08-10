const firebaseConfig = {
  apiKey: "AIzaSyAjOSPJVsEzbgTWxWXwrOZpdHzdMai-CI",
  authDomain: "agentrouter-9c9df.firebaseapp.com",
  projectId: "agentrouter-9c9df",
  storageBucket: "agentrouter-9c9df.firebasestorage.app",
  messagingSenderId: "152852199619",
  appId: "1:152852199619:web:8a60e89492ffea32ec4a76"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const COLLECTION = "generated_entries";
