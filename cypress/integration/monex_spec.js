describe('Monex', function() {
  beforeEach('log in', function () {
    cy.visit('/monex/')
    cy.contains('Sign in as a dba user')
    cy.get('.login-box-body')
    cy.get(':nth-child(1) > .form-control').type('admin')
    cy.get('.btn').click()
  })
  describe('index', function (){
    it('should load start page', function() {
      // Go to monex
      cy.visit('/monex/index.html')
      cy.get('.box-footer > .btn').click()
    })

  })
  // Pending since index pages have console error
  // see https://github.com/eXist-db/monex/issues/60
  xdescribe('profiling', function () {
    it ('should load Query Profiling', function () {
      cy.visit('/monex/profiling.html')
      cy.get('[href="?action=enable"]').click()
      cy.contains('/db/apps/monex/controller.xql')
    })
  })
  xdescribe('indexes', function () {
    it ('should load Browse Indexes', function () {
      cy.visit('/monex/indexes.html')
      cy.contains('/db/apps/monex')
    })
  })
})
