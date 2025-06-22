// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMWEcq3zpbZBT76Nfwf5uixjRlf01j0PM",
  authDomain: "auth-integration-a3ff6.firebaseapp.com",
  projectId: "auth-integration-a3ff6",
  storageBucket: "auth-integration-a3ff6.firebasestorage.app",
  messagingSenderId: "428255778147",
  appId: "1:428255778147:web:53d686866f5f2c9592af56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);