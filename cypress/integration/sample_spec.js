Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})

let titles = [
	"1. Leg direkt los", 
	"2. Erstelle dein Jobangebot", 
	"3. Stelle optimieren und von Experten prüfen lassen",
	"4. Stelle auf über 1.000 Kanälen schalten",
	"5. Kandidaten verwalten und bewerten",
	"6. Mit wenigen Klicks Termine vereinbaren",
	"7. Gespräche durchführen und Ergebnisse dokumentieren",
	"8. Zusammen entscheiden und die besten Kandidaten einstellen",
	"9. Prämie nur bei Erfolg"
]

describe('My First Test', () => {
	it('Does not do much!', () => {
		cy.visit('https://arbeitgeber.campusjaeger.de/')
		cy.contains("Alle akzeptieren").click()
		
		// Wait 0.5 sec so that the cookie window disappears
		cy.wait(500) 


		cy.contains(titles[0])
		for (let i = 1; i < titles.length; i++) {
			cy.get("ellipse").eq(i).click({force: true})
			cy.contains(titles[i])
		}		
	})
})