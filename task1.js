// 1What will the following print in js
// console.log("har\"".length);

// 2Explore the includes, startswith and endswith function of a string
//let n1="Hello welcome";
// n4=n1.includes('Hello');
// if( n2=n1.startsWith('H'))
//     console.log(n2);

// if(n3=n1.endsWith('e'))
//     console.log(n3);

// console.log(n4);

//3 Write a program to convert a given string to lowercase
// n5=n1.toLowerCase();
// console.log(n5);

//4 Extract the amount out of the string
// "Please give Rs 10000“

// let n1=1000;

// Try to Change 4th character of a given string
//"Where you able to do it?“
const str = "Please give Rs 10000";
const match = str.match(/Rs\s*(\d+)/);

if (match) {
  const amount = match[1];
  console.log(amount);
} 

else {
  console.log('No amount found');
}


// let n="Where you able to do it?"
// const newString = replaceChar(n, 3, 'I');
// console.log(newString);