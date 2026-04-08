import LoginPage from '../pages/loginpages'
import data from '../fixtures/logindata.json'

describe('OrangeHRM Login Test - POM', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()

    LoginPage.visit()

    cy.get('input[name="username"]', { timeout: 10000 })
    .should('be.visible')
  })


  // =====================================
  // TC01 - Login valid
  // =====================================
  it('TC01 - Login valid', () => {

    LoginPage.inputUsername(data.validUser.username)
    LoginPage.inputPassword(data.validUser.password)
    LoginPage.clickLogin()

    LoginPage.verifyDashboard()
  })

  // =====================================
  // TC02 - Password salah
  // =====================================
  it('TC02 - Password salah', () => {

    LoginPage.inputUsername(data.invalidUser.username)
    LoginPage.inputPassword(data.invalidUser.password)
    LoginPage.clickLogin()

    LoginPage.verifyInvalidLogin()
  })

  // =====================================
  // TC03 - Username kosong
  // =====================================
  it('TC03 - Username kosong', () => {

    LoginPage.inputPassword(data.validUser.password)
    LoginPage.clickLogin()

    LoginPage.verifyRequired()
  })

  // =====================================
  // TC04 - Password kosong
  // =====================================
  it('TC04 - Password kosong', () => {

    LoginPage.inputUsername(data.validUser.username)
    LoginPage.clickLogin()

    LoginPage.verifyRequired()
  })

  // =====================================
  // TC05 - Semua kosong
  // =====================================
  it('TC05 - Semua kosong', () => {

    LoginPage.clickLogin()

    LoginPage.verifyRequired()
  })

  // =====================================
  // TC06 - Login random gagal
  // =====================================
  it('TC06 - Username & password salah', () => {

    LoginPage.inputUsername(data.randomUser.username)
    LoginPage.inputPassword(data.randomUser.password)
    LoginPage.clickLogin()

    LoginPage.verifyInvalidLogin()
  })


})