import elements from '../../fixtures/auth_page'
import data from '../../fixtures/login_data'

describe('Admin login', () => {
  beforeEach(() => {
    cy.visit('http://qamid.tmweb.ru/admin');
    cy.get(elements.header).should('have.text', 'Администраторррская');
  });

  it("Should login with valid admin data", () => {
    cy.login(data.validEmail, data.validPassword);
    cy.url().should('eq', "http://qamid.tmweb.ru/admin/index.php");
  })

 it("Should not login with invalid data", () => {
    cy.login(data.invalidEmail, data.invalidPassword);
    cy.url().should('not.eq', 'http://qamid.tmweb.ru/admin/index.php');
    cy.contains('Ошибка авторизации');
  })

  it("Should not login with empty email field", () => {
    cy.login(" ", data.invalidPassword);
    cy.url().should('not.eq', 'http://qamid.tmweb.ru/admin/index.php');
    cy.get(elements.passwordField).should('not.have.value');
  })

  it("Should not login with empty password field", () => {
    cy.login(data.validEmail, " ");
    cy.url().should('not.eq', 'http://qamid.tmweb.ru/admin/index.php');
    cy.contains('Ошибка авторизации');
  })

  it("Should not login with empty field", () => {
    cy.login(" ", " ");
    cy.url().should('not.eq', 'http://qamid.tmweb.ru/admin/index.php');
    cy.get(elements.passwordField).should('not.have.value');
  })
})