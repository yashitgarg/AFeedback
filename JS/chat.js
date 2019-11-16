var ref = database.ref('chats');
function save_chat(){
var data= {
	MIS: 111715051,
	Message: "aa gaya message",
	t2s: true,
	t_id: 101,
	timestamp: 0
}
ref.push(data);
console.log("hi");
}