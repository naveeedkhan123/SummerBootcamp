//        Sync IN JS

//  synchronous
//         means the code run in a particualar sequence of instruction givn in the program.each instruction waits for the previous instruction to complete its execuation.

//  Asynchronous
//       due to synchronous programming some times important instruction get blocked due to some previous instruction , which causes a delay in the UI. Asynchronous code execuation allow to ecxecute next instruction immediately and does not block flow.

//console.log("one");
//console.log("two");

setTimeout(() => {
  //console.log("hello");
}, 2000); // 2000 = 2second

//console.log("three");
//console.log("four");

//     Callbacks
//  a call back is function passed as an argument to another function.

function sum(a, b) {
//  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}
calculator(1, 2, sum);

//  nested

let age = 20;
if (age >= 18) {
  if (age >= 60) {
    //console.log("senior");
  } else {
   // console.log("middle");
  }
} else {
  //console.log("child");
}

// Callback Hell
//  nested callbacks stacked below one another forming a pyramid structure.(pyramide of Doom)
//  this style pf programming becomes difficult to understand and manage.

function getData(dataId, getNextData) {
  setTimeout(() => {
    //console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

//  Promises
//   promise is for "eventual " completion of task . it as an object in js .it is a solution to callback hell.

//  let promise = new promise ((resolve , reject) => {....})  // function with two handler.

{
  let promise = new Promise((resolve, reject) => {
    //console.log("i am a promise");
    // resolve(success);
  });
}

// promises
//    .then()   and  .catch()

//   promise.then((res) =>{..})
//   promise.catch((err) => {..})

const getPromise = () => {
  return new Promise((resolve, reject) => {
    //console.log("i am promise 1");
    //resolve("success");
  });
};

let Promice = getPromise();
Promice.then(() => {
  //console.log("promiced fullfilled");
});

// Promise chain

function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("some data");
      resolve("success");
    }, 2000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     // console.log("some data 2");
      resolve("success");
    }, 6000);
  });
}

//console.log("fetching detail.....");
let p1 = asyncFunc();
p1.then((res) => {
  let p2 = asyncFunc2();
  p2.then((res) => {});
});

//console.log("fetching detail2.....");
let p2 = asyncFunc2();
p1.then((res) => {
 // console.log("res");
});

//   Async-Await :
//   async function always return a promise
//   async myFunc(){..}
//   await pauses the execution of its surrounding async function untill the promise is settled.


async function hello () {
  //console.log("hello");
}

function api() {
return new Promise ((resolve,reject) =>{
  setTimeout (() =>{
    console.log("weather data");
  resolve(200);
  },2000);
});
}

async function getWeatherData (){
  await api();
  await api();
}


function getDataa(dataId){
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      console.log("data",dataId);
      resolve("success");
    },3000);
  });
}

async function getAllDataa() {
  console.log("geting data 1 ......")
  await getDataa(1);
  console.log("geting data 2 ......")
  await getDataa(2);
  console.log("geting data 3 ......")
  await getDataa(3);
   console.log("geting data 4 ......")
  await getDataa(4);
   console.log("geting data 5 ......")
  await getDataa(5);
   console.log("geting data 6 ......")
  await getDataa(6);
  
  
  
}