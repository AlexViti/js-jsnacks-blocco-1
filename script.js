const mainHtml = document.querySelector('main');
const checker = document.querySelector('.checker');
const nav = document.querySelector('nav');


let snacks = 0;

for (let i = 0; i <= snacks; i++) {
	nav.innerHTML += `<button class="btn btn-light" id="snack1-${i+1}">Snack 1.${i+1}</button>`;
}

/*
SNACK 1.1

L'utente inserisce due numeri in successione, con due prompt.
Il sofware stampa il maggiore.
*/

snacks++;
const btnSnack1 = document.getElementById('snack1-1');

btnSnack1.addEventListener('click', snack1);

function snack1() {
	
	let a = prompt('digita il primo numero');
	let b = prompt('digita il secondo numero');
	
	if (a > b) {
		alert(a)
	} else if (a < b) {
		alert(b);
	} else {
		alert('sono uguali')
	}
}


/*
SNACK 1.2

 L'utente iserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// let a = prompt('inserisci una parola');

// while (a == '') {
// 	a = prompt('inserisci una parola, per favore');
// }

// let b = prompt("inserisci un'altra parola");

// while (b == '') {
// 	b = prompt('inserisci una parola, per favore');
// }

// if(a.length == b.length) {
// 	alert('Le parole hanno la stessa lunghezza: ' + a + ' ' + b);
// } else if (a.length > b.length) {
// 	alert(b + ' ' + a);
// } else {
// 	alert(a + ' ' + b);
// }

/*
SNACK 1.3

Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
// 	let input = prompt(`inserisci ${i}° numero`);

// 	while (isNaN(input) || input == '') {
// 		input = prompt('inserisci un numero');
// 	}
// 	sum += parseInt(input);
// }

// alert('la somma dei numeri inseriti è: ' + sum);

/*
SNACK 1.4

In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
*/

// let guestArr = ['Nick Carraway','Jay Gatsby','Daisy Buchanan','Tom Buchanan','Jordan Baker','Myrtle Wilson','George Wilson','Owl Eyes','Klipspringer','Meyer Wolfsheim'];

// mainHtml.innerHTML = `
// <p>In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
// no alla festa.</p>
// <input type="text" name="guest" id="guest">
// <button class="check">Controlla</button>
// `
// const input = document.getElementById('guest');
// const btnCheck = document.querySelector('.check');

// btnCheck.addEventListener('click', function() {
	
// 	let guestFound = false;
// 	let i;
	
// 	for (i = 0; i < guestArr.length && !guestFound; i++) {
// 			if (guestArr[i].toLowerCase() == input.value.toLowerCase()) {
// 				guestFound = true;
// 			}
// 		}
		
// 		let guestLastName = guestArr[--i].split(' ');
// 		guestLastName = guestLastName[guestLastName.length - 1];
		
// 	if (guestFound) {
// 		checker.innerHTML = `Good evening Mr. ${guestLastName}. You can give me your coat, the party is this way. Thanks you for coming.`
// 	} else {
// 		checker.innerHTML = `<div>Sir, I'm terribly sorry but your name is not on the guest list. I'm afraid I'll have to ask you to leave.`
// 	}
// });


/*
SNACK 1.5

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

// mainHtml.innerHTML = `
// <p>Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.</p>`

// let arr = [];

// for (let i = 0; i < 6; i++) {
// 	let input = parseInt(prompt('inserisci un numero'));
// 	if (input % 2 == 1) {
// 		arr.push(input);
// 	}
// }

// checker.innerHTML = arr;

/*
SNACK 1.6
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

// mainHtml.innerHTML = `
// <p>Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.</p>`

// let input = prompt('inserisci un numero di 4 cifre');

// while (isNaN(input) || parseInt(input) < 1000 || parseInt(input) > 9999) {
// 	input = prompt('inserisci un numero di 4 cifre');
// }

// let inputArr = [...input];

// let inputDigitSum = 0;
// function digitSum(digit) {
// 	inputDigitSum += parseInt(digit);
//  }

// inputArr.forEach(digitSum);


// checker.innerHTML = inputDigitSum;