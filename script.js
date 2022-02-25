/*
SNACK 1.1

L'utente inserisce due numeri in successione, con due prompt.
Il sofware stampa il maggiore.
*/

// let a = prompt('digita il primo numero');
// let b = prompt('digita il secondo numero');

// if (a > b) {
// 	alert(a)
// } else if (a < b) {
// 	alert(b);
// } else {
// 	alert('sono uguali')
// }

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

let guestArr = ['Nick Carraway','Jay Gatsby','Daisy Buchanan','Tom Buchanan','Jordan Baker','Myrtle Wilson','George Wilson','Owl Eyes','Klipspringer','Meyer Wolfsheim'];

const mainHtml = document.querySelector('main');
mainHtml.innerHTML += `
<p>In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.</p>
<input type="text" name="guest" id="guest">
<button class="check">Controlla</button>
`
const input = document.getElementById('guest');
const btnCheck = document.querySelector('.check');

let guestFound = false;
let i;

btnCheck.addEventListener('click', function() {
	for (i = 0; i < guestArr.length && !guestFound; i++) {
		if (guestArr[i].toLowerCase() == input.value.toLowerCase()) {
			guestFound = true;
		}
	}

	if (guestFound) {
		mainHtml.innerHTML += `<div>Good evening Mr. ${guestArr[--i]}. You can give me your coat, the party is this way. Thanks you for coming.</div>`
	} else {
		mainHtml.innerHTML += `<div>Sir, I'm terribly sorry but your name is not on the guest list. I'm afraid I'll have to ask you to leave.</div>`
	}
});


/*
SNACK 1.5

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

/*
SNACK 1.6
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/