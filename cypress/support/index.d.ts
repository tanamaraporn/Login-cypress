declare namespace Cypress {
    interface Chainable {
      checkLogin(email: string, password: string): Chainable<Element>;
      login(email: string, password: string): Chainable<Element>;
    }
  }