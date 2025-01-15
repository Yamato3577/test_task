describe('Test_authorization', () => {

  const USER_LOGIN = 'test'
  const USER_PASSWORD = 'test123'

  it('Incorrect login or password', () => {
    cy.visit('https://demo.sedmax.ru/sedmax/web/ui/login')

    cy.get('input[id="Login"]')
    .type(USER_LOGIN)
    .should('have.value', USER_LOGIN)

    cy.get('input[id="Password"]')
    .type(USER_PASSWORD)
    .should('have.value', USER_PASSWORD)

    cy.get('[data-testid="submit_button"]').click()

    cy.get('.ant-login-alert-message')
    .should('contain.text', 'Неверные логин или пароль')

  })
})