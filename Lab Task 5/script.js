//Addition
console.log(50+5) //55
//Subtraction
console.log(100-45)
//Multiplication
//Division
console.log(400/25)
//Modulo!!
console.log(27% 2)

console.log(0/0)
console.log(1+NaN)
console.log(4+3*4/2)
console.log(13%5)**2
console.log(200+0/0)
// variable
let someName= "John Doe";
console.log(someName);
let year =1984;
console.log(year);
let hen =4;
console.log(hen);
let chicken=5;
console.log(chicken);
console.log(hen+chicken);
let firstName = "Ziggy";
console.log(firstName)
// let msg = "Please do not feed the chimps!";
// console.log(msg);
let animal = 'Dumbo Octopus';
console.log(animal);
let bad ="this is wrong";
console.log(bad);
let msg = 'I am king';
console.log(msg);
let yellMsg = msg.toUpperCase(); // 'I AM KING'
console.log(yellMsg);
let angry = 'LeAvE mE aLoNe!';
let msg2 = angry.toLowerCase(); // 'leave me alone!'
console.log(msg2);
let greeting='  leave me alone1  ';
console.log(greeting.trim());
let tvShow = 'catdog';
console.log(tvShow.indexOf('cat'));// 0
console.log(tvShow.indexOf('dog')); // 3
console.log(tvShow.indexOf('fish')); // -1 (not found)
let annoyingLaugh = 'teehee so funny! teehee!';
console.log(annoyingLaugh.replace('teehee', 'haha'));
// 'haha so funny! teehee!
//Notice that it only replaces the first instance
const age= "4"+"5";
console.log(age);
//45
console.log(`I counted $ {3 + 4} sheep`);
let item = 'cucumbers';
let price = 1.99;
let quantity = 4;
console.log(`you bought ${quantity} ${item} for $${price * quantity}`);
console.log(Math.PI);
console.log(Math.round(4.9));
console.log(Math.abs(-454));
console.log(Math.pow(2,5));
console.log(Math.floor(3.99964));
console.log(Math.random());
console.log(Math.random());
console.log(parseInt('24'));
console.log(parseInt('24.987'));
console.log(parseInt('28dayslater'));
console.log(parseFloat('24.987'));
console.log(parseFloat('7'));
console.log(parseFloat('i ate 3 shramp'));
console.log(10 > 1);
console.log(0.2 > 0.3);
console.log(-10 < 0);
console.log(50.5 < 5);
console.log(0.5 <= 0.5);
console.log(99 >= 4);
console.log(99 >= 99);
console.log(5 == 5);
console.log(7 == '7');
console.log(0 == '');
console.log(true == false);
console.log(0 == false);
console.log(5 === 5);
console.log(1 === 2);
console.log(2 === '2');
console.log(false === 0);
console.log(10 != '10');
console.log(10 !== '10');
console.log(1 <= 4 && 'a' === 'a');
console.log(9 > 10 && 9 >= 9);
console.log('abc'.length === 3 && 1+1 === 4);
console.log(1 !== 1 || 10 === 10);
console.log(10/2 === 5 || null);
console.log(0 || undefined);
console.log(!null);
console.log(! (0 === 0));
console.log(!(3 <= 4));
let students = [];
console.log("let students = [];");
console.log(students);
let colors = ['red', 'orange', 'yellow'];
console.log("let colors = ['red', 'orange', 'yellow'];");
console.log(colors);
let lottoNums = [19,22,56,12,51];
console.log("let lottoNums = [19,22,56,12,51];")
console.log(lottoNums);
let stuff = [true, 68, 'cat', null];
console.log("let stuff = [true, 68, 'cat', null];");
console.log(stuff);
console.log("colors.length");
console.log(colors.length);
console.log("colors[0]");
console.log(colors[0]);
console.log("colors[1]");
console.log(colors[1]);
console.log("colors[2]");
console.log(colors[2]);
console.log("colors[3]");
console.log(colors[3]);
console.log("colors [4]");
console.log(colors [4]);
console.log("colors[0] = 'red';");
console.log(colors[0] = 'red');
console.log("colors[2] = 'yellow'");
console.log(colors[2] = 'yellow');
console.log("colors[3] = 'green'");
console.log(colors[3] = 'green');
console.log("colors[4] = 'blue'");
console.log(colors[4] = 'blue');
const animals = [ 'lions', 'tigers', 'bears' ];
console.log("const animals = [ 'lions', 'tigers', 'bears' ];");
for (let i = 0 ; i < animals.length; i++) {
console.log(i, animals[i]);
}
let str1 = 'LOL';
console.log("let str1 = 'LOL';");
for (let i = 0 ; i <= 4 ; i++) {
console.log("Outer:", i);
for (let j = 0 ; j < str1.length; j++) {
console.log(' Inner:', str1[j]);
}
}
let num = 0;
console.log("let num = 0;");
while (num < 10) {
console.log(num);
num++;
}
let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];
console.log("let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];");
for (let sub of subreddits) {
console.log(`${sub} - www.reddit.com/r/${sub}`);
}           
const magicSquare = [
[2, 7, 6],
[9,5,1],
[4,3,8]
];
for (let row of magicSquare) {
let sum = 0;
for (let num of row) {
sum += num;
}
console.log(`Row of ${row} sums to ${sum}`);
}
function grumpus() {
console.log('ugh...you again...');
console.log('for the last time...');
console.log('LEAVE ME ALONE!!!');
}
console.log(grumpus());
function greet(person) {
console.log(`Hi, ${person}!`);
}
console.log(greet("Khan"));
function findLargest(x, y) {
if (x > y) {
console.log(`${x} is larger!`);
}
else if (x < y) {
console.log(`${y} is larger!`);
}
else {
console.log(`${x} and ${y} are equal!`);
}
}
console.log(findLargest(-2, 77));            
console.log(findLargest(33, 33));

