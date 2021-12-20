Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})

let titles = ["1. Leg direkt los", "2. Erstelle dein Jobangebot"]

describe('My First Test', () => {
	it('Does not do much!', () => {
		cy.visit('https://arbeitgeber.campusjaeger.de/')
		cy.contains("Alle akzeptieren").click()
		
		// Wait 0.5 sec so that the cookie window disappears
		cy.wait(500) 
		cy.contains("1. Leg direkt los")
		
		cy.get("ellipse").eq(1).click({force: true})
		cy.contains("2. Erstelle dein Jobangebot")

		
	})
})