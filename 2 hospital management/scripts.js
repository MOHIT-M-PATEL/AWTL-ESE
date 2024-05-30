function validateForm() {
    let form = document.getElementById("hospitalForm");
    let name = form["name"].value;
    let email = form["email"].value;
    let phone = form["phone"].value;
    let age = form["age"].value;
    let gender = form["gender"].value;
    let address = form["address"].value;
    let disease = form["disease"].value;
    let date = form["date"].value;

    if (name == "" || email == "" || phone == "" || age == "" || gender == "" || address == "" || disease == "" || date == "") {
        alert("All fields must be filled out");
        return false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits");
        return false;
    }

    if (parseInt(age) < 0) {
        alert("Age cannot be negative");
        return false;
    }

    return true;
}
