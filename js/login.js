document.getElementById("Signup").addEventListener("click", signup);

function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let selectedGender = gender.value;

  if (!name || !email || !password || !gender) {
    alert("Please fill in all fields.");
    return;
  }
  let obj = {
    txtName: name,
    txtEmail: email,
    txtPassword: password,
    txtGender: selectedGender,
  };

  let jsonString = JSON.stringify(obj);

  let url = "../Mydiary.html?jsonString= " + jsonString;

  window.open(url, "_blank");
}
document.getElementById("Signin").addEventListener("click", readData1);

function readData1() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let obj = {
    txtEmail: email,
    txtPassword: password,
  };
  let jsonString = JSON.stringify(obj);

  let url = "../Mydiary.html?jsonString= " + jsonString;

  window.open(url, "_blank");
}
