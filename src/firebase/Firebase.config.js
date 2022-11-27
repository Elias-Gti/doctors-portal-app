// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,

  // apiKey: "AIzaSyBhehPibMJ5TDE6i-I9rwjklRpewXzYoL0",
  // authDomain: "doctors-portal-app-3606b.firebaseapp.com",
  // projectId: "doctors-portal-app-3606b",
  // storageBucket: "doctors-portal-app-3606b.appspot.com",
  // messagingSenderId: "510665060909",
  // appId: "1:510665060909:web:b52f0c75c1eed1718cbea4"
};

// Initialize Firebase
const apps = initializeApp(firebaseConfig);
export default apps;