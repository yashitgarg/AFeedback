var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyBmVAM9oX8XWmlkky6QO9CTYcaGeYmHAiA",
    authDomain: "btp-project-40a66.firebaseapp.com",
    databaseURL: "https://btp-project-40a66.firebaseio.com",
    projectId: "btp-project-40a66",
    storageBucket: "btp-project-40a66.appspot.com",
    messagingSenderId: "407998235441",
    appId: "1:407998235441:web:b9720ad604a255dec1a610",
    measurementId: "G-52BRM0QQFN"
  };

  firebase.initializeApp(config);

  const auth = firebase.auth();
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });
if(!hasInit){
    //firebase.initializeApp(config);
    hasInit = true;
}


