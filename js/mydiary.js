let savedTitles = [];

setInterval(datefun, 1000);

function datefun() {
  let d = new Date();
  document.getElementById("date").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

document.getElementById("Save").addEventListener("click", saveFunction);

function saveFunction() {
  let titleText = document.getElementById("Title-textarea").value;
  let bodyDiary = document.getElementById("Body-diary").value;

  let obj = {
    txtTitle: titleText,
    txtBody: bodyDiary,
  };

  let stringobject = JSON.stringify(obj);

  var URL = "../Display.html?stringobj= " + stringobject;

  savedTitles.push(titleText);
  let leftMenu = document.querySelector(".Side-menu");
  leftMenu.innerHTML = "";
  savedTitles.forEach((title) => {
    let titleLink = document.createElement("a");
    titleLink.classList.add("menu-ankertags");
    titleLink.textContent = title;
    titleLink.href = "#";
    titleLink.onclick = function () {
      window.open(URL, "_blank");
    };
    leftMenu.appendChild(titleLink);
    leftMenu.appendChild(document.createElement("br"));
  });
}
window.onload = displayfun;

function displayfun() {
  const url = new URLSearchParams(window.location.search);
  const jsonstring = url.get("jsonString");
  const obj = JSON.parse(jsonstring);

  document.getElementById("name").innerHTML += "  " + obj.txtName;
  document.getElementById("email").innerHTML += "  " + obj.txtEmail;
  document.getElementById("gender").innerHTML += "  " + obj.txtGender;
}
