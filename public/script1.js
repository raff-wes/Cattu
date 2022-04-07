const d = new Date();
let bg = 1;
let time = d.getHours();
if (time < 8) {
    bg = 1;
} else if (time < 16) {
    bg = 2;
} else {
    bg = 3;
}


switch (bg) {
    case 1:
        caseone();
        break;
    case 2:
        casetwo();
        break;
    case 3:
        casethree();
        break;
    default:
        document.getElementById("bgchange").style.backgroundImage = "linear-gradient(135deg, orange, lightblue, darkblue, black)";
        document.getElementById("tlo").innerHTML = "Coś poszło nie tak przy wczytywaniu obrazka :(<br> Spróbuj odświeżyć stronę";
        document.getElementById("tlo").style.pointerEvents = "none";
        break;
}

document.getElementById("bgchange").style.width = "100%";
document.getElementById("bgchange").style.height = "100%";



function caseone() {
    document.getElementById("bgchange").style.backgroundImage = "linear-gradient(135deg, orange, lightblue)";
    document.getElementById("obiekt_glowny1").style.position = "absolute";
    document.getElementById("obiekt_glowny1").style.display = "flex";
    document.getElementById("obiekt_glowny1").style.cssFloat = "left";
    document.getElementById("obiekt_glowny1").style.background = "#ff0";
    document.getElementById("obiekt_glowny1").style.width = "225px";
    document.getElementById("obiekt_glowny1").style.height = "225px";
    document.getElementById("obiekt_glowny1").style.borderRadius = "50%";
    document.getElementById("obiekt_glowny1").style.boxShadow = "0px -5px 15px #ff0";
    document.getElementById("obiekt_glowny1").style.borderStyle = "solid";
    document.getElementById("obiekt_glowny1").style.borderColor = "#fff";
    document.getElementById("obiekt_glowny1").style.borderWidth = "1px";
    document.getElementById("obiekt_glowny1").style.transition = "background 1s, box-shadow 1s";

    document.getElementById("slonce").style.position = "absolute";
    document.getElementById("slonce").style.display = "flex";
    document.getElementById("slonce").style.cssFloat = "left";
    document.getElementById("slonce").style.background = "none";
    document.getElementById("slonce").style.width = "225px";
    document.getElementById("slonce").style.height = "225px";
    document.getElementById("slonce").style.borderRadius = "50%";
    document.getElementById("slonce").style.boxShadow = "0px -5px 15px #ff0";
    document.getElementById("slonce").style.borderStyle = "solid";
    document.getElementById("slonce").style.borderColor = "#fff";
    document.getElementById("slonce").style.borderWidth = "1px";
    document.getElementById("slonce").style.opacity = "0";
    document.getElementById("slonce").style.transition = "opacity 1s";

    document.getElementById("tlo1").style.display = "flex";
    document.getElementById("tlo1").style.position = "relative";
    document.getElementById("tlo1").style.cssFloat = "left";
    document.getElementById("tlo1").style.background = "none";
    document.getElementById("tlo1").style.width = "500px";
    document.getElementById("tlo1").style.height = "300px";
    document.getElementById("tlo1").style.borderRadius = "50%";
    document.getElementById("tlo1").style.justifyContent = "center";
    document.getElementById("tlo1").style.alignItems = "center";
    document.getElementById("tlo1").style.overflow = "visible";
    document.getElementById("tlo1").style.zIndex = "1";
    document.getElementById("tlo1").style.transition = "transform 2s";
    document.getElementById("chmura1").style.display = "flex";
    document.getElementById("chmura1").style.position = "relative";
    document.getElementById("chmura1").style.cssFloat = "left";
    document.getElementById("chmura1").style.background = "#fff";
    document.getElementById("chmura1").style.width = "300px";
    document.getElementById("chmura1").style.height = "150px";
    document.getElementById("chmura1").style.borderRadius = "50%";
    document.getElementById("chmura1").style.justifyContent = "center";
    document.getElementById("chmura1").style.alignItems = "center";
    document.getElementById("chmura1").style.overflow = "visible";
    document.getElementById("chmura1").style.zIndex = "2";
    document.getElementById("chmura1").style.left = "20px";
    document.getElementById("chmura1").style.top = "50px";
    document.getElementById("chmura1").style.boxShadow = "5px 5px 5px grey";
    document.getElementById("chmura1").style.transition = "background 1s, transform 1s";
    document.getElementById("chmura2").style.display = "flex";
    document.getElementById("chmura2").style.position = "relative";
    document.getElementById("chmura2").style.cssFloat = "left";
    document.getElementById("chmura2").style.background = "#fff";
    document.getElementById("chmura2").style.width = "300px";
    document.getElementById("chmura2").style.height = "150px";
    document.getElementById("chmura2").style.borderRadius = "50%";
    document.getElementById("chmura2").style.justifyContent = "center";
    document.getElementById("chmura2").style.alignItems = "center";
    document.getElementById("chmura2").style.overflow = "visible";
    document.getElementById("chmura2").style.zIndex = "3";
    document.getElementById("chmura2").style.left = "-40px";
    document.getElementById("chmura2").style.top = "100px";
    document.getElementById("chmura2").style.boxShadow = "5px 5px 5px grey";
    document.getElementById("chmura2").style.transition = "background 1s, transform 1s";

    document.getElementById("promien11").style.position = "absolute";
    document.getElementById("promien11").style.display = "flex";
    document.getElementById("promien11").style.cssFloat = "left";
    document.getElementById("promien11").style.left = "-100px";
    document.getElementById("promien11").style.top = "155px";
    document.getElementById("promien11").style.width = "30px";
    document.getElementById("promien11").style.height = "170px";
    document.getElementById("promien11").style.background = "#ff0";
    document.getElementById("promien11").style.transform = "rotate(220deg)";
    document.getElementById("promien11").style.zIndex = "1";
    document.getElementById("promien11").style.opacity = "0.3";
    document.getElementById("promien11").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("promien11").style.pointerEvents = "none";

    document.getElementById("promien12").style.position = "absolute";
    document.getElementById("promien12").style.display = "flex";
    document.getElementById("promien12").style.cssFloat = "left";
    document.getElementById("promien12").style.left = "-20px";
    document.getElementById("promien12").style.top = "190px";
    document.getElementById("promien12").style.width = "30px";
    document.getElementById("promien12").style.height = "170px";
    document.getElementById("promien12").style.background = "#ff0";
    document.getElementById("promien12").style.transform = "rotate(200deg)";
    document.getElementById("promien12").style.zIndex = "1";
    document.getElementById("promien12").style.opacity = "0.3";
    document.getElementById("promien12").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("promien12").style.pointerEvents = "none";

    document.getElementById("promien13").style.position = "absolute";
    document.getElementById("promien13").style.display = "flex";
    document.getElementById("promien13").style.cssFloat = "left";
    document.getElementById("promien13").style.left = "145px";
    document.getElementById("promien13").style.top = "220px";
    document.getElementById("promien13").style.width = "30px";
    document.getElementById("promien13").style.height = "170px";
    document.getElementById("promien13").style.background = "#ff0";
    document.getElementById("promien13").style.transform = "rotate(170deg)";
    document.getElementById("promien13").style.zIndex = "1";
    document.getElementById("promien13").style.opacity = "0.3";
    document.getElementById("promien13").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("promien13").style.pointerEvents = "none";

    document.getElementById("promien14").style.position = "absolute";
    document.getElementById("promien14").style.display = "flex";
    document.getElementById("promien14").style.cssFloat = "left";
    document.getElementById("promien14").style.left = "255px";
    document.getElementById("promien14").style.top = "195px";
    document.getElementById("promien14").style.width = "30px";
    document.getElementById("promien14").style.height = "170px";
    document.getElementById("promien14").style.background = "#ff0";
    document.getElementById("promien14").style.transform = "rotate(150deg)";
    document.getElementById("promien14").style.zIndex = "1";
    document.getElementById("promien14").style.opacity = "0.3";
    document.getElementById("promien14").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("promien14").style.pointerEvents = "none";
}


