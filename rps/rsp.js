function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function handleClick() {
    let div = event.target
    document.getElementById("display").textContent = div.id
    let cpu = getRandomInt(3)
    switch (cpu) {
        case 0:
            document.getElementById("innercpu").textContent = "paper"
            break;
        case 1:
            document.getElementById("innercpu").textContent = "rock"
            break;
        case 2:
            document.getElementById("innercpu").textContent = "scissors"
            break;
    }

    winCondition(div.id, document.getElementById("innercpu").textContent)
}

function winCondition(userInput, cpuInput) {
    switch (userInput) {
        case "rock":
            switch (cpuInput) {
                case "rock":
                    alert("draw");
                    return;
                case "paper":
                    alert("CPU Wins")
                    return;
                case "scissors":
                    alert("Player Wins")
                    return;
            }
        case "paper":
            switch (cpuInput) {
                case "rock":
                    alert("Player Wins")
                    return;
                case "paper":
                    alert("draw")
                    return;
                case "scissors":
                    alert("CPU Wins")
                    return;
            }
        case "scissors":
            switch (cpuInput) {
                case "rock":
                    alert("CPU Wins")
                    return;
                case "paper":
                    alert("Player Wins")
                    return;
                case "scissors":
                    alert("draw")
                    return;
            }
    }
}