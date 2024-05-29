window.onload = displayfun;

function displayfun() {
  const url = new URLSearchParams(window.location.search);
  const jsonstring = url.get("stringobj");
  const obj = JSON.parse(jsonstring);

  document.getElementById("Title-div").innerHTML += obj.txtTitle;
  document.getElementById("Body-div").innerHTML += obj.txtBody;
}
