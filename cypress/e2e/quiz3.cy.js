describe('OrangeHRM Login Test', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    // Tunggu halaman benar-benar siap
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible')
  })

  it('TC01 - Login valid', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.url({ timeout: 10000 }).should('include', '/dashboard')
  })

  it('TC02 - Password salah', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('salah123')
    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials', { timeout: 10000 }).should('be.visible')
  })

 it('TC03 - Username kosong', () => {
  cy.get('input[name="password"]').type('admin123')
  cy.get('button[type="submit"]').click()

  cy.get('.oxd-input-group__message')
    .should('contain', 'Required')
})

 it('TC04 - Password kosong', () => {
  cy.get('input[name="username"]').type('Admin')
  cy.get('button[type="submit"]').click()

  cy.get('.oxd-input-group__message')
    .should('contain', 'Required')
})

 it('TC05 - Semua kosong', () => {
  cy.get('button[type="submit"]').click()

  cy.get('.oxd-input-group__message')
    .should('have.length.at.least', 1)
    .and('contain', 'Required')
})

 it('TC06 - Username salah & password kosong', () => {
  cy.get('input[name="username"]').type('SalahUser')
  cy.get('button[type="submit"]').click()

  cy.get('.oxd-input-group__message')
    .should('contain', 'Required')
})

 it('TC07 - Username kosong & password salah', () => {
  cy.get('input[name="password"]').type('salah123')
  cy.get('button[type="submit"]').click()

  cy.get('.oxd-input-group__message')
    .should('contain', 'Required')
})

it('TC08 - Username dan password salah', () => {
  cy.get('input[name="username"]').type('user123')
  cy.get('input[name="password"]').type('pass123')
  cy.get('button[type="submit"]').click()

  cy.contains('Invalid credentials').should('be.visible')
})

it('TC11 - Tombol login tampil', () => {
  cy.get('button[type="submit"]').should('be.visible')
})

it('TC15 - Logout berhasil', () => {

  // Login
  cy.get('input[name="username"]', { timeout: 10000 }).type('Admin')
  cy.get('input[name="password"]').type('admin123')
  cy.get('button[type="submit"]').click()

  // Tunggu dashboard BENAR-BENAR siap
  cy.url().should('include', '/dashboard')
  cy.get('h6', { timeout: 10000 }).should('contain', 'Dashboard')

  // Tambahan delay biar session aman
  cy.wait(2000)

  // Klik profile
  cy.get('.oxd-userdropdown-name')
    .should('be.visible')
    .click()

  // Tunggu dropdown muncul
  cy.get('.oxd-dropdown-menu')
    .should('be.visible')

  // Klik logout
  cy.contains('Logout')
    .should('be.visible')
    .click()

  // Verifikasi balik ke login
  cy.url().should('include', '/auth/login')
})

})