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
    successMessage: () => cy.get(this.successMessage),
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

  verifySubmitButtonActive() {
    this.elements.submitButton().should('not.be.disabled');
  }

  clickSubmit() {
    this.elements.submitButton().click();
  }

  verifyRedirectToContactUsPage() {
    cy.url().should('eq', 'https://webdriveruniversity.com/Contact-Us/contact_us.php');
  }

  verifyErrorMessage(message) {
    this.elements.errorMessageAllFieldsRequired().should('contain', message) || this.elements.errorMessageInvalidEmail().should('contain', message) || this.elements.errorMessageInvalidEmail2().should('contain', message);
  }

  fillFirstName(firstName) {
    this.elements.firstNameField().type(firstName);
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

  clickReset() {
    this.elements.resetButton().click();
  }
}

export default ContactUsPage;
