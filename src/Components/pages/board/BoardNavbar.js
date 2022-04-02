import React, { useContext } from 'react';
import BoardTitle from './BoardTitle';
import userContext from '../../../context/user/userContext';


const BoardNavbar = ({ board }) => {
  const { setShowMenu } = useContext(userContext);
 
 

  const onShowMenu = () => {
    setShowMenu();
  }


  const navbarStyle = {
    background: board && board.color
  }

  return (
    <div className='trello-board-navbar trello-navbar lighten-20' style={navbarStyle}>
      <div className='card border-0 m-0 p-0'>
        { board && <BoardTitle /> }
               <div className='cursor-d ml-1 d-i-b text-white'>
          { 
            board
              && (board.describtion ? board.describtion : 'no description')
          }
        </div>
      </div>
      <div>
        <div className='btn text-sm btn-narrow btn-transparent' onClick={onShowMenu}>
          <i className='fas fa-ellipsis-h mr'></i>
          Show Menu
        </div>
      </div>
    </div>
  )
}

export default BoardNavbar