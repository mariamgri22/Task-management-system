
import React, { useEffect, useContext } from 'react';
import Navbar from './Components/layout/Navbar';
import ListOfBoards from './Components/layout/ListofBoards';
import Home from './Components/pages/home/Home';
import Board from './Components/pages/board/Board';
import Modal from './Components/modal/Modal';
import OptionsModal from './Components/modal/OptionsModal';
import Alerts from './Components/alert/Alerts';
import  userContext  from './context/user/userContext';
import  boardContext  from './context/board/boardContext';

import './trello-clone.css';



const Main = () => {
    const {
      currentBoardId,
      setMousePos,
      bigLabels,
      getUserdata,
      keepBoardsList,
      showBoardsList,
      toggleShowBoardsList,
      optionsModalStatus } = useContext(userContext);
  
    const { boards, labels, getBoardsData } = useContext(boardContext)
  
    
    useEffect(() => {
      getBoardsData()
      getUserdata()
    }, [])
  
    useEffect(() => {
      const stiringed = JSON.stringify(boards)
      
      localStorage.setItem('boards', stiringed);
    }, [boards]);
  
    useEffect(() => {
      const stiringed = JSON.stringify(labels)
      
      localStorage.setItem('labels', stiringed);
    }, [labels]);
  
    useEffect(() => {
      const stiringed = JSON.stringify(bigLabels)
      
      localStorage.setItem('bigLabels', stiringed);
    }, [bigLabels]);
  
    useEffect(() => {
      const stiringed = JSON.stringify(keepBoardsList)
      
      localStorage.setItem('keepBoardsList', stiringed);
    }, [keepBoardsList]);
  
    const onClick = (e) => {
      if(optionsModalStatus === 'off') {
        setMousePos(e.clientX, e.clientY)
      }
    }
  
    const CloseListOfBoards = (e) => {
      if(!keepBoardsList) {
        if(showBoardsList) {
          toggleShowBoardsList();
        }
      }
    }

    return (
      <>
     <div onClick={onClick} className='all-wrapper'>
        <Modal />
        <OptionsModal />
        <Alerts />
          <div className={`all-wrapper ${keepBoardsList ? 'grid-1-4 gap-none' : ''}`}>
              <ListOfBoards />
             <div className='all-wrapper' onClick={CloseListOfBoards}>
                  <Navbar />
                        { !currentBoardId
                        ? <Home />
                        : <Board />
                       }        
          </div>
        </div>
      </div>
      </>
    );
  }
  export default Main
  
  
  