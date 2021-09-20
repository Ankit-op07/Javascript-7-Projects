/*
//while loops are running



let youAge = 21;
let yourName = 'bob';
let name = {first : 'ankit', last: 'nagar'} //object
let truth = false; // boolean
let groceries = ['apple','banana','mango']; //array
let random ; //Undefined
let nothing =  null; 

//string in javascropt 
let fruit = 'ankitnagar645@gmail.com,dhakedbhai78@gmail.com,rohitone75@gmail.com';
let morFruits = 'banana\napple';  //new line \n
console.log(fruit.length);
console.log(fruit.indexOf('an'));   // gives the index of the
console.log(fruit.slice(1,3));
//console.log(fruit.replace('ban','yo'));
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2)); 
console.log(fruit.split(','));  //split by a comma
   //split by charachter


//Array
let  fruits = ['mango','apple' ,'papeya','berry','grapes' ];
//console.log(fruits); //prints the whole array
console.log(fruits.join(' vs '));
console.log(fruits.pop(), fruits);
// how to concat two arrays with
let cars =['audi','bmw','maruti','zrx'];
let all = fruits.concat(cars);
console.log(all.sort());

//Objects in  javascript

let student = {first : 'refesh ',last: 'rakesh', age:25 , height: 145 ,
studentInfo : function(){
return this.first + '\n' +this.last ;
}

};
student.first = 'Ankit';//changes
student.last = 'Nagar';
console.log(student.first ,student.last,);
console.log(student.studentInfo());


//Conditions , control flows (if else)
var age = prompt('what is your age');
if((age >=18) && (age <=35)){
    status = 'target demo'
}
*/

// Challange 1
/*
var birthYear = prompt('Enter your birth year');
function ageInDays(){
   var ageInDays = (2021 -birthYear)*365;
   var h1 = document.createElement('h1');
   var textAnswer = document.createTextNode('you are '+ ageInDays + 'days old');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('result').appendChild(h1);
}

function Reset(){
    document.getElementById('result').remove();
}
*/
//Challange 2
/*
function generateCat(){
    document.getElementById('flexbox').classList.add("flexbox-back-color");
    var image = document.createElement('img');
    var div = document.getElementById('flexbox');
    image.src = "WhatsApp Image 2021-08-30 at 9.21.16 PM.jpeg";
    div.appendChild(image);
}
*/
//challange-3

function rpsgame(yourChoice){
  
    var humanChoice,botChoice;
    humanChoice = yourChoice.id;
botChoice = numberToChoice(randToRpsInt());  /// and now the random choice is assigned to botchoice



var  result = decideWinner(humanChoice,botChoice);          //this is an array containing results

 message = finalMessage(result);      // this will get an object containg message and color of the message .

  rpsFrontEnd(humanChoice,botChoice,message);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);  // this will choose random number between 0-2
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number]  // this will randomly choose anything from the array
}

function decideWinner(yourChoice , computerChoice){  // this is for the conditions that if i choose something and computer also then who would win
    var rpsDataBase = {  //this is a object in javascript
        'rock':{'scissors':1 , 'rock':0.5,'paper':0},
        'paper':{'rock':1 , 'paper':0.5,'scissors':0},
        'scissors':{'paper':1 , 'scissors':0.5,'rock':0}
    };
var yourScore = rpsDataBase[yourChoice][computerChoice];
var computerScore = rpsDataBase[computerChoice][yourChoice];

    return [yourScore , computerScore];
}


function finalMessage([yourScore,computerScore]){
    if(yourScore === 0){
        return {'message': 'Better luck next time!','color':'red'};  // return an object 
    }else if(yourScore === 0.5){
        return {'message': 'Match draw', 'color':'yellow'};
    }else {
        return {'message': 'you won!','color':'green'};
    }
}
function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var  imageDataBase = {
'rock':document.getElementById('rock').src,
'paper':document.getElementById('paper').src,  
'scissors':document.getElementById('scissors').src,     
 };

 
 //let's remove all the  images from the
 document.getElementById('rock').remove();
 document.getElementById('paper').remove();
 document.getElementById('scissors').remove();

 let humanDiv = document.createElement('div');
let botDiv = document.createElement('div');
 let messageDiv = document.createElement('div');
humanDiv.innerHTML = "<img src='" + imageDataBase[humanImageChoice] +"'height=100 width=100 style='    box-shadow: 10px 10px 75px 6px rgba(23,83,128,1);' >";
messageDiv.innerHTML ="<h1 style='color: " + finalMessage['color'] + "; font-size:30px; padding:10px; '>" + finalMessage['message'] + "</h1>";
botDiv.innerHTML = "<img src='" + imageDataBase[botImageChoice] +"' height=100 width=100 style='box-shadow: 10px 10px 75px 6px rgba(184,33,41,1);' >";
document.getElementById('flexbox3').appendChild(humanDiv);
document.getElementById('flexbox3').appendChild(messageDiv);
document.getElementById('flexbox3').appendChild(botDiv);


    }

