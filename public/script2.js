const dom = document.getElementById("dom");
dom.addEventListener(onclick, dom.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
}));
const zapis = document.getElementById("zapis");
zapis.addEventListener(onclick, zapis.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
}));
const jakasfunkcja = function(e) {
    e.preventDefault();

    const title = document.getElementsByName("title")[0].value;
    const author = document.getElementsByName("author")[0].value;
    const user = document.getElementsByName("user")[0].value;
    const mood = document.getElementsByName("mood")[0].value;
    const time = document.getElementsByName("time")[0].value;
    const date = document.getElementsByName("date")[0].value;

    const moods = document.getElementsByName("mood");

    const moodsString = Array.from(moods).filter((check) => {
        return check.checked;
    }).map((check) => {
        return check.value;
    }).join(",");

    fetch("http://localhost:8080/added", {
        method: "POST",
        body: JSON.stringify({
            title: title,
            author: author,
            user: user,
            mood: moodsString,
            date: date,
            time: time
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).catch(err => console.log(err.message));
}

const form = document.querySelector(".main > form")
form.addEventListener("submit", jakasfunkcja)
document.getElementById("wez").addEventListener("click", funkcjaDaj)

function todayFunction() {
    let dzis = new Date();

    let wynik = "";
    //console.log(wynik);
    wynik += dzis.getFullYear();

    wynik += "-";
    if (dzis.getMonth() + 1 < 10) {
        wynik += "0";
    }
    wynik += (dzis.getMonth() + 1);
    wynik += "-";

    if (dzis.getDate() < 10) {
        wynik += "0";
    }
    wynik += dzis.getDate();

    //console.log(wynik);
    document.getElementById("date").value = wynik;
}

function funkcjaDaj() {
    const input = document.getElementById("wypis").value;
    fetch("http://localhost:8080/sprawdz/" + input, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resp => resp.json()).then(json => {
        //console.log(json)
        let sprawdz = document.getElementById("sprawdz");
        sprawdz.innerHTML = "";
        json.forEach(element => {
            //console.log(element);
            let div = document.createElement("div");
            div.classList.add("wynik");
            let title = document.createElement("p");
            title.textContent = element.title;
            div.appendChild(title);
            let author = document.createElement("p");
            author.textContent = element.author;
            div.appendChild(author);

            let nastroje = element.mood;
            let nastrojeArray = nastroje.split(",");
            if (nastrojeArray.length < 2) {
                let mood = document.createElement("p");
                mood.textContent = element.mood;
                div.appendChild(mood);
            } else {
                let mood = document.createElement("div");
                div.appendChild(mood);
                mood.classList.add("wynik2");
                nastrojeArray.forEach((el) => {
                    let singleMood = document.createElement("p");
                    singleMood.textContent = el;
                    mood.appendChild(singleMood);
                })
            }


            let time = document.createElement("p");
            time.textContent = element.time;
            let date = document.createElement("p");
            date.textContent = element.date;
            div.appendChild(time);
            div.appendChild(date);
            sprawdz.appendChild(div);
        });
    }).catch(err => console.log(err.message));
}