'use strict';

// Piedra, Papel y Tijera.
// Usando If, else if y else.

var opciones = ['piedra', 'papel', 'tijera'], // Jugadas válidas
	info = '\n\nPIEDRA, PAPEL Y TIJERA\n=======================\n\nUso:\nPPT (JugadaJugador1, JugadaJugador2)', // Descripción del juego a mostrar en consola
	info2 = '\n\nJugadas válidas:\n"Piedra", "Papel" ó "Tijera".'; // Info sobre jugadas válidas a mostrar en consola

function PPT (a, b) {
	let Jugador1 = (a) ? a.toLowerCase() : null, // Pasamos minúsculas para evitar
		Jugador2 = (b) ? b.toLowerCase() : null, // algunos problemas en las comparaciones
		Jugador1Nombre = 'Jugador 1',
		Jugador2Nombre = 'Jugador 2';

	if (Jugador1 !== null && Jugador2 !== null) {
		if (Jugador1 !== Jugador2) {
			if (Jugador1 === opciones[0]) { //Si la jugada de Jugador1 es piedra
				if (Jugador2 === opciones[1]) {
					return console.warn (`Gana ${Jugador2Nombre} con ${Jugador2}.`) // Papel gana a piedra
				}
				else if (Jugador2 === opciones[2]) {
					return console.warn (`Gana ${Jugador1Nombre} con ${Jugador1}.`) // Piedra gana a tijera
				}
				else {
					return console.error (`Jugada no válida "${Jugador2}".`, info2) // Si no se reconoce la jugada de Jugador2
				}
			}
			else if (Jugador1 === opciones[1]) { // Si la jugada de Jugador1 es papel
				if (Jugador2 === opciones[0]) { //
					return console.warn (`Gana ${Jugador1Nombre} con ${Jugador1}.`) // Papel gana a piedra
				}
				else if (Jugador2 === opciones[2]) {
					return console.warn (`Gana ${Jugador2Nombre} con ${Jugador2}.`) // Tijera gana a papel
				}
				else {
					return console.error (`Jugada no válida "${Jugador2}".`, info2) // Si no se reconoce la jugada de Jugador2
				}
			}
			else if (Jugador1 === opciones[2]) { //Si la jugada de Jugador1 es tijera
				if (Jugador2 === opciones[0]) {
					return console.warn (`Gana ${Jugador2Nombre} con ${Jugador2}.`) // Piedra gana a tijera
				}
				else if (Jugador2 === opciones[1]) {
					return console.warn (`Gana ${Jugador1Nombre} con ${Jugador1}.`) // Tijera gana a papel
				}
				else {
					return console.error (`Jugada no válida "${Jugador2}".`, info2) // Si no se reconoce la jugada de Jugador2
				}
			}
			else { // Si no se reconoce la jugada de Jugador1
				return console.error (`Jugada no válida "${Jugador1}".`, info2);
			}
		} else {
			return console.warn (`Empate por ${Jugador2}.`); // Las jugadas son iguales
		}
	} else {
		return console.error ('Falta(n) jugada(s) o no son válidas.', info2); // Falta alguna jugada o ninguna es válida
	}
}

console.info (info, info2) //Muestra info sobre el juego en consola al cargar el archivo
