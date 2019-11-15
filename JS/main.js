db.collection('students').get().then(snapshot => {
  setupGuides(snapshot.docs);
});
db.collection('Teachers').get().then(snapshot => {
  setupTeachers(snapshot.docs);
});

var mainApp = {};
(function(){
var mainContainer = document.getElementById("main_container");

    var logtout =  function(){
        firebase.auth().signOut().then(function(){
            console.log('success');
            window.location.replace("login.html");
        },function(){})
    }

var init = function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          //console.log("stay");
          mainContainer.style.display = "";
        } else {
          // No user is signed in.
          mainContainer.style.display = "none";
          console.log("redirect");
          window.location.replace("login.html");
        }
      });
}
//var firetext = document.getElementById("test");
var firebaseText=firebase.database().ref('students');
firebaseText.on('value', gotData, errData);
function gotData(data){
  console.log(data);
}

function errData(err){
  console.log("Error");
  console.log(err);
}

//console.log(firebaseText);

init();

mainApp.logout = logtout;
})();