function validateForm() {
    let quantity = document.getElementById("quantity").value;
    if (quantity < 1) {
        alert("Quantity must be at least 1");
        return false;
    }
    return true;
}

function validateContactForm() {
    let form = document.getElementById("contactForm");
    let name = form["name"].value;
    let email = form["email"].value;
    let phone = form["phone"].value;
    let message = form["message"].value;

    if (name == "" || email == "" || phone == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits");
        return false;
    }

    return true;
}
