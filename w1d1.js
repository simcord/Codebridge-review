// *******Tuesday March 19, 2019 @2pm  @ GA 2nd Floor;*******

// Adding
// var a = 9;
// var b = 11;
// var z = a + b;
// console.log(z);

// ************Add and divide to get AVG;***********
// let a = 1;
// let b = 12;
// let c = 18;
// let d = 4;
// let e = 9;
// let f = 6;
// let g = 19;
// let h = 9;
// let i = 6;
// let j = 30;

// let avg1 = (a+b+c+d+e)/5;
// console.log(sum1);

// let a = 4;
// let b = 10;
// let c = 22;
// let d = -30;
// let e = 55;
// let f = 68;
// let g = 7;
// let h = -22;
// let i = 9;
// let j = 100;


// let avg1 = (a+b+c+d+e)/5;
// console.log(avg1);

// *******Unit 1.3 page 12;;***********

// Nested If ELSE statements<<<<<<<<<<

// let a = 149;

// if(a < 100) {
	
// 	if(a > 0 ){
// 		console.log('I am less then 100 and positive');
// 	}
// 	else{
// 		console.log('I am negative and less then 100');
// 	}
// }
// else{
// 	console.log('Is greater then 100')
// }

// #########Unit 1.3 page 14; ;###############

// Else If Statements<<<<<<<<<<<

// let grade = 89;
 

//  if(grade >= 90) {
//  	console.log('A');
//  }
//  else if(grade >= 80 ){
//  	console.log('B');
//  }
//  else if(grade >= 70){
//  	console.log('C');
//  }
//  else if(grade >=55 ){
//  	console.log('D');
//  }
// 	else{
//  	console.log('You got an F');
//  }
// *************HOMEWORK*****************

// ************Unit 1.3 page 25;*****************

// 1. print 1,3,5,7 and 9.<<<<<<<<<

// for(let i=1; i<10; i=i+2) {
// 	console.log('i= '+i+' is an odd number');
// }

// 2. print 2,4,6,8 and 10.<<<<<<<<<<

// for(let i=2; i<=10; i=i+2) {
// 	console.log('i= '+i+' is an even number');
// }

// ********Unit 1.3 page 26;************

// print create a loop that outputs multiples of 3. starting at 6. ending at 60.

// for(let i=6; i<=60; i=i+3) {
// 	console.log('i= '+i+' is a multiple of 3')
// }
// Attention On page 27 of Unit 1.3 the for loop below was giving, as per the question this for loop is wrong, 
// the for loop continued until it reached 180 and it stopped. 
// Will speak to Ms. Kai about it because the for loop asked to stop at 60
// for(var i=2; i<=60; i++) {
// 	console.log(3*i);
// }


// ************Unit 1.3 page 28 **************

// looping a triangle<<<<<<<<<<<<<<<

// let word ="#";
// console.log(word);
// for(i=0; i<7; i++) {q
// 	word= word +"#";
// 	console.log(word);
// }

// **********Unit 1.3 page 31;************

// print even 1-10<<<<<<<<<<<

//  for(i=2; i<=10; i++) {
//  	if(i%2==0){
//  		console.log("i= "+(i)+" is even");
//  	}
//  }

//  ******Unit 1.3 page 33;************* 

// print even; odds; and prime 1-20;<<<<<<<<<<
// for(let i=1; i<=20; i++) {
// 	if(i%2==0) {
// 		console.log("i= "+(i)+" is even");
// 	}
// }




hello


// ***************Codesmith challenge for loops;*****************


// for(let i=10; i>0; i--){
// 	console.log(i);
// }



// **************Codesmith challenge for loops and arrays;***********


// const synonyms = ['fantastic', 'wonderful', 'great'];
// const greetings = [];


// for(let i=0; i<synonyms.length; i++){
// 	greetings.push('Have a ' + synonyms[i] + ' day!');
// }
// console.log(greetings);

// for(let i=0; i<greetings.length; i++){
// 	console.log(greetings[i]);
// }



// **************Codesmith challenge for loops and arrays indices;***********






// ***********Change dispenser;****************

const arr = [100, 50, 20, 10, 5, 1, .25, .10, .05, .01];
let numberOfCurrency = []


const bill = 100;
const cost = 4;
let change = bill - cost;

for(let i=0; i < arr.length; i++) {
	let increment = arr[i];
	let counter = 0;
	while(change >= increment){
		change -= increment;
		counter++;
	}
	numberOfCurrency.push(counter)
}
console.log(numberOfCurrency)


for(let i=0; i < arr.length; i++) {
	console.log(`We have ${numberOfCurrency[i]} of ${arr[i]}`)
}


























