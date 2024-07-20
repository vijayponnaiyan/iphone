
//  function outer(){
//      let  counter = 0
//     function inner(){
//       counter++
//   console.log(counter)
//     }
//     return  inner 
//  }
//   const cool =  outer()
//     cool()
//     cool()
 
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };

// // Only change code below this line
//  const { today,  tomorrow } = HIGH_TEMPERATURES;

//   console.log(today);

// // Use Destructuring Assignment to Assign Variables from Objects

//   const LOCAL_FORECAST = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
//   };
  
//   // Only change code below this line
//   const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

//    console.log(LOCAL_FORECAST.today);
   
 
//  const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85

//  };

//   const  half = ({ max,min})=>( max * min )/2.0
  
//     console.log(half(stats));


//  const aerr = () =>{
//        console.log("hi");
//  };
//  aerr()


// class Book {
//       constructor(author) {
//         this._author = author;
//       }
//       // getter
//       get writer() {
//         return this._author;
//       }
//       // setter
//       set writer(updatedAuthor) {
//         this._author = updatedAuthor;
//       }
//     }
//     const novel = new Book('anonymous');
//     console.log(novel.writer);
//     novel.writer = 'newAuthor';
//     console.log(novel.writer);

// function zeroArray(m, n) {
//   // Creates a 2-D array with m rows and n columns of zeroes
//   let newArray = [];

//   for (let i = 0; i < m; i++) {
//     // Adds the m-th row into newArray
//   let row = [];
//     for (let j = 0; j < n; j++) {
//       // Pushes n zeroes into the current row to create the columns
//       row.push(0);
//     }
//     // Pushes the current row, which now has n zeroes in it, to the array
//     newArray.push(row);
//   }
  
//   return (
//     newArray

//     );}

// let matrix = zeroArray(4, 10);
// console.log(matrix);

  //  const newArray = [1,3,4,5,6];
   
  // const  block = newArray.map(
  //   function(x){
  //    return x*x
  // } 
  // );
  //   console.log( block);

//  const name = ["vijay","ravi","mani","gowtham","subha"];

// const changeName = ((name)=>{
//         return name[0].toUpperCase() +name.slice(1)

// });

// console.log(changeName(name));

// const names = ["vijay", "ravi", "mani", "gowtham", "subha"];

// // const changeNames = (names) => {
// //     return names.map(name => name[0].toUpperCase() + name.slice(1));
// // };

// // console.log(changeNames(names));

//  const hello = names.map((gold)=>{
//         return `<p>${gold}</p>` 
//  });
//   console.log(hello);


// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };


// function addFriend(userObj, friend){

//       userObj.data.friends.push(friend);   //array push in data
//       return ( 
//         userObj.data.friends // return statement   
        
//         );

// }
//    console.log( addFriend (user,"vijay"));

  // function findlong(s){
  //    return s
  //    .split(' ')
  //      .reduce((longest , word ) =>Math.min(longest, word.length),0);

  // }
  // console.log (findlong("Remember, you can iterate through an array with a simple for loop, and access each member with array syntax"));


 
//   function simpleMultiplication(number) {
//     // your code........
//      let count = 0;
//      for( let  i = 0; i < number ; i++  ){
//          count += number *3 ;     
//      }  
//       return count ;
  
// }
//  console.log( simpleMultiplication(3) );  
  

//  function simpleMultiplication(number) {
//   // your code........
// return number % 2 === 0 ?  number = "even" : number = "add" ;   
  

// }
// console.log( simpleMultiplication(2) );  

  // const object = { a: 1, b : 2 , c : 3 };

  // for( const property in object){
  //   console.log(`${property}:${object[property]}`);
  // } 







  



//   function calculateAge(year) {
//     if (year > 2016 || year < 2012) {
//         return "You are 4 years old";
//     } else if (year <= 2016 && year >= 1989) {
//         return "You are 27 years old";
//     } else if (year <= 2090 && year >= 2000) {
//         return "You are 90 years old";
//     } else {
//         return "Unknown age";
//     }
// }

// console.log(calculateAge(2017)); // Output: Child


// let funModule = (function() {
//   return {
//     isCuteMixin: function(obj) {
//       obj.isCute = function() {
//         return true;
//       };
//     },
//     singMixin: function(obj) {
//       obj.sing = function() {
//         console.log("Singing to an awesome tune");
//       };
//     }
//   };
// })();

