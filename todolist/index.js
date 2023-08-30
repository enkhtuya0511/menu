const btn = document.getElementById("btn");
let screen = document.getElementById("screen");
let array = [];

btn.addEventListener("click", () => {
  let input = document.getElementById("input");
  console.log(input.value);
  console.log(array);

    add();
});

function add(){
  array.push(input.value);
    console.log(array)
    screen.innerHTML ='';
    for (let i = 0; i < array.length; i++) {
      screen.innerHTML += `<div class="con1">
      <p class="text">${array[i]}</p>
      <button onclick="Delete(${i})">Delete</button>
      </div>`;
    }
}

function Delete(i){
  array.splice(i, 1)
  console.log(array)
  screen.remove();
  add();
}
