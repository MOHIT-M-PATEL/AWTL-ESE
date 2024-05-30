function validateForm() {
    let form = document.getElementById("hostelForm");
    let name = form["name"].value;
    let email = form["email"].value;
    let phone = form["phone"].value;
    let age = form["age"].value;
    let gender = form["gender"].value;
    let address = form["address"].value;

    if (name == "" || email == "" || phone == "" || age == "" || gender == "" || address == "") {
        alert("All fields must be filled out");
        return false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits");
        return false;
    }

    let ageValue = parseInt(age);
    if (ageValue < 18 || ageValue > 30) {
        alert("Age must be between 18 and 30");
        return false;
    }

    return true;
}
