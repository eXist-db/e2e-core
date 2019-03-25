describe.skip('The dashboard', function() {
  it('should load', function() {
    // Go to Dashboad
    cy.visit('/dashboard/index.html')

  })
  describe('login', function() {
    before(function() {
      cy.get('#user_label').click()

      cy.get('#dijit_form_ValidationTextBox_0').type('admin')

      cy.get('#dijit_form_Button_0_label').click()
    })

    afterEach('close', function () {
       cy.get('#inlineClose').click()
    })

    it('should open Backup', function() {
      cy.contains('Backup').click()
      // Tests go here …
      cy.url().should('include', '/dashboard/index.html')
    })

    it('should see Collection Browser', function() {
      // Select Collection Browser
      cy.contains('Collections').click()
      // Tests go here …
      cy.url().should('include', '/dashboard/index.html')
    })

    it.skip('should see Package Manager', function() {
      // select Package Manager does not work with login from dashboard
      cy.contains('Package Manager').click()
      // Tests go here …
      cy.url().should('include', '/dashboard/index.html')
    })
  })
})
