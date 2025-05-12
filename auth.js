// auth.js - handles Firebase Authentication for login and register
import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 
'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

// Registration form
const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registration successful
        alert('User registered: ' + userCredential.user.email);
        window.location.href = 'login.html';
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}

// Login form
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful
        alert('Logged in as: ' + userCredential.user.email);
        window.location.href = 'index.html';
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}
