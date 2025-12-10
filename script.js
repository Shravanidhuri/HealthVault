
// FAST INTRO
setTimeout(() => {
  document.getElementById("intro").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  }, 300);
}, 1200);


// NAVIGATION
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}


// PROFILE PHOTO UPLOAD
document.getElementById("uploadPhoto").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    document.getElementById("profileImage").src = URL.createObjectURL(file);
  }
});


// SAVE PROFILE
function saveProfile() {
  let data = {
    name: document.getElementById("fullname").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value
  };

  localStorage.setItem("healthProfile", JSON.stringify(data));
  document.getElementById("profileMsg").innerText = "Profile Saved Successfully!";
}


// SAVE MEDICAL RECORDS
function saveRecords() {
  let records = document.getElementById("medicalHistory").value;
  localStorage.setItem("medicalRecords", records);
  document.getElementById("recordMsg").innerText = "Records Saved!";
}


// SAVE EMERGENCY INFO
function saveEmergency() {
  let data = {
    blood: document.getElementById("bloodGroup").value,
    allergies: document.getElementById("allergies").value,
    contact: document.getElementById("emergencyContact").value,
    meds: document.getElementById("medications").value
  };

  localStorage.setItem("emergencyData", JSON.stringify(data));
  document.getElementById("emergencyMsg").innerText = "Emergency Info Saved!";
}


// BMI CALCULATOR
function calculateBMI() {
  let weight = parseFloat(document.getElementById("bmiWeight").value);
  let height = parseFloat(document.getElementById("bmiHeight").value) / 100;

  if (!weight || !height) {
    document.getElementById("bmiResult").innerText = "Enter valid values.";
    return;
  }

  let bmi = (weight / (height * height)).toFixed(2);

  let condition = "";
  if (bmi < 18.5) condition = "Underweight";
  else if (bmi < 25) condition = "Normal";
  else if (bmi < 30) condition = "Overweight";
  else condition = "Obese";

  document.getElementById("bmiResult").innerHTML =
    `BMI: <b>${bmi}</b> (${condition})`;
}




