// Importa Cypress
import 'cypress-wait-until';

// Define comandos personalizados

// Verifica que el título de la página principal sea el esperado
Cypress.Commands.add('checkHomepageTitle', (expectedTitle) => {
  cy.title().should('eq', expectedTitle, { timeout: 60000 });
});

// Verifica que el título de la página principal no sea el esperado
Cypress.Commands.add('checkHomepageTitleNot', (unexpectedTitle) => {
  cy.title().should('not.eq', unexpectedTitle, { timeout: 60000 });
});

// Verifica que las imágenes especificadas sean visibles
Cypress.Commands.add('checkImagesVisibility', (imageTitles) => {
  imageTitles.forEach(title => {
    cy.get(`img[title="${title}"]`).should('be.visible');
  });
});

// Verifica que los elementos del menú sean visibles
Cypress.Commands.add('checkMenuItemsVisibility', (menuItems) => {
  menuItems.forEach(item => {
    cy.get(`img[title="${item}"]`).should('be.visible');
  });
});

// Agrega un artículo al carrito y continúa comprando
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

// Agrega un artículo al carrito y procede a la compra
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

