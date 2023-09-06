//Model
let svar = "";
let points = 0;
let previousAnswer = "";
let answerText = "";
let actualNumber = 1 + Math.floor(Math.random() * 10);

//View
updateView();
function updateView() {
    document.getElementById("app").innerHTML = /*html*/ `
        <h1 class="poeng">𝘗𝘰𝘦𝘯𝘨: ${points}</h1>
        <input class="input" oninput="svar = this.value" type="number" min="0" max="10">
        <button class="knapp" onclick="number()">Gjett tall</button>
        <div class="svar">${answerText}</div>
    `;
}

//Controller
function number() {
    if (svar === "") return;
    if (svar == actualNumber) {
        answerText = "𝐷𝑢 𝑔𝑗𝑒𝑡𝑡𝑒𝑡:" + " " + svar + " " + "𝐷𝑒𝑡 𝑒𝑟 ℎ𝑒𝑙𝑡 𝑟𝑖𝑘𝑡𝑖𝑔";
        points++;
        actualNumber = 1 + Math.floor(Math.random() * 10);
        document.getElementById("shadow").classList.add("rightAnswer");
        setTimeout(() => {
            document.getElementById("shadow").classList.remove("rightAnswer");
        }, 1000);
    } else {
        if (svar < actualNumber) {
            answerText = "𝐷𝑢 𝑔𝑗𝑒𝑡𝑡𝑒𝑡 𝑓𝑒𝑖𝑙. 𝑃𝑟ø𝑣 ℎø𝑦𝑒𝑟𝑒 𝑛𝑒𝑠𝑡𝑒 𝑔𝑎𝑛𝑔...";
            points--;
        } else {
            answerText = "𝐷𝑢 𝑔𝑗𝑒𝑡𝑡𝑒𝑡 𝑓𝑒𝑖𝑙. 𝑃𝑟ø𝑣 𝑙𝑎𝑣𝑒𝑟𝑒 𝑛𝑒𝑠𝑡𝑒 𝑔𝑎𝑛𝑔...";
        }
        document.getElementById("shadow").classList.add("wrongAnswer");
        setTimeout(() => {
            document.getElementById("shadow").classList.remove("wrongAnswer");
        }, 1000);
    }
    svar = "";
    updateView();
}
