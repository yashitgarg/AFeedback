	var semail;
	var nail;
    var qs = window.location.search;
    var search_params = new URLSearchParams(qs);
    var id = parseInt(search_params.get('id'));
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
  
			  semail=user;
			  //console.log(semail.email);
			  nail=semail.email;
			  //console.log(nail);
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
	//console.log(nail);
    function save_chat(){
    //console.log(id);
    db.collection('chats').add({
        Email: semail.email,
        Message: "7: 45 ho rhe hain",
        t2s: true,
        t_id: id,
        timestamp: Date.now()
	});   
	}

	//nail=semail.email;
	
db.collection('chats').orderBy('timestamp').get().then(snapshot => {
    setupchats(snapshot.docs);
  });

const chatList = document.querySelector('.chats');
const setupchats = (data) => {
		
    let ctml = '';
 	data.forEach(doc => {
	const chats = doc.data();
	var eake = chats.Email;
	//console.log(eake);
	//console.log(nail);

	if(eake==nail){
    //console.log(chats.Message);
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${chats.Email} </div></a>
        <div class="collapsible-body white"> ${chats.Message} </div>
        
      </li>
    `;
    ctml += li;
	}
 	});
  chatList.innerHTML = ctml;
}