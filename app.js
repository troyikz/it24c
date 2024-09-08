//a. Data types
//String:
let color = "pink";
let name = "Troy";

//Number:
let length = 16;
let width = 20;

//Booleans:
let x = true;
let y = false;

//Object:
const flowers = {firstName:"kat", lastName:"rogs"};
const myflowers = ["rose", "sunflower", "daisy"];


//b. Arithmetic and Logical Operators
//Addition
let add = 1 + 6;

//Subtraction
let sub = 8 - 4;

//Multiplication
let mul = 16 * 8;

//Division
let div = 8 / 2;

//Exponentiation
let exp = 7 ** 2;

//Modulu
let mod = 12 % 6;

//Increment
x++;
//Decrement
y--;

//c. Conditional Statements
//i. If else
let number = 90;
if(number >= 89 ){
    september = "missinng her";
}else{
    september = "still missing her";
}
console.log(september);

//ii. Switch
let z = 2 % 2;
switch (z){
    case 0:
        peacefull = "Even"
        break;
    case 1:
        peacefull = "Odd"
        break;
    default:
        peacefull = "No Value"
}
console.log(peacefull);

//d. Loops
//i. For
for(let b = 0; b < 5; b++){
    console.log(b);
}

//ii. For in
const freind = ["jade", "Velt", "Sabal"];
let fren = "";
for(let c in freinds){
    fren += freinds[c];
    console.log(freinds);
}

//iii. For of
const names = ["Erick", "James", "Troy"];
let hello = "";
for(let m of names){
    hello += m;
    console.log(m);
}

//iv. For while
let j = 0;
while(j < 10){
    j++;
    console.log(j);
}

//e. Functional Programming
//i. Odd or even
let o = 0;
while(o < 5){
    o++;
    let l = o % 2;
    switch (l){
        case 0:
           bang = "Even"
            break;
        case 1:
          bang = "Odd"
            break;
        default:
           bang= "No Value"
    }
    console.log(o + ". " + o + " is " + bang);
}

//ii. determine prime numbers
let numss =34;
if(numss == 0 || numss == 1){
    let flag = true;
}
for(let p = 2; p <= numss / 2; p++){
    if (numss % p == 0){
        flag = true;
        break;
    }
}
if(!flag){
    console.log(numss + " is prime");
}else{
    console.log(numss + " is not prime");
}

//iii. determine a string if it is a palindrome

function isPalindrome(missyu) {
    let j = t.length - 1
    for (let i = 0; i < missyu.length / 2; i++) {
        if (missyu[i] != missyu[j]) {
            return false;
        }
        j--;
    }
    return true;
}

let missyur1 = "Rusi";
let missyu2 = "Honda";
let missyu3 = "Yamaha";

console.log(isPalindrome(missyu1));
console.log(isPalindrome(missyu2));
console.log(isPalindrome(missyu3));
