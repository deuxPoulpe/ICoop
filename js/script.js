function sendURL(url) {
  urljson = JSON.stringify(ulrt);
  promesse = fetch("http://localhost/index.php/sendURL", {
    method: "POST",
    body: urljson,
  });
  window.location.reload();
  promesse
    .then((r) => r.json())
    .then((data) => {
      recover(data);
    });
  console.log(url);
}

function recover(int) {
  int.innerHTML;
}

function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function afficherDate() {
  while (true) {
    await pause(1000);
    var cejour = new Date();
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    var date = cejour.toLocaleDateString("fr-FR", options);
    var heure =
      ("0" + cejour.getHours()).slice(-2) +
      ":" +
      ("0" + cejour.getMinutes()).slice(-2) +
      ":" +
      ("0" + cejour.getSeconds()).slice(-2);
    var dateheure = date + " " + heure;
    var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, (lettre) =>
      lettre.toUpperCase()
    );
    document.getElementById("dateheure").innerHTML = dateheure;
  }
}
afficherDate();
