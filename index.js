// Bài 1
document.getElementById("find").onclick = () => {
  var n = 0;
  var sum = 0;
  while (sum <= 10000) sum += ++n;
  document.getElementById("found").innerHTML = n;
};
// Bài 2
document.getElementById("calculate").onclick = () => {
  var x = +document.getElementById("x").value;
  var n = +document.getElementById("n").value;
  var temp = x;
  var sum = 0;
  for (let i = 0; i < n; i++) {
    sum += temp;
    temp *= x;
  }
  document.getElementById("calculated").innerHTML = sum;
};
// Bài 3
document.getElementById("Calculate").onclick = () => {
  var N = +document.getElementById("N").value;
  var factorial = 1;
  for (let i = 2; i <= N; i++) factorial *= i;
  document.getElementById("Calculated").innerHTML = factorial;
};
// Bài 4
document.getElementById("create").onclick = () => {
  for (let i = 1; i <= 10; i++) {
    let element = document.createElement("div");
    element.style.width = "100%";
    element.style.height = "20px";
    element.style.marginTop = "15px";
    if (i % 2 === 0) element.style.backgroundColor = "red";
    else element.style.backgroundColor = "blue";
    document.getElementById("created").appendChild(element);
  }
};
// Bài 5
function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return x > 1;
}
document.getElementById("print").onclick = () => {
  var value = +document.getElementById("value").value;
  var result = "";
  for (let i = 1; i <= value; i++) {
    if (isPrime(i)) result += i + " ";
  }
  document.getElementById("printed").innerHTML = result.trimEnd();
};
