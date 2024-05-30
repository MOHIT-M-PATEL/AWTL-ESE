function bookTickets() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var movie = document.getElementById("movie").value;
    var tickets = document.getElementById("tickets").value;

    if (name.trim() == "" || email.trim() == "" || movie.trim() == "" || tickets.trim() == "") {
        alert("All fields are required!");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    if (isNaN(tickets) || tickets <= 0) {
        alert("Number of tickets must be a positive number!");
        return false;
    }

    // Display booking details
    document.getElementById("nameDisplay").innerText = "Name: " + name;
    document.getElementById("emailDisplay").innerText = "Email: " + email;
    document.getElementById("movieDisplay").innerText = "Movie: " + movie;
    document.getElementById("ticketsDisplay").innerText = "Tickets: " + tickets;

    document.getElementById("bookingForm").reset(); // Reset form
    document.getElementById("bookingDetails").style.display = "block"; // Show booking details

    return false; // Prevent form submission
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
