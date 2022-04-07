let arr = ["Roger", "Rafa", "Novak"];

AddP()
function AddP(name) {
  //   let box = document.getElementById("box");

  //   let li = document.createElement("li");
  //   li.textContent = name[0].toUpperCase() + name.slice(1).toLowerCase();
  //   li.className = "list"
  //   let a = document.createElement("a");
  //   a.textContent = "x";
  //   a.href = "javascript:void(0)";
  //   a.className = "remove";
  //   li.appendChild(a);
  //   let pos = box.firstElementChild;
  //   if (pos == null) {
  //     box.appendChild(li);
  //   } else {
  //     box.insertBefore(li, pos);
  //   }

  // }
  let value = "";
  if (!arr.includes(name)) {
    name && arr.unshift(name);
  }
  else {
    document.getElementById("error").innerHTML = `Name Already Exist !`;
  }

  arr.forEach(e => {
    value += `<li id= "${e}" class="list" >${e} <a onclick="deleted()" href="#"> X </a> </li>`
  });
  box.innerHTML = value;
}


function addMore() {

  document.getElementById("error").innerHTML = "";
  let name = document.getElementById("name").value;
  
  if (name == "") {
    document.getElementById("error").innerHTML = "Please Enter Name Here....";
  } else {
    name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    AddP(name);
  }
  document.getElementById("name").value = "";
}
// let btn = document.querySelector("ul");
// btn.addEventListener("click", function (e) {
//   let box = document.getElementById("box");
//   let li = e.target.parentNode;
//   box.removeChild(li);
// });
function deleted() {
  this.event.target.parentNode.remove();
  arr.splice(arr.indexOf(this.event.target.parentNode.id), 1);
  if (arr.length === 0) {
    document.getElementById("error").innerHTML = "There is no player in the list !";
  }
}

let theme = `dark`;
const mode = document.querySelector(`.moon`);

mode.addEventListener(`click`, function(){

  if (theme == `light`){
    mode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="moon" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>`}
  
  if (theme == `dark`){
  
    mode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="moon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>`
  }
  
  if(theme == `dark`) {
    theme = `light`
  }  else if(theme == `light`){
    theme = `dark`;
  }

  var element = document.body;
  element.classList.toggle("dark-mode");

})


function searches() {
  let input = document.getElementById('search').value;
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
let input = document.getElementById('name');
input.addEventListener("keyup", function (event) {

  if (event.key === `Enter`) {
    if (arr.includes(input.value)) {
      document.getElementById("error").innerHTML = 'Name Already Exist !';
    }
    else {
      addMore();
    }
  }
});
input.addEventListener("keydown", function () {
  document.getElementById("error").innerHTML = " ";
});






