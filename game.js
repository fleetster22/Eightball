let userName = "";
let userQuestion = "";

let eightBall = "";

// TODO: get user input

userName ? console.log("Welcome, " + userName) : console.log("Welcome");

console.log("Click the buttoin below to receive your inspirational quote");

// TODO add button and eventlistener

let randomNumber = Math.floor(Math.random() * 9);
switch (randomNumber) {
  case 0:
    eightBall = "Whether you think you can or you think you can’t, you’re right. - Henry Ford";
    break;
  case 1:
    eightBall = "I didn’t fail the test. I just found 100 ways to do it wrong. - Benjamin Franklin";
    break;
  case 2:
    eightBall = "The mind is everything. What you think you become.  – Buddha";
    break;
  case 3:
    eightBall =
      "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom. - Anais Nin";
    break;
  case 4:
    eightBall =
      "If you limit yourself only to what seems possible or reasonable, you disconnect yourself from what you truly want, and all that is left is compromise. - Anais Nin";
    break;
  case 5:
    eightBall = "Give, even if you only have a little. - Buddha";
    break;
  case 6:
    eightBall =
      "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path. - Buddha";
    break;
  case 7:
    eightBall = "When you run on the earth and with the earth, you can run forever. - Tarahumara";
    break;
  case 8:
    eightBall =
      "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained. – Marie Curie";
    break;
}
console.log(eightBall);
