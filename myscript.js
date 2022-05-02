//function computer play that generate randammonly a string for the computer
function computerplay(){
	let myArray = ["rock", "paper", "scissor"];
	let b = myArray[~~(Math.random()*myArray.length)];
	//console.log(b);
	return b;
};


//function that display a text to announce the result and a button to restart the game 
function displayresult(){
	let div1 = document.querySelector('#first-div');
	let Div2 = document.querySelector('#second-div');
	let paragraph5 = document.querySelector('#start');
	const button1 = document.querySelector('#btn1');
	const button2 = document.querySelector('#btn2');
	const button3 = document.querySelector('#btn3');
	const paragraph3 = document.querySelector('#paragraph3');
	const paragraph4 = document.querySelector('#paragraph4');
	const p2= document.querySelector('#first-p');
	let p1 = document.querySelector('#winningP');
	p1.textContent= 'You Save Us!!! , Congratulation and Thank You';
	p1.style.color = 'white';


	let removed2=div1.removeChild(button1);
	let removed3=div1.removeChild(button2);
	let removed4=div1.removeChild(button3);
	let removed5=div1.removeChild(p2);
	let removed1= div1.removeChild(Div2);
	let removed6 = div1.removeChild(paragraph5);
	div1.appendChild(p1);
	let button4 = document.createElement('button');
	button4.classList.add('resetbutton');
	button4.textContent = 'Reset';
	button4.addEventListener('click', function (){

		div1.appendChild(removed6);
		div1.appendChild(removed2);
		div1.appendChild(removed3);
		div1.appendChild(removed4);
		div1.appendChild(removed5);
		div1.appendChild(removed1);
		
		paragraph3.textContent = '0';
		paragraph4.textContent = '0';
		p1.textContent = ' ';
		p2.textContent = ' ';
		
		//div1.appendChild(paragraph3);
		//div1.appendChild(paragraph4);
		div1.appendChild(p1);
		
		div1.removeChild(button4)
		



	});
	div1.appendChild(button4);


}

//function that display a text to announce the result and a button to restart the game 
function displayresult1(){
	let div1 = document.querySelector('#first-div');
	let Div2 = document.querySelector('#second-div');
	let paragraph5 = document.querySelector('#start');
	const button1 = document.querySelector('#btn1');
	const button2 = document.querySelector('#btn2');
	const button3 = document.querySelector('#btn3');
	const paragraph3 = document.querySelector('#paragraph3');
	const paragraph4 = document.querySelector('#paragraph4');
	const p2= document.querySelector('#first-p');
	let p3 = document.querySelector('#losingP');
	p3.textContent= 'Sorry You came up short this time, Best luck next Time';
	p3.style.color = 'white';
	let removed2=div1.removeChild(button1);
	let removed3=div1.removeChild(button2);
	let removed4=div1.removeChild(button3);
	let removed5=div1.removeChild(p2);
	let removed1= div1.removeChild(Div2);
	let removed6 = div1.removeChild(paragraph5);
	div1.appendChild(p3);
	let button4 = document.createElement('button');
	button4.classList.add('resetbutton');
	button4.textContent = 'Reset';
	button4.addEventListener('click', function (){

		div1.appendChild(removed6);
		div1.appendChild(removed2);
		div1.appendChild(removed3);
		div1.appendChild(removed4);
		div1.appendChild(removed5);
		div1.appendChild(removed1);
		
		paragraph3.textContent = '0';
		paragraph4.textContent = '0';
		p3.textContent = ' ';
		p2.textContent = ' ';
		
		//div1.appendChild(paragraph3);
		//div1.appendChild(paragraph4);
		div1.appendChild(p3);
		
		div1.removeChild(button4)
		



	});
	div1.appendChild(button4);


}


//writting the core function of the game 

