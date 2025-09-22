//1. Variables(var, let, const)
var name = "kalai"
console.log(name);
name = "Keerthana"
console.log(name);

let num = 21
console.log(num);
num = 13
console.log(num);

const PI  = 3.14
console.log(PI);
//pi = 22/7 --> constant variable cannot be modified


//2. Data types (string, number, boolean, array, object, null, undefined, symbol, bigint)
let num1 = 50
let num2 = 57.3
console.log(num1, typeof num1);
console.log(num2, typeof num2);
let Infi = Infinity
console.log(Infi, typeof Infi);
let nan = NaN
console.log(nan, typeof nan);
nan  = nan ** 0
console.log(nan, typeof nan);
let max = 9007199254740991n
console.log(max);
console.log(max + 1n);
console.log(max + 2n);
let username = 'kalai'
console.log(username, typeof username);
console.log(`${num1} +  ${num2} is `+(num1 + num2));
let val = null
console.log(val, typeof val);
let val1;
console.log(val1, typeof val1);
let isFemale = true
console.log(isFemale, typeof isFemale);
let arr = [1, 2, 3, 4,5]
console.log(arr);
let user = {
    name:"Kalaiselvi",
    age:21,
    Marks:98
}
console.log(user, typeof user);
console.log(user.name)
console.log(user.age);
console.log(user['Marks']);
user['Mobile'] = "9876543210"
console.log(user);
console.log(user['Mobile']);
let sym1 = Symbol("id")
let sym2 = Symbol("id")
console.log(sym1 == sym2)
let Id= Symbol("id")
user[Id] = 101 
console.log(user)
for(let key in user)
    console.log(key)
    

//3. Functions(declaration, expression, arrow function)
function greet(name) {
    console.log("Hello", name);   
}
greet("kalai")
let greetings = greet
greetings("Keerthana")
let welcome = function (username1) {
    console.log("Hi", username1);  
}
welcome("Gayathri")
let sum = (a, b) => 
    {
        console.log(a + b)
    }
sum(13, 21)
let Multiply = (a, b) => {
    return a * b
}
console.log(Multiply(4, 8))

let operation = (op, a, b) => {
    return op(a, b)
}
let add = (a, b) => {
    return a + b
}
let sub = (a, b) => {
    return a - b
}
console.log(`The result is ${operation(sub, 21, 13)}`)

//4. Template literals
console.log(`Kalai's age is`,user.age)

//5. Destructuring Arrays and objects
let Arr = [10, 20, 30, 40, 50]
console.log(Arr);
let [a, b, c, d, e] = Arr;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log("-----------")
let [n1, , n3, n4, n5] = Arr;
console.log(n1)
console.log(n3)
console.log(n4)
console.log(n5)
console.log("-----------")
let [a1 = 1, a2 = 2, a3 = 3, a4 = 4, a5 = 5] = [10, 20, 30, 40]
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log("-----------")
let [first, ...rest] = [1, 2, 3, 4];
console.log(first);
console.log(rest);

// let student = {
//        studentName : "kalaiselvi",
//        studentRollNo :  21,
//        studentMarks : 99,
//        personalDetails: {
//         email : "nytowlkalai@gmail.com",
//         mobile: "9876543210"
//        },
//        hobby1 : "Writing poem",
//        hobby2 : "listening music"
// }
// console.log(student)
// const {studentName, studentRollNo, studentMarks, studentAge = 19, personalDetails : {email, mobile}, ...others} = student;
// console.log(studentName)
// console.log(studentRollNo)
// console.log(studentMarks)
// console.log(studentAge)
// console.log(email)
// console.log(mobile)
// console.log(others)
// const {studentName :Name, studentRollNo : No, studentMarks: Marks} = student;
// console.log(Name)
// console.log(No)
// console.log(Marks)

//6. Spread and rest operators
//SPREAD
let numbers = [1, 2, 3]
let newnumbers = [...numbers, 4, 5];
console.log(newnumbers)

let person = {
    personName : "Kalai",
    personAge : 20
}

let newPerson = {
    ...person,
    personCity : "Coimbatore"
}
console.log(newPerson)
function addition(a, b, c) {
    return a + b + c;
}
let nums = [20, 40, 60];
console.log(addition(...nums))

//REST
let [one,...res] = ["One", "two" ,"three", "four", "five"]
console.log(one)
console.log(res)
let ob = {
     Day1 : "Monday",
     Day2 : "Tuesday",
     Day3 : "Wednesday",
     Day4 : "Thursday",
     Day5 : "Friday",
     Day6 : "Saturday",
     Day7 : "Sunday",
}
let {Day1, ...other} = ob;
console.log(Day1)
console.log(other)
console.log(ob.Day2)
function func(...nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}
console.log(func(20, 30, 40));

//7. Objects and Methods
let student = {
       studentName : "kalaiselvi",
       studentRollNo :  21,
       studentMarks : 99,
       personalDetails: {
        email : "nytowlkalai@gmail.com",
        mobile: "9876543210"
       },
       hobby1 : "Writing poem",
       hobby2 : "listening music",
       hobbies(){
         console.log(this.hobby1,"," ,this.hobby2)
       }     
}
console.log(student.studentName)
console.log(student.personalDetails.email)
student.hobbies()
let userob = {}
userob.name = "kalai"
console.log(userob);
delete userob.name;
console.log("Deleted succesfully")
console.log(userob);

