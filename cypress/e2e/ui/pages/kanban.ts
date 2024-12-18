// Locator
export const addList = () => cy.get('button[data-testid="list-composer-button"]')
export const enterListName = () => cy.get('textarea[data-testid="list-name-textarea"]')
export const addCard = () => cy.get('button[data-testid="list-add-card-button"]')
export const insertText =  () => cy.get('textarea[data-testid="list-card-composer-textarea"]')
export const menuMoreFromAtlasian = () => cy.get('span[data-testid^="Application"]')
export const share = () => cy.get('span[data-testid$="-share-button-icon"')
