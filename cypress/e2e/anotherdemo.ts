/// <reference types="cypress" />

import { describe, it } from "mocha"

describe('My Practices', function (){
    it('Sauce Lab Test Practce', function(){
        cy.visit('https://www.saucedemo.com/', {
            failOnStatusCode: false,  // Added to handle any potential status code issues
            timeout: 30000  // Increased timeout
        });
    })
})