function helpMe(){
let msg = "I'm on fire!";
msg; 
}
msg; 





0
let bird = 'mandarin duck';
function birdWatch(){
let bird = 'golden pheasant';
console.log(bird); 
}
console.log(bird); 
birdWatch();

let radius = 8;
if(radius > 0){
const PI = 3.14 ;
let circ = 2 * PI * radius;
}
console.log(radius); 


function outer() {
let hero = "Black Panther";
function inner() {
let cryForHelp = `${hero}, please save me!`
console.log(cryForHelp);
}
inner();
}
outer();
function callTwice(func) {
func();
func();
}
function laugh() {
}
console.log("HAHAHAHAHAHAHAHHAHAHAHAH");
callTwice(laugh); 
function makeBetweenFunc(min, max) {
    return function (val) {
        return val >= min && val <= max;
    }
}
const inAgeRange = makeBetweenFunc(18, 100);
console.log(inAgeRange(17)); 
console.log(inAgeRange(68)); 
const math = {
blah: 'Hi!',
add(x, y) {
return x + y;
},
multiply(x, y) {
return x * y;
}
}
console.log(math.add(50, 60));

const person = {
first: 'Robert',
last: 'Herjavec',
fullName() {
return `${this.first} ${this.last}`
}
}
console.log(person.fullName()); 
person.last = "Plant";
console.log(person.fullName()); 
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t){
return t.toUpperCase();
})
console.log(texts); 
console.log(caps); 
const square2 = (x) => { return x * x;
}
console.log(square2(4));
const sum = (x, y) => {
return x + y;
}
console.log(sum(4, 5));

const square1 = x => {
return x * x;
}
console.log(square1(4));

const singASong = () => {
return "LA LA LA LA LA LA";
}
console.log(singASong());
let movies = [
"The Fantastic Mr. Fox",
"Mr. and Mrs. Smith",
"Mrs. Doubtfire",
"Mr. Deeds"
]
let movie = movies.find(movie => {
return movie.includes ('Mrs.')
}) 
console.log(movie);
let movie2 = movies.find(m => m.indexOf('Mrs')=== 0)
console.log(movie2);

const nums1 =[9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums1.filter(n => {
return n % 2 === 1; 

})
console.log(odds);

const smallNums = nums1.filter (n => n < 5 ) ;

console.log(smallNums);
const words = ["dog", 'dig', 'log', 'bag', 'wag'];
console.log(words.every(word => word.length === 3));
console.log(words.every(word => word [0] === 'd'));

console.log(words.every(w => {
let last_letter = w[w.length - 1];
return last_letter === 'g'
})) 
const words1 = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];


console.log(words1.some(word1 => word1.length > 4));

console.log(words1.some(word => word [0] === 'Z'));


console.log(words1.some(w => w. includes ('cake')));

let arr=[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
return accumulator + currentValue;
});
console.log(arr);
let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];
const topScore = grades.reduce((max, currVal) => {
if (currVal > max) return currVal;
return max;
})
console.log(topScore);


const topScore1 = grades.reduce((max, currVal) => (
Math.max(max, currVal)
))
console.log(topScore1);

function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}
console.log(rant("I hate beets"));
function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}
console.log(isSnakeEyes(1,1));
console.log(isSnakeEyes(1,5));
console.log(isSnakeEyes(4,5));
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2,3));
console.log(multiply(9,9));
console.log(multiply(5,4));
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
}
console.log(isShortsWeather(80));
console.log(isShortsWeather(48));
console.log(isShortsWeather(75));
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}
console.log(lastElement([3,5,7]));
console.log(lastElement([1]));
console.log(lastElement([]));
function capitalize(str) {
    if (str.length === 0) {
        return str;
    }
    let firstLetter = str[0].toUpperCase();
    let restOfString = str.slice(1);
    return firstLetter + restOfString;
}
console.log(capitalize('eggplant'));
console.log(capitalize('pamplemousse'));
console.log(capitalize('squid'));
function sumArray(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}
console.log(sumArray([1,2,3]));
console.log(sumArray([2,2,2,2]));
console.log(sumArray([50,50,1]));
function returnDay(num) {
    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    if (num < 1 || num > 7) {
        return null;
    } else {
        return daysOfWeek[num - 1];
    }
}
console.log(returnDay(1));
console.log(returnDay(7));
console.log(returnDay(4));
console.log(returnDay(0));
const square = function(num) {
    return num * num;
};
console.log(square(4));
console.log(square(3));