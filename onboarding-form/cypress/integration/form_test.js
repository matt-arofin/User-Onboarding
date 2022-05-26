/* eslint-disable no-undef */
// cypress tests

describe("Onboarding App", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    // Helpers to for identifying fields used by getters
    const fNameInput = () => cy.get("input[name=first_name]")
    const lNameInput = () => cy.get("input[name=last_name]")
    const emailnput = () => cy.get("input[name=email]")
    const passwordInput = () => cy.get("input[name=password]")
    const termsCheckbox = () => cy.get("input[name=terms]")
    const submitBtn = () => cy.get(`button[id="submitBtn"]`)

    it("Sanity check - are your tests even running bro?", () => {
        expect(1 + 1).to.equal(2);
        expect(2 * 2).not.to.equal(5);
        expect({}).not.to.equal({});
    })

    it("Check required elements are rendered onto page", () => {
        fNameInput().should("exist");
        lNameInput().should("exist");
        emailnput().should("exist");
        passwordInput().should("exist");
        termsCheckbox().should("exist");
        submitBtn().should("exist");
    })
})