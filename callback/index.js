/*function orderPizza(name, callback){
    setTimeout(function() {
        let msg = `tani ${name} pizza belen bollo.
        hurgeltend garla.`
        callback(msg);
    }, 3000);

    orderPizza(
        'mahanddur',
        function(message){
            console.log(message);
        }
    )
}

const mainFunction = (callback)=>{
    setTimeout(()=>{
        callback([3, 4, 5])
    }, 3000);
};

const add = (array)=>{
    let sum = 0;
    for(let i of array){
        sum += i;
    };
    console.log(sum);
}

mainFunction(add);*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then(
    //callback function
    function (response) {
      return response.json();
    }
  )
  .then(
    //callback function
    function (data) {
      console.log(data);
    }
  )
  .catch(
    //callback function
    function (error) {
      console.log("Error: " + error);
    }
  );