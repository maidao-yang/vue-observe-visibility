/// <reference types="cypress" />

var routes = ['/', '/vue3.html']

describe('vue observe visibility', () => {
	it('detects visibility when scrolling', () => {
		for (var i = 0; i < routes.length; i++) {
			cy.visit(routes[i])
			cy.get('[id="is-visible"]').should('not.be.checked')
			cy.get('.test').scrollIntoView()
			cy.get('[id="is-visible"]').should('be.checked')
			cy.get('.info').scrollIntoView()
			cy.get('[id="is-visible"]').should('not.be.checked')
		}
	})

	it('detects visibility when toggling the element', () => {
		for (var i = 0; i < routes.length; i++) {
			cy.visit(routes[i])
			cy.get('.test').scrollIntoView()
			cy.get('[id="is-visible"]').should('be.checked')
			cy.get('.toggle').click()
			cy.get('.test').should('not.be.visible')
			cy.get('[id="is-visible"]').should('not.be.checked')
			cy.get('.toggle').click()
			cy.get('.test').should('be.visible')
			cy.get('[id="is-visible"]').should('be.checked')
		}
	})

	it('can be disabled', () => {
		for (var i = 0; i < routes.length; i++) {
			cy.visit(routes[i])
			cy.get('[id="disabled"]').click().should('be.checked')
			cy.get('.test').scrollIntoView()
			cy.get('[id="is-visible"]').should('not.be.checked')
		}
	})
})
