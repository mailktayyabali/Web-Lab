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
//slide7
function helpMe(){
let msg = "I'm on fire!";
msg; //"I'm on fire";
}
msg; //NOT DEFINED!

//slide 8
// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// nums.forEach(function (n) {
// console.log(n*n)let bird = 'mandarin duck';
0
let bird = 'mandarin duck';
function birdWatch(){
let bird = 'golden pheasant';
console.log(bird); //'golden pheasant'
}
console.log(bird); //'mandarin duck'
birdWatch();
//mandarin duck
let radius = 8;
if(radius > 0){
const PI = 3.14 ;
let circ = 2 * PI * radius;
}
console.log(radius); //8
//console.log(PI); //NOT DEFINED
//console.log(circ); //NOT DEFINED
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
callTwice(laugh); //pass a function as an arg!
function makeBetweenFunc(min, max) {
    return function (val) {
        return val >= min && val <= max;
    }
}
const inAgeRange = makeBetweenFunc(18, 100);
console.log(inAgeRange(17)); // false
console.log(inAgeRange(68)); // true
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
//110
const person = {
first: 'Robert',
last: 'Herjavec',
fullName() {
return `${this.first} ${this.last}`
}
}
console.log(person.fullName()); //"Robert Herjavec"
person.last = "Plant";
console.log(person.fullName()); //"Robert Plant"
// //prints: 81, 64, 49, 36, 25, 16, 9, 4, 1
// });
// nums.forEach(function (el) {
// if (el % 2 === 0) { console.log(el)
// //prints: 8, 6, 4, 2
// }
// })
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t){
return t.toUpperCase();
})
console.log(texts); //["rofl", "lol", "omg", "ttyl"]
console.log(caps); //["ROFL", "LOL", "OMG", "TTYL"]
const square = (x) => { return x * x;
}
console.log(square(4));
const sum = (x, y) => {
return x + y;
}
console.log(sum(4, 5));
//parens are optional if there's only one parameter:
const square1 = x => {
return x * x;
}
console.log(square1(4));
//Use empty parens for functions w/ no parameters:
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
}) //"Mr. and Mrs. Smith"
console.log(movie);
let movie2 = movies.find(m => m.indexOf('Mrs')=== 0)
console.log(movie2);
//"Mrs. Doubtfire"
const nums1 =[9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums1.filter(n => {
return n % 2 === 1; //our callback returns true or false
//if it returns true, n is added to the filtered array
})
console.log(odds);
//[9, 7, 5, 3, 1]
const smallNums = nums1.filter (n => n < 5 ) ;
//[4, 3, 2, 1]
console.log(smallNums);
const words = ["dog", 'dig', 'log', 'bag', 'wag'];
console.log(words.every(word => word.length === 3));
console.log(words.every(word => word [0] === 'd'));
//false
console.log(words.every(w => {
let last_letter = w[w.length - 1];
return last_letter === 'g'
})) //true
const words1 = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];
//Are there any words longer than 4 characters?
//true
console.log(words1.some(word1 => word1.length > 4));
//Do any words start with 'Z'?
console.log(words1.some(word => word [0] === 'Z'));
//false
//Do any words contain 'cake'?
console.log(words1.some(w => w. includes ('cake')));
//true
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
//99
//A shorter option w/ Math.max & implicit return
const topScore1 = grades.reduce((max, currVal) => (
Math.max(max, currVal)
))
console.log(topScore1);
//99

