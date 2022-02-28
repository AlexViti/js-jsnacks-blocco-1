const container = document.getElementById('main-container');
const checker = document.querySelector('.checker');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
const footer = document.querySelector('footer');

let snacksCounter = 0;

/*
SNACK 1.1

L'utente inserisce due numeri in successione, con due prompt.
Il sofware stampa il maggiore.
*/

snacksCounter++;

function snack1() {

	container.innerHTML = `
	<h2>Snack 1.1</h2>
	
	<button id="execute-1" class='btn btn-dark rounded-pill my-3'>Esegui</button>
	`
	
	footer.innerHTML = `
	<p class="container assignment py-4">
		L'utente inserisce due numeri in successione, con due prompt. Il sofware stampa il maggiore.
	</p>
	`

	checker.innerHTML = '';
	
	const btnExecute = document.getElementById('execute-1');
	btnExecute.addEventListener('click', execution1);
	
	function execution1() {
		
		let a = prompt('digita il primo numero');
		let b = prompt('digita il secondo numero');
		
		checker.innerHTML = 'Il numero maggiore da te inserito è: '
		if (a > b) {
			checker.innerHTML += a;
		} else if (a < b) {
			checker.innerHTML += b;
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

snacksCounter++;

function snack2() {
	
	container.innerHTML = `
		<h2>Snack 1.2</h2>

		<button id="execute-2" class='btn btn-dark rounded-pill my-3'>Esegui</button>
	`
	footer.innerHTML = `
	<p class="container assignment py-4">
		L'utente iserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
	</p>
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

snacksCounter++;

function snack3() {
		
	container.innerHTML = `
		<h2>Snack 1.3</h2>



		<button id="execute-3" class='btn btn-dark rounded-pill my-3'>Esegui</button>
	`

	footer.innerHTML = `
		<p class="container assignment py-4">
			Il software deve chiedere per 10 volte all’utente di inserire un numero.	Il programma stampa la somma di tutti i numeri inseriti.
		</p>
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

snacksCounter++;

function snack4() {
	
	container.innerHTML = `
		<h2>Snack 1.4</h2>
		
		<p class="mt-4">
			You arrive at Gatsby's mansion at dusk, looking forward to take part of the party planned for the evening. Approaching the main door you notice the butler standing in front of it, checking the guest list and letting the gentlemen before you in. <br>
			"Your name, Sir?"
		</p>
		
		<input type="text" name="guest" id="guest">
		<button class="check btn btn-dark rounded-pill my-3">Check</button>
	`
	footer.innerHTML = `
		<p class="container assignment py-4">
			In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
		</p>
	`
	checker.innerHTML = '';
	
	let guestArr = [
		'Nick Carraway',
		'Daisy Buchanan',
		'Tom Buchanan',
		'Jordan Baker',
		'Myrtle Wilson',
		'George Wilson',
		'Owl Eyes',
		'Klipspringer',
		'Meyer Wolfsheim'
	];
	
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

snacksCounter++;

function snack5() {
	
	container.innerHTML = `
		<h2>Snack 1.5</h2>

		<button id="execute-5" class='btn btn-dark rounded-pill my-3'>Esegui</button>
	`

	footer.innerHTML =`
		<p class="container assignment py-4">
			Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
		</p>
	`

	checker.innerHTML = '';
	
	const btnExecute = document.getElementById('execute-5');
	btnExecute.addEventListener('click', execution5);
	
	function execution5() {
		
		let arr = [];
		
		for (let i = 1; i <= 6; i++) {
			let input = parseInt(prompt(`inserisci ${i}° numero`));
			
			while (isNaN(input) || input == '') {
				input = parseInt(prompt('inserisci un numero, per favore'));
			}
			
			if (input % 2 == 1) {
				arr.push(input);
			}
		}
		
		if (arr.length == 0) {
			checker.innerHTML = 'Non hai inserito numeri dispari';	
		} else {
			checker.innerHTML = 'Numeri dispari inseriti: ' + arr;
		}
	}
	
}

/*
SNACK 1.6
Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
*/

snacksCounter++;

function snack6() {
	
	container.innerHTML = `
		<h2>Snack 1.6</h2>

		<button id="execute-6" class='btn btn-dark rounded-pill my-3'>Esegui</button>
	`

	footer.innerHTML = `
		<p class="container assignment py-4">
			Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
		</p>
	`

	checker.innerHTML = '';
	
	const btnExecute = document.getElementById('execute-6');
	btnExecute.addEventListener('click', execution6);
	
	function execution6() {
		
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

/*
SNACK 1.9

Calcola la somma e la media dei primi 10 numeri.
*/

snacksCounter += 3;

function snack9() {
	container.innerHTML = `
		<h2>Snack 1.9</h2>

		<button id="execute-9" class='btn btn-dark rounded-pill my-3'>Esegui</button>
	`
	
	footer.innerHTML = `
		<p class="container assignment py-4">
			Calcola la somma e la media dei primi 10 numeri.
		</p>
	`

	checker.innerHTML = '';
	
	const btnExecute = document.getElementById('execute-9');
	btnExecute.addEventListener('click', execution9);

	function execution9() {
		
		container.innerHTML += `
			<div class="my-3">Seleziona un numero per calcolarne la sommatoria partendo da 1</div>
			<input type="number" value="10" class="me-2"></input><button class="btn btn-secondary rounded-pill" id="summation-send">Invia</button>
		`

		const inputNumber = document.querySelector('input');
		const sumBtn = document.getElementById('summation-send');
		sumBtn.addEventListener('click', getInput)
		
		function getInput() {
			let upperBound = inputNumber.value;
			
			let sum = 0;
			
			// let i = 1;
			// do {
			// 	sum += i;
			// 	i++
			// } while (i <= upperBound);
	
			for (let i = 1; i <= upperBound; i++) {
				sum += i;
			}
			
			let average = sum / upperBound;
		
			checker.innerHTML = `La somma dei primi ${upperBound} numeri è: ${sum}, la media è: ${average}.`
		}
	}
}

/*
SECOND BLOCK
*/

/*
Snack 2.1

Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

snacksCounter++;

function snack21() {
	container.innerHTML = `
		<h2>Snack 2.1</h2>

		<p class="mt-4">Inserisci 5 numeri tramite prompt dopo aver cliccato uno dei tasti esegui. Il programma ne restituirà la somma</p>

		<button id="execute-2-1-for" class='btn btn-dark rounded-pill my-3'>Esegui con il ciclo for</button>
		<button id="execute-2-1-while" class='btn btn-dark rounded-pill my-3'>Esegui con il ciclo while</button>
	`
	
	footer.innerHTML = `
		<p class="container assignment py-4">
			Il software deve chiedere per 5 volte all’utente di inserire un numero.	Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
		</p>
	`

	checker.innerHTML = '';
	
	const btnExecuteFor = document.getElementById('execute-2-1-for');
	btnExecuteFor.addEventListener('click', executionFor);

	const btnExecuteWhile = document.getElementById('execute-2-1-while');
	btnExecuteWhile.addEventListener('click', executionWhile);
	
	function executionFor() {
		let sum = 0;

		for (let i = 1; i <= 5; i++) {
			let inputNumber = parseInt(prompt(`Inserisci ${i}° numero`));
			
			while (isNaN(inputNumber)) {
				inputNumber = parseInt(prompt('Inserisci un numero per cortesia'));
			}
			sum += inputNumber
		}
		checker.innerHTML = `La somma dei numeri immessi è: ${sum}`;
	}

	function executionWhile() {
		let sum = 0;
		let i = 0;
		do {
			let inputNumber = parseInt(prompt(`Inserisci ${++i}° numero`));
			
			while (isNaN(inputNumber)) {
				inputNumber = parseInt(prompt('Inserisci un numero per cortesia'));
			}
			sum += inputNumber
		} while (i < 5)
		checker.innerHTML = `La somma dei numeri immessi è: ${sum}`;
	}
}

/*
Snack 2.2

Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

snacksCounter++;

function snack22() {
	container.innerHTML = `
		<h2>Snack 2.2</h2>

		<p class="mt-4">Inserisci un numero nell'input sottostante, se è pari verrà stampato, altrimenti verrà stampato il numero pari successivo.</p>

		<input type="number" class"me-2">
		<button id="execute-2-2" class='btn btn-dark rounded-pill my-3'>Esegui</button>
	`
	
	footer.innerHTML = `
		<p class="container assignment py-4">
			Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
		</p>
	`

	checker.innerHTML = '';
	
	const btnExecute = document.getElementById('execute-2-2');
	btnExecute.addEventListener('click', execution);
	const inputNumber = document.querySelector('input');

	function execution() {

		if (inputNumber.value % 2 == 0) {
			checker.innerHTML = `Il numero era pari: ${inputNumber.value}`;
		} else {
			checker.innerHTML = `Il numero era dispari, li numero successivo è: ${parseInt(inputNumber.value) + 1}`;
		}
	}
}
/*
Snack 2.3

Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

// SNACK LINK BUTTONS

for (let i = 1; i <= snacksCounter; i++) {
	if (i <= 9) {
		navLeft.innerHTML += `<button class="btn btn-light mb-3" id="snack1-${i}">Snack 1.${i}</button>`;
	} else {
		navRight.innerHTML += `<button class="btn btn-light mb-3" id="snack2-${i - 9}">Snack 2.${i - 9}</button>`;
	}
}

const btnSnack1 = document.getElementById('snack1-1');
btnSnack1.addEventListener('click', snack1);

const btnSnack2 = document.getElementById('snack1-2');
btnSnack2.addEventListener('click', snack2);

const btnSnack3 = document.getElementById('snack1-3');
btnSnack3.addEventListener('click', snack3);

const btnSnack4 = document.getElementById('snack1-4');
btnSnack4.addEventListener('click', snack4);

const btnSnack5 = document.getElementById('snack1-5');
btnSnack5.addEventListener('click', snack5);

const btnSnack6 = document.getElementById('snack1-6');
btnSnack6.addEventListener('click', snack6);

const btnSnack7 = document.getElementById('snack1-7');
btnSnack7.classList.add('d-none');
// btnSnack7.addEventListener('click', snack7);

const btnSnack8 = document.getElementById('snack1-8');
// btnSnack8.addEventListener('click', snack8);
btnSnack8.classList.add('d-none');

const btnSnack9 = document.getElementById('snack1-9');
btnSnack9.addEventListener('click', snack9);

const btnSnack21 = document.getElementById('snack2-1');
btnSnack21.addEventListener('click', snack21);

const btnSnack22 = document.getElementById('snack2-2');
btnSnack22.addEventListener('click', snack22);