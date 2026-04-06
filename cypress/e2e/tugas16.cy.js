describe('OrangeHRM Login Test - Intercept', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible')
  })

  // =====================================
  // TC01 - Login valid (Intercept AUTH)
  // =====================================
  it('TC01 - Login valid', () => {

    cy.intercept('POST', '**/auth/validate').as('loginAuth')

    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.wait('@loginAuth').its('response.statusCode').should('eq', 302)
  })

  // =====================================
  // TC02 - Password salah (Intercept AUTH FAIL)
  // =====================================
it('TC02 - Password salah', () => {

  cy.intercept('POST', '**/auth/**').as('loginFail')

  cy.get('input[name="username"]').type('Admin')
  cy.get('input[name="password"]').type('salah123')
  cy.get('button[type="submit"]').click()

  cy.wait('@loginFail').its('response.statusCode').should('exist')
  cy.contains('Invalid credentials').should('be.visible')
})

// =====================================
  // TC03 - Username kosong
  // =====================================
  it('TC03 - Username kosong', () => {

    cy.intercept('GET', '**/auth/**').as('authPage')

    cy.get('button[type="submit"]').click()

    cy.get('.oxd-input-group__message').should('contain', 'Required')
  })

  // =====================================
  // TC04 - Password kosong
  // =====================================
  it('TC04 - Password kosong', () => {

    cy.intercept('GET', '**/web/**').as('webPage')

    cy.get('input[name="username"]').type('Admin')
    cy.get('button[type="submit"]').click()

    cy.get('.oxd-input-group__message').should('contain', 'Required')
  })

  // =====================================
  // TC05 - Semua kosong
  // =====================================
  it('TC05 - Semua kosong', () => {

    cy.intercept('GET', '**').as('allGet')

    cy.get('button[type="submit"]').click()

    cy.get('.oxd-input-group__message')
      .should('have.length.at.least', 1)
  })

  // =====================================
  // TC06 - Username & password salah
  // =====================================
it('TC06 - Username dan password salah', () => {

  // intercept khusus login (lebih stabil)
  cy.intercept('POST', '**/auth/**').as('loginInvalid')

  cy.get('input[name="username"]').type('user123')
  cy.get('input[name="password"]').type('pass123')
  cy.get('button[type="submit"]').click()

  // tunggu request login selesai
  cy.wait('@loginInvalid')

  // validasi error muncul
  cy.contains('Invalid credentials', { timeout: 10000 })
    .should('be.visible')
})


})