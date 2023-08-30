let display = document.getElementById("display");
let input = document.getElementById("input");
const button = document.getElementById("btn");

const movieList = [
  { name: "Barbie", rating: 4.8 },
  { name: "Thor", rating: 4.7 },
  { name: "Josee, Tiger and Fish", rating: 4.5 },
];

button.addEventListener("click", () => {
  let value = input.value.toLowerCase();

  //in index / of item
  for (let i in movieList) {
    for (let char of value) {
      if (movieList[i].name.includes(char)) {
        console.log(movieList[i]);
        display.innerText += `name: ${movieList[i].name}
         rating: ${movieList[i].rating}`;
      }
    }
    // if (movieList[i].name.toLowerCase() === value) {
    //   display.innerText += `name: ${movieList[i].name}
    //     rating: ${movieList[i].rating}`;
    // }
  }
});

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array.slice(-5));

//splice 0=nemne 1=hasna