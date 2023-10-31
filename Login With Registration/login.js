import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword }  from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA2FHdPmciDepMuSGvfjlMXLzVP2u0FLj8",
    authDomain: "trendy-auth.firebaseapp.com",
    databaseURL: "https://trendy-auth-default-rtdb.firebaseio.com",
    projectId: "trendy-auth",
    storageBucket: "trendy-auth.appspot.com",
    messagingSenderId: "1098155513806",
    appId: "1:1098155513806:web:3cf3d13be6f0292884fd9f",
    measurementId: "G-9TDD84MPWK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  document.getElementById("login-btn").addEventListener('click', function(){
        const email = document.getElementById(email).value;
        const password =document.getElementById(password).value;



    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  })

