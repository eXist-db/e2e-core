/// <reference types="cypress" />

describe('User Manager', function() {
  it('should open', function() {
    // Go to User Manager
    cy.visit('/usermanager/index.html')
  })
  describe('should create user', function() {
      before(function () {
        cy.get('#user').type('admin')
        cy.get('.button').click()
      })

      it ('should create and delete user', function() {
          cy.shadowGet('#addUser').shadowClick()
          cy.shadowGet('#userInput').shadowTrigger('input', 'rudi')
          cy.shadowGet('#userForm > form > paper-input:nth-child(2)').shadowTrigger('input', 'Rudi Rüssel')
          cy.shadowGet('#userForm > form > paper-password-input:nth-child(5)').shadowTrigger('input', 'pass')
          cy.shadowGet('#confirm').shadowTrigger('input', 'pass')
          cy.shadowGet('#memberOf > paper-item:nth-child(1)').shadowClick()
          cy.shadowGet('#userForm > form > paper-button:nth-child(10)').shadowClick()
          cy.shadowGet('.user-entry .user:contains("rudi")').shadowShould('have.length', 1)

          cy.shadowGet('.user-entry .user:contains("rudi")').shadowClick()
          cy.shadowGet('#userForm > form > paper-button:nth-child(11)').shadowClick()

          cy.shadowGet('.user-entry .user').then((user) => user.text()).should('not.include', 'rudi')
      })
  })
})
