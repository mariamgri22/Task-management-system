import React, { useContext } from 'react';

import userContext from '../../../context/user/userContext';
import boardContext from '../../../context/board/boardContext';

const AddDemo = () => {
  const { clearCurrentBoardId, setOptionsModal } = useContext(userContext)
  const { setDemoBoards } = useContext(boardContext)

  const onAdd = () => {
    setOptionsModal('off');
    clearCurrentBoardId();
    setDemoBoards();
  }

  return (
    <div>
      <div className='p'>
        if you add the demo to the boards, all your boards will be deleted and there is no undo for this
      </div>
      <div className='btn mt-1 btn-success btn-block' onClick={onAdd}>
        Add
      </div>
    </div>
  )
}

export default AddDemo