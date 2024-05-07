// cypress/pageObjects/FileUploadPage.js

class FileUploadPage {
    constructor() {
        this.elements = {
        submitButton : () => cy.get('#submit-button'),
        chooseFileButton : () => cy.get('#myFile'),
        fileName : () => cy.get('input[name="filename"]')
        }   
    }
  
    verifySubmitButtonActive() {
      this.elements.submitButton().should('not.be.disabled');
    }
  
    clickSubmitButtonWithoutFile() {
      this.elements.submitButton().click()
      cy.on('window:alert', (str) => { expect(str).to.exist}); 
    }

    clickSubmitButtonWithFile(){
        this.elements.submitButton().click()
        cy.on('window:alert', (str) => { expect(str).to.exist});
    }
  
    uploadAndVerifyFileName(fileName) {
      this.elements.chooseFileButton().click().selectFile('cypress/fixtures/example.txt'); // root file path
      this.elements.fileName().should('have.value', 'C:\\fakepath\\' + `${fileName}`);
    }
  }
  
  export default FileUploadPage;
  