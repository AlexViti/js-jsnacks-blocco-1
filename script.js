const container = document.getElementById('main-container');
const checker = document.querySelector('.checker');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
const footer = document.querySelector('footer');

let snacksCounter = 0;

const instruction = [];
const assignment = [];

/*
SNACK 1.1

L'utente inserisce due numeri in successione, con due prompt.
Il sofware stampa il maggiore.
*/

snacksCounter++;

instruction.push('Inserisci due numeri tramite prompt, ne verrà stampato il maggiore.');
assignment.push("L'utente inserisce due numeri in successione, con due prompt. Il sofware stampa il maggiore.")

function snack101() {
	
	let a = prompt('digita il primo numero');
	let b = prompt('digita il secondo numero');
	
	checker.innerHTML = 'Il numero maggiore da te inserito è: ';
	if (a > b) {
		checker.innerHTML += a;
	} else if (a < b) {
		checker.innerHTML += b;
	} else {
		checker.innerHTML = `Sono uguali: ${a}`;
	}
}

/*
SNACK 1.2

L'utente iserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

snacksCounter++;

instruction.push('Inserisci due parole tramite prompt. Verrà stampata prima la parola più corta e poi quella più lunga.');
assignment.push("L'utente iserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.");

function snack102() {
		
	let a = prompt('inserisci una parola');
	
	while (a == '') {
		a = prompt('inserisci una parola, per favore');
	}
	
	let b = prompt("inserisci un'altra parola");
	
	while (b == '') {
		b = prompt('inserisci una parola, per favore');
	}
	
	if (a.length == b.length) {
		checker.innerHTML = `Le parole hanno la stessa lunghezza: <br>${a.length}: ${a}; <br>${b.length}: ${b}`;
	} else if (a.length > b.length) {
		checker.innerHTML = `${b} ${a}`;
	} else {
		checker.innerHTML = `${a} ${b}`;
	}
}

/*
SNACK 1.3

Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

snacksCounter++;

instruction.push("Verrà chiesto di inserire tramite prompt 10 numeri e ne verrà stampata la somma.");
assignment.push("Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.");

function snack103() {
	
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

/*
SNACK 1.4

In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

snacksCounter++;

instruction.push("Verrà chiesto un nome, il programma controlla che sia presente in un elenco");
assignment.push("In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.");

function snack104() {
	
	container.innerHTML += `		
		<p class="mt-4">
			You arrive at Gatsby's mansion at dusk, looking forward to take part of the party planned for the evening. Approaching the main door you notice the butler standing in front of it, checking the guest list and letting the gentlemen before you in. <br>
			"Your name, Sir?"
		</p>
		
		<input type="text" name="guest" id="guest">
		<button class="check btn btn-dark rounded-pill my-3">Check</button>
	`;
	
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

instruction.push("Inserisci tramite prompt 6 numeri, i numeri dispari verranno inseriti in un array che sarà visualizzato a schermo.");
assignment.push("Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.");

function snack105() {
	
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
		checker.innerHTML = 'Numeri dispari inseriti: ';
		const list = document.createElement('ul');
		checker.append(list);
		for (let i = 0; i < arr.length; i++) {
			const listItem = document.createElement('li');
			listItem.innerHTML = arr[i];
			list.append(listItem);
		}
	}
}

/*
SNACK 1.6

Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
*/

snacksCounter++;

instruction.push("Inserisci un numero di 4 cifre tramite prompt, verrà stampata la somma delle cifre.");
assignment.push("Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.");

function snack106() {
	
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

/*
SNACK 1.7
*/

snacksCounter++;

instruction.push("");
assignment.push("");

/*
SNACK 1.8
*/

snacksCounter++;

instruction.push("");
assignment.push("");

/*
SNACK 1.9

Calcola la somma e la media dei primi 10 numeri.
*/

snacksCounter++;

instruction.push("Seleziona un numero per calcolarne la sommatoria partendo da 1");
assignment.push("Calcola la somma e la media dei primi 10 numeri.");

function snack109() {
	container.innerHTML += `
			<br>
			<input type="number" value="10" step="1" class="me-2">
			<button class="btn btn-secondary rounded-pill" id="summation-send">Invia</button>
		`;

	const inputNumber = document.querySelector('input');
	const sumBtn = document.getElementById('summation-send');
	sumBtn.addEventListener('click', getInput);
	
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
	
		checker.innerHTML = `La somma dei primi ${upperBound} numeri è: ${sum}, la media è: ${average}.`;
	}
}

/*
SECOND BLOCK
*/

