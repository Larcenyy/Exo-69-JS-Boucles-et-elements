let emen = document.getElementById("liste-commissions");

let lis = document.createElement("li");
lis.innerHTML = "<input>" + "<input type='submit'>";


emen.appendChild(lis);
emen.prepend(lis);

console.log(emen);
console.log(lis);