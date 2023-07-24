import seats from '../../fixtures/seats'
import data from '../../fixtures/login_data'
import page from '../../fixtures/main_page.json'

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://qamid.tmweb.ru/admin');
  });

  
  it('reservationSeatsAdminCreatedMovie', () => {
    cy.login(data.validEmail, data.validPassword);
    cy.wait(1000)
    cy.get(page.hallName)
      .invoke("text")
      .then((text) => {
        const cinemaHall = text;
        cy.visit('/');
        cy.get(page.dayNavigation).eq(2).click();
        cy.get(page.moviesCards).contains(cinemaHall).siblings(page.moviesTime).click('left');
      });
    
    cy.chooseSeats();
    cy.get(page.reservationButton).click();
    cy.get(page.reservationHeader).should('have.text', 'Вы выбрали билеты:');
  });
})