/// <reference types="cypress" />

Cypress.config('baseUrl','https://inbank.ee/')

// Website Visit

describe('Inbank Website testing',()=>{

    it('change language to English',()=>{
    cy.visit('https://inbank.ee')
    cy.get('#cookie-consent-modal___BV_modal_header_',{timeout:4050}).should('be.visible').contains('EN').click()
    cy.get('#cookie-consent-modal___BV_modal_footer_').contains('Accept all cookies').click()
})

// Small loan Calulations

it('Small loan calculation',()=>{
    cy.get('#calculator').contains('Small loans').click()
    cy.get('#amount').as('amountneed')
    cy.get('.input-group').get('@amountneed').clear()
    cy.get('@amountneed').type('2000')
    cy.get('.form-control-select').get('#period').select('18')

})

// Monthly Payment Calulations

it('Monthly Payment', ()=>{
    cy.get('#__BVID__1263 > .no-gutters > .pl-lg-5 > .text-nowrap').as('monthlypay')
    cy.get('@monthlypay',{timeout:4500}).contains('124.36 EUR')
})
})

// Website Visit

describe('Inbank Website testing',()=>{
    it('change language to English',()=>{
        cy.visit('https://inbank.ee')
        cy.get('#cookie-consent-modal___BV_modal_header_',{timeout:4050}).should('be.visible').contains('EN').click()
        cy.get('#cookie-consent-modal___BV_modal_footer_').contains('Accept all cookies').click()
    })

    // Small loan Calulations

    it('Small loan calculation',()=>{
        cy.get('#calculator').contains('Small loans').click()
        cy.get('#amount').as('amountneed')
        cy.get('.input-group').get('@amountneed').clear()
        cy.get('@amountneed').type('7500')
        cy.get('.form-control-select').get('#period').select('30')
    
    })

// Monthly Payment Calulations

    it('Monthly Payment', ()=>{
        cy.get('#__BVID__1263 > .no-gutters > .pl-lg-5 > .text-nowrap').as('monthlypay')
        cy.get('@monthlypay',{timeout:4500}).contains('288.93 EUR')
    })
})

// Website Visit

describe('Inbank Website testing',()=>{
    it('change language to English',()=>{
        cy.visit('https://inbank.ee')
        cy.get('#cookie-consent-modal___BV_modal_header_',{timeout:4050}).should('be.visible').contains('EN').click()
        cy.get('#cookie-consent-modal___BV_modal_footer_').contains('Accept all cookies').click()
    })

// Small loan Calulations

    it('Small loan calculation',()=>{
        cy.get('#calculator').contains('Small loans').click()
        cy.get('#amount').as('amountneed')
        cy.get('.input-group').get('@amountneed').clear()
        cy.get('@amountneed').type('15000')
        cy.get('.form-control-select').get('#period').select('72')
    
    })

// Monthly Payment Calulations

    it('Monthly Payment', ()=>{
        cy.get('#__BVID__1263 > .no-gutters > .pl-lg-5 > .text-nowrap').as('monthlypay')
        cy.get('@monthlypay',{timeout:4500}).contains('279.08 EUR')
    })
})

// Small loans form 

describe('Small Loan form',()=>{
    it('form display', ()=>{
        cy.get('#__BVID__1263 > .no-gutters > .pl-lg-5 > div > #open-loan-lead').as('applybutton')
        cy.get('@applybutton').click()
    })
    
})