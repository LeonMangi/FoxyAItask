import TodoPage from '../pageObjects/todoPage';

describe('To-Do List Test', () => {
  const todoPage = new TodoPage();
  
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com/To-Do-List/index.html'); 
  });

  describe('Basic Functionalities', () => {
    it('2. Verify that "Add new todo" is displayed by default', () => {
      todoPage.verifyAddNewTodoDisplayed();
    });

    it('3. Clicks on "+" and verifies "Add new todo" is not displayed', () => {
      todoPage.clickAddButton();
      todoPage.verifyAddNewTodoHidden();
    });
  });

  describe('Item Completion and Deletion', () => {
    it('4. Verify that the text becomes strikethrough for every element by clicking on them', () => {
      todoPage.markItemAsComplete();
      todoPage.verifyItemStrikethrough();
    });

    it('5. Verify that the delete icon appears when hovering to "Go to potion class" element from the list', () => {
      todoPage.verifyDeleteIconAppears();
    });
    it('6. Click on the delete icon and verify that the "Go to potion class" element is not displayed in the list', () => {
      todoPage.deleteItem();
      todoPage.verifyItemDeleted();
    });
  });

  describe('Adding New Item', () => {
    it('7. Click on the "+" and enter any value to the "Add new todo" field', () => {
      const newItem = 'This text is added by cy script';
      todoPage.addNewItem(newItem);
    });
    it('8. Click on enter and verify that created element is displayed at the end of the list', () => { // should be part of the 7. due to nature of beforeEach
      todoPage.verifyItemAdded();
    });
  });
});
