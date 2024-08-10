
function transformBin(b){
  var n = 0;
  for (var i = 3; i >= 0; i--) {
    n = n + (2**(3-i))*b[i]
  }
  return n;
}

function getBin(){
  var s = [[0, 0, 0, 0], [0, 0, 0, 0]];
  var m = [[0, 0, 0, 0], [0, 0, 0, 0]];
  var h = [[0, 0, 0, 0], [0, 0, 0, 0]];
  for (var j = 0; j<2; j++) {
    for (var i = 0; i < 4; i++) {
      s[j][i] = document.getElementsByClassName('s'+ (j + 1))[i].valueAsNumber
    }
  }
  for (var j = 0; j<2; j++) {
    for (var i = 0; i < 4; i++) {
      m[j][i] = document.getElementsByClassName('m'+ (j + 1))[i].valueAsNumber
    }
  }
  for (var j = 0; j<2; j++) {
    for (var i = 0; i < 4; i++) {
      h[j][i] = document.getElementsByClassName('h'+ (j + 1))[i].valueAsNumber
    }
  }
  return [s, m, h];
}

function showTimer(){
  var h = 0;
  var m = 0;
  var s = 0;
  
  input = getBin();

  s1 = transformBin(input[0][0])
  if (s1>9) {s1=9}
  s2 = transformBin(input[0][1])
  if (s2>6) {s2=6}
  s = Number(s2+''+s1)
  if (s>60) {s=60}
  s = (s < 10) ? "0" + s : s;
  
  m1 = transformBin(input[1][0])
  if (m1>9) {m1=9}
  m2 = transformBin(input[1][1])
  if (m2>6) {m2=6}
  m = Number(m2+''+m1)
  if (m>60) {m=60}
  m = (m < 10) ? "0" + m : m;
  
  h1 = transformBin(input[2][0])
  if (h1>9) {h1=9}
  h2 = transformBin(input[2][1])
  if (h2>9) {h2=9}
  h = Number(h2+''+h1)
  h = (h < 10) ? "0" + h : h;

  var time = h + ":" + m + ":" + s;
  document.getElementById("clock").textContent = time;

  setTimeout(showTimer, 100);
}

showTimer();