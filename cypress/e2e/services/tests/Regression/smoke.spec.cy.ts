import { createBoard, deleteBoard } from '../../requests/Boards/board_requests'
import { createList } from '../../requests/Lists/list_requests'
import { createCard, deleteCard, getCard } from '../../requests/Cards/card_requests'

describe('Trello API Tests', () => {
  let boardId: string
  let listId: string
  let cardId: string
  const boardName = 'Board Serasa'
  const listName = 'Apps'
  const cardName = 'Android'

  before(() => {
    createBoard(boardName).then(response => {
      expect(response.status).to.eq(200)
      boardId = response.body.id
     
     createList(boardId, listName).then(response => {
        expect(response.status).to.eq(200)
        listId = response.body.id

        createCard(listId, cardName).then(response => {
          expect(response.status).to.eq(200)
          cardId = response.body.id
        })
      })
    })
  })

  it('Deve criar um novo card na lista', () => {
    getCard(cardId).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq(cardName)
    })
  })

  it('Deve excluir o card', () => {
    deleteCard(cardId).then(response => {
      expect(response.status).to.eq(200)
    })
  })

  it('Deve excluir o board', () => {
    deleteBoard(boardId).then(response => {
      expect(response.status).to.eq(200)
    })
  })
})
