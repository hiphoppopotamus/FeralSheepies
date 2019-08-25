var db = firebase.firestore().collection("properties");
const consumerKey = "1B2E786547417FF7CBD9369EBBB1554E";
const consumerSecret = "BB272A71148EBDB97016DF8301B3FA28";
//var request = require('request');

function add(address, description, rating){
	db.doc(address).set({
    description: description,
    rating: rating
	}).then(function() {
    console.log("Document successfully written!");
	})
	.catch(function(error) {
    console.error("Error writing document: ", error);
	});
}

function readAddress(address){
	var docRef = db.doc(address);
	docRef.get().then(function(doc) {
		if (doc.exists) {
				document.getElementById("address1").innerHTML = doc.data().address;
				console.log("Document data:", doc.data());
		} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
		}
	}).catch(function(error) {
    console.log("Error getting document:", error);
	});
}

function readAll(){
	db.get().then(function(doc) {
		if (doc.exists) {
				document.getElementById("address1").innerHTML = doc.key();
				console.log("Document data:", doc.data());
		} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
		}
	}).catch(function(error) {
    console.log("Error getting document:", error);
	});
}

/*function readTrademe(){
	const request_region_data = {
   // Get the regions with rentals listed.
   url: 'https://api.trademe.co.nz/v1/Search/Property/Rental.json?suburb=15',
   headers: {
       'Authorization': `OAuth oauth_consumer_key="${consumerKey}", oauth_signature_method="PLAINTEXT", oauth_signature="${consumerSecret}&"`
   },
   method: 'GET',
}
	
	request(request_region_data, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
	/*
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "	https://api.trademe.co.nz/v1/Search/Property/Rental.json", true);
		xhr.setRequestHeader('Authorization','OAuth oauth_consumer_key="${consumerKey}", oauth_signature_method="PLAINTEXT", oauth_signature="${consumerSecret}&"');
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
		
    xhr.send();
}

function callback(status, response){
	console.log(response);
}*/