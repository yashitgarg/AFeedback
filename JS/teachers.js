var tvalue=1;
db.collection('students').get().then(snapshot => {
    setupGuides(snapshot.docs);
  });
  
  db.collection('Teachers').get().then(snapshot => {
    setupTeachers(snapshot.docs);
  });
  var cuser;
  var mainApp = {};
  (function(){
  var mainContainer = document.getElementById("main_container");
  
      var logtout =  function(){
          firebase.auth().signOut().then(function(){
              //console.log('success');
              window.location.replace("login.html");
          },function(){})
      }
  
  var init = function(){
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            //console.log(user.email);

            cuser=user;
            //console.log(cuser.Email);
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
    //console.log(data);
  }
  
  function errData(err){
    console.log("Error");
    console.log(err);
  }
  
  //console.log(firebaseText);
  
  init();
  
  mainApp.logout = logtout;
  })();



  // DOM elements
const guideList = document.querySelector('.guides');

const TeachersList = document.querySelector('.Teachers');

var ib_code;


//console.log(FirebaseAuth.getInstance().getCurrentUser());
// setup guides
const setupGuides = (data) => {

  let html = '';
  data.forEach(doc => {
    const students = doc.data();
    var take = students.Email;
    if(take==cuser.email)
    {
        var test = students.MIS;
       // console.log(students.MIS);
        ib_code=parseInt(test/1000)-110000;
    }
    //var check = parseInt(${students.MIS}/1000) - 110000;
    //console.log(typeof(cuser.email));
    //console.log(cuser.email);
    
    /*const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${students.Name} </div>
        <div class="collapsible-body white"> ${students.MIS} </div>
        <div class="collapsible-body white"> ${students.Email} </div>
      </li>
    `;*/
   // html += li;
  });
  guideList.innerHTML = html

};

const setupTeachers = (data) => {

  let ktml = '';
  data.forEach(doc => {
    const Teachers = doc.data();
    //var check = parseInt(${students.MIS}/1000) - 110000;
    if(Teachers.b_code==ib_code)
    {
    //if(Teachers.b-code==check)
    //{
       // console.log(ib_code);
    const li = `
      <li>
        <a href = "chat.html" onclick = 'stvalue(${Teachers.t_id})'> <div class="collapsible-header grey lighten-4"> ${Teachers.Name} </div></a>
        <div class="collapsible-body white"> ${Teachers.course} </div>
        
      </li>
    `;
    ktml += li;
  //}
    }
  });
  TeachersList.innerHTML = ktml

};

function stvalue(data){
tvalue = data;
console.log(tvalue);
}

// setup materialize components
/*document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});*/