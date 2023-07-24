// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const authorization = require("../fixtures/auth_page");
const seats = require('../fixtures/seats')

Cypress.Commands.add('login', (email, password) => {
  cy.get(authorization.emailField).type(email);
  cy.get(authorization.passwordField).type(password);
  cy.get(authorization.loginButton).click();
});

Cypress.Commands.add('chooseSeats', () => {
  seats.forEach((seat) => {
    cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click();
  });
});