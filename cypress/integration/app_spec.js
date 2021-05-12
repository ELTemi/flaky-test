describe('Sign Up', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Adds person to course', () => {
    cy.get('div')
      .should('have.class', 'ui')
      .and('have.class', 'container')

    cy.get('form').within(() => {
      cy.get('input[name="name"]')
      .click()
      .type('Some Name')
      .should('have.value', 'Some Name')

      cy.get('input[name="email"]')
      .click()
      .type('some@email.com')
      .should('have.value', 'some@email.com')
    
    cy.get('select[name="department"]')
      .select('core')
      .should('have.value', 'core')

    cy.get('select[name="course"]')
      .select('git-it')
      .should('have.value', 'git-it')

    cy.get('input[type="submit"]')
      .click()
    })

    cy.get('ul').children().should('have.length', 1)
    cy.get('li').eq(0).should('contain', 'Some Name - some@email.com - core - git-it')
  })
})
