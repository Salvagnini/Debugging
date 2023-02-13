"use strict";

// lec
// function getValues(expression){
//   let values = [...expression]
//   return values; //values = (3) ['5','-', '2']
// }
// function count(expression) {
//   let values = getValues(expression);
//   switch (values[1]) {
//     case '+':
//       showResult(sum(values));
//       break;
//     case '-':
//       showResult(subtract(values));
//       break;
//     case '*':
//       showResult(multiply(values));
//       break;
//     case '/':
//       showResult(divide(values));
//       break;
//   }
// }
// function sum(values) {
//   return values[0] + values[2];
// }
// function subtract(values) {
//   return values[0] - values[2];
// }
// function multiply(values) {
//   return values[0] * values[2];
// }
// function divide(values) {
//   return values[0] / values[2];
// }
// function showResult(values) {
//   alert(values)
//   document.write(values)
//   console.log(values);
// }
// count('5-9');




// *********************
// виправити код   count('5+3') повертає вираз 53


function count(expression) {
  function getValues(expression) {
    let values = [...expression]
    return values;
  }
    let values = getValues(expression);
    switch (values[1]) {
      case '+':
      return showResult(sum(values));
      case '-':
      return showResult(subtract(values));
      case '*':
      return showResult(multiplay(values));
      case "/":
      return showResult(divide(values));
  }
}
  function sum(values) {
    return +values[0] + +values[2];
  }
  function subtract(values) {
    return +values[0] - +values[2];
  }
  function multiplay(values) {
    return +values[0] * +values[2];
  }
  function divide(values) {
    return +values[0] / +values[2];
}
function  showResult(values) {
  alert(values)
  document.write(values)
  console.log(values);
}
    count('5+3');




// перевірка ділення числа на 0

// function count(expression) {
//   function getValues(expression) {
//     let values = [...expression]
//     return values;
//   }
//     let values = getValues(expression);
//     switch (values[1]) {
//       case '+':
//       return showResult(sum(values));
//       case '-':
//       return showResult(subtract(values));
//       case '*':
//       return showResult(multiplay(values));
//       case "/":
//       return showResult(divide(values));
//   }
//     function showResult(values) {
//     return values;
//     }
// }
//   function sum(values) {
//     return +values[0] + +values[2];
//   }
//   function subtract(values) {
//     return +values[0] - +values[2];
//   }
//   function multiplay(values) {
//     return +values[0] * +values[2];
//   }
//   function divide(values) {
//     try {
//     if (values[2] === '0') {
//       throw new Error(`Can't divide by 0`);
//     } else {
//       return +values[0] / +values[2];
//     }
//     } catch (error){
//    console.log (error.name + ' : ' + error.message)
//   return 0;
// }
// }
// count('5/0');


// **********3***********

//  function count(expression) {
//   function getValues(expression) {
//     let values = [...expression]
//     return values;
//    }
   
//    try{
//      let values = getValues(expression);
//    } catch (error) {
//      let values;
//    if (error.message === "expression is not iterable") {
//       alert("You write incorect velues");
//       console.log(error.name + ": " + error.message);
//       return (values = [0, "+", 0]);
//     }
//   }

//   let values = getValues(expression);
//   try {
//     let data = values(expression);
//     data = values;
//   } catch (error) {
//     if (error.message === "Values is not defined") {
//       alert("Values is not defined");
//       console.log(error.name + ": " + error.message);
//       return (values = [0, "+", 0]);
//     }
//   }

//   switch (values[1]) {
//     case "+":
//       return showResult(sum(values));
//     case "-":
//       return showResult(subtract(values));
//     case "*":
//       return showResult(multiply(values));
//     case "/":
//       return showResult(divide(values));
//   }
//   function showResult(value) {
//     return value;
//   }
// }

// function sum(values) {
//   return +values[0] + +values[2];
// }
// function subtract(values) {
//   return +values[0] - +values[2];
// }
// function multiply(values) {
//   return +values[0] * +values[2];
// }
// function divide(values) {
//   return +values[0] / +values[2];
// }

// count(5 - 2);

// *************4*************

// function MakeUsers(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let user = new MakeUsers('Miki');

// function showMovie(user) {
//   if (user.age >= 18) {
//     alert('You can watch this movie');
//   }
  
//   if (user.age <= 18) {
//     alert('Sorry, you are too young');
//   }
//   try {
//     if (user.age === undefined)
//     throw new Error("Age not determined");
//   }
//   finally {
//     user.age = prompt("How old are you ?");
//     showMovie(user);
//   }
// }

// showMovie(user);

