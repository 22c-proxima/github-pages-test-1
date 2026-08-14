const
  dHuefied = document.getElementById("huefied"),
  iToHuefy = document.getElementById("toHuefy"),
  bDoHuefy = document.getElementById("doHuefy"),
  i14 = document.getElementById("i14");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function doHuefy() {
  const t = iToHuefy.value;

  if (t.length < 3) {
    dHuefied.textContent = "Ебани чет подлинне паже";
    return;
  }
  
  dHuefied.textContent = "Идёт хуефикация...";
  setTimeout(() => {
    dHuefied.textContent = `Ху${t.slice(1)}`;
    i14.style.display = "inline-block";
  }, getRandomInt(2000) + 400);
}

bDoHuefy.addEventListener("click", doHuefy);
iToHuefy.addEventListener("keyup", function(e) {
  if (e.key === "Enter") {
    doHuefy();
  }
});
