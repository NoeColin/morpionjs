const width = 3;
const height = 3;
//j1 true   j2 false
let turn = 0;



function drawArea(){
    for(let i = 0; i < height; i++) {

        let c = document.createElement("tr");
        c.setAttribute("id", "l"+i);
        c.setAttribute("class", "ligne");
        let e = document.getElementById("game-area").appendChild(c);

        for(let j = 0; j < width; j++){
            c = document.createElement("td");
            let caseId = ("l"+i+"c"+j);
            c.setAttribute("id", caseId);
            c.setAttribute("class", "case");
            
            e = document.getElementById("l"+i).appendChild(c);
            e = document.getElementById(caseId).addEventListener('click', play);
        }
    }
}

function play(event) {

    let t;
    let e;

    
    if(turn == 0) {
        t = document.createTextNode("X");
        e = event.target.setAttribute("class", "case j1");
        turn = 1;
    }
    else {
        t = document.createTextNode("O");
        e = event.target.setAttribute("class", "case j2");
        turn = 0;
    }
    e = event.target.appendChild(t);
}

function restart() {
    for(let i = 0; i < height; i++){
    }
}



window.onload = drawArea;