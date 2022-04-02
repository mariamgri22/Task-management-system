import React, { useReducer } from 'react';
import uniqid from 'uniqid';
import BoardContext from './boardContext';
import boardReducer from './boardReducer';
import {
  SET_DEMO,
  DELETE_ALL_BOARDS,
  SET_BOARDS,
  ADD_BOARD,
  SET_TITLE,
  SET_DESCRIBTION,
  SET_COLOR,
  ADD_LIST,
  SET_LIST_TITLE,
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  MOVE_CARD,
  SET_LABELS,

} from '../types';

const BoardState = props => {
  const initialState = {
    boards: [],
    labels: [
      {
        id: 1,
        color: '#61bd4f',
        colorName: 'green',
        name: ''
      },
      {
        id: 2,
        color: '#f2d600',
        colorName: 'yellow',
        name: ''
      },
      {
        id: 3,
        color: '#ff9f1a',
        colorName: 'orange',
        name: ''
      },
      {
        id: 4,
        color: '#eb5a46',
        colorName: 'red',
        name: ''
      },
      {
        id: 5,
        color: '#c377e0',
        colorName: 'purple',
        name: ''
      },
      {
        id: 6,
        color: '#0079bf',
        colorName: 'blue',
        name: ''
      }
    ],
    // this color is for boards
    boardColors: [
      '#0079bf',
      '#d29034',
      '#519839',
      '#b04632',
      '#89609e',
      '#cd5a91',
      '#4bbf6b',
      '#00aecc',
      '#838c91'
    ],
    // this color is for labels
    colors: [
      {
        name: 'green',
        color: '#61bd4f'
      },
      {
        name: 'yellow',
        color: '#f2d600'
      },
      {
        name: 'orange',
        color: '#ff9f1a'
      },
      {
        name: 'red',
        color: '#eb5a46'
      },
      {
        name: 'purple',
        color: '#c377e0'
      },
      {
        name: 'blue',
        color: '#0079bf'
      },
      {
        name: 'sky',
        color: '#00c2e0'
      },
      {
        name: 'lime',
        color: '#51e898'
      },
      {
        name: 'pink',
        color: '#ff78cb'
      },
      {
        name: 'black',
        color: '#344563'
      }
    ]
  };

  const [state, dispatch] = useReducer(boardReducer, initialState);

  // Get data from local storage
  const getBoardsData = () => {
    const boards = JSON.parse(localStorage.getItem('boards'));
    const labels = JSON.parse(localStorage.getItem('labels'));

    if(boards) {
      dispatch({
        type: SET_BOARDS,
        payload: boards
      });
    }
    if(labels) {
      dispatch({
        type: SET_LABELS,
        payload: labels
      });
    }
  };

  const setDemoBoards = () => {
    const demo = [
   {
      title: 'Javascript',
      id: 'k1oqji79',
      color: '#d29034',
      describtion: '',
      lists: [
         {
            title: 'list 1',
            id: 'k1oqtz7a',
            boardId: 'k1oqji79',
            items: [
               {
                  text: 'change the color of this board',
                  id: 'k1oqu6l8',
                  listId: 'k1oqtz7a',
                  boardId: 'k1oqji79',
                  desc: '',
                  labels: [],
                  checklists: []
               }
            ]
         },
         {
            title: 'list 2',
            id: 'k1oqvyo1',
            boardId: 'k1oqji79',
            items: [
               {
                  text: 'there are other options you can test in the board menu',
                  id: 'k1oqwb5o',
                  listId: 'k1oqvyo1',
                  boardId: 'k1oqji79',
                  desc: '',
                  labels: [],
                  checklists: []
               }
            ]
         }
      ]
   },
   {
      title: 'Maths',
      id: 'k1oqk0fh',
      color: '#b04632',
      describtion: '',
      lists: [
         {
            title: 'list 1',
            id: 'k1oqs8hy',
            boardId: 'k1oqk0fh',
            items: [
               {
                  text: 'you can add a board to favorites with clicking on the star next to board title',
                  id: 'k1oqtfjz',
                  listId: 'k1oqs8hy',
                  boardId: 'k1oqk0fh',
                  desc: '',
                  labels: [],
                  checklists: []
               }
            ]
         }
      ]
   },
   {
      title: 'React',
      id: 'k1oqkh7k',
      color: '#89609e',
      describtion: 'this board is set here for this weekend dinner with Hervé',
      lists: [
         {
            title: 'list 1',
            id: 'k1oqx5vh',
            boardId: 'k1oqkh7k',
            items: []
         }
      ]
   },
   {
      title: 'Node JS',
      id: 'k1oqyekr',
      color: '#cd5a91',
      describtion: '',
      lists: [
         {
            title: 'card labels',
            id: 'k1oqyrw5',
            boardId: 'k1oqyekr',
            items: [
               {
                  text: 'you can do quite a lot things with cards\n',
                  id: 'k1or05t0',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'there are a bunch of cards in this board\n',
                  id: 'k1oqzko7',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'add labels to them\n',
                  id: 'k1or0o16',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'like this\n',
                  id: 'k1or0pti',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [
                     1
                  ],
                  checklists: []
               },
               {
                  text: 'or this\n',
                  id: 'k1or0srq',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [
                     5,
                     4,
                     3
                  ],
                  checklists: []
               },
               {
                  text: 'just click on the pen on top right of each card\n',
                  id: 'k1or1lrb',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'you can even create your own new labels or edit existing ones\n',
                  id: 'k1or2qes',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'click on a label to see what happens',
                  id: 'k1or32sk',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               }
            ]
         },
         {
            title: 'move card',
            id: 'k1oqyxhl',
            boardId: 'k1oqyekr',
            items: [
               {
                  text: 'you can also move a single \ncard',
                  id: 'k1or4e9u',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'or all cards in one list\n',
                  id: 'k1or4l14',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'you can drag them\n',
                  id: 'k1or4rxr',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'or from list that open by pen, click on move card\n',
                  id: 'k1or5hmw',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'by pen list, you can also move a card to another board\n',
                  id: 'k1or5xsu',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'drag this card to the list right of this list\n',
                  id: 'k1or6xq0',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'or left one\n',
                  id: 'k1or70vq',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'you choose!!!\n',
                  id: 'k1or74g1',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               }
            ]
         },
         {
            title: 'Maths',
            id: 'k1oqz12c',
            boardId: 'k1oqyekr',
            items: [
               {
                  text: 'a card is important\n?',
                  id: 'k1or7u5k',
                  listId: 'k1oqz12c',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'you can watch it',
                  id: 'k1or7z7t',
                  listId: 'k1oqz12c',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'click on the card and just click the eye button',
                  id: 'k1or8nz2',
                  listId: 'k1oqz12c',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'you can watch a list too\n',
                  id: 'k1or8ttr',
                  listId: 'k1oqz12c',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'or a baord\n',
                  id: 'k1or8xdd',
                  listId: 'k1oqz12c',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               }
            ]
         },
         {
            title: 'a card has details',
            id: 'k1or9cp9',
            boardId: 'k1oqyekr',
            items: [
               {
                  text: 'you want to add describtion to card?\n',
                  id: 'k1or9vro',
                  listId: 'k1or9cp9',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'click on the card and add the description',
                  id: 'k1orctal',
                  listId: 'k1or9cp9',
                  boardId: 'k1oqyekr',
                  desc: 'card detals go here',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'or you can add a task to the card\n',
                  id: 'k1orf55j',
                  listId: 'k1or9cp9',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'make a good application',
                  id: 'k1orf8h4',
                  listId: 'k1or9cp9',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
              
               }
            ]
         },
         {
            title: 'edit card',
            id: 'k1ora5jv',
            boardId: 'k1oqyekr',
            items: [
               {
                  text: 'editing is possible through the pen  top right of the card',
                  id: 'k1oravbn',
                  listId: 'k1ora5jv',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'ths card has a writting mistake\n',
                  id: 'k1orbsv4',
                  listId: 'k1ora5jv',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'correct the card above\n',
                  id: 'k1orc2b5',
                  listId: 'k1ora5jv',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               }
            ]
         },
         {
            title: 'last work',
            id: 'k1orhzpg',
            boardId: 'k1oqyekr',
            items: [
               {
                  text: 'work is done?\n',
                  id: 'k1ori5h6',
                  listId: 'k1orhzpg',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'delete card\n',
                  id: 'k1oriab1',
                  listId: 'k1orhzpg',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Im sure you have noticed where to go to delete the card\n ',
                  id: 'k1oriujk',
                  listId: 'k1orhzpg',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               }
            ]
         },
         {
            title: 'list is done!',
            id: 'k1orjpx8',
            boardId: 'k1oqyekr',
            items: [
               {
                  text: 'all cards in a list are done\n',
                  id: 'k1ork00r',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'what can you do?\n',
                  id: 'k1ork9nm',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'delete all cards in the list\nfrom list actions',
                  id: 'k1orkg93',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!',
                  id: 'k1orkpn8',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!\n',
                  id: 'k1orkwmd',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!\n',
                  id: 'k1orkwus',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!\n',
                  id: 'k1orkx2w',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!\n',
                  id: 'k1orkx9l',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!\n',
                  id: 'k1orkxfh',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!\n',
                  id: 'k1orkxle',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!\n',
                  id: 'k1orky19',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               }
            ]
         },
         {
            title: 'lost a card?',
            id: 'k1orozob',
            boardId: 'k1oqyekr',
            items: [
               {
                  text: 'search for the card that lost it\n',
                  id: 'k1orp7x2',
                  listId: 'k1orozob',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               },
               {
                  text: 'you cant test the word address\n',
                  id: 'k1orpiea',
                  listId: 'k1orozob',
                  boardId: 'k1oqyekr',
                  desc: '',
                  labels: [],
                  checklists: []
               }
            ]
         }
      ]
   },
  ]
    
    dispatch({
      type: SET_DEMO,
      payload: demo
    });
  }

  const deleteAllBoards = () => {
    dispatch({
      type: DELETE_ALL_BOARDS
    });
  }

  const addBoard = (title, color, id) => {
    const newBaord = {
      title,
      id,
      color,
      watching: false,
      describtion: '',
      lists: []
    }
    dispatch({
      type: ADD_BOARD,
      payload: newBaord
    });
  }

  const getBoard = (id) => {
    const board = state.boards.filter(b => b.id === id);

    return board[0]
  }

  

  const getList = (boardId, ListId) => {
    const board = state.boards.filter(b => b.id === boardId)[0];

    const list = board.lists.filter(l => l.id === ListId)[0];

    return list
  }

  // set board title
  const setTitle = (text, id) => {
    dispatch({
      type: SET_TITLE,
      payload: {
        id,
        text
      }
    });
  }

 
  const setDescribtion = (text, id) => {
    dispatch({
      type: SET_DESCRIBTION,
      payload: {
        id,
        text
      }
    });
  }

  const setColor = (color, id) => {
    dispatch({
      type: SET_COLOR,
      payload: {
        id,
        color
      }
    });
  }


  const addList = (text, boardId) => {
    const newList = {
      title: text,
      id: uniqid(),
      boardId,
      items: []
    }
    dispatch({
      type: ADD_LIST,
      payload: {
        id: boardId,
        newList
      }
    });
  }

  const setListTitle = (boardId, listId, newTitle) => {
    dispatch({
      type: SET_LIST_TITLE,
      payload: {
        boardId,
        listId,
        newTitle
      }
    });
  }

   const addCard = (text, listId, boardId) => {
    const newCard = {
      text,
      id: uniqid(),
      listId,
      boardId,
      desc: '',
      watching: false,
      labels: [],
      checklists: [],
    }
    dispatch({
      type: ADD_CARD,
      payload: {
        newCard,
        listId,
        boardId
      }
    });
  }

  const updateCard = (boardId, listId, cardId, newCard) => {
    dispatch({
      type: UPDATE_CARD,
      payload: {
        boardId,
        listId,
        cardId,
        newCard
      }
    })
  }

  const deleteCard = (boardId, listId, cardId) => {
    dispatch({
      type: DELETE_CARD,
      payload: {
        boardId,
        listId,
        cardId
      }
    });
  }

  const moveCard = (firstBoardId,firstListId,cardId,destBoardId,destListId,destIndex,card, isCopy) => {
    

    !isCopy && deleteCard(firstBoardId, firstListId, cardId);

    const cardWithNewId = {
      ...card,
      id: uniqid(),
      boardId: destBoardId,
      listId: destListId,
    }

    dispatch({
      type: MOVE_CARD,
      payload: {
        destBoardId,
        destListId,
        destIndex,
        card: cardWithNewId
      }
    });
  }



  return (
    <BoardContext.Provider
      value={{
        boards: state.boards,
        labels: state.labels,
        colors: state.colors,
        boardColors: state.boardColors,
        getBoardsData,
        setDemoBoards,
        deleteAllBoards,
        addBoard,
        getBoard,
        getList,
        setTitle,
        setDescribtion,
        setColor,
        addList,
        setListTitle,
        addCard,
        updateCard,
        deleteCard,
        moveCard,
       
      }}
    >
      {props.children}
    </BoardContext.Provider>
  );
};

export default BoardState;