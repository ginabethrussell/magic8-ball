// Create a shake animation and display a fortune when user clicks button

function shakeBall(){
    const ball = document.querySelector('.eight-ball');
    ball.classList.add("apply-shake");
    setTimeout(displayResponse, 820);
}

function displayResponse() {
    const responses = ["Yes, definitely", "You can rely on it.", "Without a doubt.", "Most likely.",
     "Hmm... I'm not sure!", "Yikes. Nope.", "Try again.", "Very doubtful.", "Wouldn't if I were you.",
      "Ask again later."];
    const answer = Math.floor(Math.random() * responses.length);
    response = responses[answer];
    document.getElementById('answer').innerText = response;
    const ball = document.querySelector('.eight-ball');
    ball.classList.remove('apply-shake');
    setTimeout(replace8, 1250);
}

function replace8(){
    const element = document.querySelector('#answer');
    element.innerHTML = '<span id="num" style="font-size: 6rem; font-weight: 700;">8</span>';
};
