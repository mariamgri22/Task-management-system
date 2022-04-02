
import React, { useContext } from 'react';
import userContext from '../../context/user/userContext';

const ListOfBoardsItem = ({ board, searchText, isRecent, isFromBoards }) => {
  const { setCurrentBoardId, keepBoardsList, toggleShowBoardsList, deleteFromRecent } = useContext(userContext)


  const onClick = (e) => {
    if(!e.target.classList.contains('func-icon') && !e.target.classList.contains('func-star') && !e.target.classList.contains('func-recent-x')) {
      setCurrentBoardId(board.id);
      !keepBoardsList && toggleShowBoardsList()
    }
  }

  

  const onDeleteFromRecentClick = () => {
    deleteFromRecent(board.id);
  }

  const thisStyle = {
    background: board.color
  }

  return (
    <div style={thisStyle} className={`item hover ${(board.title.indexOf(searchText) === -1 && isFromBoards) && 'd-n'}`} onClick={onClick}>
      <div className='left'>
      
      </div>
      <div className='right lighten-70 height-100'>
        { board.title }
      </div>
      {
        isRecent && <div className={`func-recent-x close`} onClick={onDeleteFromRecentClick}>
                      &times;
                    </div>
      }
    </div>
  )
}

export default ListOfBoardsItem