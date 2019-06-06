describe('homework', function() {
    it('add a todolist test', function() {
      cy.visit('http://localhost:8080')

      cy.get('#app > div > form > input[type="text"]').type('work01').should('have.value', 'work01')

      cy.get('#app > div > form > button').click()

      cy.get('#app > div > table > tbody > tr').should('have.class', 'todo-not-completed')

      cy.get('[style="cursor: pointer;"]').click()

      cy.get('#app > div > table > tbody > tr').should('have.class', 'todo-completed')
    })
  })