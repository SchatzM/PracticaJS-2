'use strict';

// Piedra, Papel y Tijera.
// Usando If, else if y else.

var opciones = ['piedra', 'papel', 'tijera'],
	info = '\n\nPIEDRA, PAPEL Y TIJERA\n=======================\n\nUso:\nPPT (JugadaJugador1, JugadaJugador2)',
	info2 = '\n\nJugadas válidas:\n"Piedra", "Papel" ó "Tijera".';

function PPT (a, b) {
	let J1 = (a) ? a.toLowerCase() : null,
		J2 = (b) ? b.toLowerCase() : null,
		J1Nombre = 'Jugador 1',
		J2Nombre = 'Jugador 2';

	if (J1 !== null && J2 !== null) {
		if (J1 !== J2) {
			if (J1 === opciones[0]) { //Si la jugada de J1 es piedra
				if (J2 === opciones[1]) {
					return console.warn (`Gana ${J2Nombre} con ${J2}.`) // Papel gana a piedra
				}
				else if (J2 === opciones[2]) {
					return console.warn (`Gana ${J1Nombre} con ${J1}.`) // Piedra gana a tijera
				}
				else {
					return console.error (`Jugada no válida "${J2}".`, info2)
				}
			}
			else if (J1 === opciones[1]) { // Si la jugada de J1 es papel
				if (J2 === opciones[0]) { //
					return console.warn (`Gana ${J1Nombre} con ${J1}.`) // Papel gana a piedra
				}
				else if (J2 === opciones[2]) {
					return console.warn (`Gana ${J2Nombre} con ${J2}.`) // Tijera gana a papel
				}
				else {
					return console.error (`Jugada no válida "${J2}".`, info2)
				}
			}
			else if (J1 === opciones[2]) { //Si la jugada de J1 es tijera
				if (J2 === opciones[0]) { //
					return console.warn (`Gana ${J2Nombre} con ${J2}.`) // Piedra gana a tijera
				}
				else if (J2 === opciones[1]) {
					return console.warn (`Gana ${J1Nombre} con ${J1}.`) // Tijera gana a papel
				}
				else {
					return console.error (`Jugada no válida "${J2}".`, info2)
				}
			}
			else { // Si no se reconoce la jugada de J1
				return console.error (`Jugada no válida "${J1}".`, info2);
			}
		} else {
			return console.warn (`Empate por ${J2}.`);
		}
	} else {
		return console.error ('Falta(n) jugada(s) o no son válidas.', info2);
	}
}

console.info (info, info2)
