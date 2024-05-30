function checkAnswers() {
    const correctAnswers = {
        q1: "false",
        q2: "true",
        q3: "false"
    };

    let score = 0;
    const form = document.getElementById("quizForm");
    const formData = new FormData(form);

    for (const [key, value] of formData.entries()) {
        if (value === correctAnswers[key]) {
            score++;
        }
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `You answered ${score} out of 3 questions correctly.`;

    return false; // Prevent form submission
}
