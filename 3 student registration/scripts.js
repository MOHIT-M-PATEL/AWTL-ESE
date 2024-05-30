function validateForm() {
    let form = document.getElementById("registrationForm");
    let name = form["studentName"].value;
    let email = form["studentEmail"].value;
    let phone = form["studentPhone"].value;
    let age = form["studentAge"].value;
    let gender = form["studentGender"].value;
    let address = form["studentAddress"].value;
    let course = form["studentCourse"].value;
    let date = form["admissionDate"].value;

    if (name == "" || email == "" || phone == "" || age == "" || gender == "" || address == "" || course == "" || date == "") {
        alert("All fields must be filled out");
        return false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits");
        return false;
    }

    let ageValue = parseInt(age);
    if (ageValue < 18 || ageValue > 60) {
        alert("Age must be between 18 and 60");
        return false;
    }

    return true;
}
