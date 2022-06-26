import firebase from 'firebase';

// add SDK Firebase
 const firebaseConfig = {
        apiKey: "AIzaSyBO56U-3ZfXbrGOLREkBkuQ6tGPFG5dscs",
        authDomain: "voting-app-f7698.firebaseapp.com",
        projectId: "voting-app-f7698",
        storageBucket: "voting-app-f7698.appspot.com",
        messagingSenderId: "757077991869",
        appId: "1:757077991869:web:e59f67c4f38cdaa12af2d4"
      };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();