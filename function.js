//Write a program to find the area of a triangle using function

// function area (b,h)
// {
//    return 0.5*b*h;
// }
//  let a1=area(10,99);
// console.log(a1);


// Write a JavaScript function that accepts a number as a parameter and check
// the number is prime or not.


// program to check if a number is prime or not

// take input from the user



// function checkPrime(number) {
//     let isPrime = true; 

//     if (number === 1) {
//         console.log("1 is neither prime nor composite number.");
//     } else if (number > 1) {
//         for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             console.log(`${number} is a prime number`);
//         } else {
//             console.log(`${number} is not a prime number`);
//         }
//     } else {
//         console.log("The number is not a prime number.");
//     }
// }

// checkPrime(20);

// Write a JavaScript function that checks whether a passed string is
// palindrome or not?

let name1="ueeeueeu"
function palindrome(name)
{
    let l=name.length;
   for(i=0;i<l;i++)
   {
        for(j=l-1;j>=0;j++)
        {
            if(name[i] === name[j])
            {
                document.write(Palidrome);
            }
        }
    }
}
 palindrome(name1);


