//your JS code here. If required.
document.getElementById("myForm").addEventListener("submit",function(e){
	e.preventDefault();

const form = e.target;

const firstName = form["First Name"].value;
const lastName = form["Last Name"].value;
const phone = form["Phone Number"].value;
const email = form["Email ID"].value;

	alert(
		"First Name: " + firstName + " " +
		"Last Name: " + lastName + " " +
		"Phone Number: " + phone + " " +
		"Email ID: " + email
	);
});