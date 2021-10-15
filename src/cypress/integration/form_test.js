// [ ] test that you can add text to the box
// [ ] test that you can select multiple toppings
// [ ] test that you can submit the form

import { get } from "cypress/types/lodash"

describe('User Onboarding', () => {
    beforeEach(() => {
        // New state
        cy.visit('http://localhost:3000/pizza')
    })
})

const nameInput = () => cy.get(`input[id='name-input']`)
const specialInput = () => cy.get(`input[id='special-text']`)
// const toppingsInput = ()
const submitButton = () => cy.get(`button[id='order-button']`)

describe('Add text to the input boxes', () => {

    const testName = 'Duece Bigalow'

    it('can type in the name input', () => {
        nameInput()
            .type(testName)
            .should('have.value', testName)
    })
    it('can type in the special instructions input', () => {
        specialInput()
            .type(testName)
            .should('have.value', testName)
    })
    it('can submit order', () => {
        // Name is more than 3 characters
        nameInput()
            .type(testName)
        submitButton()
            .should('not.be.disabled')
            .click()
    })

})

