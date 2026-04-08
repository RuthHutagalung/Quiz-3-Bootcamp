class LoginPage {

  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  }

  inputUsername(username) {
    cy.get('input[name="username"]').type(username)
  }

  inputPassword(password) {
    cy.get('input[name="password"]').type(password)
  }

  clickLogin() {
    cy.get('button[type="submit"]').click()
  }

  verifyDashboard() {
    cy.url().should('include', '/dashboard')
  }

  verifyInvalidLogin() {
    cy.contains('Invalid credentials', { timeout: 10000 })
    .should('be.visible')
  }

  verifyRequired() {
    cy.get('.oxd-input-group__message').should('contain', 'Required')
  }

  logout() {
    cy.get('.oxd-userdropdown-name').click()
    cy.contains('Logout').click()
  }

  verifyBackToLogin() {
    cy.url().should('include', '/auth/login')
  }

}

export default new LoginPage()