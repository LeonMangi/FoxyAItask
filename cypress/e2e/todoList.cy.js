import TodoPage from '../pageObjects/todoPage';

describe('To-Do List Test', () => {
  const todoPage = new TodoPage();

  it('Verifies functionalities of To-Do List', () => {
    // 1. Go to the site
    cy.visit('http://webdriveruniversity.com/To-Do-List/index.html');

    // 2. Verify "Add new todo" is displayed
    todoPage.verifyAddNewTodoDisplayed();

    // 3. Click on "+" and verify "Add new todo" is not displayed
    todoPage.clickAddButton();
    todoPage.verifyAddNewTodoHidden();

    // 4. Verify that the text becomes strikethrough for every element by clicking on them
    todoPage.markItemAsComplete(0);
    todoPage.verifyItemStrikethrough(0);

    // 5. Verify that the delete icon appears when hovering to "Go to potion class" element from the list
    todoPage.verifyDeleteIconAppears();

    // 6. Click on the delete icon and verify that the "Go to potion class" element isn't displayed in the list
    todoPage.deleteItem();
    todoPage.verifyItemDeleted();

    // 7. Click on the "+" and enter any value to the "Add new todo" field
    const newItem = 'Buy groceries';
    todoPage.addNewItem(newItem);

    // 8. Click on enter and verify that created element is displayed at the end of the list
    todoPage.verifyItemAdded(newItem);
  });
});
