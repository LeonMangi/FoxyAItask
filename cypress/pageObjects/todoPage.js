class TodoPage {
  // Locators
  elements = {
    addTodo : () => cy.get('#plus-icon'),
    addNewTodoText : () => cy.get('Add new todo'),
    addNewTodoElement : () => cy.get('input[type="text"]'),
    todoListItems : () => cy.get('ul > li'),
    deleteButton : () => cy.get('.fa-trash')
}

  // Actions
  verifyAddNewTodoDisplayed() {
    this.elements.addTodo().should('be.visible');
  }

  clickAddButton() {
    this.elements.addTodo().click();
  }

  verifyAddNewTodoHidden() {
    this.elements.addNewTodoText().should('not.exist');
  }

  markItemAsComplete() {
    this.elements.todoListItems().each(($el) => {
      cy.wrap($el).click(); // Click on each list item
    });
  }

  verifyItemStrikethrough() {
    this.elements.todoListItems().each(($el) => {
      cy.wrap($el).should('have.css', 'text-decoration', 'line-through solid rgb(128, 128, 128)'); // Verify strikethrough
    });
  }

  verifyDeleteIconAppears() {
    this.elements.todoListItems().first().realHover();
    this.elements.deleteButton().should('be.visible');
  }

  deleteItem() {
    this.elements.todoListItems().first().realHover();
    this.elements.deleteButton().first().click();
  }

  verifyItemDeleted() {
    this.elements.todoListItems().should('not.contain', this.elements.addNewTodoText());
  }

  addNewItem(newItem) {
    this.elements.addTodo().click()
    this.elements.addNewTodoElement().click().type(`${newItem}` + '{enter}');
  }

  verifyItemAdded(newItem) {
    this.elements.todoListItems().last().should('contain', `${newItem}`);
  }
}

export default TodoPage;
