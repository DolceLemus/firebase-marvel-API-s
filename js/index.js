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
    $("#login").click(function(){
        console.log("Boton login clicleado");
        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(function(error){
           alert(error.message);
        })
        
    })
    $("#logout").click(function () {
        console.log("Boton logout licleado");
        firebase.auth().signOut();
    })

    $("#signup").click(function () {
        console.log("Boton Signup clicleado");
        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function(error){
           alert(error.message);
        })
    
    })

    firebase.auth().onAuthStateChanged(function(user){
    console.log("checking login state");
        if(user){   
        console.log("logged in");
        $("#user").text(user.email);
        window.location = "../app.html";
        } else {
            console.log("logged out");
            $("#user").text("");
        }
    })
});