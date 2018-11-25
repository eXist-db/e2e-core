describe('Monex', function() {
  it('should load', function() {
    // Go to monex
    cy.visit('/monex/index.html')
    cy.contains('Sign in as a dba user')
  })
  describe('log in', function (){
    it ('should log in', function () {
      cy.get('.login-box-body')
      cy.get(':nth-child(1) > .form-control').type('admin')
      cy.get('.btn').click()
    })
  })

})
