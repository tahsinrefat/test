/// <reference types="cypress" />

import { describe, it } from "mocha"


describe('My Practices', function (){

    it('Sauce Lab Test Practce', function() {
        cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').clear().type('standard_user').should('have.value', 'standard_user');

        cy.get('#password').clear().type('secret_sauce').should('have.value', 'secret_sauce');

        cy.get('#login-button').click();

        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
        cy.wait(1000);
        cy.get('.shopping_cart_badge').should('have.text', '1');

        cy.get('#add-to-cart-sauce-labs-onesie').click();
        cy.wait(1000);
        cy.get('.shopping_cart_badge').should('have.text', '2');

        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
        cy.wait(1000);
        cy.get('.shopping_cart_badge').should('have.text', '3');

        cy.get('#add-to-cart-test.allthethings()-t-shirt-(red)').click();
        cy.wait(1000);
        cy.get('.shopping_cart_badge').should('have.text', '4');

        cy.get('#remove-sauce-labs-onesie').click();
        cy.wait(1000);
        cy.get('.shopping_cart_badge').should('have.text', '3');

        cy.get('.shopping_cart_badge').click();

        cy.get('#remove-test.allthethings()-t-shirt-(red)').click()
        cy.wait(1000);
        cy.get('.shopping_cart_badge').should('have.text', '2');

        cy.get('#checkout').click();
        
        cy.get('#first-name').clear().type('standard').should('have.value', 'standard');

        cy.get('#last-name').clear().type('user').should('have.value', 'user');

        cy.get('#postalCode').clear().type('1206').should('have.value', '1206')

        cy.get('#continue').click();

        cy.get('#finish').click();
    })
})