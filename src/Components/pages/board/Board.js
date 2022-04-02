import React, {  useContext } from 'react';
import BoardNavbar from './BoardNavbar';
import BoardMain from './BoardMain';

// context
import userContext from '../../../context/user/userContext';
import boardContext from '../../../context/board/boardContext';

// css
import './board.css';

const Board = () => {
  const { currentBoardId } = useContext(userContext);
  const BoardContext = useContext(boardContext);

  const { getBoard } = BoardContext;

  const boardStyle = {
    background: getBoard(currentBoardId).color
  }

  return (
    <>
      <BoardNavbar board={getBoard(currentBoardId)} />
      <div className='trello-board-main-wrapper lighten-20 p' style={boardStyle}>
        <BoardMain boardFuncs={BoardContext} board={getBoard(currentBoardId)} />
      </div>
    </>
  )
}

export default Board