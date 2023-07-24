import element from '../../fixtures/main_page'

describe('main page elements check', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('A chosen day should be focused', () => {
    cy.get(element.dayNavigation).eq(2).click();
    cy.get(element.dayNavigation).eq(2).should('have.focus');
  })
})