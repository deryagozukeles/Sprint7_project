describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  it('should show submit button as disabled initially', () => {
    cy.get('button[type="submit"]').should('be.disabled');
  });
  it('should allow user to fill the form and submit', () => {
    cy.get('input[name="email"]').type("deryada@com.tr");
    cy.get('input[name="password"]').type("Derya+14!");
    cy.get('input[name="terms"]').check();
    cy.get('button[type="submit"]').should("not.be.disabled").click();
    cy.url().should("include","/success");
  });
  it("disables submit when email invalid",()=>{
    cy.get('input[name="email"]').type("Derya123");
    cy.get('input[name="password"]').type("Derya+14!");
    cy.get('input[name="terms"]').check();
    cy.get('input[name="email"]')
  .parent()
  .find('.invalid-feedback')
  .should('contain.text', 'Please enter a valid email address');
    cy.get('button[type="submit"]').should("be.disabled");
  });
  it('should show both error messages and keep submit disabled when email and password are invalid', () => {
  
  cy.get('input[name="email"]').type('Derya@klm');
  cy.get('input[name="password"]').type('Derya123');
  cy.get('input[name="terms"]').check();
  cy.get('input[name="email"]')
  .parent()
  .find('.invalid-feedback')
  .should('contain.text', 'Please enter a valid email address');
  cy.get('input[name="password"]')
  .parent()
  .find('.invalid-feedback')
  .should('contain.text', 'Password must be at least 8 characters, contain uppercase letters, lowercase letters, numbers and special characters!');
  cy.get('button[type="submit"]').should('be.disabled');
});
it('should keep submit button disabled if email and password are valid but terms is not checked', () => {
  cy.visit('http://localhost:5173');

  cy.get('input[name="email"]').type('deryada@com.tr');
  cy.get('input[name="password"]').type('Derya+14!');

  // Checkbox'ı bilerek işaretlemiyoruz
  cy.get('input[name="terms"]').should('not.be.checked');

  // Butonun disabled olduğunu kontrol et
  cy.get('button[type="submit"]').should('be.disabled');
});

})