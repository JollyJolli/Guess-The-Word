let guess = document.querySelector('input');
let msg = document.querySelector('.msg');
let btn = document.querySelector('.btn');
let pt = document.querySelector('.point');

let game = false;

getWord = () => {
    let arr = ["devil", "Game", "Bro", "Hey", "LOL", "Monster", "Corona", "Danger", "Love", "Spice"];
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

getTempWord = (arr) => {
    for (let i = 0; i < arr.length - 1; ++i) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

let realWord = "";
let randWord = "";
let points = 0;
let outOF = 0;

btn.addEventListener('click', function () {
    if (!game) {
        pt.style.display = "block";
        pt.innerHTML = `${outOF} out of: ${points}`;
        game = true;
        btn.innerHTML = "guess";
        guess.style.display = "block";

        realWord = getWord();
        randWord = getTempWord(realWord.split("")).join("");
        msg.innerHTML = randWord;

    } else {
        outOF++;
        pt.style.display = "block";
        let temp = guess.value;
        if (temp === realWord) {
            points++;
            pt.innerHTML = `${outOF} out of: ${points}`;
            msg.innerHTML = `It's Correct: You got +1 point for "${realWord}" `;
            btn.innerHTML = "Click here To Start";
            guess.style.display = "none";
            guess.value = "";
            game = false;
        } else {
            pt.innerHTML = `${outOF} out of: ${points}`;
            msg.innerHTML = `Incorrect: Try Again "${randWord}" `;
        }
    }
});
