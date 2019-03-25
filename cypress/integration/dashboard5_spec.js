describe('The dashboard', function() {
  it('should load', function() {
    // Go to Dashboad
    cy.visit('/dashboard/index.html')

  })
  describe('login', function() {
    before(function() {
      cy
      .get('existdb-launcher-app')
      .shadowGet('app-toolbar')
      .shadowFind('a#login')
      .shadowClick()
      .url().should('include', '/dashboard/login.html')
    })

    // afterEach('close', function () {
    //    cy.get('#inlineClose').click()
    // })

    it.skip('should open Backup', function() {
      cy.contains('Backup').click()
      // Tests go here …
      cy.url().should('include', '/dashboard/index.html')
    })

    it.skip('should see Collection Browser', function() {
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
