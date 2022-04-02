import React, { useState, useContext } from 'react';
import BoardAbout from './BoardAbout';
import BoardColor from './BoardColor';

import userContext from '../../../context/user/userContext';
// import boardContext from '../../../context/board/boardContext';

const BoardMenu = () => {
  const [step, setStep] = useState(false)
  const [stepType, setStepType] = useState('')

  const {  setShowMenu } = useContext(userContext) 

  const onClose = () => {
    setShowMenu();
    setStep(false);
    setStepType('');
  }

  const onBack = () => {
    setStep(false);
    setStepType('');
  }

  const onAboutCLicked = () => {
    setStep(true);
    setStepType('about');
  }

  const onColorCliked = () => {
    setStep(true);
    setStepType('color');
  }


  return (
    <>
      <div className='close' onClick={onClose}>
        &times;
      </div>
      <div className={`back ${!step ? 'd-n' : ''}`} onClick={onBack}>
        <i className='fas fa-angle-left'></i>
      </div>
      <h3 className='pb-1'>
        {
          !step
           ? 'Menu'
           : stepType === 'about'
              ? 'About'
              : 'Board color'
        }
      </h3>
      <hr/>
      <div className={`board-menu-list ${step && 'd-n'}`}>
        <div className='board-menu-item' onClick={onAboutCLicked}>
          <i className='fas fa-align-left mr'></i>
          About board
        </div>
        <div className='board-menu-item' onClick={onColorCliked}>
          <i className='fas fa-paint-brush mr'></i>
          Change board color
        </div>
      </div>
      {
        step
          && stepType === 'about'
            && <BoardAbout back={onBack} />
      }
      {
        step
          && stepType === 'color'
            && <BoardColor />
      }
    </>
  )
}

export default BoardMenu