// const prepareTea = () => 'greenTea';

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = numOfCups => {
//   const teaCups = [];

//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// // Only change code below this line
// const tea4TeamFCC = getTea(40);
// // Only change code above this line

//  console.log(tea4TeamFCC);




///DSA
// class Solution {
//   getLastDigit(a, b) {
//       let result = 1;
//       a = a % 10; // Take only the last digit of 'a'

//       // Exponentiation by squaring
//       while (b > 0) {
//           if (b % 2 === 1) {
//               result = (result * a) % 10;
//           }
//           a = (a * a) % 10;
//           b = Math.floor(b / 2);
//       }
      
//       return result;
//   }
// }

// // Example usage:
// const solution = new Solution();
  

//  console.log(solution.getLastDigit(3, 10)); // Output: 3

// function sayHello( name, city, state ) {
    
//   let fullname = name.join( " ");
  
//   const wellcome = `Hello  this my native  place ${fullname}  and  ${ city} next ${state}! ` 
   
//   return wellcome;
  
// }
//    console.log( sayHello( ['p', 'vijay'], "kumbakonam", "Tamilnadu" )   );



// function shortcut(string) {
//   const newString = string.slice(1,4);
//   return newString;
// }

// console.log(shortcut("hello"));


  // function add(a){
  //    return function(b){
  //      return a + b 
  //    }
  // }

  //  console.log( add(2)(3));
   

//  const  add2 =  a=> b => c=> a+b+c 
//     console.log(add2(2)(3)(2))




// // Function that returns a string representing a cup of green tea
// const prepareGreenTea = () => "greenTea";

// // Function that returns a string representing a cup of black tea
// const prepareBlackTea = () => "blackTea";

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];

//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// // Only change code below this line
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// // Only change code above this line

// console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

    
// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

// const usersUnder30 = users.filter(user => user.age < 23);
// console.log(usersUnder30);  


// const Name = [
//   { name: "bhibe", age: 53, parent:"dnejd" },
//   { name: "dekd", age: 34 ,parent:"dnejd"},
//   { name: "kbejv", age: 53 ,parent:"dnejd"}
// ];

// function mYName(Name) {
//   return Name.map((good) => {
//       return {
//           name: good.name,
//           age: good.age,
//           parent:good.parent
//       };
//   });
// }

// const transformedNames = mYName(Name);

// setTimeout(() => {
//   console.log(transformedNames);
// }, 2000);

 




// function solution(number) {
//   if (number < 0) {
//       return 0;
//   }

//   let sum = 0;

//   for (let i = 0; i < number; i++) {
//       if (i % 3 === 0 || i % 5 === 0) {
//           sum += i;
//       }
//   }

//   return sum;
// }

// console.log(solution(10));  // Output: 0

     



  // for (let i = 0 ; i < 3 ;i++){
  //   setTimeout(() => {
  //     console.log(i);
  //   }, 1000);
  // }


  // function sentensify(str) {
  //   // Only change code below this line
      
  //     return str.split(/\W/).join("");  
  
  //   // Only change code above this line
  // }
  
  //  const result =  sentensify("May-the-force-be-with-you");
  
  //   console.log(result);


  //   const vijay ={
  //        name:"vijay",
  //        color : "black",
  //        hight: 5.9,
  //        Qulification: "B.E"   
  //     }

  //   const  cell ={
  //        mobil: 8760648680
  //   }  
  //     const newhello = { ...vijay, ...cell };
  //   //  console.log(newhello ); { name: 'vijay', color: 'black', hight: 5.9, Qulification: 'B.E' }
  //    const nameOnely =  newhello.name
  //   console.log(nameOnely);   //vijay
  //   const  { name , ...rest } = newhello;
  //   console.log(rest); // { color: 'black', hight: 5.9, Qulification: 'B.E', mobil: 8760648680 }

  //  console.log(newhello);
      

 


  // // create a variable for the sum and initialize it
  // let sum = 0;
  
  // // iterate over each item in the array
  // for (let i = 0; i < myNums.length; i++ ) {
//   //   sum += myNums[i];
//   // }
  
//   // console.log(sum)
  

// // Sample array of numbers
// const numbers = [2, 4, 6, 8, 10];

// // Initialize arrays to store results
// const additionResults = [];
// const subtractionResults = [];
// const modulusResults = [];
// const multiplicationResults = [];

// // Loop through the array and perform operations
// for (let i = 0; i < numbers.length; i++) {
//     additionResults.push(numbers[i] + 2);         // Add 2 to each element
//     subtractionResults.push(numbers[i] - 1);      // Subtract 1 from each element
//     modulusResults.push(numbers[i] % 3);          // Modulus 3 of each element
//     multiplicationResults.push(numbers[i] * 2);   // Multiply each element by 2
// }

// // Log the results

// console.log("Addition results (+2):", additionResults);



  const number = [192,233,3,33,232,323,24,556,6];
  
      addResult=[];
      subResult=[]

 for(let i=0; i< number.length ; i++   ){
    //  addResult.push(number[i]-10)
     subResult.push(number[i] -2 )
 }


  console.log(    subResult);


 


