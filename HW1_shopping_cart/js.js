function compute() {
	// computing the unit_price*quantity to get the item_price

	var quantity1 = document.getElementById("quantity1").value; 
	console.log("quantity1 successfully inserted");
	unitp1 = document.getElementById("unitp1").value;
	console.log("unitp1 successfully inserted");
	var totalp1 = parseInt(quantity1) * parseInt(unitp1);
	document.getElementById("totalp1").innerHTML = totalp1;
	console.log("totalp1 successfully calculated");

	var quantity2 = document.getElementById("quantity2").value;
	console.log("quantity2 successfully inserted");
	var unitp2 = document.getElementById("unitp2").value;
	console.log("unitp2 successfully inserted");
	var totalp2 = parseInt(quantity2) * parseInt(unitp2);
	document.getElementById("totalp2").innerHTML = totalp2;
	console.log("totalp2 successfully calculated");

	var quantity3 = document.getElementById("quantity3").value;
	console.log("quantity2 successfully inserted");
	var unitp3 = document.getElementById("unitp3").value;
	console.log("quantity2 successfully inserted");
	var totalp3 = parseInt(quantity3) * parseInt(unitp3);
	document.getElementById("totalp3").innerHTML = totalp3;
	console.log("totalp2 successfully calculated");

	// summing all the item_price to calculate grand_total
	var grandtotal = parseInt(totalp1) + parseInt(totalp2) + parseInt(totalp3);
	document.getElementById("grandtotal").innerHTML = "$" + grandtotal;
	console.log("grandtotal successfully calculated");

	var new_item = document.getElementById("new_item").value;
}

function refresh(){
	//refreshing the page
	alert("Done Shopping?")
	document.getElementById('quantity1').value = "";
	document.getElementById('unitp1').value = "";
	document.getElementById('totalp1').innerHTML = "";

	document.getElementById('quantity2').value = "";
	document.getElementById('unitp2').value = "";
	document.getElementById('totalp2').innerHTML = "";

	document.getElementById('quantity3').value = "";
	document.getElementById('unitp3').value = "";
	document.getElementById('totalp3').innerHTML = "";

	document.getElementById('grandtotal').innerHTML = "";

	document.getElementById('new_item').value = "";

}