function casetwo() {
    document.getElementById("bgchange").style.backgroundImage = "linear-gradient(135deg, orange, lightblue, lightblue, #00f)"
    document.getElementById("obiekt_glowny2").style.position = "absolute";
    document.getElementById("obiekt_glowny2").style.left = "0";
    document.getElementById("obiekt_glowny2").style.top = "0";
    document.getElementById("obiekt_glowny2").style.display = "flex";
    document.getElementById("obiekt_glowny2").style.cssFloat = "left";
    document.getElementById("obiekt_glowny2").style.background = "#ff0";
    document.getElementById("obiekt_glowny2").style.width = "70px";
    document.getElementById("obiekt_glowny2").style.height = "70px";
    document.getElementById("obiekt_glowny2").style.borderRadius = "50%";
    document.getElementById("obiekt_glowny2").style.boxShadow = "0px -5px 15px #ff0";
    document.getElementById("obiekt_glowny2").style.borderStyle = "solid";
    document.getElementById("obiekt_glowny2").style.borderColor = "#fff";
    document.getElementById("obiekt_glowny2").style.borderWidth = "1px";
    document.getElementById("obiekt_glowny2").style.transform = "scale(3) rotate(180deg)";
    document.getElementById("obiekt_glowny2").style.transition = "transform 1s, box-shadow 1.5s";
    document.getElementById("tlo2").style.display = "flex";
    document.getElementById("tlo2").style.position = "relative";
    document.getElementById("tlo2").style.cssFloat = "left";
    document.getElementById("tlo2").style.background = "none";
    document.getElementById("tlo2").style.left = "100px";
    document.getElementById("tlo2").style.top = "100px";
    document.getElementById("tlo2").style.width = "300px";
    document.getElementById("tlo2").style.height = "300px";
    document.getElementById("tlo2").style.justifyContent = "center";
    document.getElementById("tlo2").style.alignItems = "center";
    document.getElementById("tlo2").style.overflow = "visible";
    document.getElementById("tlo2").style.alignItems = "center";
    document.getElementById("tlo2").style.justifyContent = "center";
    document.getElementById("tlo2").style.zIndex = "1";
    document.getElementById("promien1").style.position = "absolute";
    document.getElementById("promien1").style.display = "flex";
    document.getElementById("promien1").style.cssFloat = "left";
    document.getElementById("promien1").style.left = "15px";
    document.getElementById("promien1").style.top = "-175px";
    document.getElementById("promien1").style.width = "30px";
    document.getElementById("promien1").style.height = "170px";
    document.getElementById("promien1").style.background = "#ff0";
    document.getElementById("promien1").style.transform = "rotate(180deg)";
    document.getElementById("promien1").style.zIndex = "2";
    document.getElementById("promien1").style.opacity = "0.1";
    document.getElementById("promien1").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("promien1").style.pointerEvents = "none";
    document.getElementById("promien2").style.position = "absolute";
    document.getElementById("promien2").style.display = "flex";
    document.getElementById("promien2").style.cssFloat = "left";
    document.getElementById("promien2").style.left = "75px";
    document.getElementById("promien2").style.top = "-90px";
    document.getElementById("promien2").style.width = "8px";
    document.getElementById("promien2").style.height = "100px";
    document.getElementById("promien2").style.background = "#ff0";
    document.getElementById("promien2").style.transform = "rotate(220deg)";
    document.getElementById("promien2").style.zIndex = "2";
    document.getElementById("promien2").style.opacity = "0.1";
    document.getElementById("promien2").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("promien2").style.pointerEvents = "none";
    document.getElementById("promien3").style.position = "absolute";
    document.getElementById("promien3").style.display = "flex";
    document.getElementById("promien3").style.cssFloat = "left";
    document.getElementById("promien3").style.left = "100px";
    document.getElementById("promien3").style.top = "-80px";
    document.getElementById("promien3").style.width = "50px";
    document.getElementById("promien3").style.height = "170px";
    document.getElementById("promien3").style.background = "#ff0";
    document.getElementById("promien3").style.transform = "rotate(250deg)";
    document.getElementById("promien3").style.zIndex = "2";
    document.getElementById("promien3").style.opacity = "0.1";
    document.getElementById("promien3").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("promien3").style.pointerEvents = "none";
    document.getElementById("promien4").style.position = "absolute";
    document.getElementById("promien4").style.display = "flex";
    document.getElementById("promien4").style.cssFloat = "left";
    document.getElementById("promien4").style.left = "100px";
    document.getElementById("promien4").style.top = "30px";
    document.getElementById("promien4").style.width = "14px";
    document.getElementById("promien4").style.height = "120px";
    document.getElementById("promien4").style.background = "#ff0";
    document.getElementById("promien4").style.transform = "rotate(305deg)";
    document.getElementById("promien4").style.zIndex = "2";
    document.getElementById("promien4").style.opacity = "0.1";
    document.getElementById("promien4").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("promien4").style.pointerEvents = "none";
    document.getElementById("promien5").style.position = "absolute";
    document.getElementById("promien5").style.display = "flex";
    document.getElementById("promien5").style.cssFloat = "left";
    document.getElementById("promien5").style.left = "40px";
    document.getElementById("promien5").style.top = "60px";
    document.getElementById("promien5").style.width = "30px";
    document.getElementById("promien5").style.height = "140px";
    document.getElementById("promien5").style.background = "#ff0";
    document.getElementById("promien5").style.transform = "rotate(-15deg)";
    document.getElementById("promien5").style.zIndex = "2";
    document.getElementById("promien5").style.opacity = "0.1";
    document.getElementById("promien5").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("promien5").style.pointerEvents = "none";
    document.getElementById("promien6").style.position = "absolute";
    document.getElementById("promien6").style.display = "flex";
    document.getElementById("promien6").style.cssFloat = "left";
    document.getElementById("promien6").style.left = "-30px";
    document.getElementById("promien6").style.top = "50px";
    document.getElementById("promien6").style.width = "50px";
    document.getElementById("promien6").style.height = "90px";
    document.getElementById("promien6").style.background = "#ff0";
    document.getElementById("promien6").style.transform = "rotate(30deg)";
    document.getElementById("promien6").style.zIndex = "2";
    document.getElementById("promien6").style.opacity = "0.1";
    document.getElementById("promien6").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("promien6").style.pointerEvents = "none";
    document.getElementById("promien7").style.position = "absolute";
    document.getElementById("promien7").style.display = "flex";
    document.getElementById("promien7").style.cssFloat = "left";
    document.getElementById("promien7").style.left = "-40px";
    document.getElementById("promien7").style.top = "-35px";
    document.getElementById("promien7").style.width = "10px";
    document.getElementById("promien7").style.height = "180px";
    document.getElementById("promien7").style.background = "#ff0";
    document.getElementById("promien7").style.transform = "rotate(70deg)";
    document.getElementById("promien7").style.zIndex = "2";
    document.getElementById("promien7").style.opacity = "0.1";
    document.getElementById("promien7").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("promien7").style.pointerEvents = "none";
    document.getElementById("promien8").style.position = "absolute";
    document.getElementById("promien8").style.display = "flex";
    document.getElementById("promien8").style.cssFloat = "left";
    document.getElementById("promien8").style.left = "-70px";
    document.getElementById("promien8").style.top = "-45px";
    document.getElementById("promien8").style.width = "30px";
    document.getElementById("promien8").style.height = "120px";
    document.getElementById("promien8").style.background = "#ff0";
    document.getElementById("promien8").style.transform = "rotate(100deg)";
    document.getElementById("promien8").style.zIndex = "2";
    document.getElementById("promien8").style.opacity = "0.1";
    document.getElementById("promien8").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("promien8").style.pointerEvents = "none";
    document.getElementById("promien9").style.position = "absolute";
    document.getElementById("promien9").style.display = "flex";
    document.getElementById("promien9").style.cssFloat = "left";
    document.getElementById("promien9").style.left = "-30px";
    document.getElementById("promien9").style.top = "-45px";
    document.getElementById("promien9").style.width = "10px";
    document.getElementById("promien9").style.height = "80px";
    document.getElementById("promien9").style.background = "#ff0";
    document.getElementById("promien9").style.transform = "rotate(120deg)";
    document.getElementById("promien9").style.zIndex = "2";
    document.getElementById("promien9").style.opacity = "0.1";
    document.getElementById("promien9").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("promien9").style.pointerEvents = "none";
    document.getElementById("promien0").style.position = "absolute";
    document.getElementById("promien0").style.display = "flex";
    document.getElementById("promien0").style.cssFloat = "left";
    document.getElementById("promien0").style.left = "-5px";
    document.getElementById("promien0").style.top = "-55px";
    document.getElementById("promien0").style.width = "10px";
    document.getElementById("promien0").style.height = "80px";
    document.getElementById("promien0").style.background = "#ff0";
    document.getElementById("promien0").style.transform = "rotate(150deg)";
    document.getElementById("promien0").style.zIndex = "2";
    document.getElementById("promien0").style.opacity = "0.1";
    document.getElementById("promien0").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("promien0").style.pointerEvents = "none";
}


