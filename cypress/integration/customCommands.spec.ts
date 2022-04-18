/// <reference types="Cypress" />

describe('Custom Commands', () => {

  it("Login Success ", () => {
    cy.login('tanamaraporn19@gmail.com', 'tan26583459' );
  })
 
  it("Login Fail ", () => {
    cy.checkLogin('tanamaraporn@gmail.com', 'tan26583459' ); //Login with Wrong Email
    cy.checkLogin('tanamaraporn19@gmail.com', '26583459' ); //Login with Wrong Password
    cy.checkLogin('tanamaraporn26@gmail.com', 'tan26583459' ); //Login with Account not in system yet
  })

})