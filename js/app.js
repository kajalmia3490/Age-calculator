function ageCalculator() {
  let userinput = document.getElementById("DOB").value;
  let dob = new Date(userinput);
  if (userinput === null || userinput === "") {
    document.getElementById("message").innerHTML = "Choose a date please!";
    return false;
  } else {
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    return (document.getElementById("result").innerHTML =
      "Age is: " + age + " years. ");
  }
}
