import { faker } from '@faker-js/faker';

class ContactUsPage {
  constructor(){
    this.elements = {
    firstNameField: () => cy.get('input[name="first_name"]'),
    lastNameField: () => cy.get('input[name="last_name"]'),
    emailField: () => cy.get('input[name="email"]'),
    commentsField: () => cy.get('textarea[name="message"]'),
    submitButton: () => cy.get('input[type="submit"]'),
    errorMessageAllFieldsRequired: () => cy.contains('Error: all fields are required'),
    errorMessageInvalidEmail: () => cy.contains('Error: Invalid email address'),
    errorMessageInvalidEmail2: () => cy.contains('Invalid email address'),
    successMessage: () => cy.contains('Thank You for your Message!'),
    resetButton: () => cy.get('input[type="reset"]')
  }
}  
  

  // Actions

  verifyEmptyFields() {
    this.elements.firstNameField().should('be.empty');
    this.elements.lastNameField().should('be.empty');
    this.elements.emailField().should('be.empty');
    this.elements.commentsField().should('be.empty');
  }

  verifyFields() {
    this.elements.firstNameField().should('be.visible');
    this.elements.lastNameField().should('be.visible');
    this.elements.emailField().should('be.visible');
    this.elements.commentsField().should('be.visible');
  }

  verifySubmitButtonActive() {
    this.elements.submitButton().should('not.be.disabled'); // Form Buttons verification can be done in one function, or chained on click
  }

  clickSubmit() {
    this.elements.submitButton().click();
  }

  clickReset() {
    this.elements.resetButton().should('be.visible').click();
  }

  verifyRedirectToContactUsPage() {
    cy.url().should('eq', 'https://webdriveruniversity.com/Contact-Us/contact_us.php');
  }

  verifyAllFieldsRequiredErrorMessage(message) {
    this.elements.errorMessageAllFieldsRequired().should('contain', message) // verification should all be done in one function, need better attributes for the error messages
  }

  verifyInvalidEmailErrorMessage(message){
    this.elements.errorMessageInvalidEmail().should('contain', message)
  }

  verifyInvalidEmailErrorMessage2(message){
    this.elements.errorMessageInvalidEmail2().should('contain', message)
  }

  fillFirstName(firstName) {
    this.elements.firstNameField().type(firstName); // fills can be refactored as one large function
  }

  fillLastName(lastName) {
    this.elements.lastNameField().type(lastName);
  }

  fillComments(comments) {
    this.elements.commentsField().type(comments);
  }

  fillEmail(email) {
    this.elements.emailField().type(email);
  }

  verifyRedirectToThankYouPage() {
    cy.url().should('eq', 'https://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html');
  }

  verifySuccessMessage() {
    this.elements.successMessage().should('contain', 'Thank You for your Message!');
  }

  verifyPreFilledFields() {
    this.elements.firstNameField().should('have.value', faker.firstName.firstName());
    this.elements.lastNameField().should('have.value', faker.lastName.lastName());
    this.elements.commentsField().should('have.value', faker.lorem.sentence());
    this.elements.emailField().should('have.value', faker.internet.email()); // Pre-filled email might be valid
  }

}

export default ContactUsPage;
