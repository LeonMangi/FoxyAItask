import FileUploadPage from '../pageObjects/fileUploadPage';

describe('File Upload Test', () => {
  const fileUploadPage = new FileUploadPage();
  const fileName = 'example.txt'; // Replace with your file name

  beforeEach(() => {
    cy.visit('https://webdriveruniversity.com/File-Upload/index.html');
  });

  it('Executes File Upload: checks negative and positive case with erorr messages', () => {

    // 2. Verify that the "Send" button is active and click on it
    fileUploadPage.verifySubmitButtonActive();

    // 3. Verify that the notification "You need to select a file to upload!" appears
    fileUploadPage.clickSubmitButtonWithoutFile();

    // 4. Upload any file and verify that the file name is displayed correctly
    fileUploadPage.uploadAndVerifyFileName(fileName);

    // 5. Click on the "Send" button and verify that the notification "Your file has now been uploaded!" appears
    fileUploadPage.clickSubmitButtonWithFile();
  });
});