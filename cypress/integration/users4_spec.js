describe.skip('User Manager', function() {
  it('should open', function() {
    // Go to User Manager
    cy.visit('/usermanager/index.html')
  })
  describe('log in', function (){
    it ('should log in', function () {
      cy.get('#user').type('admin')
      cy.get('.button').click()
    })
  })
})
