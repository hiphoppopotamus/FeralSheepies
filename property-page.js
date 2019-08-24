var db = firebase.firestore();

function add(address, description, rating){
	db.collection("properties").doc(address).set({
    description: description,
    rating: rating
	}).then(function() {
    console.log("Document successfully written!");
	})
	.catch(function(error) {
    console.error("Error writing document: ", error);
	});
}