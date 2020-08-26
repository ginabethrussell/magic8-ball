// Create a shake animation and display a fortune when user clicks button

function shakeBall(){
    const ball = document.querySelector('.eight-ball');
    ball.classList.add("apply-shake");
    setTimeout(displayResponse, 820);
}

function displayResponse() {
    //includes 20 original 8-Ball responses from Wikipedia
    const responses = ["Outlook not so good.", "My sources say no.", "My reply is no.",
    "Don't count on it.", "Concentrate, and ask again.", "Cannot predict now.","Better not tell you now.",
    "Reply hazy, try again.", "Signs point to yes.", "Yes.", "Outlook good.","As I see it, yes.",
    "It is decidedly so.", "It is certain.", "Yes, definitely", "You can rely on it.", "Without a doubt.",
    "Most likely.", "Very doubtful.", "Ask again later."];

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
