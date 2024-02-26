//misol1
// function intToString(num) {

//    console.log("" + num);
// }
// intToString(123)

///misl2
// function str_count(str, char) {
//    let count = 0;
//    for (let i = 0; i < str.length; i++) {
//      if (str[i] === char) {
//        count++;
//      }
//    }
//    return count;
//  }
// let d = str_count('Azizbek','z')
// console.log(d);

// misol3
// function invert(array) {
//    return array.map(num => num === 0 ? 0 : -num);
//  }
// let d = invert([113,64,3,4,5,6])
// console.log(d);

///misol4
// function multiplyValues(x) {
//     let result = 1;
//     for (let i = 0; i < x.length; i++) {
//       result *= x[i];
//     }
//     return result;
//   }

//   let multiplyValues2=multiplyValues([1, 2, 3, 4])
//   console.log(multiplyValues2);

//misol5
// function setAlarm(employed, vacation) {
//     return employed && !vacation;
//   }
//   let d =setAlarm(true,true)
//   console.log(d);

//misol6
// function stringToNumber(str) {
//     return Number(str)
// }
// let d = stringToNumber('123')
// console.log(d);

//misol7
// function paperwork(n,m) {
//     if (n <= 0 || m <= 0) {
//         return 0
//     } else {
//         return n*m;
//     }
// }
// let d =paperwork(5,5)
// console.log(d);

//misol8
// function solution(str) {
//     return str.split('').reverse('').join('')
// }
// let d = solution('word')
// console.log(d);

///misol9
// function stringToArray(str){
//     return str.split(' ');

// }
// let d =stringToArray('Robin ,Singh')
// console.log(d);

//misol10
// function opposite(number) {
//   return -number
//   }
//   let d= opposite('123')
//   console.log(d);

//Misol11
// function sumStr(a,b) {
//     const int1 = parseInt(a);
//     const int2 = parseInt(b);
//     if (isNaN(int1) || isNaN(int2)) {
//         return "NaN";
//     }
//     return (int1 + int2).toString();
// }
// let d= sumStr("NaN","8")
// console.log(d);

////////////////////////
//////////////////////
////////////////////
//////////////////
////////////////

//msiol2
// function boolToWord( bool ){
//  if (bool ===true) {
//     return 'Yes'
//  } else if(bool === false) {
//     return 'No'
//  }
// }
// let d =boolToWord(true)
// console.log(d);

//misol13
// function evenOrOdd(number) {
//   if (number % 2 == 0) {
//     return 'Even'
//   } else {
//     return 'Odd'
//   }
// }
// let d =evenOrOdd(-42    )
// console.log(d);

//MISOL14
// function basicOp(operation, value1, value2){
// if (operation ==='+') {
//     return Number(value1) +  Number(value2)
// } else if(operation ==='-') {
//     return Number(value1) -  Number(value2)
// }
// else if(operation ==='*') {
//     return Number(value1) *  Number(value2)
// }
// else if(operation ==='/') {
//     return Number(value1) /  Number(value2)
// }else if(operation ==='%') {
//     return Number(value1) %  Number(value2)
// }else{
// return 'amal Yozing'
// }
// }
//   let d = basicOp('%','3','3')
//   console.log(d);

//misol15
// function greet(name){
//   return 'Hello' + name +  ' how are you doing today?'

//   }
//   let d =greet(' Dilmurad')
//   console.log(d);

//misol16
// function hoopCount (n) {
// if (n > 10 == 0) {
//     return "Keep at it until you get it"
// } else {
//     return "Great, now move on to tricks"
// }
// }
// let d =hoopCount(11)
// console.log(d);

//misol17

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
// return laLigaGoals+copaDelReyGoals+championsLeagueGoals
// }
// let d = goals(5,10,2)
// console.log(d);

//misol18
// function stray(arr) {
//     const counts = {};

//     arr.forEach(num => {
//         counts[num] = (counts[num] || 0) + 1;
//     });

//     for (let num in counts) {
//         if (counts[num] === 1) {
//             return parseInt(num);
//         }
//     }
// }
// let d= stray(1,1,1,4,3,1,1)
// console.log(d);

//misol19
// function filter_list(l) {
//  return l.filter(item=> typeof item !== 'string')
// }
// let d = filter_list([1,2,'test','test4',6,5])
// console.log(d);

//misol20
// function smash (words) {
//     return words.reduce((acc, curr) => acc.concat(curr), []);
//  };
// let d= smash(['Hello','world'])
// console.log(d);

//misol21
// function abbrevName(name){
// const [state,setState]=name.split(" ")
// const undefined = ` ${state[0].toUpperCase()}.${ setState[0].toUpperCase()} `
// return undefined

// }
// let d = abbrevName('Davletov Dilmurad')
// console.log(d);

