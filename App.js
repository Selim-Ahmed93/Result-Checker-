
function check() {
  let en = parseInt(document.getElementById('n1').value);
  let bn = parseInt(document.getElementById('n2').value);
  let go = parseInt(document.getElementById('n3').value);
  let ma = parseInt(document.getElementById('n4').value);
  let is = parseInt(document.getElementById('n5').value);

  // Check for NaN or invalid inputs
  if (isNaN(en) || isNaN(bn) || isNaN(go) || isNaN(ma) || isNaN(is)) {
    alert("Please enter valid marks for all subjects.");
    return;
  }

  let total = en + bn + go + ma + is;
  let perc = (total * 100 / 500).toFixed(2);

  document.getElementById('data1').innerHTML = "Total Marks: " + total;
  document.getElementById('data2').innerHTML = "Percentage: " + perc + "%";

  if (en < 35 || bn < 35 || go < 35 || ma < 35 || is < 35) {
    document.getElementById('data3').innerHTML = "Result: Fail";
  } else {
    document.getElementById('data3').innerHTML = "Result: Pass";
  }
}

