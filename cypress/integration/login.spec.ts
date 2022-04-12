/// <reference types="Cypress" />

describe("My First Test: Cypress", () => {
  const users = [
    {
      Case:"Login",
      email: "tanamaraporn19@gmail.com",
      password: "tan26583459",
      expectedOutput: "Your Organizations"
    },
    {
      Case:"Login with Wrong Email",
      email: "tanamaraporn@gmail.com",
      password: "tan26583459",
      expectedOutput: "Incorrect email address or password"
    },
    {
      Case:"Login with Wrong Password",
      email: "tanamaraporn19@gmail.com",
      password: "26583459",
      expectedOutput: "Incorrect email address or password"
    },
    {
      Case:"Login with Account not in system yet",
      email: "tanamaraporn26@gmail.com",
      password: "tan26583459",
      expectedOutput: "Incorrect email address or password"
    }
  ]
  beforeEach(() => {
    cy.visit("https://dashboard.cypress.io/login/email")
})

  for (let i = 0; i < users.length; i++) {
    it(users[i].Case, () => {
      cy.get("#email").type(users[i].email)
      cy.get("#password").type(users[i].password)
      cy.get('button').contains('Log In').should('be.visible').click()
      cy.contains(users[i].expectedOutput)
  
    })
  }

})


  

  