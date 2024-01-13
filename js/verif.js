 function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showVerificationPrompt() {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const correctAnswer = eval(`${num1} ${operator} ${num2}`);

  const verificationText = `To verify that you are human, please solve the following: ${num1} ${operator} ${num2} = ?`;

  return { verificationText, correctAnswer };
}

function playSuccessSound() {
  const successAudio = document.getElementById('successAudio');
  successAudio.play();
}

function playErrorSound() {
  const errorAudio = document.getElementById('errorAudio');
  errorAudio.play();
}

function checkAnswer() {
  let isVerified = false;

  while (!isVerified) {
    const { verificationText, correctAnswer } = showVerificationPrompt();
    const userAnswer = parseInt(prompt(verificationText), 10);

    if (!isNaN(userAnswer) && userAnswer === correctAnswer) {
      alert("Verification successful! You are a human.");
      playSuccessSound();
      isVerified = true;
    } else {
      alert("Verification failed. Do you want to try again?");
      playErrorSound();
    }
  }
}

// Show the verification prompt when the page loads
alert("Welcome! You need to verify that you are human.");
checkAnswer();