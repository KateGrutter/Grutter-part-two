let playerName = prompt("Welcome to GC mini golf! What is your name?");
let numberHoles = prompt("Hi, " + playerName + "! Would you like to play 3 or 6 holes?");

while (numberHoles !== 3 || numberHoles !==6) {
if (numberHoles == 3 || numberHoles == 6) break;
}

let total = 0
if (numberHoles == 3) {
    par = 9;
}
if (numberHoles == 6 ) {
    par = 18;
}
for (let x = 0; x < numberHoles; x++) {
    let numberPutts = Number(prompt ("How many putts for hole " + [x+1] + "? (par: 3)"));
    total += numberPutts;
}
let totalScore = total - par;

if (totalScore < 0) {
    console.log("Great job, " + playerName + "! Your total par was: " + totalScore + ".");

}
if (totalScore == 0) {
    console.log("Good game, " + playerName + ". Your total par was: 0.");

}
if (totalScore > 0) {
    console.log("Nice try, " + playerName + "... Your total par was: +" + totalScore + ".");

}

