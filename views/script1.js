const d = new Date();
let bg = 3;
let time = d.getHours();
if(time < 12){
	bg = 3;
}else{
	bg = 2;
}

switch(bg){
	case 1 : document.getElementById("bgchange").style.backgroundImage = "linear-gradient(135deg, orange, lightblue)"; break;
	case 2 : document.getElementById("bgchange").style.backgroundImage = "linear-gradient(135deg, lightblue, darkblue)"; break;
	case 3 : document.getElementById("bgchange").style.backgroundImage = "linear-gradient(135deg, black, black, darkblue, blue)"; break;
	default : document.getElementById("bgchange").style.backgroundImage = "linear-gradient(135deg, orange, lightblue)"; break;
}

document.getElementById("bgchange").style.width = "100%";
document.getElementById("bgchange").style.height = "100%";