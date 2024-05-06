import { faker } from '@faker-js/faker';
import ContactUsPage from '../pageObjects/contactUsPage';

describe('Contact Us Form Test', () => {
    const contactUsPage = new ContactUsPage();

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    });

describe('Initial Page Load and Submit with Empty Fields', () => {
        it('2. Verify that "First Name", "Last Name", "Email Address" and "Comments" are empty', () => {
            contactUsPage.verifyEmptyFields();
        });

        it('3. Verify that the "Submit" button is active and click on it', () => {
            contactUsPage.verifySubmitButtonActive();
            contactUsPage.clickSubmit();

            // 4. Verify that the user is redirected to the contact_us page - should be merged with step 3  
            contactUsPage.verifyRedirectToContactUsPage();

            // 5. Verify that texts "Error: all fields are required" and "Error: Invalid email address" is displayed on the page - should be merged with step 3
            contactUsPage.verifyErrorMessage('all fields are required');
            contactUsPage.verifyErrorMessage('Error: Invalid email address')
        });
    });
describe('Fill the form with correct data but invalid email', () => {
        it('6. & 7.', () => {
            const firstName = faker.person.firstName();
            const lastName = faker.person.lastName();
            const lorem = faker.lorem.sentence();

            contactUsPage.fillFirstName(firstName);
            contactUsPage.fillLastName(lastName);
            contactUsPage.fillComments(lorem);
        });
    });
});
// //
//     describe('Submit with Invalid Email', () => {
//         it('Fills in invalid email and submits', () => {
//             contactUsPage.fillEmail('invalid_email');
//             contactUsPage.clickSubmit();
//         });

//         it('Verifies error message for invalid email', () => {
//             contactUsPage.verifyErrorMessage('Invalid email address');
//         });
//     });

//     describe('Submit with Valid Data', () => {
//         it('Fills in valid data and submits', () => {
//             const firstName = faker.firstName.firstName();
//             const lastName = faker.lastName.lastName();
//             const lorem = faker.lorem.lorem();
//             const email = faker.internet.email();

//             contactUsPage.fillFirstName(faker.firstName.firstName());
//             contactUsPage.fillLastName(faker.lastName.lastName());
//             contactUsPage.fillComments(faker.lorem.sentence());
//             contactUsPage.fillEmail(faker.internet.email());
//             contactUsPage.clickSubmit();
//         });

//         it('Verifies redirection to thank you page and success message', () => {
//             contactUsPage.verifyRedirectToThankYouPage();
//             contactUsPage.verifySuccessMessage();
//         });
//     });

//     describe('Verify Pre-filled Fields and Reset Functionality', () => {
//         it('Verifies pre-filled fields after successful submission', () => {
//             contactUsPage.verifyPreFilledFields();
//         });

//         it('Verifies submit button is active and clicks reset', () => {
//             contactUsPage.verifySubmitButtonActive();
//             contactUsPage.clickReset();
//         });

//         it('Verifies that fields are empty after reset', () => {
//             contactUsPage.verifyEmptyFields();
//         });
//     });
// });
