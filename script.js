const container = document.getElementById('main-container');
const checker = document.querySelector('.checker');
const nav = document.querySelector('nav');

let snacks = 6;

for (let i = 0; i < snacks; i++) {
	nav.innerHTML += `<button class="btn btn-light mb-3" id="snack1-${i+1}">Snack 1.${i+1}</button>`;
}

/*
SNACK 1.1

L'utente inserisce due numeri in successione, con due prompt.
Il sofware stampa il maggiore.
*/

const btnSnack1 = document.getElementById('snack1-1');

btnSnack1.addEventListener('click', snack1);

function snack1() {
	
	container.innerHTML = `
		<h2>Snack 1.1</h2>
		<p>L'utente inserisce due numeri in successione, con due prompt.
			Il sofware stampa il maggiore.
		</p>
		<button id="execute-1" class='btn btn-dark rounded-pill my-3'>Esegui</execute>
	`

	checker.innerHTML = '';

	const btnExecute = document.getElementById('execute-1');
	
	btnExecute.addEventListener('click', execution1);

	function execution1() {
		
		let a = prompt('digita il primo numero');
		let b = prompt('digita il secondo numero');
		
		if (a > b) {
			checker.innerHTML = a;
		} else if (a < b) {
			checker.innerHTML = b;
		} else {
			checker.innerHTML = 'sono uguali';
		}
	}
}

/*
SNACK 1.2

L'utente iserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const btnSnack2 = document.getElementById('snack1-2');

btnSnack2.addEventListener('click', snack2);

function snack2() {
	
	container.innerHTML = `
		<h2>Snack 1.2</h2>
		<p>L'utente iserisce due parole in successione, con due prompt.
			Il software stampa prima la parola più corta, poi la parola più lunga.
		</p>
		<button id="execute-2" class='btn btn-dark rounded-pill my-3'>Esegui</execute>
	`
	checker.innerHTML = '';

	const btnExecute = document.getElementById('execute-2');

	btnExecute.addEventListener('click', execution2);

	function execution2() {

		let a = prompt('inserisci una parola');
		
		while (a == '') {
			a = prompt('inserisci una parola, per favore');
		}
		
		let b = prompt("inserisci un'altra parola");
		
		while (b == '') {
			b = prompt('inserisci una parola, per favore');
		}
		
		if(a.length == b.length) {
			checker.innerHTML = `Le parole hanno la stessa lunghezza: <br>${a.length}: ${a}; <br>${b.length}: ${b}`;
		} else if (a.length > b.length) {
			checker.innerHTML = `${b} ${a}`;
		} else {
			checker.innerHTML = `${a} ${b}`;
		}
	}

}

/*
SNACK 1.3

Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

const btnSnack3 = document.getElementById('snack1-3');

btnSnack3.addEventListener('click', snack3);

function snack3() {

	container.innerHTML = `
	<h2>Snack 1.3</h2>
	<p>Il software deve chiedere per 10 volte all’utente di inserire un numero.
		Il programma stampa la somma di tutti i numeri inseriti.
	</p>
	<button id="execute-3" class='btn btn-dark rounded-pill my-3'>Esegui</execute>
	`
	checker.innerHTML = '';

	const btnExecute = document.getElementById('execute-3');
	
	btnExecute.addEventListener('click', execution3);

	function execution3() {

		let sum = 0;
		
		for (let i = 1; i <= 10; i++) {
		  let input = prompt(`inserisci ${i}° numero`);
		
		  while (isNaN(input) || input == "") {
			 input = prompt("inserisci un numero");
		  }
		  sum += parseInt(input);
		}
	
		checker.innerHTML = `la somma dei numeri inseriti è: ${sum}`;
	}

}
		
/*
SNACK 1.4

In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const btnSnack4 = document.getElementById('snack1-4');

btnSnack4.addEventListener('click', snack4);

function snack4() {

	container.innerHTML = `
		<h2>Snack 1.4</h2>
		<p>In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
			chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
		</p>
		
		<input type="text" name="guest" id="guest">
		<button class="check">Check</button>
	`
	checker.innerHTML = '';

	let guestArr = ['Nick Carraway','Jay Gatsby','Daisy Buchanan','Tom Buchanan','Jordan Baker','Myrtle Wilson','George Wilson','Owl Eyes','Klipspringer','Meyer Wolfsheim'];

	const input = document.getElementById('guest');
	const btnCheck = document.querySelector('.check');
	
	btnCheck.addEventListener('click', function(){
	
		let guestFound = false;
		let i;
		
		for (i = 0; i < guestArr.length && !guestFound; i++) {
			if (guestArr[i].toLowerCase() == input.value.toLowerCase()) {
				guestFound = true;
			}
		}
		
		let guestLastName = guestArr[--i].split(' ');
		guestLastName = guestLastName[guestLastName.length - 1];
		
		if (guestFound) {
			checker.innerHTML = `Good evening Mr. ${guestLastName}. You can give me your coat, the party is this way. Thanks you for coming.`
		} else {
			checker.innerHTML = `<div>Sir, I'm terribly sorry but your name is not on the guest list. I'm afraid I'll have to ask you to leave.`
		}
	});
}
			
/*
SNACK 1.5

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
*/

const btnSnack5 = document.getElementById('snack1-5');

btnSnack5.addEventListener('click', snack5);

function snack5() {
	
	container.innerHTML = `
		<h2>Snack 1.5</h2>
		<p>Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.</p>
		<button id="execute-5" class='btn btn-dark rounded-pill my-3'>Esegui</execute>
	`
	checker.innerHTML = '';

	const btnExecute = document.getElementById('execute-5');

	btnExecute.addEventListener('click', execution5);

	function execution5() {

		let arr = [];
									
		for (let i = 0; i < 6; i++) {
			let input = parseInt(prompt('inserisci un numero'));
			if (input % 2 == 1) {
				arr.push(input);
			}
		}
		
		checker.innerHTML = arr;
	}
	
}

/*
SNACK 1.6
Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
*/

const btnSnack6 = document.getElementById('snack1-6');

btnSnack6.addEventListener('click', snack6);

function snack6() {

	container.innerHTML = `
		<h2>Snack 1.6</h2>
		<p>Chiedi un numero di 4 cifre all’utente
			e calcola la somma di tutte le cifre che compongono il numero.
		</p>
		<button id="execute-6" class='btn btn-dark rounded-pill my-3'>Esegui</execute>
	`
	checker.innerHTML = '';

	const btnExecute = document.getElementById('execute-6');
	
	btnExecute.addEventListener('click', execution2);

	function execution2() {

		do {
			input = prompt('inserisci un numero di 4 cifre');
		} while (isNaN(input) || parseInt(input) < 1000 || parseInt(input) > 9999)
		
		let inputArr = [...input];
		
		let inputDigitSum = 0;
	
		function digitSum(digit) {
			inputDigitSum += parseInt(digit);
		}
		
		inputArr.forEach(digitSum);
		
		checker.innerHTML = inputDigitSum;
	}
	
}