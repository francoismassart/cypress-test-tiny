/// <reference types="cypress" />
// @ts-check

context('In a certain context', () => {
  before(() => {
    cy.log('▶️ before (context)')
    cy.visit('https://example.cypress.io')
  })
  beforeEach(() => {
    cy.log('beforeEach (context)')
  })

  describe('Some describe', () => {
    before(() => {
      cy.log('before (describe)')
    })
    beforeEach(() => {
      cy.log('beforeEach (describe)')
    })

    it('tests something', () => {
      cy.get('h1').should('exist')
    })

    after(() => {
      cy.log('after (describe)')
    })
    afterEach(() => {
      cy.log('afterEach (describe)')
    })
  })

  describe('Another describe', () => {
    before(() => {
      cy.log('before (describe)')
    })
    beforeEach(() => {
      cy.log('beforeEach (describe)')
    })

    xit('does last test', () => {
      cy.get('h1').should('exist')
    })

    after(() => {
      cy.log('after (describe)')
    })
    afterEach(() => {
      cy.log('afterEach (describe)')
    })
  })

  after(() => {
    // Never called if last test is disabled via `xit` instead of `it`
    cy.log('⏹ after (context)')
  })
})
