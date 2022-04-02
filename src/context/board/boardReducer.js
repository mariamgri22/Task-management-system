import {
    SET_DEMO,
    DELETE_ALL_BOARDS,
    SET_BOARDS,
    ADD_BOARD,
    SET_TITLE,
    SET_COLOR,
    SET_DESCRIBTION,
    ADD_LIST,
    SET_LIST_TITLE,
    ADD_CARD,
    UPDATE_CARD,
    DELETE_CARD,
    MOVE_CARD,
    SET_LABELS,
   
   } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case SET_DEMO:
        return {
          ...state,
          boards: action.payload
        }
      case DELETE_ALL_BOARDS:
        return {
          ...state,
          boards: []
        }
      case SET_BOARDS:
       return {
         ...state,
         boards: action.payload
       }
      case ADD_BOARD:
        return {
          ...state,
          boards: [...state.boards, action.payload]
        }
      case SET_TITLE:
        return {
          ...state,
          boards: state.boards.map(b => {
            if(b.id === action.payload.id) {
              b.title = action.payload.text
            }
            return b
          })
        }
      case SET_DESCRIBTION:
        return {
          ...state,
          boards: state.boards.map(b => {
            if(b.id === action.payload.id) {
              b.describtion = action.payload.text
            }
            return b
          })
        }
      case SET_COLOR:
        return {
          ...state,
          boards: state.boards.map(b => {
            if(b.id === action.payload.id) {
              b.color = action.payload.color
            }
            return b
          })
        }
      case ADD_LIST:
        return {
          ...state,
          boards: state.boards.map(b => {
            if(b.id === action.payload.id) {
              b.lists.push(action.payload.newList)
            }
            return b
          })
        }
     
      case ADD_CARD:
        return {
          ...state,
          boards: state.boards.map(b => {
            if(b.id === action.payload.boardId) {
              b.lists = b.lists.map(l => {
                if(l.id === action.payload.listId) {
                  l.items.push(action.payload.newCard);
                }
                return l
              })
            }
            return b
          })
        }
      
      case SET_LIST_TITLE:
        return {
          ...state,
          boards: state.boards.map(board => {
            if(board.id === action.payload.boardId) {
              board.lists = board.lists.map(list => {
                if(list.id === action.payload.listId) {
                  list.title = action.payload.newTitle
                }
                return list
              })
            }
            return board
          })
        }
      case UPDATE_CARD:
        return {
          ...state,
          boards: state.boards.map(board => {
            if(board.id === action.payload.boardId) {
              board.lists = board.lists.map(list => {
                if(list.id === action.payload.listId) {
                  list.items = list.items.map(item => (
                    item.id === action.payload.cardId ? action.payload.newCard : item
                  ))
                }
                return list
              })
            }
            return board
          })
        }
      case DELETE_CARD:
        return {
          ...state,
          boards: state.boards.map(b => {
            if(b.id === action.payload.boardId) {
              b.lists = b.lists.map(l => {
                if(l.id === action.payload.listId) {
                  l.items = l.items.filter(i => i.id !== action.payload.cardId)
                }
                return l
              })
            }
            return b
          })
        }
      case MOVE_CARD:
        return {
          ...state,
          boards: state.boards.map(b => {
            if(b.id === action.payload.destBoardId) {
              b.lists = b.lists.map(l => {
                if(l.id === action.payload.destListId) {
                  l.items.splice(action.payload.destIndex, 0, action.payload.card)
                }
                return l
              })
            }
            return b
          })
        }
      case SET_LABELS:
        return {
          ...state,
          labels: action.payload
        }
     
    
    }
  };