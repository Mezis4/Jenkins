import elements from '../../fixtures/auth_page'
import data from '../../fixtures/login_data'
import page from '../../fixtures/main_page.json'

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://qamid.tmweb.ru/admin');
    cy.get(elements.header).should('have.text', 'Администраторррская');
  });

  it('passes', () => {
    cy.login(data.validEmail, data.validPassword);
    cy.url().should('eq', "http://qamid.tmweb.ru/admin/index.php");
    cy.wait(1000);
    cy.get(page.tabsTitle).eq(0).should('have.text', 'Управление залами');
    cy.get(page.tabsTitle).eq(1).should('have.text', 'Конфигурация залов');
    cy.get(page.tabsTitle).eq(2).should('have.text', 'Конфигурация цен');
    cy.get(page.tabsTitle).eq(3).should('have.text', 'Сетка сеансов');
    cy.get(page.tabsTitle).eq(4).should('have.text', 'Открыть продажи');
  })
})