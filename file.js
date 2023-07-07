document.addEventListener('DOMContentLoaded', function() {
    let button1 = document.getElementById('button1');
    let button2 = document.getElementById('button2');
    let indexWord = null;
    let value = null;
    let array = [];
    let chances = 14;
    let messageContainer1 = document.getElementById("message-container1");
    let messageContainer2 = document.getElementById("message-container2");
    let words = ["", "atmosfera", "samolot", "kometa", "podeszwa", "pomnik", "ogon", "ostryga", "legenda", "region", "kukurydza",
                     "nadzieja", "przepis", "arytmetyka", "satelita", "korona", "wzmacniacz", "przewodnik", "zakonnica", "pantera", "apetyt",
                     "rzeczownik", "wiatrak", "magazyn", "fajerwerki", "losowanie", "furgonetka", "konferencja", "jedzenie", "odwaga", "plakat",
                     "saksofon", "hamulce", "skarpetki", "traktor", "piosenka", "trening", "doniczka", "naszyjnik", "autobus", "motocykl",
                     "zabawka", "drukarka", "szmaragd", "lemoniada", "certyfikat", "tsunami", "zaopatrzenie", "tramwaj", "gwiazdy", "bandyta"];

    button1.addEventListener('click', function() {
        checkLetter();
    });

    button2.addEventListener('click', function() {
        indexWord = getRandomInt(50);
        chances = 15
        let selectedWord = words[indexWord];
        array = new Array(selectedWord.length).fill(" _ ");
        console.log(array)
        showMessage("Wylosowano słowo", "message");
        showMessage2("", "message");
        console.log(selectedWord);
        setTimeout(function(){
            showMessage(array.join(" "), "message");
            showMessage2("Liczba pozostałych prób: " + chances, "message");
        }, 1000);
    });

    function getRandomInt(number) {
        return Math.floor(Math.random() * number + 1);
    }
    
    function checkLetter () {
        let selectedWord = words[indexWord];
        value = userInput.value;
        console.log(typeof value);
        console.log(array);

        if (!isLetterValid (value)) {
            showMessage2("Wprowadzono nieprawidłową wartość", "message2");
        } else if (value.length > 1) {
            showMessage2("Wprowadzono za dużo liter", "message2");
        } else {
            for (let i = 0; i < selectedWord.length; i++) {
                if (value === selectedWord[i]) {
                    array[i] = value;
                    console.log(array);
                }
            }
            chances--;
            showMessage(array.join(" "), "message");
            showMessage2("Liczba pozostałych prób: " + chances, "message");
        }

        if (array.indexOf(" _ ") === -1) {
            showMessage("Wygrałeś", "message");
            showMessage2("", "message2");
        }

        if (chances === 0) {
            showMessage("Przegrałeś", "message2");
            showMessage2("Wykorzystałeś wszystkie próby", "message2");
        }
    }

    function isLetterValid (value) {
        return /^[a-zA-Z]+$/.test(value);
    }
    
    function showMessage(message, className) {
        messageContainer1.innerHTML = '<div class="' + className + '">' + message + "</div>";
    }

    function showMessage2(message, className) {
        messageContainer2.innerHTML = '<div class="' + className + '">' + message + "</div>";
    }
});

