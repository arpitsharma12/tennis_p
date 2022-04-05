
let arr = ["Roger", "Rafa", "Novak"];
let rev = arr.reverse();

rev.forEach(elem => AddP(elem));


function AddP(name) {
  let box = document.getElementById("box");
  let li = document.createElement("li");


  li.textContent = name[0].toUpperCase() + name.slice(1).toLowerCase();
  li.className = "list"
  let a = document.createElement("a");
  a.textContent = "x";
  a.href = "javascript:void(0)";
  a.className = "remove";
  li.appendChild(a);
  let pos = box.firstElementChild;
  if (pos == null) {
    box.appendChild(li);
  } else {
    box.insertBefore(li, pos);
  }
}

function addMore() {

  document.getElementById("error").innerHTML = "";
  let name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("error").innerHTML = "please enter value";
  } else {
    AddP(name);


  }
  document.getElementById("name").value = "";
}
let btn = document.querySelector("ul");
btn.addEventListener("click", function (e) {
  let box = document.getElementById("box");
  let li = e.target.parentNode;
  box.removeChild(li);
});
function myfunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


function searches() {
  let input = document.getElementById('search').value
  input = input.toUpperCase();
  let x = document.getElementsByClassName('list');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toUpperCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}

var input = document.getElementById("name");
input.addEventListener("keyup", function (event) {

  if (event.key === `Enter`) {
    addMore();
  }
});