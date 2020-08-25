// Create a shake animation and display a fortune when user clicks button

function displayFortune() {
    const fortunes = ["Yes, definitely", "You can rely on it.", "Without a doubt.", "Most likely.",
     "Hmm... I'm not sure!", "Yikes. Nope.", "Try again.", "Very doubtful.", "Wouldn't if I were you.",
      "Ask again later."];
    const answer = Math.floor(Math.random() * fortunes.length);
    fortune = fortunes[answer];
    document.getElementById('fortune').innerText = fortune;
    const ball = document.querySelector('.eight-ball');
    ball.classList.remove('apply-shake');
    setTimeout(replace8, 2000);
}

function shakeBall(){
    const num8 = document.getElementById('num');
    num8.innerHTML = '8';
    const ball = document.querySelector('.eight-ball');
    ball.classList.add("apply-shake");
    setTimeout(displayFortune, 1000);
}

function replace8(){
    const element = document.querySelector('#fortune');
    element.innerHTML = '<span id="num" style="font-size: 6rem; font-weight: 700;">8</span>';
};