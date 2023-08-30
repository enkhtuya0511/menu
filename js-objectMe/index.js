/*const car = { type: "fiat", model: 500, color: "white" };
const keys = Object.keys(car);
const values = Object.values(car);
const keyValue = Object.entries(car);
console.log(keyValue);

console.log(Object.hasOwn(car, 'model'));

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
  for (let j = 0; j < values[i].length; j++) {
    console.log(values.[i].[j]);
  }
}


const num1 = {a:3, b:8, c:0};
const num2 = {b:3, d:7, h:0};

const returnedNum = Object.assign(num1, num2);
console.log(num1);
console.log(returnedNum);*/

const information = [
    {name: 'Ganaa', age: 17},
    {name: 'Tulga', age: 17},
    {name: 'Bilgude', age: 17},
    {name: 'Ochir', age: 15},
    {name: 'Enkhmu', age: 15},
    {name: 'Bilgun', age: 13},
];


const students = {17:[], 15:[], 13:[]}
for(let i = 0; i < information.length; i++){
    if(information[i].age=== 17){
        students[information[i].age].push(information[i].name);
    } else if(information[i].age === 15){
        students[information[i].age].push(information[i].name);
    } else if(information[i].age === 13) {
        students[information[i].age].push(information[i].name);
    }
}
console.log(students)

//shift() ; pop() =tugsgulusn- 
//unshift() ; push() =tugsguldern+
const animals = ['tiger', 'duck', 'bird' ];
const pop = animals.pop();
console.log(pop)