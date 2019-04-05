// *******Tuesday March 19, 2019 @2pm  @ GA 2nd Floor*******

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

// 1. print 1,3,5,7 and 9

// for(let i=1; i<10; i=i+2) {
// 	console.log('i= '+i+' is an odd number');
// }

// 2. print 2,4,6,8 and 10

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

// looping a triangle

// let word ="#";
// console.log(word);
// for(i=0; i<7; i++) {q
// 	word= word +"#";
// 	console.log(word);
// }

// **********Unit 1.3 page 31;************

// print even 1-10

//  for(i=2; i<=10; i++) {
//  	if(i%2==0){
//  		console.log("i= "+(i)+" is even");
//  	}
//  }

//  ******Unit 1.3 page 33;************* 

// print even; odds; and prime 1-20
// for(let i=1; i<=20; i++) {
// 	if(i%2==0) {
// 		console.log("i= "+(i)+" is even");
// 	}
// }


// ***************Unit 1.4 page 24, ****************


// function add(3, 5, 6){
// 	console.log(add);

// }

//******Wednesday April 3rd 2019 @ GA 2nd floor*********


//************Codesmith Challenge: Arrays - Examining Elements***********

// const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// // ADD CODE HERE
// let fourthItem = horror[3];
// console.log(fourthItem);


//*************Codesmith Challenge: Arrays - Adding Elements***********

// const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// // ADD CODE HERE

// netflixShows.push('The Ozarks');

// // Write a console.log statement below to check your work!
// console.log(netflixShows);




// ***************Codesmith challenge for loops fundamentals;*****************

// let countDown = 0;
// for(let i=10; i>=0; i--){
//   console.log(i);
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



// **************Codesmith challenge for loops and Array indices;***********

// const firstNames = ["Jon", "Arya", "Jamie"];
// const lastNames = ["Snow", "Stark", "Lannister"];
// const places = ["The Wall", "Winterfell", "Kings Landing"];


// const bios = [];

// // Loop through your arrays and store the following strings in the bios array:
// // 'My name is Jon Snow and I am from The Wall'
// // 'My name is Arya Stark and I am from Winterfell'
// // 'My name is Jamie Lannister and I am from Kings Landing'

// // ADD CODE HERE
// for(let i=0; i<firstNames.length; i++) {
  
//  let sentence = `My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`;
// //  console.log(sentence);
//  bios.push(sentence);


//***************Codesmith challenge For Loops - Calculating Array Elements****************

// const increaseByTwo = [1, 2, 3, 4, 5];
// // ADD CODE HERE
// for(let i=0; i<increaseByTwo.length; i++ ){
//   increaseByTwo[i]= 2+ increaseByTwo[i];
//   console.log(increaseByTwo[i]);
// }



// Uncomment the line below to check your work!
//console.log(2+increaseByTwo[i]); // -> should print [3, 4, 5, 6, 7];


//*************  While Loops - Fundamentals***************

// let count = 2;
// // ADD CODE HERE
// while(count <8){
//   count++;
// }


// // Uncomment these to check your work!
// console.log(count); 

// ************Challenge: While Loops - Conditional Expression*************

// (addThis < 10){
//   sum+=addThis;
//   addThis++;
// }


// // Uncomment the line below to check your work!
//  console.log(sum);let addThis = 0;
// let sum = 0;
// while





//********Tuesday March 26th @ GA 2nd floor***********

// ***********Change dispenser;****************

// const arr = [100, 50, 20, 10, 5, 1, .25, .10, .05, .01];
// let numberOfCurrency = []


// const bill = 100;
// const cost = 4;
// let change = bill - cost;

// for(let i=0; i < arr.length; i++) {
// 	let increment = arr[i];
// 	let counter = 0;
// 	while(change >= increment){
// 		change -= increment;
// 		counter++;
// 	}
// 	numberOfCurrency.push(counter)
// }
// console.log(numberOfCurrency)


// for(let i=0; i < arr.length; i++) {
// 	console.log(`We have ${numberOfCurrency[i]} of ${arr[i]}`)
// }


// ********Eloquent Book Chapter 5 Higher order Functions page 126;*********

// let total = 0, count = 1;
// while (count <= 10) {
// total += count;
// count += 1;
// }
// console.log(total);
 



 function repeat(n, action) {
for (let i = 0; i < n; i++) {
action(i);
}
}
repeat(3, console.log);


//  let labels = [];
// repeat(5, i => {
// labels.push(`Unit ${i + 1}`);
// });
// console.log(labels);






















