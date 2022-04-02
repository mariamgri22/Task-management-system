import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { 
  SET_CURRENT_BOARD_ID,
  CLEAR_CURRENT_BOARD_ID,
  SET_CURRENT_LIST_ID,
  SET_CURRENT_CARD,
  CLEAR_CURRENT_CARD,
  SET_MODAL,
  SET_MODAL_TYPE,
  SET_OPTIONS_MODAL,
  SET_OPTIONS_MODAL_TYPE,
  SET_OPTIONS_MODAL_STEP,
  SET_OPTIONS_MODAL_STEP_TYPE,
  SET_OPTIONS_MODAL_STEP_DATA,
  SET_MOUSE_POS,
  SET_BIG_LABELS,
  SET_DATA,
  SET_SHOW_MENU,
  TOGGLE_SHOW_BOARDS, 
  SET_KEEP_BOARDS,
  SET_FOUND_CARD_ID,
} from '../types';

const UserState = props => {
  const initialState = {
    currentBoardId: null,
    currentListId: null,
    currentCard: null,
    ModalStatus: 'off',
    modalType: null,
    optionsModalStatus: 'off',
    optionsModaltype: null,
    optionsModalStepStatus: 'off',
    optionsModalStepType: null,
    optionsModalStepData: null,
    mosuePos: {},
    bigLabels: false,
    addCardFromListActions: null,
    data: null,
    showMenu: false,
    showBoardsList: false,
    keepBoardsList: false,
    foundCardId: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUserdata = () => {
    const bigLabels = JSON.parse(localStorage.getItem('bigLabels'));
    const keepBoardsList = JSON.parse(localStorage.getItem('keepBoardsList'));

    if(bigLabels) {
      dispatch({
        type: SET_BIG_LABELS,
        payload: bigLabels
      });
    }
    
    if(keepBoardsList) {
      dispatch({
        type: SET_KEEP_BOARDS,
        payload: keepBoardsList
      });
    }
  }

  const setCurrentBoardId = (id) => {
    dispatch({
      type: SET_CURRENT_BOARD_ID,
      payload: id
    });
  }
  const clearCurrentBoardId = () => {
    dispatch({
      type: CLEAR_CURRENT_BOARD_ID
    });
    setShowMenu('there is a command');
  }

  const setCurrentListId = (id) => {
    dispatch({
      type: SET_CURRENT_LIST_ID,
      payload: id
    });
  }


  const setCurrentCard = (card) => {
    dispatch({
      type: SET_CURRENT_CARD,
      payload: card
    });
  }

  const clearCurrentCard = () => {
    dispatch({
      type: CLEAR_CURRENT_CARD
    });
  }

  const setModal = (status, type) => {
    dispatch({
      type: SET_MODAL,
      payload: status
    });
    if(status === 'off') {
      clearModalType();

    } else if(status === 'on') {
      setModalType(type);
    }
  }

  const setModalType = (type) => {
    dispatch({
      type: SET_MODAL_TYPE,
      payload: type
    });
  }

  const clearModalType = () => {
    dispatch({
      type: SET_MODAL_TYPE,
      payload: null
    });
  }

  const setOptionsModal = (status, type) => {
    dispatch({
      type: SET_OPTIONS_MODAL,
      payload: status
    });
    if(status === 'off') {
      clearOptionsModalType();
      setOptionsModalStep('off');
      setData(null);
    } else if(status === 'on') {
      setOptionsModalType(type);
    }
  }

  const setOptionsModalType = (type) => {
    dispatch({
      type: SET_OPTIONS_MODAL_TYPE,
      payload: type
    });
  }

  const clearOptionsModalType = () => {
    dispatch({
      type: SET_OPTIONS_MODAL_TYPE,
      payload: null
    });
  }

  const setOptionsModalStep = (status, step, data) => {
    dispatch({
      type: SET_OPTIONS_MODAL_STEP,
      payload: status
    });
    if(status === 'off') {
      clearOptionsModalStepType();
    } else if(status === 'on') {
      setOptionsModalStepType(step);
    }
    if(data) {
      setOptionsModalStepData(data);
    } else {
      clearOptionsModalStepData();
    }
  }

  const setOptionsModalStepData = (data) => {
    dispatch({
      type: SET_OPTIONS_MODAL_STEP_DATA,
      payload: data
    });
  }

  const clearOptionsModalStepData = () => {
    dispatch({
      type: SET_OPTIONS_MODAL_STEP_DATA,
      payload: null
    });
  }

  const setOptionsModalStepType = (step) => {
    dispatch({
      type: SET_OPTIONS_MODAL_STEP_TYPE,
      payload: step
    });
  }

  const clearOptionsModalStepType = () => {
    dispatch({
      type: SET_OPTIONS_MODAL_STEP_TYPE,
      payload: null
    });
  }

  

  const setMousePos = (x, y) => {
    dispatch({
      type: SET_MOUSE_POS,
      payload: {x, y}
    });
  }

  const toggleBigLabels = () => {
    dispatch({
      type: SET_BIG_LABELS,
      payload: !state.bigLabels
    });
  }
  
  const setData = (data) => {
    if(data) {
      dispatch({
        type: SET_DATA,
        payload: data
      });
    } else {
      dispatch({
        type: SET_DATA,
        payload: null
      });
    }
  }

  const setShowMenu = (command) => {
    if(command) {
      dispatch({
        type: SET_SHOW_MENU,
        payload: false
      }); 
    } else {
      dispatch({
        type: SET_SHOW_MENU,
        payload: !state.showMenu
      });
    }
  }

  const toggleKeepBoardsList = () => {
    dispatch({
      type: SET_KEEP_BOARDS,
      payload: !state.keepBoardsList
    });
  }

  const toggleShowBoardsList = () => {
    dispatch({
      type: TOGGLE_SHOW_BOARDS
    });
  }

  const setFoundCardId = (id) => {
    dispatch({
      type: SET_FOUND_CARD_ID,
      payload: id
    })
    setTimeout(() => {
      dispatch({
      type: SET_FOUND_CARD_ID,
      payload: null
    })
    }, 2000);
  }

  return (
    <UserContext.Provider
      value={{
        currentBoardId: state.currentBoardId,
        currentListId: state.currentListId,
        currentCard: state.currentCard,
        modalStatus: state.modalStatus,
        modalType: state.modalType,
        optionsModalStatus: state.optionsModalStatus,
        optionsModalType: state.optionsModalType,
        optionsModalStepStatus: state.optionsModalStepStatus,
        optionsModalStepType: state.optionsModalStepType,
        optionsModalStepData: state.optionsModalStepData,
        mousePos: state.mousePos,
        bigLabels: state.bigLabels,
        addCardFromListActions: state.addCardFromListActions,
        data: state.data,
        showMenu: state.showMenu,
        showBoardsList: state.showBoardsList,
        keepBoardsList: state.keepBoardsList,
       // foundCardId: state.foundCardId,
        getUserdata,
        setCurrentBoardId,
        clearCurrentBoardId,
        setCurrentListId,
        setCurrentCard,
        clearCurrentCard,
        setModal,
        setOptionsModal,
        setOptionsModalStep,
        setMousePos,
        toggleBigLabels,
        setData,
        setShowMenu,
        toggleKeepBoardsList,
        toggleShowBoardsList,
        setFoundCardId,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;