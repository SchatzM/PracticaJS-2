'use strict'; // Ya es costumbre especificar esta parte

// Piedra, Papel y Tijera.
// Usando switch.

// Variables globales
var opciones = ['piedra', 'papel', 'tijera'], // Jugadas válidas
	info = '\n\nPIEDRA, PAPEL Y TIJERA\n=======================\n\nUso:\nPPT (JugadaJugador1, JugadaJugador2)', // Descripción del juego a mostrar en consola
	info2 = '\n\nJugadas válidas:\n"Piedra", "Papel" ó "Tijera".'; // Info sobre jugadas válidas a mostrar en consola

// Función principal
function PPT (a, b) {
	let J1 = (a) ? a.toLowerCase () : null, // Pasamos minúsculas para evitar
		J2 = (b) ? b.toLowerCase () : null, // algunos problemas en las comparaciones
		J1Nombre = 'Jugador 1',
		J2Nombre = 'Jugador 2';

	switch (J1) {
		case opciones[0]: //Si la jugada de J1 es piedra
			switch (J2) {
				case opciones[0]: // Si la jugada de J2 también es piedra
					console.warn (`Empate por ${J2}.`) //Empate
				break;
				case opciones[1]:
					console.warn (`Gana ${J2Nombre} con ${J2}.`) // Papel gana a piedra
				break;
				case opciones[2]:
					console.warn (`Gana ${J1Nombre} con ${J1}.`) // Piedra gana a tijera
				break;
				default:
					switch (J2) {
						case null: // Si no se encuentra la jugada de J2
							console.error (`Falta la jugada de ${J2Nombre}`)
						break;
						default:
							console.error (`Jugada no válida "${J2}".`, info2) // Si no se reconoce la jugada de J2
					}
			}
		break;
		case opciones[1]: // Si la jugada de J1 es papel
			switch (J2) {
				case opciones[0]:
					console.warn (`Gana ${J1Nombre} con ${J1}.`) // Papel gana a piedra
				break;
				case opciones[1]: // Si la jugada de J2 también es papel
					console.warn (`Empate por ${J2}.`) // Empate
				break;
				case opciones[2]:
					console.warn (`Gana ${J2Nombre} con ${J2}.`)  // Tijera gana a papel
				break;
				default:
					switch (J2) {
						case null:
							console.error (`Falta la jugada de ${J2Nombre}`) // Si no se encuentra la jugada de J2
						break;
						default:
							console.error (`Jugada no válida "${J2}".`, info2) // Si no se reconoce la jugada de J2
					}
			}
		break;
		case opciones[2]: //Si la jugada de J1 es tijera
			switch (J2) {
				case opciones[0]:
					console.warn (`Gana ${J2Nombre} con ${J2}.`) // Piedra gana a tijera
				break;
				case opciones[1]:
					console.warn (`Gana ${J1Nombre} con ${J1}.`) // Tijera gana a papel
				break;
				case opciones[2]: // Si la jugada de J2 también es tijera
					console.warn (`Empate por ${J2}.`) // Empate
				break;
				default:
					switch (J2) {
						case null:
							console.error (`Falta la jugada de ${J2Nombre}`) // Si no se encuentra la jugada de J2
						break;
						default:
							console.error (`Jugada no válida "${J2}".`, info2) // Si no se reconoce la jugada de J2
					}
			}
		break;
		default:
			console.error ('Falta(n) jugada(s) o no son válidas.', info2) // Falta alguna jugada o ninguna es válida
	}
}

console.info (info, info2) //Muestra info sobre el juego en consola al cargar el archivo
