const form = document.getElementById('form')
  form.addEventListener('submit', e => {
      e.preventDefault()
  })

function evMouse(e) {
  const v1 = parseFloat(document.getElementById("input1").value);
  const v2 = parseFloat(document.getElementById("input2").value);
  var res = document.getElementById("resultado");

    switch (e) {
      case 1:
        res.innerHTML = "Explore the Platform" + (v1 + v2);
        break;
      case 2:
        console.log(v1, v2);
        res.innerHTML = "Start Hacking:  " + (v1 - v2) ;
        break;
      case 3:
        res.innerHTML = "Request a Demo" +  (v1 / v2);
        break;
      case 4:
        res.innerHTML = "Visit the Leaderboard" + (v1 * v2);
        break;
    }

}