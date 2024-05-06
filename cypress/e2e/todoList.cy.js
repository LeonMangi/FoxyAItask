import TodoPage from '../pageObjects/todoPage';

describe('To-Do List Test', () => {
  const todoPage = new TodoPage();
  
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com/To-Do-List/index.html'); 
  });

  describe('Basic Functionalities', () => {
    it('Verifies "Add new todo" is displayed', () => {
      todoPage.verifyAddNewTodoDisplayed();
    });

    it('Clicks on "+" and verifies "Add new todo" is hidden', () => {
      todoPage.clickAddButton();
      todoPage.verifyAddNewTodoHidden();
    });
  });

  describe('Item Completion and Deletion', () => {
    it('Marks an item as complete and verifies strikethrough', () => {
      todoPage.markItemAsComplete();
      todoPage.verifyItemStrikethrough();
    });

    it('Verifies delete icon appears on hover and deletes an item', () => {
      todoPage.verifyDeleteIconAppears();
      todoPage.deleteItem();
      todoPage.verifyItemDeleted();
    });
  });

  describe('Adding New Item', () => {
    it('Adds a new item and verifies it is displayed', () => {
      const newItem = 'This text is added by cy script';
      todoPage.addNewItem(newItem);
      todoPage.verifyItemAdded(newItem);
    });
  });
});