//8. Loops
//WHILE LOOP
let n = 10;
while(n <= 15)
{
    console.log(n);
    n++;
}
//DoWHILE LOOP
do {
    console.log(n);
    n++;
}while(n < 10);
for(let n = 1; n <= 5; n++)
{
    console.log(n);
}
//fibonnacci program
let number = 7
let f1 = 0, f2 = 1;
let next = f1 + f2;
for(let i = 3; i <= number; i++)
{
     next = f1 + f2;
     f1 = f2;
     f2 = next;
    
}
console.log(next);
//for in loop
let names = ["kalai", "sahana", "gokila"]
for(let name in names) {
    console.log(names[name]);
}
for (let val in student) {
    console.log(val, ":", student[val]);
}
//for of loop
for(let val of names[0])
{
    console.log(val)
}
//for each loop
names.forEach((ele, ind) =>{
    console.log(`${ind} ${ele}`)
})

//9. Array Methods
let newArray = new Array("Apple", "Mango", "Orange", "Grapes")
console.log(newArray, typeof newArray)
// newArray = []
// console.log(newArray)
newArray.push({
    name: "kalai",
    age : 21
});
console.log(newArray, typeof newArray)
newArray.push(function add(a, b){
    return a + b;
})
console.log(newArray[5](9, 6));
console.log(newArray[4].name)
for(let v of newArray)
    console.log(v)
for(let val in newArray)
    console.log(newArray[val]);
console.log(newArray.length)
//ForEach()
let newArray1 = [1, 2, 4, 5, 6, 7, 8, 9, 10];
newArray1.forEach(num => console.log(num));
//map()
let newArray2 = newArray1.map(num => num * 2);
console.log(newArray1);
console.log(newArray2)
//filter()
let even = newArray1.filter(num => num % 2 == 0)
console.log(even);
//reduce()
const red = newArray1.reduce((acc, cur) => acc + cur, 0);
console.log(red);
//find()
const three = newArray1.find(num => num % 3 == 0)
console.log(three);
//some()
console.log(newArray1.some(num => num % 4 == 0))
//every()
console.log(newArray1.every(num => num % 4 == 0))

//10. Truthy and Falsy values
console.log("Truthy and falsy values")
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
//others are truthy values
console.log(Boolean("0"));
console.log(Boolean(" "));
//11. Equality (== vs ===)
console.log("Equality (== vs ===)")
console.log(5 == "5")
console.log(5 === "5")
//12. Conditional statements
let age = 18, gender = "others"
if(age == 18 && gender == "Female")
    console.log("Eligible for Marriage")
else if(age == 18 && gender == "Male")
    console.log("Not eligible for voting")
else
    console.log("Eligible for nothing")
let day = "Satday"
switch(day) {
        case "Monday" :
        console.log("Monday")
        break;
        case "Tuesday" :
        console.log("Tuesday")
        break;
        case "Wednesday" :
        console.log("Wednesday")
        break;
        case "Thursday" :
        console.log("Thursday")
        break;
        case "Friday" :
        console.log("Friday")
        break;
        case "Saturday" :
        console.log("Saturday")
        break;
        case "Sunday" :
        console.log("Sunday")
        break;
        default :
        console.log("Invalid Day")
}

console.log((77 % 2 == 0) ? "Even" : "Odd");

// 13. Asynchronous Javascript (callbacks, promises, async/await)
let k = 20;
function EvenOdd() {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
               if(k % 2 == 0)
                resolve("K is even");
            else
                reject("K is odd")
            }, 1000)  
        });
    }
function EvenOrNot() {
   EvenOdd().then((message) => {
       console.log(message)
   })
   .catch((error) => {
    console.log(error);
   })
   .finally(() => {
    console.log("Finally block Executed")
   })

    }
EvenOrNot()
let k1 = 5
function Divisibleby5(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
              if(k1 % 5 == 0)
                  resolve(`${k} is dividsible by 5`)
              else
                  reject(`${k} is not divisible by 5`)
        }, 1000)
       
    });
}
async function Division() {
    try{
       let result = await Divisibleby5();
       console.log(result);
    }
    catch(error) 
    {
        console.log(error);
    }
    finally{
        console.log("Finally block executed")
    }
} 
Division()

//14. ES Modules
let newgreet = function (name) {
    console.log("Hello", name)
}
export default newgreet;

// 15. Error Handling
try {
console.log(k.name);
}
catch (error) {
    console.log("Error has been occurred");
}

//16. this keyword
let f = function () {
    console.log(this);
}
f()
console.log(this);

//17. Closure
let count = 0;
function outer () {
    count = 0;
    return function inner() {
        count++;
        return count;
    }
}
const counter = outer()
console.log(counter())
console.log(counter())
console.log(counter())

//18. Scope (Global and local)

//19. Hoisting

console.log(w);
var w = 9;
console.log(w); // undefined only

console.log(x);
let x = 9;
console.log(x); // Reference error

// function declaration + definition also like this only so that function call can execute first

//20. Event loop & callback (already discussed before)
