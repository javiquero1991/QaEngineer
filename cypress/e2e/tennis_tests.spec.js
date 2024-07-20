import 'cypress-wait-until';

describe('Tennis Website Tests', () => {

   context('Desktop Tests', () => {

    beforeEach(() => {
      cy.viewport('macbook-15');
      cy.visit('https://www.tennis.com.co/');
    });

    it('should load the homepage', () => {
      //cy.title().should('eq', 'Tennis | Tienda de Ropa Online en Colombia')
      cy.get('img[title="Jeans hombre"]').should('be.visible');
      cy.get('img[title="Shorts"]').should('be.visible');
      cy.get('img[title="Faldas para mujer"]').should('be.visible');
      cy.get('img[title="Bermudas para hombre"]').should('be.visible');
    });
    /*it.only('shouldn´t load the homepage', () => {
      cy.title().should('eq', 'Tenis | Tienda de Ropa Online en Colombia');
    });*/
    it('should load Menu', () => {
      /*cy.waitUntil(() => cy.title().should('eq', 'Tennis | Tienda de Ropa Online en Colombia'), {
        timeout: 60000,
        interval: 500, // Intervalo de chequeo en milisegundos
      });*/
      cy.get('img[title="Buzos"]').should('be.visible');
      cy.get('img[title="Camisetas"]').should('be.visible');
      cy.get('img[title="Jeans"]').should('be.visible');
    });
    it.only('Add an item of clothing and click continue shopping', () => {
      cy.get('img[title="Shorts"]', { timeout: 60000 }).should('be.visible').click({ waitForAnimations: false, force: true });
      cy.wait(60000)
      cy.get(':nth-child(3) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-flex-layout-0-x-flexRow--info_shelf > .vtex-flex-layout-0-x-flexRowContent--info_shelf > :nth-child(1) > .vtex-product-summary-2-x-nameContainer > .vtex-product-summary-2-x-productNameContainer > .vtex-product-summary-2-x-productBrand',{time: 60000})
         .should('be.visible')
         .click({ force: true }); // Forzar el clic si es necesario
      cy.waitUntil(() => 
          cy.get('.mt0 > :nth-child(1) > .vtex-store-components-3-x-skuSelectorContainer > .vtex-store-components-3-x-skuSelectorSubcontainer--talla > .vtex-store-components-3-x-skuSelectorNameContainer > .vtex-store-components-3-x-skuSelectorOptionsList > .vtex-store-components-3-x-skuSelectorItem--xl > .vtex-store-components-3-x-skuSelectorInternalBox > .vtex-store-components-3-x-valueWrapper')
            .should('be.visible'),
          { timeout: 60000 } // Tiempo máximo de espera de 60 segundos
        );
        // Hacer clic en el elemento
        cy.get('.mt0 > :nth-child(1) > .vtex-store-components-3-x-skuSelectorContainer > .vtex-store-components-3-x-skuSelectorSubcontainer--talla > .vtex-store-components-3-x-skuSelectorNameContainer > .vtex-store-components-3-x-skuSelectorOptionsList > .vtex-store-components-3-x-skuSelectorItem--xl > .vtex-store-components-3-x-skuSelectorInternalBox > .vtex-store-components-3-x-valueWrapper')
          .dblclick({ force: true });
      cy.waitUntil(() =>
            cy.get('span').contains('AGREGAR AL CARRITO', { timeout: 60000 })
              .should('be.visible')
          ).then(() => {
      cy.get('span').contains('AGREGAR AL CARRITO')
            .click({ force: true });
      });
      cy.wait(60000);
      cy.waitUntil(() => 
        cy.get('a.vtex-rich-text-0-x-link--gotobuy', { timeout: 60000 })
          .contains('SEGUIR COMPRANDO')
          .then(($link) => $link.is(':visible'))
      );
      cy.get('a.vtex-rich-text-0-x-link--gotobuy', { timeout: 60000 }).click({ force: true })
    });
  });

  context('Mobile Tests', () => {

    beforeEach(() => {
      cy.viewport('iphone-8');
      cy.visit('https://www.tennis.com.co/',{timeout: 60000});
    });

    it('should load the homepage', () => {
         // cy.title().should('eq', 'Tennis | Tienda de Ropa Online en Colombia', { timeout: 10000 });
          cy.get('img[title="Jeans hombre"]').should('be.visible');
          cy.get('img[title="Shorts"]').should('be.visible');
          cy.get('img[title="Faldas para mujer"]').should('be.visible');
          cy.get('img[title="Bermudas para hombre"]').should('be.visible');
          cy.get(':nth-child(9) > .vtex-flex-layout-0-x-flexRow--shelf > .vtex-flex-layout-0-x-flexRowContent--shelf > :nth-child(1) > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(2) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy > .vtex-rich-text-0-x-link > .b').should('be.visible');
    });
    it('should load Menu', () => {
      /*cy.waitUntil(() => cy.title().should('eq', 'Tennis | Tienda de Ropa Online en Colombia'), {
        timeout: 10000,
        interval: 500, // Intervalo de chequeo en milisegundos
      });*/ 
      cy.get('img[title="Buzos"]').should('be.visible');
      cy.get('img[title="Camisetas"]').should('be.visible');
      cy.get('img[title="Jeans"]').should('be.visible');
    });
    it('Add an item of clothing and checkout', () => {
      cy.get('img[title="Jeans"]', { timeout: 10000 }).should('be.visible').click({ waitForAnimations: false, force: true });
      cy.wait(25000); // Esperar 25 segundos adicionales si el contenedor tarda en aparecer
      // Intentar hacer clic en el elemento deseado dentro del contenedor
      cy.get(':nth-child(2) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-stack-layout-0-x-stackContainer > .vtex-stack-layout-0-x-stackItem--first > .vtex-flex-layout-0-x-flexRow > .flex-none > .pr0-ns > .vtex-product-summary-2-x-imageWrapper > .dib > .vtex-product-summary-2-x-imageNormal', { timeout: 60000 })
        .should('be.visible')
        .click({ force: true }); // Forzar el clic si es necesario
      cy.waitUntil(() => 
          cy.get('.mt0 > :nth-child(1) > .vtex-store-components-3-x-skuSelectorContainer > .vtex-store-components-3-x-skuSelectorSubcontainer--talla > .vtex-store-components-3-x-skuSelectorNameContainer > .vtex-store-components-3-x-skuSelectorOptionsList > .vtex-store-components-3-x-skuSelectorItem--8 > .vtex-store-components-3-x-skuSelectorInternalBox > .vtex-store-components-3-x-valueWrapper', {timeout: 60000})
            .should('be.visible')
        ).then($element => {
          // Interactuar con el elemento después de que sea visible
      cy.wrap($element).dblclick({ force: true });
        });
      // Seleccionar el botón por su texto y verificar que sea visible
      cy.waitUntil(() =>
        cy.get('span').contains('AGREGAR AL CARRITO', { timeout: 15000 })
          .should('be.visible')
      ).then(() => {
        cy.get('span').contains('AGREGAR AL CARRITO')
          .click({ force: true });
      });
      cy.wait(25000)
      cy.waitUntil(() => 
        cy.get('div.vtex-button__label')
          .contains('FINALIZAR COMPRA', {timeout:25000})
          .then(($button) => $button.is(':visible'))
      );
      cy.get('div.vtex-button__label')
        .contains('FINALIZAR COMPRA')
        .click({ force: true });
      cy.waitUntil(() =>
        cy.get('#cart-to-orderform',{timeout:15000}).should('be.visible')
      );
      cy.get('#cart-to-orderform').click({ force: true });
    });
  });
});

