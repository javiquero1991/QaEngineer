// Importa Cypress
import 'cypress-wait-until';

//pasos detallados para los steps de los test cases (mejora)
//Se estaban implementando los pasos para relacionarlos con los casos de prueba 

Cypress.Commands.add('checkHomepageTitle', (expectedTitle) => {
  cy.title().should('eq', expectedTitle, { timeout: 60000 });
});

Cypress.Commands.add('checkHomepageTitleNot', (unexpectedTitle) => {
  cy.title().should('not.eq', unexpectedTitle, { timeout: 60000 });
});

Cypress.Commands.add('checkImagesVisibility', (imageTitles) => {
  imageTitles.forEach(title => {
    cy.get(`img[title="${title}"]`).should('be.visible');
  });
});

Cypress.Commands.add('checkMenuItemsVisibility', (menuItems) => {
  menuItems.forEach(item => {
    cy.get(`img[title="${item}"]`).should('be.visible');
  });
});

Cypress.Commands.add('addItemToCartAndContinueShopping', (itemTitle) => {
  cy.get(`img[title="${itemTitle}"]`, { timeout: 60000 }).should('be.visible').click({ waitForAnimations: false, force: true });
  cy.wait(60000);
  cy.get('.vtex-product-summary-2-x-nameContainer > .vtex-product-summary-2-x-productNameContainer > .vtex-product-summary-2-x-productBrand', { timeout: 60000 })
    .should('be.visible')
    .click({ force: true });
  cy.waitUntil(() => cy.get('.vtex-store-components-3-x-skuSelectorItem--xl').should('be.visible'), { timeout: 60000 });
  cy.get('.vtex-store-components-3-x-skuSelectorItem--xl').dblclick({ force: true });
  cy.waitUntil(() => cy.get('span').contains('AGREGAR AL CARRITO').should('be.visible')).then(() => {
    cy.get('span').contains('AGREGAR AL CARRITO').click({ force: true });
  });
  cy.waitUntil(() => cy.get('a.vtex-rich-text-0-x-link--gotobuy').contains('SEGUIR COMPRANDO').should('be.visible'));
  cy.get('a.vtex-rich-text-0-x-link--gotobuy').click({ force: true });
});

Cypress.Commands.add('addItemToCartAndCheckout', (itemTitle) => {
  cy.get(`img[title="${itemTitle}"]`, { timeout: 10000 }).should('be.visible').click({ waitForAnimations: false, force: true });
  cy.wait(25000);
  cy.get('.vtex-product-summary-2-x-imageNormal', { timeout: 60000 }).should('be.visible').click({ force: true });
  cy.waitUntil(() => cy.get('.vtex-store-components-3-x-skuSelectorItem--8').should('be.visible')).then($element => {
    cy.wrap($element).dblclick({ force: true });
  });
  cy.waitUntil(() => cy.get('span').contains('AGREGAR AL CARRITO').should('be.visible')).then(() => {
    cy.get('span').contains('AGREGAR AL CARRITO').click({ force: true });
  });
  cy.wait(25000);
  cy.waitUntil(() => cy.get('div.vtex-button__label').contains('FINALIZAR COMPRA').should('be.visible'));
  cy.get('div.vtex-button__label').contains('FINALIZAR COMPRA').click({ force: true });
  cy.waitUntil(() => cy.get('#cart-to-orderform', { timeout: 15000 }).should('be.visible'));
  cy.get('#cart-to-orderform').click({ force: true });
});


