const paraincre=document.getElementById('counter');
const clickbutton=document.getElementById('eg1');

clickbutton.addEventListener('click',() => {
	let counterVal = parseInt(paraincre.textContent);
	// alert(counterVal);
	counterVal++;
	paraincre.textContent=counterVal;
});