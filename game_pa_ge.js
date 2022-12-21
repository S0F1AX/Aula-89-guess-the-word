function loadPlayer() {
    player1Name = localStorage.getItem("player1_name");
    player2Name = localStorage.getItem("player2_name");

    player1Score = 0;
    player2Score = 0;

    document.getElementById("player1_name").innerHTML = player1Name + " : ";
    document.getElementById("player2_name").innerHTML = player2Name + " : ";

    document.getElementById("player1Score").innerHTML = player1Score;
    document.getElementById("player2Score").innerHTML = player2Score;

    document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name;
    document.getElementById("playerAnswer").innerHTML = "Turno de Pergunta - " + player2Name;
}

function send() {
    getWord = document.getElementById("word").value;
    
    word=getWord.toLowerCase();
    
    console.log(getWord + "|" + word);
    
    charAt1 = word.charAt(Math.random(word.lenght));
    
    charAt2 = word.charAt(Math.random(word.lenght));

    charAt3 = word.charAt(Math.random(word.lenght));

    console.log("charAt1:"+ charAt1);
    console.log("charAt2:"+ charAt2);
    console.log("charAt3:"+ charAt3);
    
    question_word = "<h4 id='wordDisplay'> P. "+ word.replace(charAt1, "_").replace(charAt2, "_").replace(charAt3, "_") + "</h4>";
    
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    
    row = question_word + inputBox + checkButton;
 
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}

questionTurn = "player1Name"; 
answerTurn = "player2Name";

function check() {
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    console.log("resposta em caiza baixa - " + answer);
    if (answer == word) {
        if (answerTurn == "player1Name") {
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;

        }
        else {
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }
    if (questionTurn == "player1Name") {
        questionTurn = "player2Name";
        document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player2Name;
    }
    else {
        questionTurn = "player1";
        document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player1Name;
    }
    if (answerTurn == "player1Name") {
        answerTurn = "player2Name";
        document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player2_name;
    }
    else {
        answerTurn = "player1Name";
        document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}