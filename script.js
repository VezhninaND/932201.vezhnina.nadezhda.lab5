function showMessage(heading, p1, p2){
	document.getElementById('message-heading').innerHTML = heading;
	document.getElementById('message-p1').innerHTML = p1;
	document.getElementById('message-p2').innerHTML = p2;
	document.getElementById('message').style.display = 'block';
}
function hideMessage(){
	document.getElementById('message').style.display = 'none';
}