function playRound1(){
	let playerSelection = 'rock';
	let computerSelection = computerplay();
	let a = playerSelection.length;
	let b = computerSelection.length;
	let playerScore = 0;
	let computerScore = 0;
	let paragraph3= document.getElementById('paragraph3');
	let paragraph4 = document.getElementById('paragraph4');

	const output =  document.getElementById('first-p');

	if (a===4 && b===5) {
		output.textContent ='You Lost, Paper beats Rock';
		computerScore += 1;
		paragraph3.textContent = parseInt(paragraph3.textContent) + computerScore;
		
	}else if (a===4 && b=== 7) {
		output.textContent ='You Win, Rock beats Scissor';
		playerScore += 1;
		paragraph4.textContent = parseInt(paragraph4.textContent) + playerScore;
	}else {
		output.textContent= '  ' + 'Same Guess, Tie Game' ;
	}

	for (let i = 0; i <paragraph3.textContent ; i++) {
		if (i===4) {
			//alert("You Lost" + ' ' + `computerScore = ${paragraph3.textContent}`);
			displayresult1();
			
			
			
		}
	}
	for (let i = 0; i <paragraph4.textContent; i++) {
		if (i===4) {
			//alert("You Win" + ' ' + `playerScore = ${paragraph4.textContent}`);
			displayresult();
			
			
			
			

		}
	}

}

function playRound2(){
	let playerSelection = 'paper';
	let computerSelection =  computerplay();
	let a = playerSelection.length;
	let b = computerSelection.length;
	const output = document.getElementById('first-p');
	let paragraph3= document.getElementById('paragraph3');
	let paragraph4 = document.getElementById('paragraph4');





	if (a==5 && b ==7) {
		output.textContent ='You Lost , Scissor beat Rock ';
		paragraph3.textContent = parseInt(paragraph3.textContent) + 1;
		
		

	}else if(a== 5 && b ==4){
		output.textContent="You Win , Paper beat Rock";
		paragraph4.textContent = parseInt(paragraph4.textContent) + 1;
		
	}else{
		output.textContent='   '+'Same Guess, Tie Game';
		
	}

	for (let i = 0; i <paragraph3.textContent ; i++) {
		if (i===4) {
			//alert("You Lost" + ' ' + `computerScore = ${paragraph3.textContent}`);
			displayresult1();
			
			
					}
	}
	for (let i = 0; i <paragraph4.textContent; i++) {
		if (i===4) {
			//alert("You Win" + ' ' + `playerScore = ${paragraph4.textContent}`);
			displayresult();
			
		}
	}





}

function playRound3(){
	let playerSelection = 'scissor';
	let computerSelection =  computerplay();
	let a = playerSelection.length;
	let b = computerSelection.length;
	const output= document.getElementById('first-p');
	let paragraph3= document.getElementById('paragraph3');
	let paragraph4 = document.getElementById('paragraph4');


	if (a==7 && b ==4) {
		output.textContent='You Lost , Rock beat Scissor ';
		paragraph3.textContent = parseInt(paragraph3.textContent) + 1;

	}else if(a== 7 && b ==5){
		output.textContent="You Win , Scissor beats Rock";
		paragraph4.textContent = parseInt(paragraph4.textContent) + 1;
	}else{
		output.textContent=' '+   'Same Guess, Tie Game';
		
	}

//loop for telling the result after a five round game 
	for (let i = 0; i <paragraph3.textContent ; i++) {
		if (i===4) {
			
			displayresult1();
			
					}
	}
	for (let i = 0; i <paragraph4.textContent; i++) {
		if (i===4) {
			
			displayresult(); 
			
		}
	}


}


	

//beginning of the DOM
const div1 = document.querySelector('#first-div');
const p1 =  document.querySelector('#winningP');
const Div2 =  document.querySelector('#second-div');
const p2 = document.querySelector('#first-p');
const p3 = document.querySelector('#losingP');



//adding an EventListenner to all the button
const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');
button1.addEventListener('click', playRound1);
button2.addEventListener('click', playRound2);
button3.addEventListener('click', playRound3);



const playerScore = 0;
const computerScore = 0;
const TieScore = 0;
const playerSelection = 'rock';
const computerSelection= 'Paper';