/*
SNACK 2.1

Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

snacksCounter++;

instruction.push("Inserisci 5 numeri tramite prompt dopo aver cliccato uno dei tasti esegui. Il programma ne restituirà la somma");
assignment.push("Il software deve chiedere per 5 volte all’utente di inserire un numero.	Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.");


function snack201() {
	container.innerHTML = `
		<h2>Snack 2.1</h2>

		<p class="mt-4">Inserisci 5 numeri tramite prompt dopo aver cliccato uno dei tasti esegui. Il programma ne restituirà la somma</p>

		<button id="execute-2-1-for" class='btn btn-dark rounded-pill my-3'>Esegui con il ciclo for</button>
		<button id="execute-2-1-while" class='btn btn-dark rounded-pill my-3'>Esegui con il ciclo while</button>
	`;
	
	footer.innerHTML = `
		<p class="container assignment py-4">
			Il software deve chiedere per 5 volte all’utente di inserire un numero.	Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
		</p>
	`;

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
			sum += inputNumber;
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
SNACK 2.2

Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

snacksCounter++;

instruction.push("Inserisci un numero nell'input sottostante, se è pari verrà stampato, altrimenti verrà stampato il numero pari successivo.");
assignment.push("Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.");

function snack202() {
	container.innerHTML = `
		<h2>Snack 2.2</h2>

		<p class="mt-4">Inserisci un numero nell'input sottostante, se è pari verrà stampato, altrimenti verrà stampato il numero pari successivo.</p>

		<input type="number" value="0" min="0" step="1" class="me-2">
		<button id="execute-2-2" class='btn btn-dark rounded-pill my-3'>Esegui</button>
	`;
	
	footer.innerHTML = `
		<p class="container assignment py-4">
			Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
		</p>
	`;

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
SNACK 2.3

Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

snacksCounter++;

instruction.push("Prendendo una lista di nomi e una di cognomi alla pressione del tasto esegui verrà generata una lista casuale di nomi e cognomi.");
assignment.push("Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.");

function snack203() {

	const firstNameList = [
		'Liam',
		'Olivia',
		'Noah',
		'Emma',
		'Oliver',
		'Ava',
		'Elijah',
		'Charlotte',
		'William',
		'Sophia',
		'James',
		'Amelia',
		'Benjamin',
		'Isabella',
		'Lucas',
		'Mia',
		'Henry',
		'Evelyn',
		'Alexander',
		'Harper'
	];

	const lastNameList = [
		'Smith',
		'Johnson',
		'Williams',
		'Brown',
		'Jones',
		'Garcia',
		'Miller',
		'Davis',
		'Rodriguez',
		'Martinez',
		'Hernandez',
		'Lopez',
		'Gonzales',
		'Wilson',
		'Anderson',
		'Thomas',
		'Taylor',
		'Moore',
		'Jackson',
		'Martin'
	];
	
	checker.innerHTML = `<ol></ol>`;
	let outputList = document.querySelector('ol');
	const fakeGuestList = [];

	do {
		let randomNumber1 = Math.floor(Math.random() * firstNameList.length);
		let randomNumber2 = Math.floor(Math.random() * lastNameList.length);

		let randomName = firstNameList[randomNumber1] + ' ' + lastNameList[randomNumber2];

		if (!fakeGuestList.includes(randomName)) {
			fakeGuestList.push(randomName);
		}
	} while (fakeGuestList.length < 3)

	for (let i = 0; i < fakeGuestList.length; i++) {
		outputList.innerHTML += `<li>${fakeGuestList[i]}</li>`;
	}
}

/*
NAV SNACK BUTTONS GENERATOR
*/

for (let i = 0; i < snacksCounter; i++) {
	let block;
	let snack;
	const btnSnack = document.createElement('button');
	btnSnack.className = 'btn btn-light mb-3';
	if (i < 9) {
		block = 1;
		snack = i + 1;
		navLeft.append(btnSnack);
	} else {
		block = 2;
		snack = i - 8;
		navRight.append(btnSnack);
	}
	btnSnack.textContent = `Snack ${block}.${snack}`;
	btnSnack.addEventListener('click', function() {
		snackLayoutCreator(i, block, snack);
	});
}

function snackLayoutCreator(index, block, snack) {

	container.innerHTML = `
		<h2>Snack ${block}.${snack}</h2>

		<p class="mt-4">${instruction[index]}</p>
		
		<button id="execute-${block}-${snack}" class='btn btn-dark rounded-pill my-3'>Esegui</button>
	`;
	
	footer.innerHTML = `
		<p class="container assignment py-4">${assignment[index]}</p>
	`;

	checker.innerHTML = '';
	
	const btnExecute = document.getElementById(`execute-${block}-${snack}`);
	btnExecute.addEventListener('click', window[`snack${block}0${snack}`]);
}

let btnSnackHidden = document.querySelector('.nav-left button:nth-child(7)');
btnSnackHidden.classList.add('d-none');
btnSnackHidden = document.querySelector('.nav-left button:nth-child(8)');
btnSnackHidden.classList.add('d-none');