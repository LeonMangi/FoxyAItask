import { faker } from '@faker-js/faker';
import ContactUsPage from '../pageObjects/contactUsPage';

describe('Contact Us Form Test', () => {
    const contactUsPage = new ContactUsPage();

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    });

describe('Initial Page Load and Submit form with Empty Fields', () => {
        it('2. Verify that "First Name", "Last Name", "Email Address" and "Comments" are empty', () => {
            contactUsPage.verifyEmptyFields();
        });

        it('3. Verify that the "Submit" button is active and click on it', () => {
            contactUsPage.verifySubmitButtonActive();
            contactUsPage.clickSubmit();

            // 4. Verify that the user is redirected to the contact_us page - should be merged with step 3  
            contactUsPage.verifyRedirectToContactUsPage();

            // 5. Verify that texts "Error: all fields are required" and "Error: Invalid email address" is displayed on the page - should be merged with step 3
            contactUsPage.verifyAllFieldsRequiredErrorMessage('all fields are required');
            contactUsPage.verifyInvalidEmailErrorMessage('Error: Invalid email address');
        });
});

describe('Fill the form with correct data but invalid email and confirm the user is redirected to contact us page with an error', () => {
        it('6. Go back to the contact us page: fill form with invalid email and check for error', () => {

            // 7. Fill in the "First Name", "Last Name" and "Comments" fields using the faker library - should be merged to step 6
            const firstName = faker.person.firstName();
            const lastName = faker.person.lastName();
            const lorem = faker.lorem.sentence();

            contactUsPage.fillFirstName(firstName);
            contactUsPage.fillLastName(lastName);
            contactUsPage.fillComments(lorem);

            // 8. Fill in the "Email Address" field with an invalid value - should be merged to step 6
            const email = "email.email"

            contactUsPage.fillEmail(email);

            // 9. Click on submit button and verify that the user is redirected to the http://webdriveruniversity.com/Contact-Us/contact_us.php page - should be merged to step 6
            contactUsPage.clickSubmit();
            contactUsPage.verifyRedirectToContactUsPage();

            // 10. Verify that the text "Error: Invalid email address" is displayed on the page - should be merged to step 6
            contactUsPage.verifyInvalidEmailErrorMessage('Error: Invalid email address');
        });
});

describe('Fill the forms with data and confirm the user is redirected to thank you page', () => {
        it('11. Go back to the contact us page: fill form correctly and go back to check reset form funcionality', () => {

            // 12. Fill in the "Email Address" field with a valid value (email should contain name, @, dot, and valid domain) - should be merged to step 11
            const firstName = faker.person.firstName();
            const lastName = faker.person.lastName();
            const lorem = faker.lorem.sentence();
            const email = faker.internet.email();

            contactUsPage.fillFirstName(firstName);
            contactUsPage.fillLastName(lastName);
            contactUsPage.fillComments(lorem);
            contactUsPage.fillEmail(email);

            // 13. Click on the "Submit" button and verify that the user is redirected to the thank you page - should be merged to step 11
            contactUsPage.clickSubmit();
            contactUsPage.verifyRedirectToThankYouPage();

            // 14. Verify that the text "Thank You for your Message!" is displayed on the page
            contactUsPage.verifySuccessMessage();

            // 15. Go back to the contact us page
            cy.go('back')

            // 16. Verify that values for all fields are pre-filled
            contactUsPage.verifyFields();

            // 17. Verify that the "Reset" button is active and click on it
            contactUsPage.clickReset();

            // 18. Verify that "First Name", "Last Name", "Email Address" and "Comments" are empty
            contactUsPage.verifyEmptyFields();
        });
});

});