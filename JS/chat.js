    var semail;
    var qs = window.location.search;
    var search_params = new URLSearchParams(qs);
    var id = parseInt(search_params.get('id'));
   // initialInput = createInput("initials");


    function save_chat(){
    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    semail = user;
  } else {
    // No user is signed in.
  }
});
    //console.log(semail.email); 
    //console.log(id);
    db.collection('chats').add({
        Email: semail.email,
        Message: "7: 45 ho rhe hain",
        t2s: true,
        t_id: id,
        timestamp: Date.now()
    })
    
    //var mystr=window.location
    
}