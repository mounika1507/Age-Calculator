function ageCal() {
    const dobIn = document.getElementById("inputDob").value;
    const currentDateIn = document.getElementById("cdate").value;
    if (dobIn.length === 0 || currentDateIn.length ===0) {
        alert("Enter both Date of Birth and Current Date.");
        return;
    }
    const dob = new Date(dobIn);
    const currentDate = new Date(currentDateIn);
    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDif = currentDate.getMonth() - dob.getMonth();
    const birthday = (dob, currentDate) => {
        return (
            currentDate.getMonth() > dob.getMonth() || 
            (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() >= dob.getDate())
        );
    };
    if (!birthday(dob, currentDate)) {
        age --;
    }
    document.getElementById("currentAge").innerHTML = "Your age is: " + age;
}
