function submitSurvey() {
    const form = document.getElementById("surveyForm");
    const formData = new FormData(form);

    // Display thank you message
    const thankYouDiv = document.getElementById("thankYou");
    thankYouDiv.classList.remove("hidden");

    // Display summary of responses
    const summaryDiv = document.getElementById("summary");
    summaryDiv.innerHTML = "<h3>Summary of Responses</h3>";

    for (const [key, value] of formData.entries()) {
        if (key === "rating") {
            summaryDiv.innerHTML += `<p>${key}: ${value} / 5</p>`;
        } else {
            summaryDiv.innerHTML += `<p>${key}: ${value}</p>`;
        }
    }
}

// Update rating value display
const ratingInput = document.getElementById("rating");
const ratingValue = document.getElementById("ratingValue");
ratingValue.textContent = ratingInput.value;

ratingInput.addEventListener("input", () => {
    ratingValue.textContent = ratingInput.value;
});
