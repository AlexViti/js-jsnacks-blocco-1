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

let sum = 0;

for (let i = 1; i <= 10; i++) {
	let input = prompt(`inserisci ${i}° numero`);

	while (isNaN(input) || input == '') {
		input = prompt('inserisci un numero');
	}
	sum += parseInt(input);
}

alert('la somma dei numeri inseriti è: ' + sum);