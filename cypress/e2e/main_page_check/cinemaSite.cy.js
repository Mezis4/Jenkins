import element from '../../fixtures/main_page'

describe('main page elements check', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check elements', () => {
    // проверяем, что на странице есть заголовок, выбор дней, постеры фильмов и время сеансов
    cy.get(element.header).should('have.text', 'Идёмвкино');
    cy.get(element.dayNavigation).should('have.length', 7);
    cy.get(element.moviesCards).should('have.length', 3);
    cy.get(element.moviesTime).should('have.length', 6);
  })
})