//misol22
// function sayHello(name) {
// return 'Hello'
//   }

//misol23
// function arithmetic(a, b, operator) {
//   if (operator === "add") {
//     return Number(a) + Number(b);
//   } else if (operator === "subtract") {
//     return Number(a) - Number(b);
//   } else if (operator === "multiply") {
//     return Number(a) * Number(b);
//   } else if (operator === "divide") {
//     return Number(a) / Number(b);
//   } else {
//     return "amal Yozing";
//   }
// }
// let d = arithmetic(5, 3, "add");
// console.log(d);



//misol24
// function Apple(dd,d1) {
//  return dd.indexOf(d1)
// }
// let d = Apple([1,4,3,2,13],1)
// console.log(d);









//misol25
// function greet (name, owner) {
//  if (name === owner) {
//   return 'Hello boss'
//  } else {
//   return 'Hello guest'
//  }
// }
// let d = greet('Dilmurad','Dniel')
// console.log(d);




//misol26
// function digitize(n) {
//   return n.toString().split('').reverse().map(Number);
// }

// let d = digitize(2332423);
// console.log(d);





//misol27
// function sumMix(x){

//   return x.reduce((acc, val) => acc + Number(val), 0);
      
// }
// let d =sumMix([9,4,'3',2,2,'4',9])
// console.log(d);




//misol28
// function check(a, x) {
//   return a.includes(x);
//  }
//  let d =check([422,242,4],422)
//  console.log(d);












///////////
////////////
/////////////
///////////////
////////////////
/////////////////



//misol29
// function lastItem(input) {
//   if (input.length === 0) {
//     return undefined;
//   }

//   if (Array.isArray(input)) {
//     return input[input.length - 1];
//   } else if (typeof input === 'string') {
//     return input[input.length - 1];
//   } else {
//     return undefined; 
//   }
// }

// console.log(lastItem([433])); 






//misol30
// function numberSplit1(n) {
//   var half = Math.round(n / 2);
//   return [half, n - half];
// }
// let d = numberSplit1(-11) 
// console.log(d);


//misol21
// function sortIt(arr) {
//  let d = arr.shift();
//   return [...arr, d];
// }
// let d= sortIt([1,3,4])
// console.log(d);



//misol32
// function ascDesNone(arr, str) {
// 	if (str === 'Asc') {
//     return arr.reverse(' ')
//   } else if (str === 'Des'){
//     return arr.reverse(' ')
//   }else if(str === 'None'){
//     return arr
//   }
// }
// let d =ascDesNone([7, 9, 11, 16, 19, 43, 111],'Asc')
// console.log(d);

///////////tamom



///////////
////////////
/////////////
///////////////
////////////////
/////////////////


///misol33
// function fixTheMeerkat(arr) {
//   return arr.reverse('  ')
// }
// let d =fixTheMeerkat(['tails','Dilmura','asf'])
// console.log(d);


//misol34
// function invert(array) {
//   return array.map(num=> -num);
// }
// let d =invert([-1,42,-3,32,36,-1,-5])
// console.log(d);


//misol35
// function century(year) {
//   return Math.ceil(year / 100);
// }
// console.log(century(1705)); 


//misol36
// function isIsogram(str){
//   return str === str.toUpperCase(); 
// }

// let d = isIsogram('HELLO');
// console.log(d); 


//misol37
// function solution(nums){
//     if (nums) {
//         return nums.sort((a, b) => a - b);
//     } else {
//         return []
//     }
   
// }

// let d =solution([1,2,3,5,4])
// console.log(d);

//misol38
// const rps = (p1, p2) => {
    // if (p1 === p2) {
        // return "Draw!";
    // } else if (
        // (p1 === "rock" && p2 === "scissors") ||
        // (p1 === "scissors" && p2 === "paper") ||
        // (p1 === "paper" && p2 === "rock")
    // ) {
        // return "Player 1 won!";
    // } else {
        // return "Player 2 won!";
    // }
// };


//misol39
// function removeEveryOther(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         arr.splice(i, 1);
//     }
//     return arr;
// }
//    let d = removeEveryOther([1,2,3,4])
//    console.log(d);



//misol40
// function getBonus(obj, kbonus) {
//     let totalBonus = 0;
//     for (let key in obj) {
//         let price = obj[key];
//         let bonus = price >= kbonus ? price * 0.05 : 0;
     
//         totalBonus += bonus;
//     }
//     return totalBonus;
// }

// let bonusAmount = getBonus({
//     shampun: 12000,
//     sabun: 22000,
//     krem: 32000,
//     losyon: 42000,
//     kolonya: 52000,
//     maskara: 62000
// }, 20000);

// console.log(bonusAmount); 



///misol
