import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';

const DetailsRightPanel = () => {
  const { setOptionsModal } = useContext(UserContext);
  
  const onMoveClick = () => {
    setOptionsModal('on', 'moveCard');
  }


  const onDeleteClick = () => {
     setOptionsModal('on', 'deleteCard');
  }

  return (
    <div className='details-right-panel'>
      <section>
        <h5>
          ACTIONS
        </h5>
        <div onClick={onMoveClick}>
          <i className='fas fa-arrow-right'></i>
          move
        </div>
        <div onClick={onDeleteClick} className='text-danger'>
          <i className='fas fa-trash'></i>
          delete
        </div>
      </section>
    </div>
  )
}

export default DetailsRightPanel