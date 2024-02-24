const paraincre=document.getElementById('counter');
const clickbutton=document.getElementById('incrementBtn');

clickbutton.addEventListener('click',() => {
	let counterVal = parseInt(paraincre.textContent);
	counterVal++;
	paraincre.textContent=counterVal;
	alert(counterVal);
});