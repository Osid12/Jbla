<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBh2xBkIbPGBUjfJh6yMTA6uszaXBF5vZQ",
    authDomain: "j-blast-auth.firebaseapp.com",
    projectId: "j-blast-auth",
    storageBucket: "j-blast-auth.firebasestorage.app",
    messagingSenderId: "314517084451",
    appId: "1:314517084451:web:1875e69113f26e7db31496",
    measurementId: "G-DGG5LVTNEF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>