// Example 1: Display Numbers from 1 to 5
// let n=1;
// while(n!=6)
// {
//     console.log(n)
//     n++;
// }

// Example 2: Uses the while statement to output the odd numbers
// between 1 and 10.

let oddno=1;
while(oddno<10)
{
    console.log(oddno);
    oddno+=2;
}

// Example 3:Find factorial of a number.
let n = 5; 

function factorial(n) { 
    let ans = 1; 
    
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}

console.log(factorial(n));