function casethree() {
    document.getElementById("bgchange").style.backgroundImage = "linear-gradient(135deg, black, black, darkblue, blue)";
    document.getElementById("ksiezyc_srodek").style.position = "absolute";
    document.getElementById("ksiezyc_srodek").style.display = "flex";
    document.getElementById("ksiezyc_srodek").style.cssFloat = "right";
    document.getElementById("ksiezyc_srodek").style.background = "darkblue";
    document.getElementById("ksiezyc_srodek").style.width = "70%";
    document.getElementById("ksiezyc_srodek").style.height = "70%";
    document.getElementById("ksiezyc_srodek").style.borderRadius = "50%";
    document.getElementById("obiekt_glowny3").style.position = "absolute";
    document.getElementById("obiekt_glowny3").style.display = "flex";
    document.getElementById("obiekt_glowny3").style.cssFloat = "left";
    document.getElementById("obiekt_glowny3").style.background = "#fff";
    document.getElementById("obiekt_glowny3").style.width = "225px";
    document.getElementById("obiekt_glowny3").style.height = "225px";
    document.getElementById("obiekt_glowny3").style.borderRadius = "50%";
    document.getElementById("obiekt_glowny3").style.boxShadow = "5px 5px 15px #fff";
    document.getElementById("obiekt_glowny3").style.borderStyle = "none";
    document.getElementById("obiekt_glowny3").style.transition = "background 1s, box-shadow 1s";
    document.getElementById("tlo3").style.display = "flex";
    document.getElementById("tlo3").style.position = "relative";
    document.getElementById("tlo3").style.cssFloat = "left";
    document.getElementById("tlo3").style.background = "darkblue";
    document.getElementById("tlo3").style.width = "300px";
    document.getElementById("tlo3").style.height = "300px";
    document.getElementById("tlo3").style.borderRadius = "50%";
    document.getElementById("tlo3").style.justifyContent = "center";
    document.getElementById("tlo3").style.alignItems = "center";
    document.getElementById("tlo3").style.overflow = "visible";
    document.getElementById("tlo3").style.zIndex = "2";
    document.getElementById("tlo3").style.transition = "transform 1s";
    document.getElementById("tloGwiazdy1").style.display = "flex";
    document.getElementById("tloGwiazdy1").style.position = "relative";
    document.getElementById("tloGwiazdy1").style.cssFloat = "left";
    document.getElementById("tloGwiazdy1").style.background = "darkblue";
    document.getElementById("tloGwiazdy1").style.width = "200px";
    document.getElementById("tloGwiazdy1").style.height = "200px";
    document.getElementById("tloGwiazdy1").style.borderRadius = "50%";
    document.getElementById("tloGwiazdy1").style.justifyContent = "center";
    document.getElementById("tloGwiazdy1").style.alignItems = "center";
    document.getElementById("tloGwiazdy1").style.overflow = "visible";
    document.getElementById("tloGwiazdy1").style.zIndex = "1";
    document.getElementById("tloGwiazdy1").style.left = "-50px";
    document.getElementById("tloGwiazdy1").style.top = "-20px";
    document.getElementById("tloGwiazdy1").style.pointerEvents = "none";
    document.getElementById("tloGwiazdy1").style.transition = "1s";
    document.getElementById("tloGwiazdy2").style.display = "flex";
    document.getElementById("tloGwiazdy2").style.position = "relative";
    document.getElementById("tloGwiazdy2").style.cssFloat = "left";
    document.getElementById("tloGwiazdy2").style.background = "darkblue";
    document.getElementById("tloGwiazdy2").style.width = "200px";
    document.getElementById("tloGwiazdy2").style.height = "200px";
    document.getElementById("tloGwiazdy2").style.borderRadius = "50%";
    document.getElementById("tloGwiazdy2").style.justifyContent = "center";
    document.getElementById("tloGwiazdy2").style.alignItems = "center";
    document.getElementById("tloGwiazdy2").style.overflow = "visible";
    document.getElementById("tloGwiazdy2").style.zIndex = "1";
    document.getElementById("tloGwiazdy2").style.left = "-52px";
    document.getElementById("tloGwiazdy2").style.top = "250px";
    document.getElementById("tloGwiazdy2").style.pointerEvents = "none";
    document.getElementById("tloGwiazdy2").style.transition = "1s";
    document.getElementById("gwiazda1").style.position = "absolute";
    document.getElementById("gwiazda1").style.display = "flex";
    document.getElementById("gwiazda1").style.cssFloat = "left";
    document.getElementById("gwiazda1").style.left = "50px";
    document.getElementById("gwiazda1").style.top = "60px";
    document.getElementById("gwiazda1").style.width = "10px";
    document.getElementById("gwiazda1").style.height = "10px";
    document.getElementById("gwiazda1").style.background = "#fff";
    document.getElementById("gwiazda1").style.transform = "rotate(45deg)";
    document.getElementById("gwiazda1").style.zIndex = "2";
    document.getElementById("gwiazda1").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("gwiazda1").style.transition = "background 1s, box-shadow 1s"
    document.getElementById("gwiazda2").style.position = "absolute";
    document.getElementById("gwiazda2").style.display = "flex";
    document.getElementById("gwiazda2").style.cssFloat = "left";
    document.getElementById("gwiazda2").style.left = "150px";
    document.getElementById("gwiazda2").style.top = "90px";
    document.getElementById("gwiazda2").style.width = "10px";
    document.getElementById("gwiazda2").style.height = "10px";
    document.getElementById("gwiazda2").style.background = "#fff";
    document.getElementById("gwiazda2").style.transform = "rotate(45deg)";
    document.getElementById("gwiazda2").style.zIndex = "2";
    document.getElementById("gwiazda2").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("gwiazda2").style.transition = "background 1s, box-shadow 1s"
    document.getElementById("gwiazda3").style.position = "absolute";
    document.getElementById("gwiazda3").style.display = "flex";
    document.getElementById("gwiazda3").style.cssFloat = "left";
    document.getElementById("gwiazda3").style.left = "90px";
    document.getElementById("gwiazda3").style.top = "140px";
    document.getElementById("gwiazda3").style.width = "10px";
    document.getElementById("gwiazda3").style.height = "10px";
    document.getElementById("gwiazda3").style.background = "#fff";
    document.getElementById("gwiazda3").style.transform = "rotate(45deg)";
    document.getElementById("gwiazda3").style.zIndex = "2";
    document.getElementById("gwiazda3").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("gwiazda3").style.transition = "background 1s, box-shadow 1s"
    document.getElementById("gwiazda11").style.position = "absolute";
    document.getElementById("gwiazda11").style.display = "flex";
    document.getElementById("gwiazda11").style.cssFloat = "left";
    document.getElementById("gwiazda11").style.left = "50px";
    document.getElementById("gwiazda11").style.top = "60px";
    document.getElementById("gwiazda11").style.width = "10px";
    document.getElementById("gwiazda11").style.height = "10px";
    document.getElementById("gwiazda11").style.background = "#fff";
    document.getElementById("gwiazda11").style.transform = "rotate(45deg)";
    document.getElementById("gwiazda11").style.zIndex = "2";
    document.getElementById("gwiazda11").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("gwiazda11").style.transition = "background 1s, box-shadow 1s"
    document.getElementById("gwiazda12").style.position = "absolute";
    document.getElementById("gwiazda12").style.display = "flex";
    document.getElementById("gwiazda12").style.cssFloat = "left";
    document.getElementById("gwiazda12").style.left = "150px";
    document.getElementById("gwiazda12").style.top = "90px";
    document.getElementById("gwiazda12").style.width = "10px";
    document.getElementById("gwiazda12").style.height = "10px";
    document.getElementById("gwiazda12").style.background = "#fff";
    document.getElementById("gwiazda12").style.transform = "rotate(45deg)";
    document.getElementById("gwiazda12").style.zIndex = "2";
    document.getElementById("gwiazda12").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("gwiazda12").style.transition = "background 1s, box-shadow 1s"
    document.getElementById("gwiazda13").style.position = "absolute";
    document.getElementById("gwiazda13").style.display = "flex";
    document.getElementById("gwiazda13").style.cssFloat = "left";
    document.getElementById("gwiazda13").style.left = "90px";
    document.getElementById("gwiazda13").style.top = "140px";
    document.getElementById("gwiazda13").style.width = "10px";
    document.getElementById("gwiazda13").style.height = "10px";
    document.getElementById("gwiazda13").style.background = "#fff";
    document.getElementById("gwiazda13").style.transform = "rotate(45deg)";
    document.getElementById("gwiazda13").style.zIndex = "2";
    document.getElementById("gwiazda13").style.boxShadow = "2px 2px 10px #fff";
    document.getElementById("gwiazda13").style.transition = "background 1s, box-shadow 1s"
}




function movein(x) { //zmienia kolor księżyca (3)
    x.style.background = "#ff0";
    x.style.boxShadow = "5px 5px 15px #ff0";
}

function moveout(x) { //zmienia kolor księżyca (3) B
    x.style.background = "#fff";
    x.style.boxShadow = "5px 5px 15px #fff";
}

function rotatemoon(x) { //obraca księżyc (technicznie tło) (3)
    x.style.transform = "rotate(135deg)";
}

function rotatemoonB(x) { //obraca księżyc (technicznie tło) (3) B
    x.style.transform = "rotate(0deg)";
}

function blouClounds(x) { //skala obrazka (1)
    x.style.opacity = "1";
}

function whiteClounds(x) { //skala obrazka (1) B
    x.style.opacity = "0";
}

function bigSun(x) { //zmiana rozmiaru słońca (2)
    x.style.transform = "scale(3.3) rotate(270deg)";
    x.style.boxShadow = "0px 0px 40px 15px #ff0";
}

function smolSun(x) { //zmiana rozmiaru słońca (2) B
    x.style.transform = "scale(3) rotate(180deg)";
    x.style.boxShadow = "0px -5px 15px #fff";
}