/// <reference types="cypress" />

import { describe, it } from "mocha";

describe('My First Test Suit', function(){

    // before(() => {
    //     cy.log('Test suite started');
    // });

    // after(() => {
    //     cy.log('Test suite finished');
    // });

    // beforeEach(() => {
    //     cy.log('Test case started');
    // });

    // afterEach(() => {
    //     cy.log('Test case finished');
    //     // You can add custom code here to capture logs or screenshots if needed
    // });
    
    it('Verify dropdown test scenario', function() {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#dropdown-class-example').select('Selenium').should('have.value', 'option1')
    })
})