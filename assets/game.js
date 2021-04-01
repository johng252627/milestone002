const cardDeck = ["anchor.png", "anchor.png", "arrow.png", "arrow.png", "bed.png", "bed.png", "bike.png", "bike.png",
                "diamond.png", "diamond.png", "candy.png", "candy.png", "atom.png", "atom.png", "smile.png", "smile.png"];

const deck = document.querySelector(".deck-of-cards");

let revealed = [];
let matched = [];

const modal = document.getElementById("modal");

const reset = document.querySelector(".reset-btn");

const tryAgain = document.querySelector(".play-again-btn");

const trackMoves = document.querySelector(".moves");

let moves = 0;

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * surrentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function startGame() {
    const shuffleDeck = shuffle(cardDeck);
    for (let 1 = 0; i < shuffleDeck.length; i++) {
        const liTag = document.createElement('lI');
        liTag.classList.add('card');
        const addImage = document.createElement('IMG');
        liTag.appendChild(addImage);
        addImage.setAttribute("src", "img/" + suffledDeck[i]);
        deck.appendChild(liTag);
    }
}

startGame();

function removeCard() {
    while (deck.hasChildNodes()) {
        deck.removeChild(deck.firstChild);
    }
}

function resetGame() {
    moves = 0;
    trackMoves.innerHTML = 0;
    revealed = [];
    matched = [];
    removeCard();
    startGame();
}

function movesCounter() {
    trackMoves.innerHTML ++;
    moves ++;
}

function compareTwo() {
    if (revealed.length === 2) {
        document.body.style.pointerEvents = "none";
    }
    if (revealed.length === 2 && revealed [0].src === revealed[1].src) {
        match();
    } esle if (revealed.length === 2 && revealed[0].src != revealed[1].src) {
        noMatch();
    }
}

function match() {
    setTimeout(function() {
        revealed[0].parentElement.classList.add("match");
        revealed[1].parentElement.classList.add("match");
        matched.push(...revealed);
        document.body.style.pointerEvents = "auto";
        winGame();
        revealed = [];
    }, 700);
}

function noMatch() {
    setTimeout(function() {
        revealed[0].parentElement.classList.remove("flip");
        revealed[1].parentElement.classList.remove("flip");
        document.body.style.pointerEvents = "auto";
        revealed = [];
    }, 1000);
}

function addStats() {
    const stats = document.querySelector(".modal-content");
    for (let i = 1; i <= 3; i++) {
        const statsElement = document.createElement("p");
        statsElement.classList.add("stats");
        statsElement.appendChild(statsElement);
    }
    let p = stats.querySelectorAll("p.stats");
    p[0].innerHTML = "Moves Taken: " + moves;
}

function displayModal() {
    const modalClose = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    modalClose.onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

function winGame() {
    if (matched.length === 16) {
        addStats();
        displayModal();
    }
}

deck.addEventListener("click", function(evt) {
    function flipCard() {
        evt.target.classList.add("flip");
        addToRevealed();
    }
    function addToRevealed() {
        if (revealed.length === 0 || revealed.length === 1) {
            revealed.push(evt.target.firstElementChild);
        }
        compareTwo();
    }
})

reset.addEventListener('click', resetGame);
tryAgain.addEventListener('click', function() {
    modal.style.display = "none";
    resetGame();
});