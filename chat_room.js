var firebaseConfig = {
      apiKey: "AIzaSyCByqECiHtQfJqBgmgSsTfqLAh2B8NVAi0",
      authDomain: "kwitter-79785.firebaseapp.com",
      databaseURL: "https://kwitter-79785-default-rtdb.firebaseio.com",
      projectId: "kwitter-79785",
      storageBucket: "kwitter-79785.appspot.com",
      messagingSenderId: "935038270157",
      appId: "1:935038270157:web:198274daa45d708483c784",
      measurementId: "${config.measurementId}"
};
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
