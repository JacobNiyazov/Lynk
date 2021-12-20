document.getElementById.innerHTML = "Follow";

function uorf(){
	if(document.getElementById("uorf").innerHTML === "Follow")
	{
		document.getElementById("uorf").innerHTML = "Following";
		//unFollow(username);
	}
	else
	{
		document.getElementById("uorf").innerHTML = "Follow";
		//follow(username);
	}

}


function follow(keyword, username){
	$.ajax({
		// points to the url where your data will be posted
		url: keyword + '/',
		// post for security reason
		type: "POST",
		// data that you will like to return 
		data: {'username' : username, csrfmiddlewaretoken: window.CSRF_TOKEN},
		// what to do when the call is success 
		success:function(response){
			//$("#followbtn")[0].innerHTML = "Following";
			uorf();

		},
		// what to do when the call is complete ( you can right your clean from code here)
		complete:function(){},
		// what to do when there is an error
		error:function (xhr, textStatus, thrownError){
			console.log("hi")
		}
	});
}





// -----------------------------------------------Search bar with <datalist> and ajax
// // Get the <datalist> and <input> elements.
// var dataList = document.getElementById('json-datalist');
// var input = document.getElementById('ajax');

// // Create a new XMLHttpRequest.
// var request = new XMLHttpRequest();

// // Handle state changes for the request.
// request.onreadystatechange = function(response) {
//   if (request.readyState === 4) {
//     if (request.status === 200) {
//       // Parse the JSON
//       var jsonOptions = JSON.parse(request.responseText);

//       // Loop over the JSON array.
//       jsonOptions.forEach(function(item) {
//         // Create a new <option> element.
//         var option = document.createElement('option');
//         // Set the value using the item in the JSON array.
//         option.value = item;
//         // Add the <option> element to the <datalist>.
//         dataList.appendChild(option);
//       });

//       // Update the placeholder text.
//       input.placeholder = "e.g. datalist";
//     } else {
//       // An error occured :(
//       input.placeholder = "Couldn't load datalist options";
//     }
//   }
// };


// console.log(data);
// // Update the placeholder text.
// input.placeholder = "Loading options...";

// // Set up and make the request.
// request.open('GET', 'db.sqlite3', true);
// request.send();
//------------------------------------------------------------------------------------------