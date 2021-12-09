// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyADJmIVxq5r1sZ-79qDiSEYtTVhkG9pa14",
  
    authDomain: "kwitter-app-5b1bd.firebaseapp.com",
  
    databaseURL: "https://kwitter-app-5b1bd-default-rtdb.firebaseio.com",
  
    projectId: "kwitter-app-5b1bd",
  
    storageBucket: "kwitter-app-5b1bd.appspot.com",
  
    messagingSenderId: "994000979495",
  
    appId: "1:994000979495:web:c81012c39001d3f2733002",
  
    measurementId: "${config.measurementId}"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
