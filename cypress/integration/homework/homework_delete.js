describe('homework', function() {
    it('delete a todolist test', function() {
      cy.visit('http://localhost:8080')

      cy.get('#app > div > form > input[type="text"]').type('work01').should('have.value', 'work01')

      cy.get('#app > div > form > button').click()

      cy.get('.delete-btn').click()

      cy.get('#app > div').should('not.have.text', 'work01')
    })
  })