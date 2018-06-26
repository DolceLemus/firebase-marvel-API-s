  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDOF8VRnLvyXPcuza0Yms_IrvZLY6es9lk",
    authDomain: "clase-firebase-levhita.firebaseapp.com",
    databaseURL: "https://clase-firebase-levhita.firebaseio.com",
    projectId: "clase-firebase-levhita",
    storageBucket: "clase-firebase-levhita.appspot.com",
    messagingSenderId: "657291457894"
  };
  firebase.initializeApp(config);


$(document).ready(function(){
    console.log("pagina cargada");

    $("#logout").click(function () {
        console.log("Boton logout licleado");
        firebase.auth().signOut();
    })

    firebase.auth().onAuthStateChanged(function(user){
    console.log("checking login state");
        if(user){   
        console.log("logged in");
       $("#user").text(user.email);
        } else {
            console.log("logged out");
            window.location="../index.html";
        }
    })
});