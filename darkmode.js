var darkMode = window.localStorage.getItem('darkMode');
if(!darkMode){
	darkMode =  false;
}
else if(darkMode === "true"){
	darkMode = true;
}
else{
	darkMode = false;
}
mode();


function darkToggle(){
	toggle();
	mode();
}

function mode(){
	var button = document.getElementById("dark-button");
	if(darkMode || darkMode){
		document.body.classList.add("dark");
		document.div.classList.add("darkpanel");
		button.innerText = "Light Mode";
	}
	else{
		document.body.classList.remove("dark");
		document.div.classList.remove("darkpanel");
		button.innerText = "Dark Mode";
	}
}

function toggle(){
	darkMode = !darkMode;
	window.localStorage.setItem('darkMode',darkMode);	
}
